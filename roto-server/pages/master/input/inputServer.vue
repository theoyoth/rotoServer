<template>
<div class="bg-bg-gen min-h-screen">
    <InputHeader item="server"/>
    <section class="container mx-auto mt-8">
    <form action="/server/master/inputserver" method="post" class="w-11/12">
        <div >
            <div class="grid grid-cols-3 grid-rows-4">
                <div class="mb-4 has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan nama produk</span>
                   
                    <label for="produk" class="block mb-2 text-sm">produk</label>
                    <input type="text" name="produk" id="produk" class="p-2 w-72 rounded-lg outline-none" required>
                </div>
                <div class="mb-4 has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan nama merek</span>
                    <label for="merek" class="block mb-2 text-sm">merek</label>
                    <input type="text" name="merek" id="merek" class="p-2 w-72 rounded-lg outline-none" required>
                </div>
                <div class="mb-4 has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan nama modelnya</span>
                    <label for="model" class="block mb-2 text-sm">model</label>
                    <input type="text" name="model" id="model" class="p-2 w-72 rounded-lg outline-none" required>
                </div>                
                <div class="mb-4 has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-24">masukan jenis processor-nya</span>
                    <label for="processor" class="block mb-2 text-sm">processor</label>
                    <input type="text" name="processor" id="processor" class="p-2 w-72 rounded-lg outline-none" required>
                </div>
                <div class="mb-4 has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan jumlah memori</span>
                    <label for="memori" class="block mb-2 text-sm">memori</label>
                    <input type="text" name="memori" id="memori" class="p-2 w-72 rounded-lg outline-none" required >
                    <select name="kapasitas" id="kapasitas" class="p-2 rounded">
                        <option value="gb">GB</option>
                        <option value="tb">TB</option>
                    </select>
                </div>
                <div class="mb-4 has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-20">masukan jumlah internal storage</span>
                    <label for="internalStorage" class="block mb-2 text-sm">internal Storage</label>
                    <input type="text" name="internalStorage" id="internalStorage" class="p-2 w-72 rounded-lg outline-none" required>
                    <select name="kapasitas" id="kapasitas" class="p-2 rounded">
                        <option value="gb">GB</option>
                        <option value="tb">TB</option>
                    </select>
                </div>
                <div class="mb-4 has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-20">masukan nama network controller</span>
                    <label for="netwokController" class="block mb-2 text-sm">network Controller</label>
                    <input type="text" name="networkController" id="netwokController" class="p-2 w-72 rounded-lg outline-none" required>
                </div>
                <div class="mb-4 has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan jumlah storage</span>
                    <label for="storage" class="block mb-2 text-sm">Storage</label>
                    <input type="text" name="storage" id="storage" class="p-2 w-72 rounded-lg outline-none" required>
                    <select name="kapasitas" id="kapasitas" class="p-2 rounded">
                        <option value="gb">GB</option>
                        <option value="tb">TB</option>
                    </select>
                </div>
                <div class="mb-4 has-tooltip relative">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-20">masukan besar sumber daya listrik</span>
                    <label for="sumberDayaListrik" class="block mb-2 text-sm">power supply</label>
                    <input type="text" name="sumberDayaListrik" id="sumberDayaListrik" class="p-2 w-72 rounded-lg outline-none" required>
                    <input type="text" value="watt" readonly="readonly" class="absolute w-14 right-28 bottom-1 p-1 rounded">
                </div>
                <div class="mb-4 has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-24">masukan tahun dimasukkan</span>
                    <label for="tahun" class="block mb-2 text-sm">tahun</label>
                    <input type="date" name="tahun" id="tahun" class="p-2 w-72 rounded-lg outline-none" required>
                </div>
                <div class="mb-4 has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-20">masukan tahun garansi berakhir</span>
                    <label for="garansi" class="block mb-2 text-sm">garansi</label>
                    <input type="date" name="garansi" id="garansi" class="p-2 w-72 rounded-lg outline-none" required>
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
            item : "server",
            garansi : "",
        }
    }
}
</script>

<style>

</style>