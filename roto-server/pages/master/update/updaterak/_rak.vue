<template>
<div class="bg-bg-gen min-h-screen">
    <InputHeader item="rak"/>
    <section class="container mx-auto mt-8">
    <form action="/server/master/rak/update/updaterak" method="post"  class="w-11/12">
        <div >
            <input type="hidden" name="id" :value="raks.id">
            <div class="grid grid-cols-3 grid-rows-4">
                <div class="mb-4">
                    <label for="tipeRak" class="block mb-2 text-sm">tipe rak</label>
                    <input type="text" :value="raks.tipe_rak" name="tipeRak" id="tipeRak" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4">
                    <label for="tipePintu" class="block mb-2 text-sm">tipe pintu</label>
                    <input type="text" :value="raks.tipe_pintu" name="tipePintu" id="tipePintu" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4">
                    <label for="namaProduk" class="block mb-2 text-sm">nama produk</label>
                    <input type="text" :value="raks.nama_produk" name="namaProduk" id="namaProduk" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4">
                    <label for="dimensi" class="block mb-2 text-sm">dimensi</label>
                    <input type="text" :value="raks.dimensi" name="dimensi" id="dimensi" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4">
                    <label for="berat" class="block mb-2 text-sm">berat</label>
                    <input type="date" :value="raks.berat" name="berat" id="berat" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4">
                    <label for="tahun" class="block mb-2 text-sm">tahun</label>
                    <input type="date" :value="raks.tahun" name="tahun" id="tahun" class="p-2 w-72 rounded-lg outline-none">
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
            raks:'',
        }
    },
    mounted(){
        axios.get(`http://localhost:3000/server/master/update/updaterak/${this.$route.params.id}`)
        .then(res => {
            const result = res
            this.raks = result.data[0]
        })
        .catch(err=>{
            console.log(err)
        }) 
        
    }
}
</script>

<style>

</style>