<template>
  <div class="flex">
    <Sidebar v-if="loggedIn" />
    <Nuxt class="relative"/>
  </div>
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
  }
}
</script>
