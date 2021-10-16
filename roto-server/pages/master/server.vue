<template>
<div class="bg-hero min-h-screen ">
    <ListItem :server="master"/>
</div>
</template>

<script>
export default {
    data(){
        return{
            cari:"",
            master:{
                nama : "inputServer",
                produk : "produk",
                merek : "merek",
                model : "model",
                processor : "processor",
                memori : "memori",
                internalStorage : "internal storage",
                networkController : "network controller",
                eksternalStorage : "eksternal storage",
                powerSupply : "power supply",
                tahun : "tahun",
                garansi : "garansi",
            }
        }
        }
}
</script>

<style lang=scss>
</style>