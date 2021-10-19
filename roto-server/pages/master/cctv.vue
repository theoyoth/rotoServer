<template>
  <div class="bg-hero min-h-screen">
    <ListItem :cctv="master" :cctvs="cctvs"/>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return{
            cari:"",
            master:{
                nama : "inputCctv",
            },
            cctvs:[],
        }
    },
     mounted(){
        axios.get('http://localhost:3000/server/mastercctv')
        .then(resp => {
            resp.data.forEach(cctv => {
                this.cctvs.push(cctv)
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