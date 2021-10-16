<template>
<div class="bg-bg-gen min-h-screen">
    <InputHeader dokumen="dokumen"/>
    <section class="container mx-auto w-1/2 mt-8 grid place-items-center">
    <form action="" method="post" class="text-center">
        <div class="mb-4">
            <label for="file" class="block mb-2 text-xl font-semibold">Pilih file</label>
            <input type="file" name="file" id="file" class="p-2 w-72 rounded-lg">
        </div>
        <button class="bg-blue-400 shadow-md rounded-lg px-8 py-2 transform hover:-translate-y-px shadow-lg hover:shadow-none transition ease-in duration-200">simpan</button>
    </form>
    </section>
</div>
</template>

<script>
export default {

}
</script>

<style lang=scss>
</style>