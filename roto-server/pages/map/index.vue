<template>
<div class="bg-gray-300 w-widthContent ml-auto">
    <Navbar/>
    <div v-show="this.$auth.user.lokasi === 'rotogravure 1' || this.$auth.user.lokasi === 'rotogravure 3'">
        <Map/>
    </div>
</div>
  
</template>

<script>
export default {
    middleware:"isAuthenticated",

}
</script>

<style>

</style>