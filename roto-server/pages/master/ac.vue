<template>
<div class="bg-hero min-h-screen">
    <ListItem :ac="master"/>
</div>
</template>
<script>
export default {
    head(){
        return{
            title : "ac",
        }
    },
    data(){
        return{
            cari:"",
            master:{
                nama: "inputAc",
                merek : "merek", 
                submerDayaListrik : "sumber daya listrik", 
                konsumsiDaya : "konsumis daya", 
                dimensi : "konsumis daya", 
                kapasitasPendingin : "konsumis daya", 
                tahun : "tahun",
                garansi : "garansi",
            }
        }
    }

}
</script>

<style>

</style>