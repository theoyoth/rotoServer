<template>
<div class="bg-bg-gen min-h-screen">
    <InputHeader item="rak"/>
    <section class="container mx-auto mt-8">
    <form action="" method="post" class="w-3/4">
        <div >
            <div class="grid grid-cols-3 grid-rows-4">
                <div class="mb-4">
                    <label for="tipeRak" class="block mb-2 text-sm">tipe rak</label>
                    <input type="text" v-model="tipeRak" name="tipeRak" id="tipeRak" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4">
                    <label for="tipePintu" class="block mb-2 text-sm">tipe pintu</label>
                    <input type="text" v-model="model" name="tipePintu" id="tipePintu" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4">
                    <label for="namaProduk" class="block mb-2 text-sm">nama produk</label>
                    <input type="text" v-model="namaProduk" name="namaProduk" id="namaProduk" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4">
                    <label for="dimensi" class="block mb-2 text-sm">dimensi</label>
                    <input type="text" v-model="dimensi" name="dimensi" id="dimensi" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4">
                    <label for="berat" class="block mb-2 text-sm">berat</label>
                    <input type="text" v-model="berat" name="berat" id="berat" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4">
                    <label for="tahun" class="block mb-2 text-sm">tahun</label>
                    <input type="text" v-model="tahun" name="tahun" id="tahun" class="p-2 w-72 rounded-lg outline-none">
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