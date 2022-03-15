
<template>
  <section>
    <div class="bg-gray-100 w-full py-4 px-7 flex justify-between items-center text-gray-700">
      <div class="text-lg font-semibold flex items-center">
        <font-awesome-icon
            :icon="['fas', 'warehouse']"
            class="text-gray-700 mr-2"
        />
        {{user.lokasi.charAt(0).toUpperCase()+user.lokasi.slice(1)}}
        </div>
      <button @click="logout"
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
            <p class="text-lg">
            <font-awesome-icon :icon="['fas', 'sign-out-alt']" class="text-gray-700" /></p>
          </button>
    </div>
  </section>
</template>

<script>
export default {
  middleware:['isAuthenticated','auth'],
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
      await this.$axios.get('/logout')

      localStorage.setItem('applogout','logout'+ Math.random())
      return true
    },
  }
}
</script>