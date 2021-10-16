<template>
<div class="bg-hero min-h-screen">
    <ListItem :monitor="master"/>

</div>
</template>
<script>
export default {
    data(){
        return{
            cari:"",
            master:{
                nama : "inputMonitor",
                merek : "merek",
                model : "model",
                tipe : "tipe",
                tahun : "tahun",
                garansi : "garansi",
            }
        }
    }

}
</script>

<style>

</style>