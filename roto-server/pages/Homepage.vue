<template>
  <div class="bg-hero h-screen">
    <div class="container mx-auto h-full py-5">
      <header>
        <div class="flex justify-between items-center">
          <div class="flex justify-between w-56 text-sm">
            <p>{{ user.nama }}</p>
            <p>|</p>
            <p>{{ user.level }}</p>
            <p>|</p>
            <p>{{user.lokasi}}</p>
          </div>
          <div class="maintenance-result w-96 flex justify-between">
            <div class="has-tooltip">
              <nuxt-link
                to="/graphictemperature"
                class="
                  temperature
                  h-10
                  w-44
                  rounded-md
                  bg-gr-blue
                  flex
                  justify-around
                  items-center
                  shadow-md
                  transform
                  hover:scale-95 hover:shadow-lg
                  transition
                  ease-in
                  duration-200
                "
              >
                <span
                  class="
                    tooltip
                    text-xs
                    rounded
                    shadow-lg
                    p-1
                    bg-gray-700
                    text-white
                    -mb-20
                  "
                  >hasil maintenance suhu</span
                >
                <p class="text-xs">suhu</p>
                <p>20°c</p>
              </nuxt-link>
            </div>
            <div class="has-tooltip">
              <nuxt-link
                to="/graphichumidity"
                class="
                  humidity
                  h-10
                  w-44
                  rounded-md
                  bg-gr-red
                  flex
                  justify-around
                  items-center
                  shadow-md
                  transform
                  hover:scale-95 hover:shadow-lg
                  transition
                  ease-in
                  duration-200
                "
              >
                <span
                  class="
                    tooltip
                    text-xs
                    rounded
                    shadow-lg
                    p-1
                    bg-gray-700
                    w-52
                    text-white
                    -mb-20
                  "
                  >hasil maintenance kelembapan</span
                >
                <p class="text-xs">kelembapan</p>
                <p>30%</p>
              </nuxt-link>
            </div>
          </div>
          <button @click.prevent="logout"
            class="
              logout-btn
              px-2
              w-28
              flex
              rounded-md
              justify-between
              items-center
            "
          >
            <h2 class="font-medium">Logout</h2>
            <div
              class="
                bg-blue-400
                w-8
                h-8
                rounded-full
                flex
                items-center
                justify-center
              "
            >
              <font-awesome-icon
                :icon="['fas', 'sign-out-alt']"
                class="text-white"
              />
            </div>
          </button>
        </div>
      </header>
      <!-- <div v-for="(error,index) in errors" :key="index">
            <p>{{error.msg[0]}}</p>
        </div> -->
      <section class="grid place-items-center h-5/6">
        <div class="grid grid-cols-3 h-3/4 w-4/5 place-items-center">
          <div class="has-tooltip" v-show="!isSecurity">
            <nuxt-link
              to="/master"
              class="
                master-menu
                h-36
                w-60
                rounded-xl
                relative
                backdrop-blur-md
                bg-opacity-10
                flex
                justify-center
                items-center
                bg-gr-white
                transform
                hover:translate-y-1 hover:shadow-lg
                transition
                ease-in-out
                duration-300
              "
            >
              <span
                class="
                  tooltip
                  text-sm
                  rounded
                  shadow-lg
                  p-1
                  bg-gray-700
                  text-white
                  -mt-48
                "
                >master barang di server</span
              >
              <h1 class="font-medium">Master</h1>
              <font-awesome-icon
                :icon="['fas', 'database']"
                class="absolute top-4 left-4"
              />
            </nuxt-link>
          </div>
          <div
            class="has-tooltip"
            v-show="[
              isEdp,
              isPa,
              isSecurity,
              isadminTeknisi,
              isTeknisilistrik,
              isTeknisiac,
            ]"
          >
            <nuxt-link
              to="/maintenance"
              class="
                maintenance-menu
                h-36
                w-60
                rounded-xl
                relative
                backdrop-blur-md
                bg-opacity-10
                flex
                justify-center
                items-center
                bg-gr-white
                transform
                hover:translate-y-1 hover:shadow-lg
                transition
                ease-in-out
                duration-300
              "
            >
              <span
                class="
                  tooltip
                  text-sm
                  rounded
                  shadow-lg
                  p-1
                  bg-gray-700
                  text-white
                  -mt-48
                "
                >maintenance server</span
              >
              <h1 class="font-medium">Maintenance</h1>
              <font-awesome-icon
                :icon="['fas', 'file-medical']"
                class="absolute top-4 left-4"
              />
            </nuxt-link>
          </div>
          <div
            class="has-tooltip"
            v-show="[
              isEdp,
              isPa,
              isTeknisiac,
              isadminTeknisi,
              isTeknisilistrik,
              isSecurity,
            ]"
          >
            <nuxt-link
              to="/inout"
              class="
                in/out-menu
                h-36
                w-60
                rounded-xl
                relative
                backdrop-blur-md
                bg-opacity-10
                flex
                justify-center
                items-center
                bg-gr-white
                transform
                hover:translate-y-1 hover:shadow-lg
                transition
                ease-in-out
                duration-300
              "
            >
              <span
                class="
                  tooltip
                  text-xs
                  rounded
                  shadow-lg
                  p-1
                  bg-gray-700
                  text-white
                  -mt-48
                "
                >input dan output barang di server</span
              >
              <h1 class="font-medium">Masuk/Keluar barang</h1>
              <font-awesome-icon
                :icon="['fas', 'people-carry']"
                class="absolute top-4 left-4"
              />
            </nuxt-link>
          </div>
          <div class="has-tooltip" v-show="!isTeknisiac">
            <nuxt-link
              to="/document"
              class="
                documentation-menu
                h-36
                w-60
                rounded-xl
                relative
                backdrop-blur-md
                bg-opacity-10
                flex
                justify-center
                items-center
                bg-gr-white
                transform
                hover:translate-y-1 hover:shadow-lg
                transition
                ease-in-out
                duration-300
              "
            >
              <span
                class="
                  tooltip
                  text-sm
                  rounded
                  shadow-lg
                  p-1
                  bg-gray-700
                  text-white
                  -mt-48
                "
                >dokumen SOP dan lainnya</span
              >
              <h1 class="font-medium">Dokumentasi</h1>
              <font-awesome-icon
                :icon="['fas', 'file-alt']"
                class="absolute top-4 left-4"
              />
            </nuxt-link>
          </div>
          <div class="has-tooltip" v-show="!isTeknisiac">
            <nuxt-link
              to="/map"
              class="
                map-menu
                h-36
                w-60
                rounded-xl
                relative
                backdrop-blur-md
                bg-opacity-10
                flex
                justify-center
                items-center
                bg-gr-white
                transform
                hover:translate-y-1 hover:shadow-lg
                transition
                ease-in-out
                duration-300
              "
            >
              <span
                class="
                  tooltip
                  text-sm
                  rounded
                  shadow-lg
                  p-1
                  bg-gray-700
                  text-white
                  -mt-48
                "
                >peta ruang server</span
              >
              <h1 class="font-medium">Peta</h1>
              <font-awesome-icon
                :icon="['fas', 'map']"
                class="absolute top-4 left-4"
              />
            </nuxt-link>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>

export default {
  layout:"SidebarDefault",
  middleware: 'isAuthenticated',
  data() {
    return {
      // user : '',
      message: '',
      errors: null,
    }
  },
  computed: {
    loggedIn() {
      return this.$auth.loggedIn
    },
    user() {
      return this.$auth.user
    },
    // isAuthenticated(){
    //     return this.$auth.getters.isAuthenticated
    // },
    // getUserInfo(){
    //     return this.$auth.getters.getUserInfo
    // }
    isEdp() {
      return this.$store.getters.isEdp
    },
    isPa() {
      return this.$store.getters.isPa
    },
    isSecurity() {
      return this.$store.getters.isSecurity
    },
    isadminTeknisi() {
      return this.$store.getters.isadminTeknisi
    },
    isTeknisilistrik() {
      return this.$store.getters.isTeknisilistrik
    },
    isTeknisiac() {
      return this.$store.getters.isTeknisiac
    },
  },
  methods: {
    async logout() {
      await this.$auth.logout()
      // this.$auth.$storage.removeCookie("authtoken")
      // this.$cookies.remove('aksestoken')
      // this.$cookies.remove('aksestoken')
      // this.$router.push('/')
    },
  },
}
</script>

<style>
</style>