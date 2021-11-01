<template>
<div class="bg-bg-gen min-h-screen">
    <InputHeader item="baterai"/>
    <section class="container mx-auto mt-8">
    <form action="/server/master/inputbaterai" method="post" class="w-11/12">
        <div >
            <div class="grid grid-cols-3 grid-rows-4">
                <div class="mb-4 has-tooltip">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan accu baterai</span>

                    <label for="accu" class="block mb-2 text-sm">accu</label>
                    <input type="text" v-model="accu" name="accu" id="accu" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4 has-tooltip">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan jumlah baterai yang di input</span>

                    <label for="kuantitas" class="block mb-2 text-sm">kuantitas</label>
                    <input type="text" v-model="kuantitas" name="kuantitas" id="kuantitas" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4 has-tooltip">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan tegangan baterai</span>

                    <label for="tegangan" class="block mb-2 text-sm">tegangan</label>
                    <input type="text" v-model="tegangan" name="tegangan" id="tegangan" class="p-2 w-72 rounded-lg outline-none">
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
            accu : "",
            kuantitas:"",
            tegangan:"",
            tahun: "",
            garansi : "",
        }
    }

}
</script>

<style>

</style>