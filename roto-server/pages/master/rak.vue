<template>
<div class="bg-hero min-h-screen">
    <ListItem :rak="master" :raks="raks"/>
</div>
</template>
<script>
import axios from 'axios'

export default {
    data(){
        return{
            cari:"",
            master:{
                nama:"inputRak",
            },
            raks:[],
        }
    },
     mounted(){
        axios.get('http://localhost:3000/server/masterrak')
        .then(resp => {
            resp.data.forEach(rak =>{
                this.raks.push(rak)
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