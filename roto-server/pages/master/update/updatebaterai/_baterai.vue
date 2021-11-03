<template>
  <div class="bg-bg-gen min-h-screen">
    <InputHeader item="baterai"/>
    <section class="container mx-auto mt-8">
    <form action="/server/master/baterai/update/updatebaterai" method="post" class="w-11/12">
        <div >
            <input type="hidden" name="id" :value="baterais.id">
            <div class="grid grid-cols-3 grid-rows-4">
                <div class="mb-4">
                    <label for="accu" class="block mb-2 text-sm">accu</label>
                    <input type="text" :value="baterais.accu" name="accu" id="accu" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4">
                    <label for="kuantitas" class="block mb-2 text-sm">kuantitas</label>
                    <input type="text" :value="baterais.kuantitas" name="kuantitas" id="kuantitas" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4">
                    <label for="tegangan" class="block mb-2 text-sm">tegangan</label>
                    <input type="text" :value="baterais.voltage" name="tegangan" id="tegangan" class="p-2 w-72 rounded-lg outline-none">
                </div>

                <div class="mb-4">
                    <label for="tahun" class="block mb-2 text-sm">tahun</label>
                    <input type="date" :value="$moment(baterais.tahun).format('YYYY-MM-DD')" name="tahun" id="tahun" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4">
                    <label for="garansi" class="block mb-2 text-sm">garansi</label>
                    <input type="date" :value="$moment(baterais.garansi).format('YYYY-MM-DD')" name="garansi" id="garansi" class="p-2 w-72 rounded-lg outline-none">
                </div>
                
            </div>
        </div>
        <button class="bg-blue-400 shadow-md rounded-lg w-28 h-10 mt-8">ubah</button>
    </form>
</section>
</div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
        return{
            baterais:'',
        }
    },
    mounted(){
        axios.get(`http://localhost:3000/server/master/update/updatebaterai/${this.$route.params.id}`)
        .then(res => {
            const result = res
            this.baterais = result.data[0]
        })
        .catch(err=>{
            console.log(err)
        }) 
        
    }
}
</script>

<style>

</style>