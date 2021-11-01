<template>
<div class="bg-bg-gen min-h-screen">
    <InputHeader item="NAS"/>
    <section class="container mx-auto mt-8">
    <form action="/server/master/inputnas" method="post" class="w-3/4">
        <div >
            <div class="grid grid-cols-3 grid-rows-4">
                <div class="mb-4 has-tooltip">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan nama merek</span>

                    <label for="merek" class="block mb-2 text-sm">merek</label>
                    <input type="text" v-model="merek" name="merek" id="merek" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4 has-tooltip">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan nama model</span>

                    <label for="model" class="block mb-2 text-sm">model</label>
                    <input type="text" v-model="model" name="model" id="model" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4 has-tooltip">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan tipe NAS</span>

                    <label for="tipe" class="block mb-2 text-sm">tipe</label>
                    <input type="text" v-model="tipe" name="tipe" id="tipe" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4 has-tooltip">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan jumlah storage</span>

                    <label for="storage" class="block mb-2 text-sm">storage</label>
                    <input type="text" v-model="storage" name="storage" id="storage" class="p-2 w-72 rounded-lg outline-none">
                    <select name="storage" id="storage" class="p-2 rounded">
                        <option value="gb">GB</option>
                        <option value="tb">TB</option>
                    </select>
                </div>
                <div class="mb-4 has-tooltip">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan nama processor</span>

                    <label for="processor" class="block mb-2 text-sm">processor</label>
                    <input type="text" v-model="processor" name="processor" id="processor" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4 has-tooltip">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan nama cpu</span>

                    <label for="cpu" class="block mb-2 text-sm">cpu</label>
                    <input type="text" v-model="cpu" name="cpu" id="cpu" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4 has-tooltip">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan raid</span>

                    <label for="raid" class="block mb-2 text-sm">raid</label>
                    <input type="text" v-model="raid" name="raid" id="raid" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4 has-tooltip">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan tahun masuk NAS</span>

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

}
</script>

<style>

</style>