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
        <p class="text-center text-xl text-gray-700 font-semibold">update Rak</p>
    <form @submit.prevent="updateDataRak" class="w-11/12 mt-10">
        <div >
            <input type="hidden" name="id" :value="raks.id">
            <div class="grid grid-cols-3 grid-rows-4">
                <div class="mb-4">
                    <label for="tipeRak" class="block mb-2 text-sm">tipe rak</label>
                    <input type="text" v-model="updateRak.tipeRak" name="tipeRak" id="tipeRak" class="p-2 w-72 rounded-lg outline-none bg-gray-300">
                </div>
                <div class="mb-4">
                    <label for="tipePintu" class="block mb-2 text-sm">tipe pintu</label>
                    <input type="text" v-model="updateRak.tipePintu" name="tipePintu" id="tipePintu" class="p-2 w-72 rounded-lg outline-none bg-gray-300">
                </div>
                <div class="mb-4">
                    <label for="namaProduk" class="block mb-2 text-sm">nama produk</label>
                    <input type="text" v-model="updateRak.namaProduk" name="namaProduk" id="namaProduk" class="p-2 w-72 rounded-lg outline-none bg-gray-300">
                </div>
                <div class="mb-4">
                    <label for="dimensi" class="block mb-2 text-sm">dimensi</label>
                    <input type="text" v-model="updateRak.dimensi" name="dimensi" id="dimensi" class="p-2 w-72 rounded-lg outline-none bg-gray-300">
                </div>
                <div class="mb-4">
                    <label for="berat" class="block mb-2 text-sm">berat</label>
                    <input type="text" v-model="updateRak.berat" name="berat" id="berat" class="p-2 w-72 rounded-lg outline-none bg-gray-300">
                </div>
                <div class="mb-4">
                    <label for="tahun" class="block mb-2 text-sm">tahun</label>
                    <input type="date" v-model="updateRak.tahun" name="tahun" id="tahun" class="p-2 w-72 rounded-lg outline-none bg-gray-300">
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
            updateRak:{
                tipeRak : "",
                tipePintu : "",
                namaProduk: "",
                dimensi : "",
                berat : "",
                tahun : "",
            }
        }
    },
    methods:{
        async updateDataRak(){
            const resp = await axios.post('http://localhost:3000/server/master/rak/update',{
                iduser: this.$auth.user.id,
                lokasiServer: this.$auth.user.lokasi,
                idrak: this.$route.params.id,
                tipeRak:this.updateRak.tipeRak,
                tipePintu:this.updateRak.tipePintu,
                namaProduk:this.updateRak.namaProduk,
                dimensi:this.updateRak.dimensi,
                berat:this.updateRak.berat,
                tahun: this.updateRak.tahun,
            })
            if(resp){
                this.$router.push('/master/rak')
                swal('data di update',{icon:'success'})
            }
            else{
                swal('Error',resp.data.msg,{icon:'error'})
                this.$router.push('/master/updaterak')
            }
        }
    },
    async mounted(){
        try{
            const lokasi = this.$auth.user.lokasi
            const id = this.$route.params.id
            const resp = await axios.get(`http://localhost:3000/server/master/rak/update/${id}/${lokasi}`)
            if(resp){
                resp.data.forEach(rak=>{
                    this.updateRak.tipeRak = rak.tipe_rak
                    this.updateRak.tipePintu = rak.tipe_pintu
                    this.updateRak.namaProduk = rak.nama_produk
                    this.updateRak.dimensi = rak.dimensi
                    this.updateRak.berat = rak.berat
                    this.updateRak.tahun = moment(rak.tahun).format('YYYY-MM-DD')
                })
            }
        }catch(err) {
            console.log(err)
        }
    }
}
</script>

<style>

</style>