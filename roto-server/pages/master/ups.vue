<template>
<div class="bg-hero min-h-screen">
    <ListItem :ups="master" :upss="upss"/>
</div>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return{
            cari : "",
            master:{
                nama : "inputUps",
            },
            upss:[],
        }
    },
    mounted(){
        axios.get('http://localhost:3000/server/masterups')
        .then(resp => {
            resp.data.forEach(ups =>{
                this.upss.push(ups)
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