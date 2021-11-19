<template>
<div class="bg-gray-200 min-h-screen w-widthContent ml-auto">
    <!-- <InputHeader item="Monitor"/> -->
    <Navbar/>
    <section class="bg-white min-h-screen w-widthContentField m-auto mt-7 p-4 ">
         <NuxtLink to="/master/monitor"
          class="flex items-center justify-between rounded-md w-28 px-4 py-2 bg-gray-700">
          <div>
            <font-awesome-icon :icon="['fas', 'arrow-left']" class="text-gray-200" />
          </div>
          <p class="font-medium text-sm text-gray-200">kembali</p>
        </NuxtLink> 
        <p class="text-center text-xl text-gray-700 font-semibold">Input data baru Monitor</p>
    
    <div class="grid grid-cols-3 w-10/12 mt-6">
    <div v-for="(err,index) in errors" :key="index" class="bg-white rounded-lg mb-1 bg-opacity-90 w-11/12">
            <li class="text-red-400 text-xs p-2">{{err.msg}}</li>
    </div>
    </div>

    <ValidationObserver v-slot={invalid,valid}>
    <form class="min-w-min mt-6" @submit.prevent="postInputMonitor">
        <div>
            <div class="grid grid-cols-2">
                <div class="mb-4 has-tooltip">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan nama merek</span>

                    <label for="merek" class="block mb-2 text-sm">merek</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|alpha_spaces" v-slot={errors}>
                            <input type="text" v-model="inputMonitor.merek" name="merek" id="merek" class="p-2 w-full rounded-lg outline-none bg-gray-200">
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="mb-4 has-tooltip" :class="[inputMonitor.merek !== '' ? 'incop' : 'decop']">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan nama model monitor</span>

                    <label for="model" class="block mb-2 text-sm">model</label>
                    <div class="flex flex-col w-72">
                    <ValidationProvider rules="required|alpha_dash" v-slot={errors}>
                            <input type="text" v-model="inputMonitor.model" name="model" id="model" class="p-2 w-72 rounded-lg outline-none bg-gray-200" :disabled="inputMonitor.merek === ''">
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="mb-4 has-tooltip" :class="[inputMonitor.model !== '' ? 'incop' : 'decop']">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan tipe monitor</span>

                    <label for="tipe" class="block mb-2 text-sm">tipe</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|alpha_dash" v-slot={errors}>
                            <input type="text" v-model="inputMonitor.tipe" name="tipe" id="tipe" class="p-2 w-full rounded-lg bg-gray-200 outline-none" :disabled="inputMonitor.model === ''">
                             <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="mb-4 has-tooltip" :class="[inputMonitor.tipe !== '' ? 'incop' : 'decop']">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan tahun masuk barang</span>

                    <label for="tahun" class="block mb-2 text-sm">tahun</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required" v-slot={errors}>
                            <input type="date" v-model="inputMonitor.tahun" name="tahun" id="tahun" class="p-2 w-full rounded-lg bg-gray-300 outline-none" :disabled="inputMonitor.tipe === ''">
                             <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="mb-4 has-tooltip" :class="[inputMonitor.tipe !== '' ? 'incop' : 'decop']">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan batas garansi</span>

                    <label for="garansi" class="block mb-2 text-sm">garansi</label>
                     <div class="flex flex-col w-72">
                        <ValidationProvider rules="required" v-slot={errors}>
                            <input type="date" v-model="inputMonitor.garansi" name="garansi" id="garansi" class="p-2 w-full rounded-lg bg-gray-200 outline-none">
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
            </div>
        </div>
        <button class="mt-10 opacity-10 bg-gray-700 text-gray-200 w-24 py-2 rounded cursor-default" type="submit" :class="{activesubmit : valid}" :disabled="invalid">kirim</button>
    </form>
    </ValidationObserver>
</section>
</div>
</template>

<script>
import axios from 'axios'
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
            inputMonitor:{
                merek : "",
                model : "",
                tipe : "",
                tahun : "",
                garansi : "",
            },
            errors:"",
            
        }
    },
    methods:{
        async postInputMonitor(){
            const res = await axios.post('http://localhost:3000/server/master/inputmonitor',{
                iduser:this.$auth.user.id,
                lokasiServer: this.$auth.user.lokasi,
                model:this.inputMonitor.model,
                merek:this.inputMonitor.merek,
                tipe:this.inputMonitor.tipe,
                tahun:this.inputMonitor.tahun, 
                garansi:this.inputMonitor.garansi
            })

            if(res.data.errors){
                this.errors=res.data.errors
                console.log(this.errors)
                this.$router.push('/master/input/inputMonitor')
            }
            else{
                swal('data berhasil ditambahkan',{icon:'success'})
                this.$router.push('/master/monitor')
            }
        }
    },
    mounted(){
        this.inputMonitor.tahun = moment().format('YYYY-MM-DD')
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