<template>
<div class="bg-hero min-h-screen">
    <ListItem :rak="master"/>
</div>
</template>
<script>
export default {
    data(){
        return{
            cari:"",
            master:{
                nama:"inputRak",
                accu : "accu", 
                kuantitas : "kuantitas", 
                tegangan : "tegangan", 
                tahun : "tahun",
                garansi : "garansi",
            }
        }
    }

}
</script>

<style>

</style>