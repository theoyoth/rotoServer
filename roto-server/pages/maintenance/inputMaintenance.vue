<template>
<div class="bg-bg-gen min-h-screen">
    <InputHeader maintenance="maintenance"/>
    <section class="container mx-auto mt-8">
    <form action="" method="post" class="w-3/4">
        <div >
            <div class="grid grid-cols-3 grid-rows-4">
                <div class="mb-4">
                    <label for="nama" class="block mb-2 text-sm">nama</label>
                    <input type="text" v-model="nama" name="nama" id="nama" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4">
                    <label for="tanggal" class="block mb-2 text-sm">tanggal</label>
                    <input type="date" v-model="tanggal" name="tanggal" id="tanggal" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4">
                    <label for="suhu" class="block mb-2 text-sm">suhu</label>
                    <input type="text" v-model="suhu" name="suhu" id="suhu" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4">
                    <label for="kelembapan" class="block mb-2 text-sm">kelembapan</label>
                    <input type="text" v-model="kelembapan" name="kelembapan" id="kelembapan" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4">
                    <label for="ac" class="block mb-2 text-sm">AC</label>
                    <input type="text" v-model="ac" name="ac" id="ac" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4">
                    <label for="ups" class="block mb-2 text-sm">UPS</label>
                    <input type="text" v-model="ups" name="ups" id="ups" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4">
                    <label for="baterai" class="block mb-2 text-sm">baterai</label>
                    <input type="text" v-model="baterai" name="baterai" id="baterai" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4">
                    <label for="network" class="block mb-2 text-sm">network</label>
                    <input type="text" v-model="network" name="network" id="network" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4">
                    <label for="server" class="block mb-2 text-sm">server</label>
                    <input type="text" v-model="server" name="server" id="server" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4">
                    <label for="keterangan" class="block mb-2 text-sm">keterangan</label>
                    <input type="text" v-model="keterangan" name="keterangan" id="keterangan" class="p-2 w-72 rounded-lg outline-none">
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