<template>
  <div class="bg-gray-300 min-h-screen w-widthContent ml-auto overflow-x-hidden">
    
    <section class="bg-gray-100 min-h-screen w-widthContentField m-auto mt-7 py-4 px-6 relative">
        <NuxtLink to="/master/server"
          class="flex items-center justify-between rounded-md w-28 px-4 py-2 bg-gray-700 hover:bg-gray-600 transition duration-200">
          <div>
            <font-awesome-icon :icon="['fas', 'arrow-left']" class="text-gray-200" />
          </div>
          <p class="font-medium text-sm text-gray-200">kembali</p>
        </NuxtLink> 

        <div class="bg-white shadow overflow-hidden sm:rounded-lg mt-6">
  <div class="px-4 py-5 sm:px-6 bg-gray-700 text-center">
    <h3 class="text-lg leading-6 font-medium text-gray-200">
      Detail Server
    </h3>
    <p class="mt-1 text-sm text-gray-300">
      Master barang server
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
          {{$moment(det.tanggal).format('DD-MM-YYYY')}}
        </dd>
      </div>
      <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-700 flex">
          <div class="px-2 shadow mr-4">2</div>
          Produk
        </dt>
        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          {{det.produk}}
        </dd>
      </div>
      <div class="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-700 flex">
          <div class="px-2 shadow mr-4">3</div>
          Merek
        </dt>
        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          {{det.merek}}
        </dd>
      </div>
      <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-700 flex">
          <div class="px-2 shadow mr-4">4</div>
          Model
        </dt>
        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          {{det.model}}
        </dd>
      </div>
      <div class="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-700 flex">
          <div class="px-2 shadow mr-4">5</div>
          Processor
        </dt>
        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          {{det.processor}}
        </dd>
      </div>
      <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-700 flex">
          <div class="px-2 shadow mr-4">6</div>
          Memori
        </dt>
        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          {{det.memori}} {{det.satuan_memori}}
        </dd>
      </div>
      <div class="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-700 flex">
          <div class="px-2 shadow mr-4">7</div>
          Internal Storage
        </dt>
        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          {{det.internal_storage}} {{det.satuan_internal_storage}}
        </dd>
      </div>
      <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-700 flex">
          <div class="px-2 shadow mr-4">8</div>
          Network controller
        </dt>
        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          {{det.network_controller}}
        </dd>
      </div>
      <div class="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-700 flex">
          <div class="px-2 shadow mr-4">9</div>
          Sumber daya listrik
        </dt>
        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          {{det.sumber_daya_listrik}}
        </dd>
      </div>
      <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-700 flex">
          <div class="px-2 shadow mr-4">10</div>
          Tahun
        </dt>
        <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          {{$moment(det.tahun).format('DD-MM-YYYY') }}
        </dd>
      </div>
      <div class="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt class="text-sm font-medium text-gray-700 flex">
          <div class="px-2 shadow mr-4">11</div>
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
  methods:{
    async getDetailData(){
      const lokasi = this.$auth.user.lokasi
      const iddetail = this.$route.params.id
      const resp = await this.$axios.get(
        `/master/server/detail/${lokasi}/${iddetail}`
      )
      this.detail = resp.data
    }
  },
  mounted(){
    this.getDetailData()
  }
}
</script>

<style>

</style>