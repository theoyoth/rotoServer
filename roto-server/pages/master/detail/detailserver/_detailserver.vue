<template>
  <div class="bg-gray-200 min-h-screen w-widthContent ml-auto">
    <Navbar/>
    <section class="bg-white min-h-screen w-widthContentField m-auto mt-7 py-4 px-6 relative">
        <NuxtLink to="/master/server"
          class="flex items-center justify-between rounded-md w-28 px-4 py-2 bg-gray-700">
          <div>
            <font-awesome-icon :icon="['fas', 'arrow-left']" class="text-gray-200" />
          </div>
          <p class="font-medium text-sm text-gray-200">kembali</p>
        </NuxtLink> 
        <p class="text-center text-gray-700 font-semibold mt-4">DETAIL BARANG SERVER</p>
        <div class="grid grid-cols-2 w-3/4 bg-gray-200 text-gray-900 text-sm m-auto mt-10">
          <div class="border border-gray-400 divide-y divide-gray-300">
              <p class="py-2 px-6">tanggal di input</p>
              <p class="py-2 px-6">produk</p>
              <p class="py-2 px-6">merek</p>
              <p class="py-2 px-6">model</p>
              <p class="py-2 px-6">processor</p>
              <p class="py-2 px-6">memori</p>
              <p class="py-2 px-6">internal storage</p>
              <p class="py-2 px-6">network conpoller</p>
              <p class="py-2 px-6">storage</p>
              <p class="py-2 px-6">sumber daya lispik</p>
              <p class="py-2 px-6">tahun</p>
              <p class="py-2 px-6">garansi</p>
          </div>
          <div class="border border-gray-400 divide-y divide-gray-300" v-for="(det,index) in detail" :key="index">
              <p class="py-2 px-6">{{$moment().format('DD-MM-YYYY')}}</p>
              <p class="py-2 px-6">{{det.produk}}</p>
              <p class="py-2 px-6">{{det.merek}}</p>
              <p class="py-2 px-6">{{det.model}}</p>
              <p class="py-2 px-6">{{det.processor}}</p>
              <p class="py-2 px-6">{{det.memori}}</p>
              <p class="py-2 px-6">{{det.internal_storage}}</p>
              <p class="py-2 px-6">{{det.network_controller}}</p>
              <p class="py-2 px-6">{{det.storage}}</p>
              <p class="py-2 px-6">{{det.sumber_daya_listrik}}</p>
              <p class="py-2 px-6">{{$moment(det.tahun).format('DD-MM-YYYY')}}</p>
              <p class="py-2 px-6">{{$moment(det.garansi).format('DD-MM-YYYY')}}</p>
              <div>
                <!-- <NuxtLink
                  :to="{
                    name: 'master-update-updateserver-server',
                    params: { id: det.id_server },
                  }"
                >
                  <font-awesome-icon
                    :icon="['fas', 'pencil-alt']"
                    class="text-yellow-500"
                  />
                </NuxtLink> -->
              </div>
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
      `http://localhost:3000/server/master/server/detail/${lokasi}/${iddetail}`
    )
    this.detail = resp.data
  }
}
</script>

<style>

</style>