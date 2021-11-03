<template>
  <div class="bg-bg-gen min-h-screen">
    <InputHeader item="AC"/>
    <section class="container mx-auto mt-8">
    <form action="/server/master/ac/update/updateac" method="post" class="w-11/12">
        <div>
            <input type="hidden" name="id" :value="acs.id">
            <div class="grid grid-cols-3 grid-rows-4">
                <div class="mb-4">
                    <label for="merek" class="block mb-2 text-sm">merek</label>
                    <input type="text" :value="acs.merek" name="merek" id="merek" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4">
                    <label for="model" class="block mb-2 text-sm">model</label>
                    <input type="text" :value="acs.model" name="model" id="model" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4">
                    <label for="sumberDayaListrik" class="block mb-2 text-sm">sumber daya listrik</label>
                    <input type="text" :value="acs.sumber_daya_listrik" name="sumberDayaListrik" id="sumberDayaListrik" class="p-2 w-72 rounded-lg outline-none">
                </div>
                 <div class="mb-4">
                    <label for="dimensi" class="block mb-2 text-sm">dimensi</label>
                    <input type="text" :value="acs.dimensi" name="dimensi" id="dimensi" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4">
                    <label for="konsumsiDaya" class="block mb-2 text-sm">konsumsi daya</label>
                    <input type="text" :value="acs.konsumsi_daya_listrik" name="konsumsiDayaListrik" id="konsumsiDaya" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4">
                    <label for="kapasitasPendingin" class="block mb-2 text-sm">kapasitas pendingin</label>
                    <input type="text" :value="acs.kapasitas_pendingin" name="kapasitasPendingin" id="kapasitasPendingin" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4">
                    <label for="tahun" class="block mb-2 text-sm">tahun</label>
                    <input type="date" :value="$moment(acs.tahun).format('YYYY-MM-DD')" name="tahun" id="tahun" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4">
                    <label for="garansi" class="block mb-2 text-sm">garansi</label>
                    <input type="date" :value="$moment(acs.garansi).format('YYYY-MM-DD')" name="garansi" id="garansi" class="p-2 w-72 rounded-lg outline-none">
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
            acs:'',
        }
    },
    mounted(){
        axios.get(`http://localhost:3000/server/master/update/updateac/${this.$route.params.id}`)
        .then(res => {
            const result = res
            this.acs = result.data[0]
        })
        .catch(err=>{
            console.log(err)
        }) 
        
    }
}
</script>

<style>

</style>