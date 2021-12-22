<template>
<div class="bg-gray-300 w-widthContent ml-auto">
    <div  v-if="user.lokasi === 'rotogravure 1' || user.lokasi === 'rotogravure 3'">
        <Map/>
    </div>
    <div v-else>
        <Map2/>
    </div>
</div>
  
</template>

<script>
export default {
    middleware:"isAuthenticated",
    computed:{
        user(){
            return this.$auth.user
        }
    }
}
</script>

<style>

</style>