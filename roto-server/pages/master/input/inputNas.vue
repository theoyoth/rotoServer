<template>
<div class="bg-bg-gen min-h-screen">
    <InputHeader item="NAS"/>
    <section class="container mx-auto mt-8">
    <form action="/server/master/inputnas" method="post" class="w-3/4">
        <div >
            <div class="grid grid-cols-3 grid-rows-4">
                <div class="mb-4">
                    <label for="merek" class="block mb-2 text-sm">merek</label>
                    <input type="text" v-model="merek" name="merek" id="merek" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4">
                    <label for="model" class="block mb-2 text-sm">model</label>
                    <input type="text" v-model="model" name="model" id="model" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4">
                    <label for="tipe" class="block mb-2 text-sm">tipe</label>
                    <input type="text" v-model="tipe" name="tipe" id="tipe" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4">
                    <label for="storage" class="block mb-2 text-sm">storage</label>
                    <input type="text" v-model="storage" name="storage" id="storage" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4">
                    <label for="processor" class="block mb-2 text-sm">processor</label>
                    <input type="text" v-model="processor" name="processor" id="processor" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4">
                    <label for="cpu" class="block mb-2 text-sm">cpu</label>
                    <input type="text" v-model="cpu" name="cpu" id="cpu" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4">
                    <label for="raid" class="block mb-2 text-sm">raid</label>
                    <input type="text" v-model="raid" name="raid" id="raid" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4">
                    <label for="garansi" class="block mb-2 text-sm">garansi</label>
                    <input type="text" v-model="garansi" name="garansi" id="garansi" class="p-2 w-72 rounded-lg outline-none">
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