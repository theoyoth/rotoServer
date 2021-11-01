<template>
<div class="bg-bg-gen min-h-screen">
    <InputHeader item="ups"/>
    <section class="container mx-auto mt-8">
    <form action="/server/master/inputups" method="post" class="w-3/4">
        <div >
            <div class="grid grid-cols-3 grid-rows-4">
                <div class="mb-4 has-tooltip">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan beban kritis ups-nya</span>

                    <label for="upsCriticalLoad" class="block mb-2 text-sm">ups critical load</label>
                    <input type="text" v-model="upsCriticalLoad" name="upsCriticalLoad" id="upsCriticalLoad" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4 has-tooltip">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan suhu kritis-nya</span>

                    <label for="upsCriticalTemperature" class="block mb-2 text-sm">ups critical temperature</label>
                    <input type="text" v-model="upsCriticalTemperature" name="upsCriticalTemperature" id="upsCriticalTemperature" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4 has-tooltip">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan kapasitas kritis</span>

                    <label for="upsCriticalCapacity" class="block mb-2 text-sm">ups critical capacity</label>
                    <input type="text" v-model="upsCriticalCapacity" name="upsCriticalCapacity" id="upsCriticalCapacity" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4 has-tooltip">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan nomor serial ups-nya</span>

                    <label for="nomorSerial" class="block mb-2 text-sm">nomor serial</label>
                    <input type="text" v-model="nomorSerial" name="nomorSerial" id="nomorSerial" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4 has-tooltip">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan nama sistem ups-nya</span>

                    <label for="namaSistem" class="block mb-2 text-sm">nama sistem</label>
                    <input type="text" v-model="namaSistem" name="namaSistem" id="namaSistem" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4 has-tooltip">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan model ups</span>

                    <label for="model" class="block mb-2 text-sm">model</label>
                    <input type="text" v-model="model" name="model" id="model" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4 has-tooltip">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan manufaktur ups</span>

                    <label for="manufaktur" class="block mb-2 text-sm">manufaktur</label>
                    <input type="text" v-model="manufaktur" name="manufaktur" id="manufaktur" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4 has-tooltip">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan peringkat tegangan atau voltage rating</span>

                    <label for="peringkatTegangan" class="block mb-2 text-sm">peringkat tegangan</label>
                    <input type="text" v-model="peringkatTegangan" name="peringkatTegangan" id="peringkatTegangan" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4 has-tooltip">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan peringkat frekuensi atau rating frequency</span>

                    <label for="peringkatFrekuensi" class="block mb-2 text-sm">peringkat frekuensi</label>
                    <input type="text" v-model="peringkatFrekuensi" name="peringkatFrekuensi" id="peringkatFrekuensi" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4 has-tooltip">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan peringkat tegangan baterai atau voltage rating battery</span>

                    <label for="peringkatTeganganBaterai" class="block mb-2 text-sm">peringkat tegangan baterai</label>
                    <input type="text" v-model="peringkatTeganganBaterai" name="peringkatTeganganBaterai" id="peringkatTeganganBaterai" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4 has-tooltip">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan tahun masuk barang</span>

                    <label for="tahun" class="block mb-2 text-sm">tahun</label>
                    <input type="date" v-model="tahun" name="tahun" id="tahun" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4 has-tooltip">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan batas garansi</span>

                    <label for="garansi" class="block mb-2 text-sm">garansi</label>
                    <input type="date" v-model="garansi" name="garansi" id="garansi" class="p-2 w-72 rounded-lg outline-none">
                </div>
                
            </div>
        </div>
        <button class="bg-blue-400 shadow-md rounded-lg w-28 h-10 mt-8">kirim</button>
    </form>
</section>
</div>
</template>

<script>
export default {
    data(){
        return{
            garansi : "",
            tahun : "",
            model : "",
            upsCriticalLoad : "",
            upsCriticalTemperature : "",
            upsCriticalCapacity : "",
            peringkatTegangan : "",
            peringkatFrekuensi : "",
            peringkatTeganganBaterai : "",
            manufaktur : "",
            nomorSerial : "",
            namaSistem : "",
        }
    }

}
</script>

<style>

</style>