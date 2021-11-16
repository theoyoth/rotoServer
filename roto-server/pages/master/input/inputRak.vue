<template>
<div class="bg-gray-200 min-h-screen w-widthContent ml-auto">
    <!-- <InputHeader item="rak"/> -->
    <Navbar/>
    <section class="bg-white min-h-screen w-widthContentField m-auto mt-7 p-4 ">

        <NuxtLink to="/master/rak"
          class="flex items-center justify-between rounded-md w-28 px-4 py-2 bg-gray-700">
          <div>
            <font-awesome-icon :icon="['fas', 'arrow-left']" class="text-gray-200" />
          </div>
          <p class="font-medium text-sm text-gray-200">kembali</p>
        </NuxtLink> 
        <p class="text-center text-xl text-gray-700 font-semibold">Input data baru</p>

    <div class="grid grid-cols-3 w-10/12 mt-6">
        <div v-for="(err,index) in errors" :key="index" class="bg-white w-10/12 rounded-lg mb-1 bg-opacity-90">
            <li class="text-red-400 text-xs p-2">{{err.msg}}</li>
        </div>
    </div>

    <form class="mt-8 min-w-min" @submit.prevent="postInputRak">
        <div>
            <div class="grid grid-cols-2">
                <div class="mb-4 has-tooltip">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan tipe rak</span>

                    <label for="tipeRak" class="block mb-2 text-sm">tipe rak</label>
                    <input type="text" v-model="inputRak.tipeRak" name="tipeRak" id="tipeRak" class="p-2 w-72 rounded-lg focus:ring-blue-500 bg-gray-200">
                </div>
                <div class="mb-4 has-tooltip">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan tipe pintu</span>

                    <label for="tipePintu" class="block mb-2 text-sm">tipe pintu</label>
                    <input type="text" v-model="inputRak.tipePintu" name="tipePintu" id="tipePintu" class="p-2 w-72 rounded-lg focus:ring-blue-500 bg-gray-200">
                </div>
                <div class="mb-4 has-tooltip">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan nama produk</span>

                    <label for="namaProduk" class="block mb-2 text-sm">nama produk</label>
                    <input type="text" v-model="inputRak.namaProduk" name="namaProduk" id="namaProduk" class="p-2 w-72 rounded-lg focus:ring-blue-500 bg-gray-200">
                </div>
                <div class="mb-4 has-tooltip">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan ukuran rak</span>

                    <label for="dimensi" class="block mb-2 text-sm">dimensi</label>
                    <input type="text" v-model="inputRak.dimensi" name="dimensi" id="dimensi" class="p-2 w-72 rounded-lg focus:ring-blue-500 bg-gray-200">
                </div>
                <div class="mb-4 has-tooltip relative">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan berat rak</span>

                    <label for="berat" class="block mb-2 text-sm">berat (dalam KG)</label>
                    <input type="text" v-model="inputRak.berat" name="berat" id="berat" class="p-2 w-72 rounded-lg focus:ring-blue-500 bg-gray-200">
                    <!-- <input type="text" value="KG" readonly="readonly" class="absolute w-14 right-28 text-center bottom-1 p-1 rounded"> -->
                </div>
                <div class="mb-4 has-tooltip">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan tahun masuk</span>

                    <label for="tahun" class="block mb-2 text-sm">tahun</label>
                    <input type="date" v-model="inputRak.tahun" name="tahun" id="tahun" class="p-2 w-72 rounded-lg focus:ring-blue-500 bg-gray-200">
                </div>
                
            </div>
        </div>
        <button class="bg-gray-700 text-gray-200 rounded-lg w-28 h-10 mt-8" type="submit">kirim</button>
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
            const res = await axios.post('http://localhost:3000/server/master/inputrak',{
            iduser:this.$auth.user.id,
            lokasiServer:this.$auth.user.lokasi,
            tipeRak:this.inputRak.tipeRak,
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