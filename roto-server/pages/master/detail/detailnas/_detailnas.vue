<template>
  <div class="bg-gray-200 min-h-screen w-widthContent ml-auto">
    <Navbar/>
    <section class="bg-white min-h-screen w-widthContentField m-auto mt-7 py-4 px-6 relative">
        <NuxtLink to="/master/nas"
          class="flex items-center justify-between rounded-md w-28 px-4 py-2 bg-gray-700 hover:bg-gray-600 transition duration-200">
          <div>
            <font-awesome-icon :icon="['fas', 'arrow-left']" class="text-gray-200" />
          </div>
          <p class="font-medium text-sm text-gray-200">kembali</p>
        </NuxtLink> 

    <div class="bg-white shadow overflow-hidden sm:rounded-lg mt-6">
  <div class="px-4 py-5 sm:px-6 bg-gray-700 text-center">
    <h3 class="text-lg leading-6 font-medium text-gray-200">
      Detail NAS
    </h3>
    <p class="mt-1 text-sm text-gray-300">
      Master barang NAS
    </p>
  </div>
  <div class="border-t border-gray-200">
    <dl v-for="(det,index) in detail" :key="index">
      <div class="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-700 flex">
          <div class="px-2 shadow mr-4">1</div>
          Tanggal input
        </dt>
        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          {{$moment(det.tanggal).format('DD-MM-YYYY') }}
        </dd>
      </div>
      <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-700 flex">
          <div class="px-2 shadow mr-4">2</div>
          Merek
        </dt>
        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          {{det.merek}}
        </dd>
      </div>
      <div class="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-700 flex">
          <div class="px-2 shadow mr-4">3</div>
          Model
        </dt>
        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          {{det.model}}
        </dd>
      </div>
      <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-700 flex">
          <div class="px-2 shadow mr-4">4</div>
          Processor
        </dt>
        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          {{det.processor}}
        </dd>
      </div>
      <div class="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-700 flex">
          <div class="px-2 shadow mr-4">5</div>
          Storage
        </dt>
        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          {{det.storage}} {{det.satuan_storage}}
        </dd>
      </div>
      <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-700 flex">
          <div class="px-2 shadow mr-4">6</div>
          Tipe
        </dt>
        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          {{det.tipe}}
        </dd>
      </div>
      <div class="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-700 flex">
          <div class="px-2 shadow mr-4">7</div>
          CPU
        </dt>
        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          {{det.cpu}}
        </dd>
      </div>
      <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-700 flex">
          <div class="px-2 shadow mr-4">8</div>
          RAID
        </dt>
        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          {{det.raid}}
        </dd>
      </div>
      <div class="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-700 flex">
          <div class="px-2 shadow mr-4">9</div>
          Tahun
        </dt>
        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          {{$moment(det.tahun).format('DD-MM-YYYY') }}
        </dd>
      </div>
      <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-700 flex">
          <div class="px-2 shadow mr-4">10</div>
          Garansi
        </dt>
        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          {{$moment(det.garansi).format('DD-MM-YYYY') }}
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
      `/master/nas/detail/${lokasi}/${iddetail}`
    )
    this.detail = resp.data
  }
}
</script>

<style>

</style>