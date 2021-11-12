<template>
<div class="bg-bg-gen min-h-screen">
    <InputHeader item="baterai"/>
    <section class="container mx-auto mt-8">
    
    <div class="grid grid-cols-3 w-10/12">
        <div v-for="(err,index) in errors" :key="index" class="bg-white w-4/5 rounded-lg mb-1 bg-opacity-90">
            <li class="text-red-400 text-xs p-2">{{err.msg}}</li>
        </div>
    </div>

    <form class="w-11/12" @submit.prevent="postInputBaterai">
        <div >
            <div class="grid grid-cols-3 grid-rows-4">
                <div class="mb-4 has-tooltip">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan accu baterai</span>

                    <label for="accu" class="block mb-2 text-sm">accu</label>
                    <input type="text" v-model="inputBaterai.accu" name="accu" id="accu" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4 has-tooltip">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan jumlah baterai yang di input</span>

                    <label for="kuantitas" class="block mb-2 text-sm">kuantitas</label>
                    <input type="text" v-model="inputBaterai.kuantitas" name="kuantitas" id="kuantitas" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4 has-tooltip">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan tegangan baterai</span>

                    <label for="tegangan" class="block mb-2 text-sm">tegangan</label>
                    <input type="text" v-model="inputBaterai.tegangan" name="tegangan" id="tegangan" class="p-2 w-72 rounded-lg outline-none">
                </div>

                <div class="mb-4 has-tooltip">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan tahun masuk barang</span>

                    <label for="tahun" class="block mb-2 text-sm">tahun</label>
                    <input type="date" v-model="inputBaterai.tahun" name="tahun" id="tahun" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4 has-tooltip">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan batas garansi</span>

                    <label for="garansi" class="block mb-2 text-sm">garansi</label>
                    <input type="date" v-model="inputBaterai.garansi" name="garansi" id="garansi" class="p-2 w-72 rounded-lg outline-none">
                </div>
                
            </div>
        </div>
        <button class="bg-blue-400 shadow-md rounded-lg w-28 h-10 mt-8">kirim</button>
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
            const res = await axios.post('http://localhost:3000/server/master/inputbaterai',{accu:this.inputBaterai.accu,kuantitas:this.inputBaterai.kuantitas,tegangan:this.inputBaterai.tegangan,tahun:this.inputBaterai.tahun, garansi:this.inputBaterai.garansi})

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

</style>