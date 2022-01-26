<template>
  <div class="min-h-screen bg-gray-300 w-widthContent ml-auto overflow-x-hidden">
    <section class="bg-gray-100 min-h-screen w-widthContentField m-auto mt-7 p-4">
         <NuxtLink to="/inout/ambilbarang"
          class="flex items-center justify-between rounded-md w-28 px-4 py-2 bg-gray-700 hover:bg-gray-600 transition duration-200">
          <div>
            <font-awesome-icon :icon="['fas', 'arrow-left']" class="text-gray-200" />
          </div>
          <p class="font-medium text-sm text-gray-200">kembali</p>
        </NuxtLink> 
        <p class="text-center text-xl text-gray-700 font-semibold">update ambil barang</p>
    <ValidationObserver v-slot={invalid,valid}>
    <form @submit.prevent="updateDataAmbilBarang" class="w-11/12 mt-10">
        <div>
            <div class="grid grid-cols-3">
                <div class="mb-4">
                    <label for="tanggal" class="block mb-2 text-sm">tanggal</label>
                    <input type="date" v-model="updateAmbilBarang.tanggal" name="tanggal" id="tanggal" class="p-2 w-72 rounded-lg outline-none bg-gray-300">
                </div>
                <div class="mb-4 has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan nama barang</span>

                    <label for="namaBarang" class="block mb-2 text-sm">nama barang</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|alpha_spaces" v-slot={errors}>
                            <input type="text" v-model="updateAmbilBarang.namaBarang" name="namaBarang" id="namaBarang" class="p-2 w-72 rounded-lg outline-none bg-gray-300 uppercase">
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
                 <div class="mb-4 has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan jumlah barang</span>

                    <label for="kuantitas" class="block mb-2 text-sm">kuantitas</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|numeric" v-slot={errors}>
                            <input type="text" v-model="updateAmbilBarang.kuantitas" name="kuantitas" id="kuantitas" class="p-2 w-72 rounded-lg outline-none bg-gray-300">
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="mb-4 has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan kepentingan</span>

                    <label for="kepentingan" class="block mb-2 text-sm">kepentingan</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|alpha_spaces" v-slot={errors}>
                            <input type="text" v-model="updateAmbilBarang.kepentingan" name="kepentingan" id="kepentingan" class="p-2 w-72 rounded-lg outline-none bg-gray-300 uppercase">
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="mb-4 has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan penanggung jawab</span>

                    <label for="penanggungJawab" class="block mb-2 text-sm">penanggung jawab</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required" v-slot={errors}>
                            <select name="penanggungJawab" id="penanggungJawab" class="p-2 w-full rounded-lg bg-gray-300" v-model="updateAmbilBarang.penanggungJawab">
                            <option disabled value="">penanggung jawab</option>
                            <option v-for="(pa,index) in userpa" :key="index">
                                <option :value="pa.nama">{{pa.nama}}</option>
                            </option>
                        </select> 
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
            </div>
        </div>
        <button class="opacity-10 bg-gray-700 text-gray-300 shadow-md rounded-lg w-28 h-10 mt-6" type="submit" :class="{activesubmit : valid}" :disabled="invalid">ubah</button>
    </form>
    </ValidationObserver>
</section>
</div>
</template>

<script>
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
            updateAmbilBarang:{
                tanggal : "",
                namaPengambil : "",
                namaBarang : "",
                kuantitas: "",
                kepentingan : "",
                penanggungJawab : "",
            }
        }
    },
    computed:{
        userpa() {
            return this.$store.state.getUser.alluserpa
        }
    },
    async mounted(){
        const lokasi = this.$auth.user.lokasi
        const id = this.$route.params.id

        const resp = await this.$axios.get(`/inout/ambilbarang/update/${id}/${lokasi}`)
        if(resp){
            resp.data.forEach(barang=>{
                this.updateAmbilBarang.tanggal = moment(barang.tanggal).format('YYYY-MM-DD')
                this.updateAmbilBarang.namaPengambil = barang.nama_pengambil
                this.updateAmbilBarang.namaBarang = barang.nama_barang
                this.updateAmbilBarang.kuantitas = barang.kuantitas
                this.updateAmbilBarang.kepentingan = barang.kepentingan
                this.updateAmbilBarang.penanggungJawab = barang.penanggung_jawab
            })
        }
        this.$store.dispatch('getUser/getallUserPa',lokasi)
    },
    methods:{
        async updateDataAmbilBarang(){
            const resp = await this.$axios.post('/inout/ambilbarang/update',{
            lokasiServer : this.$auth.user.lokasi,
            iduser : this.$auth.user.id,
            idambilbarang : this.$route.params.id,
            tanggal:this.updateAmbilBarang.tanggal,
            namaPengambil: this.$auth.user.nama,
            namaBarang :this.updateAmbilBarang.namaBarang,
            kuantitas : this.updateAmbilBarang.kuantitas,
            kepentingan : this.updateAmbilBarang.kepentingan,
            penanggungJawab : this.updateAmbilBarang.penanggungJawab,
          })
          if(resp){
                this.$router.push('/inout/ambilbarang')
                swal('data di update',{icon:'success'})
            }
            else{
                swal('Error','data gagal di update',{icon:'error'})
                this.$router.push('/inout/ambilbarang')
            }
        }
    }
}
</script>

<style>
.activesubmit {
    background-color: rgb(40, 45, 58);
    color:whitesmoke;
    cursor:pointer;
    opacity:1;
    width:7rem;
    padding-top: .5rem;
    padding-bottom: .5rem;
    transition: all 0.5s;
    transform:translateY(-2px);
}
</style>