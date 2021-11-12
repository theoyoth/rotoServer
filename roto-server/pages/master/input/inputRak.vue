<template>
<div class="bg-bg-gen min-h-screen">
    <InputHeader item="rak"/>
    <section class="container mx-auto mt-8">

    <div class="grid grid-cols-3 w-10/12">
        <div v-for="(err,index) in errors" :key="index" class="bg-white w-10/12 rounded-lg mb-1 bg-opacity-90">
            <li class="text-red-400 text-xs p-2">{{err.msg}}</li>
        </div>
    </div>

    <form class="w-11/12 mt-10" @submit.prevent="postInputRak">
        <div>
            <div class="grid grid-cols-3 grid-rows-4">
                <div class="mb-4 has-tooltip">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan tipe rak</span>

                    <label for="tipeRak" class="block mb-2 text-sm">tipe rak</label>
                    <input type="text" v-model="inputRak.tipeRak" name="tipeRak" id="tipeRak" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4 has-tooltip">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan tipe pintu</span>

                    <label for="tipePintu" class="block mb-2 text-sm">tipe pintu</label>
                    <input type="text" v-model="inputRak.tipePintu" name="tipePintu" id="tipePintu" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4 has-tooltip">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan nama produk</span>

                    <label for="namaProduk" class="block mb-2 text-sm">nama produk</label>
                    <input type="text" v-model="inputRak.namaProduk" name="namaProduk" id="namaProduk" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4 has-tooltip">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan ukuran rak</span>

                    <label for="dimensi" class="block mb-2 text-sm">dimensi</label>
                    <input type="text" v-model="inputRak.dimensi" name="dimensi" id="dimensi" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4 has-tooltip relative">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan berat rak</span>

                    <label for="berat" class="block mb-2 text-sm">berat (dalam KG)</label>
                    <input type="text" v-model="inputRak.berat" name="berat" id="berat" class="p-2 w-72 rounded-lg outline-none">
                    <!-- <input type="text" value="KG" readonly="readonly" class="absolute w-14 right-28 text-center bottom-1 p-1 rounded"> -->
                </div>
                <div class="mb-4 has-tooltip">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan tahun masuk</span>

                    <label for="tahun" class="block mb-2 text-sm">tahun</label>
                    <input type="date" v-model="inputRak.tahun" name="tahun" id="tahun" class="p-2 w-72 rounded-lg outline-none">
                </div>
                
            </div>
        </div>
        <button class="bg-blue-400 shadow-md rounded-lg w-28 h-10" type="submit">kirim</button>
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
            inputRak : {
                tipeRak:"",
                tipePintu : "",
                namaProduk : "",
                dimensi:"",
                berat : "",
                tahun : "",
            },
            errors:"",
        }
    },
    methods:{
        async postInputRak(){
            const res = await axios.post('http://localhost:3000/server/master/inputrak',{tipeRak:this.inputRak.tipeRak,
            tipePintu:this.inputRak.tipePintu,
            namaProduk:this.inputRak.namaProduk,
            dimensi:this.inputRak.dimensi,
            tahun:this.inputRak.tahun,
            berat:this.inputRak.berat})

            if(res.data.errors){
                this.errors=res.data.errors
                this.$router.push('/master/input/inputRak')
            }
            else{
                swal('data berhasil ditambahkan',{icon:'success'})
                this.$router.push('/master/rak')
            }
        }
    },
    mounted(){
        this.inputRak.tahun = moment().format('YYYY-MM-DD')
    }

}
</script>

<style>

</style>