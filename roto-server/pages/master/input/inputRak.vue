<template>
<div class="bg-bg-gen min-h-screen">
    <InputHeader item="rak"/>
    <section class="container mx-auto mt-8">
    <form action="/server/master/inputrak" method="post" class="w-3/4">
        <div >
            <div class="grid grid-cols-3 grid-rows-4">
                <div class="mb-4 has-tooltip">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan tipe rak</span>

                    <label for="tipeRak" class="block mb-2 text-sm">tipe rak</label>
                    <input type="text" v-model="inputRak.tipeRak" name="tipeRak" id="tipeRak" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4 has-tooltip">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan tipe pintu</span>

                    <label for="tipePintu" class="block mb-2 text-sm">tipe pintu</label>
                    <input type="text" v-model="inputRak.tipePintu" name="tipePintu" id="tipePintu" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4 has-tooltip">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan nama produk</span>

                    <label for="namaProduk" class="block mb-2 text-sm">nama produk</label>
                    <input type="text" v-model="inputRak.namaProduk" name="namaProduk" id="namaProduk" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4 has-tooltip">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan ukuran rak</span>

                    <label for="dimensi" class="block mb-2 text-sm">dimensi</label>
                    <input type="text" v-model="inputRak.dimensi" name="dimensi" id="dimensi" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4 has-tooltip">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan berat rak</span>

                    <label for="berat" class="block mb-2 text-sm">berat</label>
                    <input type="text" v-model="inputRak.berat" name="berat" id="berat" class="p-2 w-72 rounded-lg outline-none">
                    <input type="text" value="KG" class="p-2 rounded">
                </div>
                <div class="mb-4 has-tooltip">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan tahun masuk</span>

                    <label for="tahun" class="block mb-2 text-sm">tahun</label>
                    <input type="date" v-model="inputRak.tahun" name="tahun" id="tahun" class="p-2 w-72 rounded-lg outline-none">
                </div>
                
            </div>
        </div>
        <button class="bg-blue-400 shadow-md rounded-lg w-28 h-10 mt-8" type="submit">kirim</button>
    </form>
</section>
</div>
</template>

<script>
export default {
    data(){
        return{
            tahun:"",
            berat:"",
            inputRak : {
                tipeRak:"",
                tipePintu : "",
                namaProduk : "",
                dimensi:"",
                berat : "",
                tahun : "",
            }
        }
    }

}
</script>

<style>

</style>