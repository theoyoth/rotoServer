<template>
  <div class="min-h-screen bg-gray-300 w-widthContent ml-auto overflow-x-hidden">

    <section class="bg-gray-100 min-h-screen w-widthContentField m-auto mt-7 p-4">
         <NuxtLink to="/inout/gantibarang"
          class="flex items-center justify-between rounded-md w-28 px-4 py-2 bg-gray-700 hover:bg-gray-600 transition duration-200">
          <div>
            <font-awesome-icon :icon="['fas', 'arrow-left']" class="text-gray-200" />
          </div>
          <p class="font-medium text-sm text-gray-200">kembali</p>
        </NuxtLink> 
        <p class="text-center text-xl text-gray-700 font-semibold">update ganti barang</p>
    <ValidationObserver v-slot={invalid,valid}>
    <form @submit.prevent="updateDataGantiBarang" class="w-11/12 mt-10">
            <div class="grid grid-cols-3">
                <div class="mb-4 has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan tanggal masuk barang</span>

                    <label for="tanggal" class="block mb-2 text-sm">tanggal</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required" v-slot={errors}>
                            <input type="datetime-local" v-model="updateGantiBarang.tanggal" name="tanggal" id="tanggal" class="p-2 w-72 rounded-lg outline-none bg-gray-300">
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="mb-4 has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan nama barang baru</span>

                    <label for="namaBarangBaru" class="block mb-2 text-sm">nama barang baru</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|passchar" v-slot={errors}>
                            <input type="text" v-model="updateGantiBarang.namaBarangBaru" name="namaBarangBaru" id="namaBarangBaru" class="p-2 w-72 rounded-lg outline-none bg-gray-300 uppercase">
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="mb-4 has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan nama barang lama</span>

                    <label for="namaBarangLama" class="block mb-2 text-sm">nama barang lama</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|passchar" v-slot={errors}>
                            <input type="text" v-model="updateGantiBarang.namaBarangLama" name="namaBarangLama" id="namaBarangLama" class="p-2 w-72 rounded-lg outline-none bg-gray-300 uppercase">
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
                 <div class="mb-4 has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan jumlah barang</span>

                    <label for="kuantitas" class="block mb-2 text-sm">kuantitas</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|numeric" v-slot={errors}>
                            <input type="text" v-model="updateGantiBarang.kuantitas" name="kuantitas" id="kuantitas" class="p-2 w-72 rounded-lg outline-none bg-gray-300">
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="mb-4 has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan kepentingan</span>

                    <label for="kepentingan" class="block mb-2 text-sm">kepentingan</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|passchar" v-slot={errors}>
                            <input type="text" v-model="updateGantiBarang.kepentingan" name="kepentingan" id="kepentingan" class="p-2 w-72 rounded-lg outline-none bg-gray-300 uppercase">
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="mb-4 has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan penanggung jawab</span>

                    <label for="penanggungJawab" class="block mb-2 text-sm">penanggung jawab</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required" v-slot={errors}>
                            <select name="penanggungJawab" id="penanggungJawab" class="p-2 w-full rounded-lg bg-gray-300" v-model="updateGantiBarang.penanggungJawab">
                            <option disabled value="">penanggung jawab</option>
                            <option v-for="(pa,index) in userpa" :key="index">
                                <option :value="pa.nama">{{pa.nama}}</option>
                            </option>
                            </select>
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="mb-4 has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan keterangan</span>

                    <label for="keterangan" class="block mb-2 text-sm">keterangan</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|passchar" v-slot={errors}>
                            <textarea type="text" rows="4" v-model="updateGantiBarang.keterangan" name="keterangan" id="keterangan" class="p-2 w-72 rounded-lg outline-none bg-gray-300 uppercase"></textarea>
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
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
import { ValidationObserver, ValidationProvider} from "vee-validate";

export default {
    middleware:"isAuthenticated",
    components:{
        ValidationObserver,
        ValidationProvider
    },
    data(){
        return{
            updateGantiBarang:{
                tanggal : "",
                namaPengganti : "",
                namaBarangBaru : "",
                namaBarangLama : "",
                kuantitas: "",
                kepentingan : "",
                penanggungJawab : "",
                keterangan: "",
            },
            lokasi : this.$auth.user.lokasi
        }
    },
    computed:{
        userpa(){
            return this.$store.state.getUser.alluserpa
        }
    },
    methods:{
        async updateDataGantiBarang(){
            const resp = await this.$axios.post('/inout/gantibarang/update',{
            lokasiServer : this.$auth.user.lokasi,
            iduser : this.$auth.user.id,
            idgantibarang : this.$route.params.id,
            tanggal:this.$moment(this.updateGantiBarang.tanggal).format("YYYY-MM-DD HH:mm:ss"),
            namaPengganti: this.updateGantiBarang.namaPengganti,
            namaBarangBaru :this.updateGantiBarang.namaBarangBaru,
            namaBarangLama :this.updateGantiBarang.namaBarangLama,
            kuantitas : this.updateGantiBarang.kuantitas,
            kepentingan : this.updateGantiBarang.kepentingan,
            penanggungJawab : this.updateGantiBarang.penanggungJawab,
            keterangan : this.updateGantiBarang.keterangan,
          })
          if(resp){
                this.$router.push('/inout/gantibarang')
                swal('data di update',{icon:'success'})
            }
            else{
                swal('Error','data gagal di update',{icon:'error'})
                this.$router.push('/inout/gantibarang')
            }
        },
        async getAllDataGantiBarang(){
            const id = this.$route.params.id

            const resp = await this.$axios.get(`/inout/gantibarang/update/${id}/${this.lokasi}`)
            if(resp){
                resp.data.forEach(barang=>{
                    this.updateGantiBarang.tanggal = moment(barang.tanggal).format('YYYY-MM-DD HH:mm:ss')
                    this.updateGantiBarang.namaPengganti = barang.nama_pengganti
                    this.updateGantiBarang.namaBarangBaru = barang.nama_barang_baru
                    this.updateGantiBarang.namaBarangLama = barang.nama_barang_lama
                    this.updateGantiBarang.kuantitas = barang.kuantitas
                    this.updateGantiBarang.kepentingan = barang.kepentingan
                    this.updateGantiBarang.penanggungJawab = barang.penanggung_jawab
                    this.updateGantiBarang.keterangan = barang.keterangan
                })
            }
        }
    },
    mounted(){
        this.getAllDataGantiBarang()
        this.$store.dispatch('getUser/getallUserPa',this.lokasi)
    },
}
</script>

<style>
.activesubmit {
    background-color: rgb(55, 65, 81);
    color:whitesmoke;
    width:7rem;
    cursor:pointer;
    opacity:1;
    padding-top: .5rem;
    padding-bottom: .5rem;
    transition: all 0.5s;
    transform:translateY(-2px);
}
</style>