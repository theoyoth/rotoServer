<template>
  <section>
    <div class="bg-gray-100 w-full py-4 px-7 flex justify-between items-center text-gray-700">
      <div class="text-lg font-semibold underline flex items-center">
        <font-awesome-icon
            :icon="['fas', 'warehouse']"
            class="text-gray-700 mr-2"
        />
        <!-- {{user.lokasi}} -->
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