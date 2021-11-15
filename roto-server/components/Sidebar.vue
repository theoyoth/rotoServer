<template>
  <nav
    class="md:left-0 md:block  md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl flex flex-wrap items-center justify-between fixed z-10 py-4 bg-sidebar-color text-white w-widthSidebar"
  >
    <div
      class="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto"
    >
      <!-- Toggler -->
      <button
        class="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
        type="button"
      >
        <i class="fas fa-bars"></i>
      </button>
    

      <!-- Collapse -->
      <div
        class="md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded"
      >
        <!-- Collapse header -->
        <div
          class="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200"
        >
          <div class="flex flex-wrap">
            <div class="w-6/12">
              <router-link
                class="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                to="/"
              >
                Vue Notus
              </router-link>
            </div>
            <div class="w-6/12 flex justify-end">
              <button
                type="button"
                class="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
              >
                <i class="fas fa-times"></i>
              </button>
            </div>
          </div>
        </div>
        <!-- Form -->
        <form class="mt-6 mb-4 md:hidden">
          <div class="mb-3 pt-0">
            <input
              type="text"
              placeholder="Search"
              class="border-0 px-3 py-2 h-12 border border-solid border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
            />
          </div>
        </form>

        <!-- Divider -->
        <hr class="my-4 px-6 md:min-w-full" />
        <!-- Heading -->
        <h2
          class="md:min-w-full text-blueGray-500 uppercase font-bold block pt-1 pb-4 px-6 no-underline"
        >
          MENU
        </h2>
        <!-- Navigation -->

        <ul class="md:flex-col md:min-w-full flex flex-col list-none relative cursor-pointer" >
          <li class="items-center" >
            <div class="flex py-3 px-6 justify-between items-center group hover:bg-gray-600" @click="isActive = !isActive">
              <div class="flex">
                <font-awesome-icon
                  :icon="['fas', 'tv']"
                  class="text-gray-500 mr-3 text-xs group-hover:text-white"
                />
                <p class="font-bold text-xs group-hover:text-white">MASTER</p>
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
              <div class="flex">
                <font-awesome-icon
                  :icon="['fas', 'cog']"
                  class="text-gray-500 mr-4 text-xs group-hover:text-white"
                />
                <p class="text-xs font-bold group-hover:text-white">MAINTENANCE</p>
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
             <div class="flex">
                  <font-awesome-icon
                    :icon="['fas', 'suitcase']"
                    class="text-gray-500 mr-4 text-xs group-hover:text-white"
                  />
                <p class="text-xs font-bold group-hover:text-white">IN/OUT BARANG</p>
              </div>
              <font-awesome-icon
                :icon="['fas', 'chevron-right']"
                class="text-gray-500 mr-0 group-hover:text-white" :class="[isInOutActive ? 'arrowDownInOut' : 'arrowNotDown']"
              />
            </div>
            <ul class="relative hidden px-16 py-1 text-xs" :class="{activeinout : isInOutActive}">
                <li class="py-1 w-full hover:text-gray-400"><NuxtLink to="/inout/tambahbarang">tambah barang</NuxtLink></li>
                <li class="py-1 hover:text-gray-400"><NuxtLink to="/inout/ambilbarang">ambil barang</NuxtLink></li>
                <li class="py-1 hover:text-gray-400"><NuxtLink to="/inout/gantibarang">ganti barang</NuxtLink></li>
            </ul>
          </li>
          <li class="items-center">
            <div class="flex justify-between items-center py-3 px-6 group hover:bg-gray-600">
              <NuxtLink to="/document">
                <div class="flex">
                    <font-awesome-icon
                      :icon="['fas', 'file-alt']"
                      class="text-gray-500 mr-5 text-xs group-hover:text-white"
                    />
                  <p class="text-xs font-bold group-hover:text-white">DOKUMENTASI</p>
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
                <div class="flex">
                  <font-awesome-icon
                    :icon="['fas', 'map']"
                    class="text-gray-500 mr-4 text-xs group-hover:text-white"
                  />
                  <p class="text-xs font-bold group-hover:text-white">MAP</p>
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
    color: #d39d13;
  }
  .arrowNotDown{
    transition:all ease-in-out .2s;
  }
  .arrowDownInOut{
    transition:all ease-in-out .2s;
    transform:rotate(90deg);
  }

</style>
