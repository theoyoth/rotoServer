<template>
  <div class="bg-gray-300 min-h-screen w-widthContent ml-auto">
    <Navbar/>
    <section class="bg-gray-100 min-h-screen w-widthContentField m-auto mt-7 p-4 ">
      <div class="container mx-auto h-full py-5">
        <div class="flex">
          <h1 class="text-3xl text-gray-700 font-semibold">WELCOME, <span>{{user.nama}}</span></h1>
          <!-- <p class="text-2xl">{{user.nama}}</p> -->
        </div>
        <hr class="mt-4">
        <div class="mt-6">
          <div class="flex justify-evenly items-center">
              <div class="has-tooltip">
                <div
                  class="
                    temperature
                    h-28
                    w-52
                    rounded-xl
                    bg-blue-100
                    py-1
                    px-5
                    flex
                    flex-col
                    justify-around
                    transform
                    hover:scale-95 hover:shadow-lg
                    transition
                    ease-in
                    duration-200
                    relative
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
                      absolute -top-7 left-12
                    "
                    >hasil maintenance suhu</span
                  >
                  <div class="bg-gray-700 w-8 h-8 rounded-xl flex items-center justify-center">
                    <font-awesome-icon
                        :icon="['fas', 'temperature-high']"
                        class="text-gray-200 text-lg z-10"
                    />
                  </div>
                  <h1 class="text-xl font-semibold">21°c</h1>
                  <p class="text-xs">Suhu</p>
                </div>
              </div>
              <div class="has-tooltip">
                <div
                  class="
                    humidity
                    h-28
                    w-52
                    rounded-xl
                    bg-red-100
                    py-1
                    px-5
                    flex
                    flex-col
                    justify-around
                    transform
                    hover:scale-95 hover:shadow-lg
                    transition
                    ease-in
                    duration-200
                    relative
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
                      absolute -top-7 left-0
                    "
                    >hasil maintenance kelembapan</span
                  >
                  <div class="bg-gray-700 w-8 h-8 rounded-xl flex items-center justify-center">
                    <font-awesome-icon
                        :icon="['fas', 'wind']"
                        class="text-gray-200 text-lg z-10"
                    />
                  </div>
                  <h1 class="text-xl font-semibold">30%</h1>
                  <p class="text-xs">Kelembapan</p>
                </div>
              </div>
              <div class="has-tooltip">
                <div
                  class="
                    humidity
                    h-28
                    w-52
                    rounded-xl
                    bg-green-100
                    py-1
                    px-5
                    flex
                    flex-col
                    justify-around
                    transform
                    hover:scale-95 hover:shadow-lg
                    transition
                    ease-in
                    duration-200
                    relative
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
                      w-44
                      text-white
                      absolute -top-7 left-8
                    "
                    >hasil maintenance baterai</span
                  >
                  <div class="bg-gray-700 w-8 h-8 rounded-xl flex items-center justify-center">
                    <font-awesome-icon
                        :icon="['fas', 'battery-three-quarters']"
                        class="text-gray-200 text-lg z-10"
                    />
                  </div>
                  <h1 class="text-xl font-semibold">30%</h1>
                  <p class="text-xs">Baterai</p>
                </div>
              </div>
          </div>
        </div>       
      </div>
    </section>
  </div>
</template>

<script>

export default {
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
      localStorage.setItem("app-logout", 'logout' + Math.random())
      return true
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