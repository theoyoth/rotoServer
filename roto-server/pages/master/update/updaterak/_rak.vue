<template>
<div class="bg-gray-300 min-h-screen w-widthContent ml-auto">
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
        <p class="text-center text-xl text-gray-700 font-semibold">update Server</p>
    <form action="/server/master/rak/update/updaterak" method="post"  class="w-11/12 mt-10">
        <div >
            <input type="hidden" name="id" :value="raks.id">
            <div class="grid grid-cols-3 grid-rows-4">
                <div class="mb-4">
                    <label for="tipeRak" class="block mb-2 text-sm">tipe rak</label>
                    <input type="text" :value="raks.tipe_rak" name="tipeRak" id="tipeRak" class="p-2 w-72 rounded-lg outline-none bg-gray-300">
                </div>
                <div class="mb-4">
                    <label for="tipePintu" class="block mb-2 text-sm">tipe pintu</label>
                    <input type="text" :value="raks.tipe_pintu" name="tipePintu" id="tipePintu" class="p-2 w-72 rounded-lg outline-none bg-gray-300">
                </div>
                <div class="mb-4">
                    <label for="namaProduk" class="block mb-2 text-sm">nama produk</label>
                    <input type="text" :value="raks.nama_produk" name="namaProduk" id="namaProduk" class="p-2 w-72 rounded-lg outline-none bg-gray-300">
                </div>
                <div class="mb-4">
                    <label for="dimensi" class="block mb-2 text-sm">dimensi</label>
                    <input type="text" :value="raks.dimensi" name="dimensi" id="dimensi" class="p-2 w-72 rounded-lg outline-none bg-gray-300">
                </div>
                <div class="mb-4">
                    <label for="berat" class="block mb-2 text-sm">berat</label>
                    <input type="text" :value="raks.berat" name="berat" id="berat" class="p-2 w-72 rounded-lg outline-none bg-gray-300">
                </div>
                <div class="mb-4">
                    <label for="tahun" class="block mb-2 text-sm">tahun</label>
                    <input type="date" :value="$moment(raks.tahun).format('YYYY-MM-DD')" name="tahun" id="tahun" class="p-2 w-72 rounded-lg outline-none bg-gray-300">
                </div>
                
            </div>
        </div>
        <button class=" bg-gray-700 text-gray-200 w-24 py-2 rounded" type="submit">ubah</button>
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
            raks:'',
        }
    },
    async mounted(){
        const lokasi = this.$auth.user.lokasi
        const id = this.$route.params.id
        const resp = await axios.get(`http://localhost:3000/server/master/update/updaterak/${id}/${lokasi}`)
        this.raks = resp.data[0] 
    }
}
</script>

<style>

</style>