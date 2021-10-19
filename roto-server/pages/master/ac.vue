<template>
<div class="bg-hero min-h-screen">
    <ListItem :ac="master" :acs="acs"/>
</div>
</template>
<script>
import axios from 'axios'

export default {
    data(){
        return{
            cari:"",
            master:{
                nama: "inputAc",
            },
            acs:[],
        }
    },
     mounted(){
        axios.get('http://localhost:3000/server/masterac')
        .then(resp => {
            resp.data.forEach(ac => {
                this.acs.push(ac)
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