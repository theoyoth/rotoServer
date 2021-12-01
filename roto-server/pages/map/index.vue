<template>
<div class="bg-gray-300 w-widthContent ml-auto">
    <Navbar/>
    <Map/>
</div>
  
</template>

<script>
export default {
    middleware:"isAuthenticated",

}
</script>

<style>

</style>