<template>
<div class="bg-bg-gen min-h-screen">
    <InputHeader item="CCTV"/>
    <section class="container mx-auto mt-8">

    <div class="grid grid-cols-3 w-10/12">
    <div v-for="(err,index) in errors" :key="index" class="bg-white w-4/5 rounded-lg mb-1 bg-opacity-90">
        <li class="text-red-400 text-xs p-2">{{err.msg}}</li>
    </div>
    </div>

    <form class="w-11/12 mt-10" @submit.prevent="postInputCctv">
        <div>
            <div class="grid grid-cols-3 grid-rows-4">
                <div class="mb-4 has-tooltip">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan nama merek</span>

                    <label for="merek" class="block mb-2 text-sm">merek</label>
                    <input type="text" v-model="inputCctv.merek" name="merek" id="merek" class="p-2 w-72 rounded-lg outline-none" >
                    
                </div>
                <div class="mb-4 has-tooltip">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan nama model CCTV</span>

                    <label for="model" class="block mb-2 text-sm">model</label>
                    <input type="text" v-model="inputCctv.model" name="model" id="model" class="p-2 w-72 rounded-lg outline-none" >

                </div>
                <div class="mb-4">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan batas garansi</span>

                    <label for="garansi" class="block mb-2 text-sm">garansi</label>
                    <input type="date" v-model="inputCctv.garansi" name="garansi" id="garansi" class="p-2 w-72 rounded-lg outline-none" >
                </div>
                
            </div>
        </div>
        <button class="bg-blue-400 shadow-md rounded-lg w-28 h-10 mt-8" type="submit">kirim</button>
    </form>
</section>
</div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
export default {
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
            const res = await axios.post('http://localhost:3000/server/master/inputcctv',{model:this.inputCctv.model,merek:this.inputCctv.merek,garansi:this.inputCctv.garansi})

            if(res.data.errors){
                this.errors=res.data.errors
                console.log(this.errors)
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

</style>