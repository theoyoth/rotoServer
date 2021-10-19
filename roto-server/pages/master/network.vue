<template>
<div class="bg-hero min-h-screen">
    <ListItem :network="master" :networks="networks"/>
</div>
</template>
<script>
import axios from 'axios'

export default {
    data(){
        return{
            cari:"",
            master:{
                nama : "inputNetwork",
            },
            networks:[],
        }
    },
    mounted(){
        axios.get('http://localhost:3000/server/masternetwork')
        .then(resp => {
            resp.data.forEach(network => {
                this.networks.push(network)
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