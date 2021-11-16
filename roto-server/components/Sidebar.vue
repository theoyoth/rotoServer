<template>
  <nav
    class="md:left-0 md:block  md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl flex flex-wrap items-center justify-between fixed z-10 py-4 bg-sidebar-color text-white w-widthSidebar"
  >
    <div
      class="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto"
    >   

      <!-- Collapse -->
      <div
        class="md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded"
      >
      <div class="flex justify-around items-center w-1/2 mx-auto">
        <div class="rounded rounded-full w-16 h-16 bg-gray-500 flex justify-center items-center">
          <font-awesome-icon
            :icon="['fas', 'user']"
            class="text-yellow-500 text-lg"
          />
        </div>
        <div class="text-sm">
          <div class="font-semibold">
            <p>{{user.nama}}</p>
          </div>
          <div class="text-gray-500">
            <p>{{user.level}}</p>
          </div>
        </div>
      </div>

        <!-- Divider -->
        <hr class="my-4 mx-auto px-6 w-3/4" />
        <!-- Heading -->
        <h2
          class="md:min-w-full font-bold block pt-1 pb-4 px-6 no-underline text-yellow-500"
        >
          MENU
        </h2>
        <!-- Navigation -->

        <ul class="md:flex-col md:min-w-full flex flex-col list-none relative cursor-pointer" >
          <li class="items-center" >
            <div class="flex py-3 px-6 justify-between items-center group hover:bg-gray-600" @click="isActive = !isActive">
              <div class="flex items-center">
                <font-awesome-icon
                  :icon="['fas', 'tv']"
                  class="text-gray-500 mr-3 text-xs group-hover:text-white"
                />
                <p class="font-bold text-gray-300 text-sm group-hover:text-white">Master</p>
              </div>
              <font-awesome-icon
                :icon="['fas', 'chevron-right']"
                class="text-gray-500 mr-0 group-hover:text-white" :class="[isActive ? 'arrowDownInOut' : 'arrowNotDown']"
              />
            </div>
            <ul class="relative px-16 text-xs" :class="[isActive ? 'active' : 'notActive']" >
              <li class="py-1 hover:text-gray-400"><NuxtLink to="/master/server">server</NuxtLink></li>
              <li class="py-1 hover:text-gray-400"><NuxtLink to="/master/rak">rak</NuxtLink></li>
              <li class="py-1 hover:text-gray-400"><NuxtLink to="/master/ups">ups</NuxtLink></li>
              <li class="py-1 hover:text-gray-400"><NuxtLink to="/master/baterai">baterai</NuxtLink></li>
              <li class="py-1 hover:text-gray-400"><NuxtLink to="/master/ac">ac</NuxtLink></li>
              <li class="py-1 hover:text-gray-400"><NuxtLink to="/master/cctv">cctv</NuxtLink></li>
              <li class="py-1 hover:text-gray-400"><NuxtLink to="/master/network">network</NuxtLink></li>
              <li class="py-1 hover:text-gray-400"><NuxtLink to="/master/apar">apar</NuxtLink></li>
              <li class="py-1 hover:text-gray-400"><NuxtLink to="/master/monitor">monitor</NuxtLink></li>
              <li class="py-1 hover:text-gray-400"><NuxtLink to="/master/keyboard">keyboard</NuxtLink></li>
              <li class="py-1 hover:text-gray-400"><NuxtLink to="/master/mouse">mouse</NuxtLink></li>
              <li class="py-1 hover:text-gray-400"><NuxtLink to="/master/nas">nas</NuxtLink></li>
              <li class="py-1 hover:text-gray-400"><NuxtLink to="/master/genset">genset</NuxtLink></li>
            </ul>
          </li>

          <li class="items-center">
            <div class="flex justify-between items-center py-3 px-6 group hover:bg-gray-600" @click="isMainActive = !isMainActive">
              <div class="flex items-center">
                <font-awesome-icon
                  :icon="['fas', 'cog']"
                  class="text-gray-500 mr-4 text-xs group-hover:text-white"
                />
                <p class="text-sm text-gray-300 font-bold group-hover:text-white">Maintenance</p>
              </div>
              <font-awesome-icon
                :icon="['fas', 'chevron-right']"
                class="text-gray-500 mr-0 group-hover:text-white" :class="[isMainActive ? 'arrowDownInOut' : 'arrowNotDown']"
              />
            </div>
             <ul class="relative px-16 py-1 hidden transition ease-in-out duration-300 text-xs" :class="{activemaintenance : isMainActive}" >
              <li class="py-1 hover:text-gray-400"><NuxtLink to="/maintenance">maintenance</NuxtLink></li>
            </ul>
          </li>

          <li class="items-center relative">
           <div class="flex justify-between items-center py-3 px-6 group hover:bg-gray-600" @click="isInOutActive = !isInOutActive">
             <div class="flex items-center">
                  <font-awesome-icon
                    :icon="['fas', 'suitcase']"
                    class="text-gray-500 mr-4 text-xs group-hover:text-white"
                  />
                <p class="text-sm text-gray-300 font-bold group-hover:text-white">In/Out Barang</p>
              </div>
              <font-awesome-icon
                :icon="['fas', 'chevron-right']"
                class="text-gray-500 mr-0 group-hover:text-white" :class="[isInOutActive ? 'arrowDownInOut' : 'arrowNotDown']"
              />
            </div>
            <ul class="relative hidden px-16 py-1 text-xs" :class="{activeinout : isInOutActive}">
                <li class="py-2 w-full hover:text-gray-400"><NuxtLink to="/inout/tambahbarang">tambah barang</NuxtLink></li>
                <li class="py-2 hover:text-gray-400"><NuxtLink to="/inout/ambilbarang">ambil barang</NuxtLink></li>
                <li class="py-2 hover:text-gray-400"><NuxtLink to="/inout/gantibarang">ganti barang</NuxtLink></li>
            </ul>
          </li>
          <li class="items-center">
            <div class="flex justify-between items-center py-3 px-6 group hover:bg-gray-600">
              <NuxtLink to="/document">
                <div class="flex items-center">
                    <font-awesome-icon
                      :icon="['fas', 'file-alt']"
                      class="text-gray-500 mr-5 text-xs group-hover:text-white"
                    />
                  <p class="text-sm text-gray-300 font-bold group-hover:text-white">Dokumentasi</p>
                </div>
              </NuxtLink>
              <font-awesome-icon
                :icon="['fas', 'chevron-right']"
                class="text-gray-500 mr-0 group-hover:text-white"
              />
            </div>
          </li>

          <li class="items-center">
            <div class="flex justify-between items-center py-3 px-6 group hover:bg-gray-600">
              <NuxtLink to="/map">
                <div class="flex items-center">
                  <font-awesome-icon
                    :icon="['fas', 'map']"
                    class="text-gray-500 mr-4 text-xs group-hover:text-white"
                  />
                  <p class="text-sm text-gray-300 font-bold group-hover:text-white">Map</p>
                </div>
              </NuxtLink>
              <font-awesome-icon
                :icon="['fas', 'chevron-right']"
                class="text-gray-500 mr-0 group-hover:text-white"
              />
            </div>
          </li>
          <li class="items-center" v-if="user.level == 'PA'">
            <div class="flex justify-between items-center py-3 px-6 group hover:bg-gray-600">
              <NuxtLink to="/infouser">
                <div class="flex">
                  <font-awesome-icon
                    :icon="['fas', 'users']"
                    class="text-gray-500 mr-3 text-xs group-hover:text-white"
                  />
                  <p class="text-xs font-bold group-hover:text-white">INFO USER</p>
                </div>
              </NuxtLink>
              <font-awesome-icon
                :icon="['fas', 'chevron-right']"
                class="text-gray-500 mr-0 group-hover:text-white"
              />
            </div>
          </li>
        </ul>
       
      </div>
    </div>
  </nav>
