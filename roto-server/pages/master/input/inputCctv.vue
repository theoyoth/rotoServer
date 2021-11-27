<template>
<div class="bg-gray-200 min-h-screen w-widthContent ml-auto">
    <!-- <InputHeader item="CCTV"/> -->
    <Navbar/>
    <section class="bg-white min-h-screen w-widthContentField m-auto mt-7 p-4 ">
        <NuxtLink to="/master/cctv"
          class="flex items-center justify-between rounded-md w-28 px-4 py-2 bg-gray-700">
          <div>
            <font-awesome-icon :icon="['fas', 'arrow-left']" class="text-gray-200" />
          </div>
          <p class="font-medium text-sm text-gray-200">kembali</p>
        </NuxtLink> 
        <p class="text-center text-xl text-gray-700 font-semibold">Input data baru CCTV</p>

    <div class="grid grid-cols-3 w-10/12 mt-6">
    <div v-for="(err,index) in errors" :key="index" class="bg-white w-4/5 rounded-lg mb-1 bg-opacity-90">
        <li class="text-red-400 text-xs p-2">{{err.msg}}</li>
    </div>
    </div>

    <ValidationObserver v-slot={invalid,valid}>
    <form class="min-w-min mt-8" @submit.prevent="postInputCctv">
        <div>
            <div class="grid grid-cols-2">
                <div class="mb-4 has-tooltip">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan nama merek</span>

                    <label for="merek" class="block mb-2 text-sm">merek</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|passchar" v-slot={errors}>
                            <input type="text" v-model="inputCctv.merek" name="merek" id="merek" class="p-2 w-full rounded-lg outline-none bg-gray-200 uppercase">
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                    
                </div>
                <div class="mb-4 has-tooltip" :class="[inputCctv.merek !== '' ? 'incop' : 'decop']">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan nama model CCTV</span>

                    <label for="model" class="block mb-2 text-sm">model</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|passchar">
                            <input type="text" v-model="inputCctv.model" name="model" id="model" class="p-2 w-full rounded-lg outline-none bg-gray-200 uppercase" :disabled="inputCctv.merek === ''">
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>

                </div>
                <div class="mb-4 has-tooltip" :class="[inputCctv.model !== '' ? 'incop' : 'decop']"> 
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan batas garansi</span>

                    <label for="garansi" class="block mb-2 text-sm">garansi</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required" v-slot={errors}>
                            <input type="date" v-model="inputCctv.garansi" name="garansi" id="garansi" class="p-2 w-72 rounded-lg outline-none bg-gray-200 uppercase" :disabled="inputCctv.model === ''" >
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
            inputCctv:{
                model : "",
                merek : "",
                garansi : "",
            }, 
            errors:"",
            
        }
    },
    methods:{
        async postInputCctv(){
            const res = await axios.post('http://localhost:3000/server/master/inputcctv',{
                iduser:this.$auth.user.id,
                lokasiServer:this.$auth.user.lokasi,
                model:this.inputCctv.model,
                merek:this.inputCctv.merek,
                garansi:this.inputCctv.garansi})

            if(res.data.errors){
                this.errors=res.data.errors
                this.$router.push('/master/input/inputCctv')
            }
            else{
                swal('data berhasil ditambahkan',{icon:'success'})
                this.$router.push('/master/cctv')
            }
        }
    },

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