<template>
<div class="bg-bg-gen min-h-screen">
    <InputHeader item="Mouse"/>
    <section class="container mx-auto mt-8">

    <div class="grid grid-cols-3 w-11/12">
        <div v-for="(err,index) in errors" :key="index" class="bg-white w-11/12 rounded-lg mb-1 bg-opacity-90">
            <li class="text-red-400 text-xs p-2">{{err.msg}}</li>
        </div>
    </div>

    <form class="w-11/12 mt-10" @submit.prevent="postInputMouse">
        <div>
            <div class="grid grid-cols-3 grid-rows-4">
                <div class="mb-4 has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan nama merek</span>

                    <label for="merek" class="block mb-2 text-sm">merek</label>
                    <input type="text" v-model="inputMouse.merek" name="merek" id="merek" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4 has-tooltip">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan nama model CCTV</span>

                    <label for="model" class="block mb-2 text-sm">model</label>
                    <input type="text" v-model="inputMouse.model" name="model" id="model" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4 has-tooltip">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan tipe CCTV</span>

                    <label for="tipe" class="block mb-2 text-sm">tipe</label>
                    <input type="text" v-model="inputMouse.tipe" name="tipe" id="tipe" class="p-2 w-72 rounded-lg outline-none">
                </div>
                 <div class="mb-4 has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan tahun masuk barang</span>

                    <label for="tahun" class="block mb-2 text-sm">tahun</label>
                    <input type="date" v-model="inputMouse.tahun" name="tahun" id="tahun" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4 has-tooltip">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan batas garansi</span>

                    <label for="garansi" class="block mb-2 text-sm">garansi</label>
                    <input type="date" v-model="inputMouse.garansi" name="garansi" id="garansi" class="p-2 w-72 rounded-lg outline-none">
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
            inputMouse:{
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
        async postInputMouse(){
            const res = await axios.post('http://localhost:3000/server/master/inputmouse',{model:this.inputMouse.model,merek:this.inputMouse.merek,tipe:this.inputMouse.tipe,tahun:this.inputMouse.tahun, garansi:this.inputMouse.garansi})

            if(res.data.errors){
                this.errors=res.data.errors
                this.$router.push('/master/input/inputMouse')
            }
            else{
                swal('data berhasil ditambahkan',{icon:'success'})
                this.$router.push('/master/mouse')
            }
        }
    },
    mounted(){
        this.inputMouse.tahun = moment().format('YYYY-MM-DD')
    }
}
</script>

<style>

</style>