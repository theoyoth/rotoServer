<template>
<div class="bg-gray-300 min-h-screen w-widthContent ml-auto">
    <!-- <InputHeader item="rak"/> -->
    <Navbar/>
    <section class="bg-gray-100 min-h-screen w-widthContentField m-auto mt-7 p-4 ">

        <NuxtLink to="/inout/tambahbarang"
          class="flex items-center justify-between rounded-md w-28 px-4 py-2 bg-gray-700">
          <div>
            <font-awesome-icon :icon="['fas', 'arrow-left']" class="text-gray-200" />
          </div>
          <p class="font-medium text-sm text-gray-200">kembali</p>
        </NuxtLink> 
        <p class="text-center text-xl text-gray-700 font-semibold">Input barang baru</p>

    <ValidationObserver v-slot={invalid,valid}>
    <form class="mt-10 min-w-min" @submit.prevent="postTambahBarang">
        <div>
            <div class="grid grid-cols-2">
                <div class="mb-4 has-tooltip">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan tanggal masuk barang</span>

                    <label for="tanggal" class="block mb-2 text-sm">tanggal</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required" v-slot={errors}>
                            <input type="date" v-model="inputTambahBarang.tanggal" name="tanggal" id="tanggal" class="p-2 w-full rounded-lg outline-none bg-gray-200 uppercase">
                            <p class="text-xs mt-1 text-right text-red-500">{{ errors[0] }}</p>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="mb-4 has-tooltip">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan nama barang</span>

                    <label for="namaBarang" class="block mb-2 text-sm">nama barang</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|alpha_spaces" v-slot={errors}>
                            <input type="text" v-model="inputTambahBarang.namaBarang" name="namaBarang" id="namaBarang" class="p-2 w-full rounded-lg outline-none bg-gray-200 uppercase">
                            <p class="text-xs mt-1 text-right text-red-500">{{ errors[0] }}</p>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="mb-4 has-tooltip" :class="[inputTambahBarang.namaBarang !== '' ? 'incop' : 'decop']">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan jumlah barang</span>

                    <label for="kuantitas" class="block mb-2 text-sm">kuantitas</label>

                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|numeric" v-slot={errors}>
                            <input type="text" v-model="inputTambahBarang.kuantitas" name="kuantitas" id="kuantitas" class="p-2 w-full rounded-lg outline-none  bg-gray-200 " :disabled="inputTambahBarang.namaBarang === ''">
                            <p class="text-xs mt-1 text-right text-red-500">{{ errors[0] }}</p>
                        </ValidationProvider>
                    </div>

                </div>
                <div class="mb-4 has-tooltip" :class="[inputTambahBarang.kuantitas !== '' ? 'incop' : 'decop']">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan kepentingan</span>

                    <label for="kepentingan" class="block mb-2 text-sm">kepentingan</label>

                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|passchar" v-slot={errors}>
                            <input type="text" v-model="inputTambahBarang.kepentingan" name="kepentingan" id="kepentingan" class="p-2 w-full rounded-lg outline-none bg-gray-200 uppercase" :disabled="inputTambahBarang.kuantitas === ''">
                            <p class="text-xs mt-1 text-right text-red-500">{{ errors[0] }}</p>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="mb-4 has-tooltip" :class="[inputTambahBarang.kepentingan !== '' ? 'incop' : 'decop']">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan penanggung jawab</span>

                    <label for="penanggungJawab" class="block mb-2 text-sm">penanggung jawab</label>
                    <div class="flex flex-col w-72">
                    <ValidationProvider rules="required" v-slot={errors}>
                        <select name="penanggungJawab" id="penanggungJawab" class="p-2 w-full rounded-lg" v-model="inputTambahBarang.penanggungJawab">
                            <option disabled value="">penanggung jawab</option>
                            <option v-for="(pa,index) in userpa" :key="index">
                                <option :value="pa.nama">{{pa.nama}}</option>
                            </option>
                        </select> 
                        <p class="text-xs mt-1 text-right text-red-500">{{ errors[0] }}</p>
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
            inputTambahBarang:{
                tanggal: moment().format('YYYY-MM-DD'),
                namaBarang: "",
                kuantitas : "",
                kepentingan:"",
                penanggungJawab: "",
            },
            userpa:[],
        }
    },
    methods:{
        async postTambahBarang(){
            const resp = await axios.post('http://localhost:3000/server/tambahbarang/input',{
                iduser:this.$auth.user.id,
                namauser : this.$auth.user.nama,
                lokasiServer : this.$auth.user.lokasi,
                tanggal:this.inputTambahBarang.tanggal,
                namaBarang: this.inputTambahBarang.namaBarang,
                kuantitas : this.inputTambahBarang.kuantitas,
                kepentingan: this.inputTambahBarang.kepentingan,
                penanggungJawab : this.inputTambahBarang.penanggungJawab,
            })
            if(resp){
                this.$router.push('/inout/tambahbarang')
                swal('data berhasil disimpan',{icon:'success'})
                console.log(this.inputTambahBarang.penanggungJawab)
            }
            else{
                this.$router.push('/inout/tambahbarang')
                swal('Error',resp.data.errmsg,{icon:'error'})
            }
        }
    },
    async mounted(){
        try{
            const resp = await axios.get('http://localhost:3000/server/users/pa')
            if(resp){
                resp.data.forEach(pa=>{
                    this.userpa.push(pa)
                })
            }
        }catch(err){
            console.log(err)
        }
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