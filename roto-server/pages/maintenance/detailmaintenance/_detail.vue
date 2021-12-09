<template>
  <div class="bg-gray-300 min-h-screen w-widthContent ml-auto">
    <Navbar/>
    <section class="bg-gray-100 min-h-screen w-widthContentField m-auto mt-7 py-4 px-6 relative">
        <NuxtLink to="/maintenance"
          class="flex items-center justify-between rounded-md w-28 px-4 py-2 bg-gray-700 hover:bg-gray-600 transition duration-200">
          <div>
            <font-awesome-icon :icon="['fas', 'arrow-left']" class="text-gray-200" />
          </div>
          <p class="font-medium text-sm text-gray-200">kembali</p>
        </NuxtLink> 

    <div class="bg-white shadow overflow-hidden sm:rounded-lg mt-6">
  <div class="px-4 py-5 sm:px-6 bg-gray-700 text-center">
    <h3 class="text-lg leading-6 font-medium text-gray-200">
      Detail Maintenance
    </h3>
    <p class="mt-1 text-sm text-gray-300">
      Maintenance ruangan server
    </p>
  </div>
  <div class="border-t border-gray-200">
    <dl v-for="(det,index) in detail" :key="index">
      <div class="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-700 flex">
          <div class="px-2 shadow mr-4">1</div>
          Nama
        </dt>
        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          {{det.nama_pemeriksa}}
        </dd>
      </div>
      <div class="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-700 flex">
          <div class="px-2 shadow mr-4">2</div>
          Tanggal
        </dt>
        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          {{$moment(det.tanggal).format('DD-MM-YYYY') }}
        </dd>
      </div>
      <div class="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-700 flex">
          <div class="px-2 shadow mr-4">3</div>
          Suhu
        </dt>
        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          {{det.suhu}}
        </dd>
      </div>
      <div class="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-700 flex">
          <div class="px-2 shadow mr-4">4</div>
          Kelembapan
        </dt>
        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          {{det.kelembapan}}
        </dd>
      </div>
      <div class="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-700 flex">
          <div class="px-2 shadow mr-4">5</div>
          AC
        </dt>
        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          {{det.ac}}
        </dd>
      </div>
      <div class="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-700 flex">
          <div class="px-2 shadow mr-4">6</div>
          Keterangan AC
        </dt>
        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          {{det.keterangan_ac}}
        </dd>
      </div>
      <div class="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-700 flex">
          <div class="px-2 shadow mr-4">7</div>
          UPS
        </dt>
        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          {{det.ups}}
        </dd>
      </div>
      <div class="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-700 flex">
          <div class="px-2 shadow mr-4">8</div>
          Keterangan UPS
        </dt>
        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          {{det.keterangan_ups}}
        </dd>
      </div>
      <div class="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-700 flex">
          <div class="px-2 shadow mr-4">9</div>
          Baterai
        </dt>
        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          {{det.baterai}}
        </dd>
      </div>
      <div class="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-700 flex">
          <div class="px-2 shadow mr-4">10</div>
          Keterangan Baterai
        </dt>
        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          {{det.keterangan_baterai}}
        </dd>
      </div>
      <div class="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-700 flex">
          <div class="px-2 shadow mr-4">11</div>
          Server
        </dt>
        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          {{det.server}}
        </dd>
      </div>
      <div class="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-700 flex">
          <div class="px-2 shadow mr-4">12</div>
          Keterangan Server
        </dt>
        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          {{det.keterangan_server}}
        </dd>
      </div>
      <div class="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-700 flex">
          <div class="px-2 shadow mr-4">14</div>
          Keterangan
        </dt>
        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          {{det.keterangan }}
        </dd>
      </div>
    </dl>
  </div>
</div>
    </section>
  </div>
</template>

<script>

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
    const resp = await this.$axios.get(
      `/maintenance/detail/${lokasi}/${iddetail}`
    )
    this.detail = resp.data
  }
}
</script>

<style>

</style>