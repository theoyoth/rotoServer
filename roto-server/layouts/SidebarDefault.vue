<template>
  <div>
    <Sidebar v-if="this.$store.$auth.isLoggedin"/>
    <Nuxt/>
  </div>
</template>
<script>

export default {
  layout:"SidebarDefault",
}
</script>

