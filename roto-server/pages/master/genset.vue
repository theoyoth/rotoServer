<template>
<div class="bg-hero min-h-screen">
    <ListItem :genset="master" :gensets="gensets"/>
</div>
</template>
<script>
import axios from 'axios'

export default {
    data(){
        return{
            cari:"",
            master:{
                nama : "inputGenset",
            },
            gensets:[],
        }
    },
    mounted(){
    axios.get('http://localhost:3000/server/mastergenset')
    .then(resp => {
        resp.data.forEach(genset => {
            this.gensets.push(genset)
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