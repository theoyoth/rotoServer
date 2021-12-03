<template>
  <div class="min-h-screen bg-gray-300 w-widthContent ml-auto">
    <!-- <InputHeader item="AC"/> -->
    <Navbar/>

    <section class="bg-gray-100 min-h-screen w-widthContentField m-auto mt-7 p-4">
         <NuxtLink to="/inout/gantibarang"
          class="flex items-center justify-between rounded-md w-28 px-4 py-2 bg-gray-700">
          <div>
            <font-awesome-icon :icon="['fas', 'arrow-left']" class="text-gray-200" />
          </div>
          <p class="font-medium text-sm text-gray-200">kembali</p>
        </NuxtLink> 
        <p class="text-center text-xl text-gray-700 font-semibold">update ganti barang</p>
    <form @submit.prevent="updateDataGantiBarang" class="w-11/12 mt-10">
        <div>
            <div class="grid grid-cols-3 ">
                <div class="mb-4">
                    <label for="tanggal" class="block mb-2 text-sm">tanggal</label>
                    <input type="date" v-model="updateGantiBarang.tanggal" name="tanggal" id="tanggal" class="p-2 w-72 rounded-lg outline-none bg-gray-300">
                </div>
                <div class="mb-4">
                    <label for="namaPengganti" class="block mb-2 text-sm">nama pengganti</label>
                    <input type="text" v-model="updateGantiBarang.namaPengganti" name="namaPengganti" id="namaPengganti" class="p-2 w-72 rounded-lg outline-none bg-gray-300 uppercase">
                </div>
                <div class="mb-4">
                    <label for="namaBarangBaru" class="block mb-2 text-sm">nama barang baru</label>
                    <input type="text" v-model="updateGantiBarang.namaBarangBaru" name="namaBarangBaru" id="namaBarangBaru" class="p-2 w-72 rounded-lg outline-none bg-gray-300 uppercase">
                </div>
                <div class="mb-4">
                    <label for="namaBarangLama" class="block mb-2 text-sm">nama barang lama</label>
                    <input type="text" v-model="updateGantiBarang.namaBarangLama" name="namaBarangLama" id="namaBarangLama" class="p-2 w-72 rounded-lg outline-none bg-gray-300 uppercase">
                </div>
                 <div class="mb-4">
                    <label for="kuantitas" class="block mb-2 text-sm">kuantitas</label>
                    <input type="text" v-model="updateGantiBarang.kuantitas" name="kuantitas" id="kuantitas" class="p-2 w-72 rounded-lg outline-none bg-gray-300">
                </div>
                <div class="mb-4">
                    <label for="kepentingan" class="block mb-2 text-sm">kepentingan</label>
                    <input type="text" v-model="updateGantiBarang.kepentingan" name="kepentingan" id="kepentingan" class="p-2 w-72 rounded-lg outline-none bg-gray-300 uppercase">
                </div>
                <div class="mb-4">
                    <label for="penanggungJawab" class="block mb-2 text-sm">penanggung jawab</label>
                    <input type="text" v-model="updateGantiBarang.penanggungJawab" name="penanggungJawab" id="penanggungJawab" class="p-2 w-72 rounded-lg outline-none bg-gray-300 uppercase">
                </div>
                <div class="mb-4">
                    <label for="keterangan" class="block mb-2 text-sm">keterangan</label>
                    <textarea type="text" rows="4" v-model="updateGantiBarang.keterangan" name="keterangan" id="keterangan" class="p-2 w-72 rounded-lg outline-none bg-gray-300 uppercase"></textarea>
                </div>
            </div>
        </div>
        <button class="bg-gray-700 text-gray-300 shadow-md rounded-lg w-28 h-10 mt-6" type="submit">ubah</button>
    </form>
</section>
</div>
</template>

<script>
import moment from 'moment'

export default {
    middleware:"isAuthenticated",
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
            }
        }
    },
    async mounted(){
        const lokasi = this.$auth.user.lokasi
        const id = this.$route.params.id

        const resp = await this.$axios.get(`/inout/gantibarang/update/${id}/${lokasi}`)
        if(resp){
            resp.data.forEach(barang=>{
                this.updateGantiBarang.tanggal = moment(barang.tanggal).format('YYYY-MM-DD')
                this.updateGantiBarang.namaPengganti = barang.nama_pengganti
                this.updateGantiBarang.namaBarangBaru = barang.nama_barang_baru
                this.updateGantiBarang.namaBarangLama = barang.nama_barang_lama
                this.updateGantiBarang.kuantitas = barang.kuantitas
                this.updateGantiBarang.kepentingan = barang.kepentingan
                this.updateGantiBarang.penanggungJawab = barang.penanggung_jawab
                this.updateGantiBarang.keterangan = barang.keterangan
            })
        }
    },
    methods:{
        async updateDataGantiBarang(){
            const resp = await this.$axios.post('/inout/gantibarang/update',{
            lokasiServer : this.$auth.user.lokasi,
            iduser : this.$auth.user.id,
            idgantibarang : this.$route.params.id,
            tanggal:this.updateGantiBarang.tanggal,
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
                swal('Error',resp.data.errmsg,{icon:'error'})
                this.$router.push('/inout/gantibarang')
            }
        }
    }
}
</script>

<style>

</style>