<template>
<div class="bg-bg-gen min-h-screen">
    <InputHeader tambahbarang="tambah barang"/>
    <section class="container mx-auto mt-8">
    <form action="" method="post" class="w-3/4">
        <div >
            <div class="grid grid-cols-3 grid-rows-4">
                <div class="mb-4">
                    <label for="nama" class="block mb-2 text-sm">nama penambah</label>
                    <input type="text" v-model="nama" name="nama" id="nama" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4">
                    <label for="tanggal" class="block mb-2 text-sm">tanggal</label>
                    <input type="date" v-model="tanggal" name="tanggal" id="tanggal" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4">
                    <label for="namaBarang" class="block mb-2 text-sm">nama barang</label>
                    <input type="text" v-model="namaBarang" name="namaBarang" id="namaBarang" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4">
                    <label for="kuantitas" class="block mb-2 text-sm">kuantitas</label>
                    <input type="text" v-model="kuantitas" name="kuantitas" id="kuantitas" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4">
                    <label for="kepentingan" class="block mb-2 text-sm">kepentingan</label>
                    <input type="text" v-model="kepentingan" name="kepentingan" id="kepentingan" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4">
                    <label for="penganggungJawab" class="block mb-2 text-sm">penanggung jawab</label>
                    <input type="text" v-model="penganggungJawab" name="penganggungJawab" id="penganggungJawab" class="p-2 w-72 rounded-lg outline-none">
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