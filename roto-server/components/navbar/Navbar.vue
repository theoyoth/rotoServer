<template>
  <section>
  <div class="bg-white w-full py-4 px-7 flex justify-between items-center text-gray-700">
      <div class="text-sm"><b class="text-gray-700">Welcome</b> {{user.nama}}</div>
      <div class="w-1/3 flex justify-between">
        <div class="w-32 flex justify-between">
          <p class="font-bold text-gray-700">{{user.level}}</p>
          <p class="font-bold text-yellow-500">{{user.lokasi}}</p>
        </div>
        <button @click.prevent="logout"
            class="
              logout-btn
              px-2
              w-24
              flex
              justify-between
              items-center
            "
          >
            <h2 class="font-medium">Logout</h2>
            <font-awesome-icon :icon="['fas', 'arrow-alt-circle-right']" class="text-gray-700" />
          </button>
      </div>
    </div>
    </section>
</template>

<script>
export default {
  computed:{
    loggedIn() {
      return this.$auth.loggedIn
    },
    user() {
      return this.$auth.user
    },
  },
  methods:{
    async logout() {
      await this.$auth.logout()
      localStorage.setItem("app-logout", 'logout' + Math.random())
      return true
      // this.$auth.$storage.removeCookie("authtoken")
      // this.$cookies.remove('aksestoken')
      // this.$cookies.remove('aksestoken')
      // this.$router.push('/')
    },
  }
}
</script>