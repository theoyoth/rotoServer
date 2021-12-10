<template>
<div class="bg-gray-200 min-h-screen w-widthContent ml-auto">
    <!-- <InputHeader item="Network"/> -->
    <Navbar/>
    <section class="bg-white min-h-screen w-widthContentField m-auto mt-7 p-4 ">
        <NuxtLink to="/master/network"
          class="flex items-center justify-between rounded-md w-28 px-4 py-2 bg-gray-700 hover:bg-gray-600 transition duration-200">
          <div>
            <font-awesome-icon :icon="['fas', 'arrow-left']" class="text-gray-200" />
          </div>
          <p class="font-medium text-sm text-gray-200">kembali</p>
        </NuxtLink> 
        <p class="text-center text-xl text-gray-700 font-semibold">Input data baru Network</p>

    <ValidationObserver v-slot={invalid,valid}>
    <form class="min-w-min mt-8" @submit.prevent="postInputNetwork">
        <div>
            <div class="grid grid-cols-2 ">
                <div class="mb-4 has-tooltip">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan nama merek</span>

                    <label for="merek" class="block mb-2 text-sm">merek</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|passchar" v-slot={errors}>
                            <input type="text" v-model="inputNetwork.merek" name="merek" id="merek" class="p-2 w-full rounded-lg outline-none bg-gray-200 uppercase">
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="mb-4 has-tooltip" :class="[inputNetwork.merek !== '' ? 'incop' : 'decop']">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan nama model</span>

                    <label for="model" class="block mb-2 text-sm">model</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|passchar" v-slot={errors}>
                            <input type="text" v-model="inputNetwork.model" name="model" id="model" class="p-2 w-full rounded-lg outline-none bg-gray-200 uppercase" :disabled="inputNetwork.merek === ''">
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="mb-4 has-tooltip" :class="[inputNetwork.model !== '' ? 'incop' : 'decop']">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan tipe network</span>

                    <label for="tipe" class="block mb-2 text-sm">tipe</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|passchar" v-slot={errors}>
                            <input type="text" v-model="inputNetwork.tipe" name="tipe" id="tipe" class="p-2 w-full rounded-lg outline-none bg-gray-200 uppercase" :disabled="inputNetwork.model === ''">
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="mb-4 has-tooltip" :class="[inputNetwork.tipe !== '' ? 'incop' : 'decop']">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan jumlah yang di input</span>

                    <label for="kuantitas" class="block mb-2 text-sm">kuantitas</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|numeric" v-slot={errors}>
                            <input type="text" v-model="inputNetwork.kuantitas" name="kuantitas" id="kuantitas" class="p-2 w-72 rounded-lg outline-none bg-gray-200 uppercase" :disabled="inputNetwork.tipe === ''">
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="mb-4 has-tooltip" :class="[inputNetwork.kuantitas !== '' ? 'incop' : 'decop']">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan kanal</span>

                    <label for="kanal" class="block mb-2 text-sm">kanal</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|numeric" v-slot={errors}>
                            <input type="text" v-model="inputNetwork.kanal" name="kanal" id="kanal" class="p-2 w-full rounded-lg outline-none bg-gray-200 uppercase" :disabled="inputNetwork.kuantitas === ''">
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="mb-4 has-tooltip" :class="[inputNetwork.kanal !== '' ? 'incop' : 'decop']">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan tahun masuk</span>

                    <label for="tahun" class="block mb-2 text-sm">tahun</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required" v-slot={errors}>
                            <input type="date" v-model="inputNetwork.tahun" name="tahun" id="tahun" class="p-2 w-full rounded-lg outline-none bg-gray-200" :disabled="inputNetwork.kanal === ''">
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="mb-4 has-tooltip" :class="[inputNetwork.kanal !== '' ? 'incop' : 'decop']">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan batas garansi</span>

                    <label for="garansi" class="block mb-2 text-sm">garansi</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required" v-slot={errors}>
                            <input type="date" v-model="inputNetwork.garansi" name="garansi" id="garansi" class="p-2 w-full rounded-lg outline-none bg-gray-200 uppercase" :disabled="inputNetwork.kanal === ''">
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
            </div>
        </div>
        <button class="mt-10 opacity-10 bg-gray-700 text-gray-200 w-24 py-2 rounded cursor-default" type="submit" :class="{activesubmit : valid}" :disabled="invalid">simpan</button>
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
            inputNetwork:{
                merek : "",
                model : "",
                tipe : "",
                kanal : "",
                kuantitas : "",
                tahun : "",
                garansi : "",
            },
            errors:"",
        }
    },
    methods:{
        async postInputNetwork(){
            const res = await this.$axios.post('/master/inputnetwork',{
            iduser:this.$auth.user.id,
            lokasiServer:this.$auth.user.lokasi,
            model:this.inputNetwork.model,
            merek:this.inputNetwork.merek,
            tipe:this.inputNetwork.tipe,
            kanal:this.inputNetwork.kanal,
            kuantitas:this.inputNetwork.kuantitas,tahun:this.inputNetwork.tahun,
            garansi:this.inputNetwork.garansi})

            if(res.data.errors){
                this.errors=res.data.errors
                this.$router.push('/master/input/inputNetwork')
            }
            else{
                swal('data berhasil ditambahkan',{icon:'success'})
                this.$router.push('/master/network')
            }
        }
    },
    mounted(){
        this.inputNetwork.tahun = moment().format('YYYY-MM-DD')
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
    background-color: rgb(55, 65, 81);
    color:whitesmoke;
    width:7rem;
    cursor:pointer;
    opacity:1;
    padding-top: .5rem;
    padding-bottom: .5rem;
    transition: all 0.5s;
    transform:translateY(-2px);
}
</style>