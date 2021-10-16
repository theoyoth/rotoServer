<template>
<div class="bg-bg-gen min-h-screen">
    <InputHeader gantibarang="ganti barang"/>
    <section class="container mx-auto mt-8">
    <form action="" method="post" id="formbarang" class="w-3/4">
        <div >
            <div class="grid grid-cols-3">
                <div class="mb-4">
                    <label for="nama" class="block mb-2 text-sm">nama pengganti</label>
                    <input type="text" v-model="nama" name="nama" id="nama" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4">
                    <label for="tanggal" class="block mb-2 text-sm">tanggal</label>
                    <input type="date" v-model="tanggal" name="tanggal" id="tanggal" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4">
                    <label for="namaBarangBaru" class="block mb-2 text-sm">nama barang baru</label>
                    <input type="text" v-model="namaBarangBaru" name="namaBarangBaru" id="namaBarangBaru" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4">
                    <label for="namaBarangLama" class="block mb-2 text-sm">nama barang lama</label>
                    <input type="text" v-model="namaBarangLama" name="namaBarangLama" id="namaBarangLama" class="p-2 w-72 rounded-lg outline-none">
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
                <div class="mb-4">
                    <label for="keterangan" class="block mb-2 text-sm">keterangan</label>
                    <textarea rows="4" form="formbarang" type="text" v-model="keterangan" name="keterangan" id="keterangan" class="p-2 w-72 rounded-lg outline-none"></textarea>
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