<template>
  <div class="bg-bg-gen min-h-screen">
    <InputHeader item="APAR"/>
    <section class="container mx-auto mt-8">
    <form action="/server/master/apar/update/updateapar" method="post" class="w-11/12">
        <div>
           <input type="hidden" name="id" :value="apars.id">
            <div class="grid grid-cols-3 grid-rows-4">
                <div class="mb-4">
                    <label for="merek" class="block mb-2 text-sm">merek</label>
                    <input type="text" :value="apars.merek" name="merek" id="merek" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4">
                    <label for="model" class="block mb-2 text-sm">model</label>
                    <input type="text" :value="apars.model" name="model" id="model" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4">
                    <label for="tipe" class="block mb-2 text-sm">tipe</label>
                    <input type="text" :value="apars.tipe" name="tipe" id="tipe" class="p-2 w-72 rounded-lg outline-none">
                </div>

                <div class="mb-4">
                    <label for="tahun" class="block mb-2 text-sm">tahun</label>
                    <input type="date" :value="$moment(apars.tahun).format('YYYY-MM-DD')" name="tahun" id="tahun" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4">
                    <label for="garansi" class="block mb-2 text-sm">garansi</label>
                    <input type="date" :value="$moment(apars.garansi).format('YYYY-MM-DD')" name="garansi" id="garansi" class="p-2 w-72 rounded-lg outline-none">
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
            apars:'',
        }
    },
    mounted(){
        axios.get(`http://localhost:3000/server/master/update/updateapar/${this.$route.params.id}`)
        .then(res => {
            const result = res
            this.apars = result.data[0]
        })
        .catch(err=>{
            console.log(err)
        }) 
        
    }
}
</script>

<style>

</style>