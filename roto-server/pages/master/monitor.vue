<template>
<div class="bg-hero min-h-screen">
    <ListItem :monitor="master" :monitors="monitors"/>

</div>
</template>
<script>
import axios from 'axios'

export default {
    data(){
        return{
            cari:"",
            master:{
                nama : "inputMonitor",
            },
            monitors:[],
        }
    },
    mounted(){
        axios.get('http://localhost:3000/server/mastermonitor')
        .then(resp => {
            resp.data.forEach(monitor => {
                this.monitors.push(monitor)
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