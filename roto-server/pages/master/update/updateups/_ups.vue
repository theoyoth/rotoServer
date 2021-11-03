<template>
  <div class="bg-bg-gen min-h-screen">
    <InputHeader item="ups"/>
    <section class="container mx-auto mt-8">
    <form action="/server/master/ups/update/updateups" method="post" class="w-11/12">
        <div >
            <input type="hidden" name="id" :value="upss.id">
            <div class="grid grid-cols-3 grid-rows-4">
                <div class="mb-4">
                    <label for="upsCriticalLoad" class="block mb-2 text-sm">ups critical load</label>
                    <input type="text" :value="upss.ups_critical_load" name="upsCriticalLoad" id="upsCriticalLoad" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4">
                    <label for="upsCriticalTemperature" class="block mb-2 text-sm">ups critical temperature</label>
                    <input type="text" :value="upss.ups_critical_temperature" name="upsCriticalTemperature" id="upsCriticalTemperature" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4">
                    <label for="upsCriticalCapacity" class="block mb-2 text-sm">up critical capacity</label>
                    <input type="text" :value="upss.ups_critical_capacity" name="upsCriticalCapacity" id="upsCriticalCapacity" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4">
                    <label for="nomorSerial" class="block mb-2 text-sm">nomor serial</label>
                    <input type="text" :value="upss.nomor_serial" name="nomorSerial" id="nomorSerial" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4">
                    <label for="namaSistem" class="block mb-2 text-sm">nama sistem</label>
                    <input type="text" :value="upss.nama_sistem" name="namaSistem" id="namaSistem" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4">
                    <label for="model" class="block mb-2 text-sm">model</label>
                    <input type="text" :value="upss.model" name="model" id="model" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4">
                    <label for="manufaktur" class="block mb-2 text-sm">manufaktur</label>
                    <input type="text" :value="upss.manufaktur" name="manufaktur" id="manufaktur" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4">
                    <label for="peringkatTegangan" class="block mb-2 text-sm">peringkat tegangan</label>
                    <input type="text" :value="upss.peringkat_tegangan" name="peringkatTegangan" id="peringkatTegangan" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4">
                    <label for="peringkatFrekuensi" class="block mb-2 text-sm">peringkat frekuensi</label>
                    <input type="text" :value="upss.peringkat_frekuensi" name="peringkatFrekuensi" id="peringkatFrekuensi" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4">
                    <label for="peringkatTeganganBaterai" class="block mb-2 text-sm">peringkat tegangan baterai</label>
                    <input type="text" :value="upss.peringkat_tegangan_baterai" name="peringkatTeganganBaterai" id="peringkatTeganganBaterai" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4">
                    <label for="tahun" class="block mb-2 text-sm">tahun</label>
                    <input type="date" :value="$moment(upss.tahun).format('YYYY-MM-DD')" name="tahun" id="tahun" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4">
                    <label for="garansi" class="block mb-2 text-sm">garansi</label>
                    <input type="date" :value="$moment(upss.garansi).format('YYYY-MM-DD')" name="garansi" id="garansi" class="p-2 w-72 rounded-lg outline-none">
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
            upss:'',
        }
    },
    mounted(){
        axios.get(`http://localhost:3000/server/master/update/updateups/${this.$route.params.id}`)
        .then(res => {
            const result = res
            this.upss = result.data[0]
        })
        .catch(err=>{
            console.log(err)
        }) 
        
    }
}
</script>

<style>

</style>