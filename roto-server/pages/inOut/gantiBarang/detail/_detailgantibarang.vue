<template>
  <div class="bg-gray-300 min-h-screen w-widthContent ml-auto">
    <Navbar/>
    <section class="bg-gray-100 min-h-screen w-widthContentField m-auto mt-7 py-4 px-6 relative">
        <NuxtLink to="/inout/gantibarang"
          class="flex items-center justify-between rounded-md w-28 px-4 py-2 bg-gray-700">
          <div>
            <font-awesome-icon :icon="['fas', 'arrow-left']" class="text-gray-200" />
          </div>
          <p class="font-medium text-sm text-gray-200">kembali</p>
        </NuxtLink> 

        <div class="bg-white shadow overflow-hidden sm:rounded-lg mt-6">
  <div class="px-4 py-5 sm:px-6 bg-gray-200 text-center">
    <h3 class="text-lg leading-6 font-medium text-gray-900">
      Detail Ganti barang
    </h3>
    <p class="mt-1 text-sm text-gray-500">
      InOut ganti barang
    </p>
  </div>
  <div class="border-t border-gray-200">
    <dl v-for="(det,index) in detail" :key="index">
      <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-500 flex">
          <div class="px-2 shadow mr-4">1</div>
          Tanggal input
        </dt>
        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          {{$moment(det.tanggal).format('DD-MM-YYYY') }}
        </dd>
      </div>
      <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-500 flex">
          <div class="px-2 shadow mr-4">2</div>
          Nama Pengganti
        </dt>
        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          {{det.nama_pengganti}}
        </dd>
      </div>
      <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-500 flex">
          <div class="px-2 shadow mr-4">3</div>
          Nama barang baru
        </dt>
        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          {{det.nama_barang_baru}}
        </dd>
      </div>
      <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-500 flex">
          <div class="px-2 shadow mr-4">4</div>
          Nama barang lama
        </dt>
        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          {{det.nama_barang_lama}}
        </dd>
      </div>
      <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-500 flex">
          <div class="px-2 shadow mr-4">5</div>
          Kuantitas
        </dt>
        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          {{det.kuantitas}}
        </dd>
      </div>
      <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-500 flex">
          <div class="px-2 shadow mr-4">6</div>
          Kepentingan
        </dt>
        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          {{det.kepentingan}}
        </dd>
      </div>
      <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-500 flex">
          <div class="px-2 shadow mr-4">7</div>
          Penanggung jawab
        </dt>
        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          {{det.penanggung_jawab}}
        </dd>
      </div>
      <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-500 flex">
          <div class="px-2 shadow mr-4">8</div>
          Keterangan
        </dt>
        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          {{det.keterangan}}
        </dd>
      </div>
    </dl>
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
