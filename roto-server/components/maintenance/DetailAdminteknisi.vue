<template>
  <div class="border-t border-gray-200">
        <dl v-for="(det,index) in databarang" :key="index">
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
</template>

<script>
export default {
  middleware:"isAuthenticated",
  props:["databarang"]
}
</script>
