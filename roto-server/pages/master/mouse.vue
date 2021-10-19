<template>
<div class="bg-hero min-h-screen">
    <ListItem :mouse="master" :mouses="mouses"/>
</div>
</template>
<script>
import axios from 'axios'

export default {
    data(){
        return{
            cari:"",
            master:{
                nama : "inputMouse",
            },
            mouses:[],
        }
    },
    mounted(){
    axios.get('http://localhost:3000/server/mastermouse')
    .then(resp => {
        resp.data.forEach(mouse => {
            this.mouses.push(mouse)
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