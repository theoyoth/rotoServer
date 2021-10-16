<template>
<div class="bg-hero min-h-screen">
    <ListItem :genset="master"/>
</div>
</template>
<script>
export default {
    data(){
        return{
            cari:"",
            master:{
                nama : "inputGenset",
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