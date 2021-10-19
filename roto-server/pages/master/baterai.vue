<template>
<div class="bg-hero min-h-screen">
    <ListItem :baterai="master" :baterais="baterais"/>
 
</div>
</template>
<script>
import axios from 'axios'

export default {
    data(){
        return{
            cari:"",
            master:{
                nama : "inputBaterai",
                accu : "accu", 
                kuantitas : "kuantitas", 
                tegangan : "tegangan", 
                tahun : "tahun",
                garansi : "garansi",
            },
            baterais:[],
        }
    },
    mounted(){
        axios.get('http://localhost:3000/server/masterbaterai')
        .then(resp => {
            resp.data.forEach(baterai => {
                this.baterais.push(baterai)
            })
        })
        .catch(err => {
            console.error(err);
        });
    }

}
</script>

<style>

</style>