<template>
<div class="bg-gray-200 min-h-screen w-widthContent ml-auto overflow-x-hidden">
    <section class="bg-gray-100 min-h-screen w-widthContentField m-auto mt-7 p-4 ">
        <NuxtLink to="/master/baterai"
          class="flex items-center justify-between rounded-md w-28 px-4 py-2 bg-gray-700 hover:bg-gray-600 transition duration-200">
          <div>
            <font-awesome-icon :icon="['fas', 'arrow-left']" class="text-gray-200" />
          </div>
          <p class="font-medium text-sm text-gray-200">kembali</p>
        </NuxtLink> 
        <p class="text-center text-xl text-gray-700 font-semibold">Input data baru</p>

    <ValidationObserver v-slot={invalid,valid}>
    <form class="mt-8 min-w-min" @submit.prevent="postInputBaterai">
        <div>
            <div class="grid grid-cols-2">
                <div class="mb-4 has-tooltip">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan accu baterai</span>

                    <label for="accu" class="block mb-2 text-sm">accu</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|passchar" v-slot={errors}>
                            <input type="text" v-model="inputBaterai.accu" name="accu" id="accu" class="p-2 w-full rounded-lg outline-none bg-gray-200 uppercase">
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="mb-4 has-tooltip" :class="[inputBaterai.accu !== '' ? 'incop' : 'decop']">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan jumlah baterai yang di input</span>

                    <label for="kuantitas" class="block mb-2 text-sm">kuantitas</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|numeric" v-slot={errors}>
                            <input type="text" v-model="inputBaterai.kuantitas" name="kuantitas" id="kuantitas" class="p-2 w-full rounded-lg outline-none bg-gray-200 uppercase" :disabled="inputBaterai.accu === ''">
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="mb-4 has-tooltip" :class="[inputBaterai.kuantitas !== '' ? 'incop' : 'decop']">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan tegangan baterai</span>

                    <label for="tegangan" class="block mb-2 text-sm">tegangan</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|numeric" v-slot={errors}>
                            <div class="flex">
                                <input type="text" v-model="inputBaterai.tegangan" name="tegangan" id="tegangan" class="p-2 w-full rounded-l-lg outline-none bg-gray-200 uppercase" :disabled="inputBaterai.kuantitas === ''">
                                <input type="text" value="volt" readonly="readonly" class="w-16 p-1 rounded-r-lg bg-gray-200 outline-none text-center cursor-default">
                            </div>
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>

                <div class="mb-4 has-tooltip" :class="[inputBaterai.tegangan !== '' ? 'incop' : 'decop']">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan tahun masuk barang</span>

                    <label for="tahun" class="block mb-2 text-sm">tahun</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required" v-slot={errors}>
                            <input type="date" v-model="inputBaterai.tahun" name="tahun" id="tahun" class="p-2 w-full rounded-lg outline-none bg-gray-200 uppercase" :disabled="inputBaterai.tegangan === ''">
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="mb-4 has-tooltip" :class="[inputBaterai.tegangan !== '' ? 'incop' : 'decop']">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan batas garansi</span>

                    <label for="garansi" class="block mb-2 text-sm">garansi</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required" v-slot={errors}>
                            <input type="date" v-model="inputBaterai.garansi" name="garansi" id="garansi" class="p-2 w-72 rounded-lg outline-none bg-gray-200 uppercase" :disabled="inputBaterai.tegangan === ''">
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
                
            </div>
        </div>
        <button class="opacity-10 mt-10 bg-gray-700 text-gray-200 w-24 py-2 rounded cursor-default" type="submit" :class="{activesubmit : valid}" :disabled="invalid">simpan</button>
    </form>
    </ValidationObserver>
</section>
</div>
</template>

<script>
import moment from 'moment'
import { ValidationObserver, ValidationProvider } from "vee-validate";

export default {
    middleware:"isAuthenticated",
    components:{
        ValidationObserver,
        ValidationProvider
    },
    data(){
        return{
            inputBaterai:{
                accu : "",
                kuantitas:"",
                tegangan:"",
                tahun: "",
                garansi : "",
            },
            errors:"",
            
        }
    },
    methods:{
        async postInputBaterai(){
            const res = await this.$axios.post('/master/inputbaterai',{
                iduser:this.$auth.user.id,
                lokasiServer:this.$auth.user.lokasi,
                accu:this.inputBaterai.accu,
                kuantitas:this.inputBaterai.kuantitas,
                tegangan:this.inputBaterai.tegangan,
                tahun:this.inputBaterai.tahun, 
                garansi:this.inputBaterai.garansi})

            if(res.data.errors){
                this.errors=res.data.errors
                console.log(this.errors)
                this.$router.push('/master/input/inputBaterai')
            }
            else{
                swal('data berhasil ditambahkan',{icon:'success'})
                this.$router.push('/master/baterai')
            }
        },
       
    },
    mounted(){
        this.inputBaterai.tahun = moment().format('YYYY-MM-DD')
    }

}
</script>

<style>
.incop{
    opacity:1,
}
.decop{
    opacity: 0.1;
}
.activesubmit {
    background-color: rgb(37, 45, 56);
    color:whitesmoke;
    width:6rem;
    cursor:pointer;
    opacity:1;
    padding-top: .5rem;
    padding-bottom: .5rem;
    transition: all 0.5s;
    transform:translateY(-2px);
}
</style>