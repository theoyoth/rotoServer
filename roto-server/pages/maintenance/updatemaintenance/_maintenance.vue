<template>
  <div class="bg-gray-300 min-h-screen w-widthContent ml-auto">
    <!-- <InputHeader maintenance="maintenance"/> -->
    <Navbar/>
    <section class="bg-gray-100 min-h-screen w-widthContentField m-auto mt-7 p-4">
        <NuxtLink to="/maintenance"
          class="flex items-center justify-between rounded-md w-28 px-4 py-2 bg-gray-700">
          <div>
            <font-awesome-icon :icon="['fas', 'arrow-left']" class="text-gray-200" />
          </div>
          <p class="font-medium text-sm text-gray-200">kembali</p>
        </NuxtLink> 
        <p class="text-center text-xl text-gray-700 font-semibold">update maintenance</p>

    <form @submit.prevent="updateDataMaintenance" class="w-11/12 mt-10" id="inputmaintenance">
        <div>
            <input type="hidden" name="id" :value="maintenances.id">
            <div class="grid grid-cols-3">
                <!-- <div class="mb-4">
                    <label for="nama" class="block mb-2 text-sm">nama</label>
                    <input type="text" :value="maintenances.nama" name="nama" id="nama" class="p-2 w-72 rounded-lg outline-none bg-gray-300">
                </div> -->
                <div class="mb-4">
                    <label for="tanggal" class="block mb-2 text-sm">tanggal</label>
                    <input type="date" v-model="updateMaintenance.tanggal" name="tanggal" id="tanggal" class="p-2 w-72 rounded-lg outline-none bg-gray-300">
                </div>
                <div class="mb-4">
                    <label for="suhu" class="block mb-2 text-sm">suhu</label>
                    <input type="text" v-model="updateMaintenance.suhu" name="suhu" id="suhu" class="p-2 w-72 rounded-lg outline-none bg-gray-300" required>
                </div>
                <div class="mb-4">
                    <label for="kelembapan" class="block mb-2 text-sm">kelembapan</label>
                    <input type="text" v-model="updateMaintenance.kelembapan" name="kelembapan" id="kelembapan" class="p-2 w-72 rounded-lg outline-none bg-gray-300" required>
                </div>
                <div class="mb-4">
                    <label for="ac" class="block mb-2 text-sm">AC</label>
                    <input type="text" v-model="updateMaintenance.ac" name="ac" id="ac" class="p-2 w-72 rounded-lg outline-none bg-gray-300" required>
                </div>
                <div class="mb-4">
                    <label for="ups" class="block mb-2 text-sm">UPS</label>
                    <input type="text" v-model="updateMaintenance.ups" name="ups" id="ups" class="p-2 w-72 rounded-lg outline-none bg-gray-300" required>
                </div>
                <div class="mb-4">
                    <label for="baterai" class="block mb-2 text-sm">baterai</label>
                    <input type="text" v-model="updateMaintenance.baterai" name="baterai" id="baterai" class="p-2 w-72 rounded-lg outline-none bg-gray-300" required>
                </div>
                <div class="mb-4">
                    <label for="network" class="block mb-2 text-sm">network</label>
                    <input type="text" v-model="updateMaintenance.network" name="network" id="network" class="p-2 w-72 rounded-lg outline-none bg-gray-300" required>
                </div>
                <div class="mb-4">
                    <label for="server" class="block mb-2 text-sm">server</label>
                    <input type="text" v-model="updateMaintenance.server" name="server" id="server" class="p-2 w-72 rounded-lg outline-none bg-gray-300" required>
                </div>
                <div class="mb-4">
                    <label for="keterangan" class="block mb-2 text-sm">keterangan</label>
                    <textarea rows="4" form="inputmaintenance" type="text" v-model="updateMaintenance.keterangan" name="keterangan" id="keterangan" class="p-2 w-72 rounded-lg outline-none bg-gray-300"></textarea>
                </div>
            </div>
        </div>
        <button class="bg-gray-700 text-gray-200 w-24 py-2 rounded mt-10" type="submit">ubah</button>
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
      maintenances:'',
      updateMaintenance:{
        id : "",
        nama : "",
        tanggal : "",
        suhu : "",
        kelembapan : "",
        ac : "",
        ups : "",
        baterai : "",
        network : "",
        server : "",
        keterangan : "",
      }
    }
  },
  methods:{
      async updateDataMaintenance(){
          const resp = await axios.post('http://localhost:3000/server/maintenance/update/updatemaintenance',{
            lokasiServer : this.$auth.user.lokasi,
            iduser : this.$auth.user.id,
            idmaintenance : this.$route.params.id,
            nama : this.updateMaintenance.nama,
            tanggal : this.updateMaintenance.tanggal,
            suhu: this.updateMaintenance.suhu,
            kelembapan: this.updateMaintenance.kelembapan,
            ac : this.updateMaintenance.ac,
            ups : this.updateMaintenance.ups,
            baterai : this.updateMaintenance.baterai,
            network : this.updateMaintenance.network,
            server : this.updateMaintenance.server,
            keterangan : this.updateMaintenance.keterangan,
          })
          if(resp){
                this.$router.push('/maintenance')
                swal('data di update',{icon:'success'})
            }
            else{
                swal('Error',resp.data.errmsg,{icon:'error'})
                this.$router.push('/maintenance/updatemaintenance')
            }
      }
  },
  async mounted(){
    try{
    const lokasi = this.$auth.user.lokasi
    const id = this.$route.params.id
    const resp = await axios.get(`http://localhost:3000/server/maintenance/getdatamaintenanceupdate/${id}/${lokasi}`)
    if(resp){
        resp.data.forEach(dmain=>{
            this.updateMaintenance.tanggal = moment(dmain.tanggal).format('YYYY-MM-DD')
            this.updateMaintenance.nama = dmain.nama_pemeriksa
            this.updateMaintenance.suhu = dmain.suhu
            this.updateMaintenance.kelembapan = dmain.kelembapan
            this.updateMaintenance.ac = dmain.ac
            this.updateMaintenance.ups = dmain.ups
            this.updateMaintenance.baterai = dmain.baterai
            this.updateMaintenance.network = dmain.network
            this.updateMaintenance.server = dmain.server
            this.updateMaintenance.keterangan = dmain.keterangan
        })
        }
    } catch(err) {
        console.log(err)
    }
  }
}
</script>

<style>

</style>