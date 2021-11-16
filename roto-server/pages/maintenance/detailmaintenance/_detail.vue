<template>
  <div class="bg-gray-300 min-h-screen w-widthContent ml-auto">
    <Navbar/>
    <section class="bg-gray-100 min-h-screen w-widthContentField m-auto mt-7 py-4 px-6 relative">
        <NuxtLink to="/maintenance"
          class="flex items-center justify-between rounded-md w-28 px-4 py-2 bg-gray-700">
          <div>
            <font-awesome-icon :icon="['fas', 'arrow-left']" class="text-gray-200" />
          </div>
          <p class="font-medium text-sm text-gray-200">kembali</p>
        </NuxtLink> 
        <p class="text-center text-gray-700 font-semibold mt-4">DETAIL MAINTENANCE</p>
        <div class="grid grid-cols-2 w-3/4 bg-gray-200 text-gray-900 text-sm m-auto mt-10">
          <div class="border border-gray-400 divide-y divide-gray-300">
              <p class="py-2 px-6">nama</p>
              <p class="py-2 px-6">tanggal</p>
              <p class="py-2 px-6">suhu</p>
              <p class="py-2 px-6">kelembapan</p>
              <p class="py-2 px-6">ac</p>
              <p class="py-2 px-6">ups</p>
              <p class="py-2 px-6">baterai</p>
              <p class="py-2 px-6">network</p>
              <p class="py-2 px-6">keterangan</p>
          </div>
          <div class="border border-gray-400 divide-y divide-gray-300" v-for="(det,index) in detail" :key="index">
              <p class="py-2 px-6">{{det.nama_pemeriksa}}</p>
              <p class="py-2 px-6">{{$moment(det.tanggal).format('DD-MM-YYYY')}}</p>
              <p class="py-2 px-6">{{det.suhu}}</p>
              <p class="py-2 px-6">{{det.kelembapan}}</p>
              <p class="py-2 px-6">{{det.ac}}</p>
              <p class="py-2 px-6">{{det.ups}}</p>
              <p class="py-2 px-6">{{det.baterai}}</p>
              <p class="py-2 px-6">{{det.network}}</p>
              <p class="py-2 px-6">{{det.keterangan}}</p>

          </div>
        </div>
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
      detail: '',
    }
  },
  async mounted(){
    const lokasi = this.$auth.user.lokasi
    const iddetail = this.$route.params.id
    const resp = await axios.get(
      `http://localhost:3000/server/maintenance/detail/${lokasi}/${iddetail}`
    )
    this.detail = resp.data
  }
}
</script>

<style>

</style>