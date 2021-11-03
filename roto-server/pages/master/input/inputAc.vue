<template>
<div class="bg-bg-gen min-h-screen">
    <InputHeader item="AC"/>
    <section class="container mx-auto mt-8">
    <form action="/server/master/inputac" method="post" class="w-11/12">
        <div>
            <div class="grid grid-cols-3 grid-rows-4">
                <div class="mb-4 has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan nama merek AC</span>

                    <label for="merek" class="block mb-2 text-sm">merek</label>
                    <input type="text" v-model="merek" name="merek" id="merek" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4 has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan model barang</span>

                    <label for="model" class="block mb-2 text-sm">model</label>
                    <input type="text" v-model="model" name="model" id="model" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4 has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan sumber daya listrik</span>

                    <label for="sumberDayaListrik" class="block mb-2 text-sm">sumber daya listrik</label>
                    <input type="text" v-model="sumberDayaListrik" name="sumberDayaListrik" id="sumberDayaListrik" class="p-2 w-72 rounded-lg outline-none">
                </div>
                 <div class="mb-4 has-tooltip">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan dimensi AC</span>

                    <label for="dimensi" class="block mb-2 text-sm">dimensi</label>
                    <input type="text" v-model="dimensi" name="dimensi" id="dimensi" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4 has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan konsumsi daya</span>

                    <label for="konsumsiDaya" class="block mb-2 text-sm">konsumsi daya</label>
                    <input type="text" v-model="konsumsiDaya" name="konsumsiDaya" id="konsumsiDaya" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4 has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan kapasitas pendingin</span>

                    <label for="kapasitasPendingin" class="block mb-2 text-sm">kapasitas pendingin</label>
                    <input type="text" v-model="kapasitasPendingin" name="kapasitasPendingin" id="kapasitasPendingin" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4 has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan tahun masuk AC</span>

                    <label for="tahun" class="block mb-2 text-sm">tahun</label>
                    <input type="date" v-model="tahun" name="tahun" id="tahun" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4 has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan batas garansi</span>

                    <label for="garansi" class="block mb-2 text-sm">garansi</label>
                    <input type="date" value="" name="garansi" id="garansi" class="p-2 w-72 rounded-lg outline-none">
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
        return {
            item : "UPS",
        }
    }

}
</script>

<style>

</style>