<template>
<div class="bg-hero min-h-screen">
    <ListItem :apar="master" :apars="apars"/>
</div>
</template>
<script>
import axios from 'axios'

export default {
    data(){
        return{
            cari:"",
            master:{
                nama : "inputApar",
            },
            apars:[],
        }
    },
    mounted(){
        axios.get('http://localhost:3000/server/masterapar')
        .then(resp => {
            resp.data.forEach(apar => {
                this.apars.push(apar)
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