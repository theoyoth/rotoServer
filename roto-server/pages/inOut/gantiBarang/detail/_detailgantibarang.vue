<template>
  <div class="bg-gray-200 min-h-screen w-widthContent ml-auto">
    <Navbar/>
    <section class="bg-white min-h-screen w-widthContentField m-auto mt-7 py-4 px-6 relative">
        <NuxtLink to="/inout/gantibarang"
          class="flex items-center justify-between rounded-md w-28 px-4 py-2 bg-gray-700">
          <div>
            <font-awesome-icon :icon="['fas', 'arrow-left']" class="text-gray-200" />
          </div>
          <p class="font-medium text-sm text-gray-200">kembali</p>
        </NuxtLink> 
        <p class="text-center text-gray-700 font-semibold mt-4">DETAIL GANTI BARANG</p>
        <div class="grid grid-cols-2 w-3/4 bg-gray-200 text-gray-900 text-sm m-auto mt-10">
          <div class="border border-gray-400 divide-y divide-gray-300">
              <p class="py-2 px-6">tanggal di input</p>
              <p class="py-2 px-6">nama pengganti</p>
              <p class="py-2 px-6">nama barang baru</p>
              <p class="py-2 px-6">nama barang lama</p>
              <p class="py-2 px-6">kuantitas</p>
              <p class="py-2 px-6">kepentingan</p>
              <p class="py-2 px-6">penanggung jawab</p>
              <p class="py-2 px-6">keterangan</p>
          </div>
          <div class="border border-gray-400 divide-y divide-gray-300" v-for="(det,index) in detail" :key="index">
              <p class="py-2 px-6">{{$moment().format('DD-MM-YYYY')}}</p>
              <p class="py-2 px-6">{{det.nama_pengganti}}</p>
              <p class="py-2 px-6">{{det.nama_barang_baru}}</p>
              <p class="py-2 px-6">{{det.nama_barang_lama}}</p>
              <p class="py-2 px-6">{{det.kuantitas}}</p>
              <p class="py-2 px-6">{{det.kepentingan}}</p>
              <p class="py-2 px-6">{{det.penanggung_jawab}}</p>
              <p class="py-2 px-6">{{det.keterangan}}</p>
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
      `http://localhost:3000/server/inout/gantibarang/detail/${lokasi}/${iddetail}`
    )
    this.detail = resp.data
  }
}
</script>

<style>

</style>