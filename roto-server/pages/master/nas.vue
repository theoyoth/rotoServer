<template>
<div class="bg-hero min-h-screen">
    <ListItem :nas="master" :nass="nass"/>
   
</div>
</template>
<script>
import axios from 'axios'

export default {
    data(){
        return{
            cari:"",
            master:{
                nama : "inputNas",
            },
            nass:[],
        }
    },
    mounted(){
    axios.get('http://localhost:3000/server/masternas')
    .then(resp => {
        resp.data.forEach(nas => {
            this.nass.push(nas)
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