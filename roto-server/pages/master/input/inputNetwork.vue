<template>
<div class="bg-bg-gen min-h-screen">
    <InputHeader item="Network"/>
    <section class="container mx-auto mt-8">
    
    <div class="grid grid-cols-3 w-10/12">
        <div v-for="(err,index) in errors" :key="index" class="bg-white w-4/5 rounded-lg mb-1 bg-opacity-90">
            <li class="text-red-400 text-xs p-2">{{err.msg}}</li>
        </div>
    </div>

    <form class="w-11/12 mt-10" @submit.prevent="postInputNetwork">
        <div>
            <div class="grid grid-cols-3 grid-rows-4">
                <div class="mb-4 has-tooltip">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan nama merek</span>

                    <label for="merek" class="block mb-2 text-sm">merek</label>
                    <input type="text" v-model="inputNetwork.merek" name="merek" id="merek" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4 has-tooltip">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan nama model</span>

                    <label for="model" class="block mb-2 text-sm">model</label>
                    <input type="text" v-model="inputNetwork.model" name="model" id="model" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4 has-tooltip">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan tipe network</span>

                    <label for="tipe" class="block mb-2 text-sm">tipe</label>
                    <input type="text" v-model="inputNetwork.tipe" name="tipe" id="tipe" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4 has-tooltip">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan jumlah yang di input</span>

                    <label for="kuantitas" class="block mb-2 text-sm">kuantitas</label>
                    <input type="text" v-model="inputNetwork.kuantitas" name="kuantitas" id="kuantitas" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4 has-tooltip">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan kanal</span>

                    <label for="kanal" class="block mb-2 text-sm">kanal</label>
                    <input type="text" v-model="inputNetwork.kanal" name="kanal" id="kanal" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4 has-tooltip">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan tahun masuk</span>

                    <label for="tahun" class="block mb-2 text-sm">tahun</label>
                    <input type="date" v-model="inputNetwork.tahun" name="tahun" id="tahun" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4 has-tooltip">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan batas garansi</span>

                    <label for="garansi" class="block mb-2 text-sm">garansi</label>
                    <input type="date" v-model="inputNetwork.garansi" name="garansi" id="garansi" class="p-2 w-72 rounded-lg outline-none">
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
            const res = await axios.post('http://localhost:3000/server/master/inputnetwork',{model:this.inputNetwork.model,
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

</style>