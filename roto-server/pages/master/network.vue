<template>
<div class="bg-hero min-h-screen">
    <ListItem :network="master"/>
</div>
</template>
<script>
export default {
    data(){
        return{
            cari:"",
            master:{
                nama : "inputNetwork",
                kuantitas : "kuantitas", 
                tipe : "tipe", 
                merek : "merek", 
                model : "model", 
                kanal : "kanal", 
                tahun : "tahun",
                garansi : "garansi",
            }
        }
    }

}
</script>

<style>

</style>