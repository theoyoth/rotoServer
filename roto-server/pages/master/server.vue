<template>
<div class="bg-hero min-h-screen ">
    <ListItem :server="master" :servers="servers"/>
</div>
</template>

<script>
import axios from "axios"

export default {
    data(){
        return{
            master:{
                nama : "inputServer",
            },
            servers : [],
        }
    },
    mounted(){
        axios.get('http://localhost:3000/server/masterserver')
        .then(resp => {
              resp.data.forEach(server => {
                this.servers.push(server)
              })
            })
            .catch(err => {
                console.error(err);
            });
    }
}
</script>

<style lang=scss>
</style>