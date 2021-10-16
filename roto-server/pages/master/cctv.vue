<template>
  <div class="bg-hero min-h-screen">
    <ListItem :cctv="master"/>
  </div>
</template>

<script>
export default {
    data(){
        return{
            cari:"",
            master:{
                nama : "inputCctv",
                merek : "merek",
                model : "model",
                garansi : "garansi",
            }
        }
    }

}
</script>

<style>

</style>