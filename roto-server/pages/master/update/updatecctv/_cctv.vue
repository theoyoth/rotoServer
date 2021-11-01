<template>
  <div class="bg-bg-gen min-h-screen">
    <InputHeader item="CCTV"/>
    <section class="container mx-auto mt-8">
    <form action="/server/master/cctv/update/updatecctv" method="post" class="w-11/12">
        <div>
            <input type="hidden" name="id" :value="cctvs.id">
            <div class="grid grid-cols-3 grid-rows-4">
                <div class="mb-4">
                    <label for="merek" class="block mb-2 text-sm">merek</label>
                    <input type="text" :value="cctvs.merek" name="merek" id="merek" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4">
                    <label for="model" class="block mb-2 text-sm">model</label>
                    <input type="text" :value="cctvs.model" name="model" id="model" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4">
                    <label for="garansi" class="block mb-2 text-sm">garansi</label>
                    <input type="text" :value="cctvs.garansi" name="garansi" id="garansi" class="p-2 w-72 rounded-lg outline-none">
                </div>
                
            </div>
        </div>
        <button class="bg-blue-400 shadow-md rounded-lg w-28 h-10 mt-8" type="submit">ubah</button>
    </form>
</section>
</div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
        return{
            cctvs:'',
        }
    },
    mounted(){
        axios.get(`http://localhost:3000/server/master/update/updatecctv/${this.$route.params.id}`)
        .then(res => {
            const result = res
            this.cctvs = result.data[0]
        })
        .catch(err=>{
            console.log(err)
        }) 
        
    }
}
</script>

<style>

</style>