<template>
  <div class="min-h-screen bg-gray-300 w-widthContent ml-auto">
    <!-- <InputHeader item="AC"/> -->
    <Navbar/>

    <section class="bg-gray-100 min-h-screen w-widthContentField m-auto mt-7 p-4">
         <NuxtLink to="/inout/ambilbarang"
          class="flex items-center justify-between rounded-md w-28 px-4 py-2 bg-gray-700">
          <div>
            <font-awesome-icon :icon="['fas', 'arrow-left']" class="text-gray-200" />
          </div>
          <p class="font-medium text-sm text-gray-200">kembali</p>
        </NuxtLink> 
        <p class="text-center text-xl text-gray-700 font-semibold">update ambil barang</p>
    <form @submit.prevent="updateDataAmbilBarang" class="w-11/12 mt-10">
        <div>
            <div class="grid grid-cols-3 grid-rows-4">
                <div class="mb-4">
                    <label for="tanggal" class="block mb-2 text-sm">tanggal</label>
                    <input type="date" v-model="updateAmbilBarang.tanggal" name="tanggal" id="tanggal" class="p-2 w-72 rounded-lg outline-none bg-gray-300">
                </div>
                <div class="mb-4">
                    <label for="namaPenambah" class="block mb-2 text-sm">nama penambah</label>
                    <input type="text" v-model="updateAmbilBarang.namaPengambil" name="namaPenambah" id="namaPenambah" class="p-2 w-72 rounded-lg outline-none bg-gray-300 uppercase">
                </div>
                <div class="mb-4">
                    <label for="namaBarang" class="block mb-2 text-sm">nama barang</label>
                    <input type="text" v-model="updateAmbilBarang.namaBarang" name="namaBarang" id="namaBarang" class="p-2 w-72 rounded-lg outline-none bg-gray-300 uppercase">
                </div>
                 <div class="mb-4">
                    <label for="kuantitas" class="block mb-2 text-sm">kuantitas</label>
                    <input type="text" v-model="updateAmbilBarang.kuantitas" name="kuantitas" id="kuantitas" class="p-2 w-72 rounded-lg outline-none bg-gray-300">
                </div>
                <div class="mb-4">
                    <label for="kepentingan" class="block mb-2 text-sm">kepentingan</label>
                    <input type="text" v-model="updateAmbilBarang.kepentingan" name="kepentingan" id="kepentingan" class="p-2 w-72 rounded-lg outline-none bg-gray-300 uppercase">
                </div>
                <div class="mb-4">
                    <label for="penanggungJawab" class="block mb-2 text-sm">penanggung jawab</label>
                    <input type="text" v-model="updateAmbilBarang.penanggungJawab" name="penanggungJawab" id="penanggungJawab" class="p-2 w-72 rounded-lg outline-none bg-gray-300 uppercase">
                </div>
            </div>
        </div>
        <button class="bg-gray-700 text-gray-300 shadow-md rounded-lg w-28 h-10" type="submit">ubah</button>
    </form>
</section>
</div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'

export default {
    middleware:"isAuthenticated",
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
    async mounted(){
        const lokasi = this.$auth.user.lokasi
        const id = this.$route.params.id

        const resp = await axios.get(`http://localhost:3000/server/inout/ambilbarang/update/${id}/${lokasi}`)
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
    },
    methods:{
        async updateDataAmbilBarang(){
            const resp = await axios.post('http://localhost:3000/server/inout/ambilbarang/update',{
            lokasiServer : this.$auth.user.lokasi,
            iduser : this.$auth.user.id,
            idambilbarang : this.$route.params.id,
            tanggal:this.updateAmbilBarang.tanggal,
            namaPengambil: this.updateAmbilBarang.namaPengambil,
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
                swal('Error',resp.data.errmsg,{icon:'error'})
                this.$router.push('/inout/ambilbarang')
            }
        }
    }
}
</script>

<style>

</style>