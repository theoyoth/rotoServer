<template>
  <div class="min-h-screen bg-gray-300 w-widthContent ml-auto overflow-x-hidden">

    <section class="bg-gray-100 min-h-screen w-widthContentField m-auto mt-7 p-4">
         <NuxtLink to="/inout/tambahbarang"
          class="flex items-center justify-between rounded-md w-28 px-4 py-2 bg-gray-700 hover:bg-gray-600 transition duration-200">
          <div>
            <font-awesome-icon :icon="['fas', 'arrow-left']" class="text-gray-200" />
          </div>
          <p class="font-medium text-sm text-gray-200">kembali</p>
        </NuxtLink> 
        <p class="text-center text-xl text-gray-700 font-semibold">update tambah barang</p>
    <ValidationObserver v-slot={valid,invalid}>
    <form @submit.prevent="updateDataTambahBarang" class="w-11/12 mt-10">
            <div class="grid grid-cols-3">
                <div class="mb-4">
                    <label for="tanggal" class="block mb-2 text-sm">tanggal</label>
                    <input type="date" v-model="updateTambahBarang.tanggal" name="tanggal" id="tanggal" class="p-2 w-72 rounded-lg outline-none bg-gray-300">
                </div>
                <div class="mb-4 has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan tanggal masuk barang</span>

                    <label for="namaPenambah" class="block mb-2 text-sm">nama penambah</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required" v-slot={errors}>
                            <input type="text" v-model="updateTambahBarang.namaPenambah" name="namaPenambah" id="namaPenambah" class="p-2 w-72 rounded-lg outline-none bg-gray-300 uppercase" readonly>
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="mb-4 has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan nama barang</span>

                    <label for="namaBarang" class="block mb-2 text-sm">nama barang</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|alpha_spaces" v-slot={errors}>
                            <input type="text" v-model="updateTambahBarang.namaBarang" name="namaBarang" id="namaBarang" class="p-2 w-72 rounded-lg outline-none bg-gray-300 uppercase">
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
                 <div class="mb-4 has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan jumlah barang</span>

                    <label for="kuantitas" class="block mb-2 text-sm">kuantitas</label>

                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|numeric" v-slot={errors}>
                            <input type="text" v-model="updateTambahBarang.kuantitas" name="kuantitas" id="kuantitas" class="p-2 w-72 rounded-lg outline-none bg-gray-300">
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="mb-4 has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan kepentingan</span>

                    <label for="kepentingan" class="block mb-2 text-sm">kepentingan</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|passchar" v-slot={errors}>
                            <input type="text" v-model="updateTambahBarang.kepentingan" name="kepentingan" id="kepentingan" class="p-2 w-72 rounded-lg outline-none bg-gray-300 uppercase">
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="mb-4 has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan penanggung jawab</span>

                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required" v-slot={errors}>
                        <label for="penanggungJawab" class="block mb-2 text-sm">penanggung jawab</label>
                       <select name="penanggungJawab" id="penanggungJawab" class="p-2 w-full rounded-lg bg-gray-300" v-model="updateTambahBarang.penanggungJawab">
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
        <button class="opacity-10 bg-gray-700 text-gray-300 shadow-md rounded-lg w-28 py-2 mt-6" type="submit" :class="{activesubmit : valid}" :disabled="invalid">ubah</button>
    </form>
    </ValidationObserver>
</section>
</div>
</template>

<script>
import moment from 'moment'
import { ValidationObserver, ValidationProvider} from 'vee-validate'

export default {
    middleware:"isAuthenticated",
    components:{
        ValidationObserver,
        ValidationProvider,
    },
    data(){
        return{
            updateTambahBarang:{
                tanggal : "",
                namaPenambah : "",
                namaBarang : "",
                kuantitas: "",
                kepentingan : "",
                penanggungJawab : "",
            }
        }
     },
     computed:{
         userpa(){
             return this.$store.state.getUserPa.alluserpa
         }
     },
    async mounted(){
        const lokasi = this.$auth.user.lokasi
        const id = this.$route.params.id

        const resp = await this.$axios.get(`/inout/tambahbarang/update/${id}/${lokasi}`)
        if(resp){
            resp.data.forEach(barang=>{
                this.updateTambahBarang.tanggal = moment(barang.tanggal).format('YYYY-MM-DD')
                this.updateTambahBarang.namaPenambah = barang.nama_penambah
                this.updateTambahBarang.namaBarang = barang.nama_barang
                this.updateTambahBarang.kuantitas = barang.kuantitas
                this.updateTambahBarang.kepentingan = barang.kepentingan
                this.updateTambahBarang.penanggungJawab = barang.penanggung_jawab
            })
        }
        this.$store.dispatch('getUserPa/getallUserPa')
    },
    methods:{
        async updateDataTambahBarang(){
            const resp = await this.$axios.post('/inout/tambahbarang/update',{
            lokasiServer : this.$auth.user.lokasi,
            iduser : this.$auth.user.id,
            idtambahbarang : this.$route.params.id,
            tanggal:this.updateTambahBarang.tanggal,
            namaPenambah: this.updateTambahBarang.namaPenambah,
            namaBarang :this.updateTambahBarang.namaBarang,
            kuantitas : this.updateTambahBarang.kuantitas,
            kepentingan : this.updateTambahBarang.kepentingan,
            penanggungJawab : this.updateTambahBarang.penanggungJawab,
          })
          if(resp){
                this.$router.push('/inout/tambahbarang')
                swal('data di update',{icon:'success'})
            }
            else{
                swal('Error',resp.data.errmsg,{icon:'error'})
                this.$router.push('/inout/tambahbarang')
            }
        }
    }
}
</script>

<style>
.activesubmit {
    background-color: rgb(55, 65, 81);
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