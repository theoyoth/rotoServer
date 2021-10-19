<template>
<div class="bg-hero min-h-screen">
    <ListItem :keyboard="master" :keyboards="keyboards"/>
  
</div>
</template>
<script>
import axios from 'axios'

export default {
    data(){
        return{
             cari:"",
            master:{
                nama : "inputKeyboard",
            },
            keyboards:[],
        }
    },
    mounted(){
        axios.get('http://localhost:3000/server/masterkeyboard')
        .then(resp => {
            resp.data.forEach(keyboard => {
                this.keyboards.push(keyboard)
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