</template>
); }

<script>

export default {
  middleware:"isAuthenticated",
  data() {
    return {
      isActive : false,
      isMainActive : false,
      isInOutActive: false,
      isMasterSubActive: false,
      datamasterlink : [
        {name:"server"},
        {name:"rak"},
        {name:"ups"},
        {name:"baterai"},
        {name:"ac"},
        {name:"cctv"},
        {name:"network"},
        {name:"apar"},
        {name:"monitor"},
        {name:"keyboard"},
        {name:"mouse"},
        {name:"nas"},
        {name:"genset"},
      ]
    };
  },
  computed:{
    user(){
      return this.$auth.user
    }
  }
};
</script>

<style lang="scss">
  .notActive{
    display: none;
    transition : all ease-in-out .2s;
    transform : scale(0) translateX(-20px);
    transform-origin:top;
  }
  .active {
    display: block;
    transition:all ease .2s;
    transform : scale(1) translateX(0);
    transform-origin:top;
  }
  .activemaintenance{
    display: block;
    transform: scaleY(1);
  }
  .noactiveinout{
    display: none;
    transform: translateY(-100px);
    transform-origin: top;
    transition:all ease-in-out .5s;
  }
  .activeinout{
    display: block;
    transform: scaleY(1);
  }
  a.nuxt-link-active {
    font-weight: bold;
  }
  a.nuxt-link-exact-active {
    color: #f5a819;
  }
  .arrowNotDown{
    transition:all ease-in-out .2s;
  }
  .arrowDownInOut{
    transition:all ease-in-out .2s;
    transform:rotate(90deg);
  }

</style>
