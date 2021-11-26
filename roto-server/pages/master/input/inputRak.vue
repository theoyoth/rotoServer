<template>
<div class="bg-gray-300 min-h-screen w-widthContent ml-auto">
    <!-- <InputHeader item="rak"/> -->
    <Navbar/>
    <section class="bg-gray-100 min-h-screen w-widthContentField m-auto mt-7 p-4 ">

        <NuxtLink to="/master/rak"
          class="flex items-center justify-between rounded-md w-28 px-4 py-2 bg-gray-700">
          <div>
            <font-awesome-icon :icon="['fas', 'arrow-left']" class="text-gray-200" />
          </div>
          <p class="font-medium text-sm text-gray-200">kembali</p>
        </NuxtLink> 
        <p class="text-center text-xl text-gray-700 font-semibold">Input data baru</p>

    <ValidationObserver v-slot={invalid,valid}>
    <form class="mt-10 min-w-min" @submit.prevent="postInputRak">
        <div>
            <div class="grid grid-cols-2">
                <div class="mb-4 has-tooltip">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan tipe rak</span>

                    <label for="tipeRak" class="block mb-2 text-sm">tipe rak</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|passchar" v-slot={errors}>
                            <input type="text" v-model="inputRak.tipeRak" name="tipeRak" id="tipeRak" class="p-2 w-full rounded-lg outline-none bg-gray-200">
                            <p class="text-xs mt-1 text-right text-red-500">{{ errors[0] }}</p>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="mb-4 has-tooltip" :class="[inputRak.tipeRak !== '' ? 'incop' : 'decop']">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan tipe pintu</span>

                    <label for="tipePintu" class="block mb-2 text-sm">tipe pintu</label>

                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|passchar" v-slot={errors}>
                            <input type="text" v-model="inputRak.tipePintu" name="tipePintu" id="tipePintu" class="p-2 w-full rounded-lg outline-none  bg-gray-200" :disabled="inputRak.tipeRak === ''">
                            <p class="text-xs mt-1 text-right text-red-500">{{ errors[0] }}</p>
                        </ValidationProvider>
                    </div>

                </div>
                <div class="mb-4 has-tooltip" :class="[inputRak.tipePintu !== '' ? 'incop' : 'decop']">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan nama produk</span>

                    <label for="namaProduk" class="block mb-2 text-sm">nama produk</label>

                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|passchar" v-slot={errors}>
                            <input type="text" v-model="inputRak.namaProduk" name="namaProduk" id="namaProduk" class="p-2 w-full rounded-lg outline-none bg-gray-200" :disabled="inputRak.tipePintu === ''">
                            <p class="text-xs mt-1 text-right text-red-500">{{ errors[0] }}</p>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="mb-4 has-tooltip" :class="[inputRak.namaProduk !== '' ? 'incop' : 'decop']">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan ukuran rak</span>

                    <label for="dimensi" class="block mb-2 text-sm">dimensi</label>
                    <div class="flex flex-col w-72">
                    <ValidationProvider rules="required|passchar" v-slot={errors}>
                        <input type="text" v-model="inputRak.dimensi" name="dimensi" id="dimensi" class="p-2 w-full rounded-lg outline-none bg-gray-200" :disabled="inputRak.namaProduk === ''">
                        <p class="text-xs mt-1 text-right text-red-500">{{ errors[0] }}</p>
                    </ValidationProvider>
                    </div>
                </div>
                <div class="mb-4 has-tooltip relative" :class="[inputRak.dimensi !== '' ? 'incop' : 'decop']">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan berat rak</span>

                    <label for="berat" class="block mb-2 text-sm">berat (dalam KG)</label>
                    <div class="flex flex-col w-72">
                    <ValidationProvider rules="required|numeric" v-slot={errors}>
                        <input type="text" v-model="inputRak.berat" name="berat" id="berat" class="p-2 w-full rounded-lg outline-none bg-gray-200" :disabled="inputRak.dimensi === ''">
                        <p class="text-xs mt-1 text-right text-red-500">{{ errors[0] }}</p>
                    </ValidationProvider>
                    </div>
                    
                </div>
                <div class="mb-4 has-tooltip" :class="[inputRak.berat !== '' ? 'incop' : 'decop']">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan tahun masuk</span>

                    <label for="tahun" class="block mb-2 text-sm">tahun</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required" v-slot={errors}>
                            <input type="date" v-model="inputRak.tahun" name="tahun" id="tahun" class="p-2 w-full rounded-lg outline-none bg-gray-200" >
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
.incop{
    opacity:1,
}
.decop{
    opacity: 0.1;
}
.activesubmit {
    background-color: rgb(39, 39, 39);
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