<template>
<div class="bg-bg-gen min-h-screen">
    <InputHeader item="server"/>
    <section class="container mx-auto mt-8">
    <form action="" method="post" class="w-3/4">
        <div >
            <div class="grid grid-cols-3 grid-rows-4">
                <div class="mb-4">
                    <label for="produk" class="block mb-2 text-sm">{{server.produk}}</label>
                    <input type="text" v-model="produk" name="produk" id="produk" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4">
                    <label for="model" class="block mb-2 text-sm">{{server.model}}</label>
                    <input type="text" v-model="model" name="model" id="model" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4">
                    <label for="merek" class="block mb-2 text-sm">{{server.merek}}</label>
                    <input type="text" v-model="merek" name="merek" id="merek" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4">
                    <label for="processor" class="block mb-2 text-sm">{{server.processor}}</label>
                    <input type="text" v-model="processor" name="processor" id="processor" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4">
                    <label for="memori" class="block mb-2 text-sm">{{server.memori}}</label>
                    <input type="text" v-model="memori" name="memori" id="memori" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4">
                    <label for="internalStorage" class="block mb-2 text-sm">{{server.internalStorage}}</label>
                    <input type="text" v-model="internalStorage" name="internalStorage" id="internalStorage" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4">
                    <label for="netwokController" class="block mb-2 text-sm">{{server.networkController}}</label>
                    <input type="text" v-model="netwokController" name="netwokController" id="netwokController" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4">
                    <label for="eksternalStorage" class="block mb-2 text-sm">{{server.eksternalStorage}}</label>
                    <input type="text" v-model="eksternalStorage" name="eksternalStorage" id="eksternalStorage" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4">
                    <label for="eksternalStorage" class="block mb-2 text-sm">{{server.eksternalStorage}}</label>
                    <input type="text" v-model="eksternalStorage" name="eksternalStorage" id="eksternalStorage" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4">
                    <label for="powerSupply" class="block mb-2 text-sm">{{server.powerSupply}}</label>
                    <input type="text" v-model="powerSupply" name="powerSupply" id="powerSupply" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4">
                    <label for="tahun" class="block mb-2 text-sm">{{server.tahun}}</label>
                    <input type="text" v-model="tahun" name="tahun" id="tahun" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4">
                    <label for="garansi" class="block mb-2 text-sm">{{server.garansi}}</label>
                    <input type="text" v-model="garansi" name="garansi" id="garansi" class="p-2 w-72 rounded-lg outline-none">
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
            server : {
                produk : "produk",
                model : "model",
                merek : "merek",
                processor : "processor",
                memori : "memori",
                internalStorage : "internal storage",
                networkController : "network controller",
                eksternalStorage : "eksternal storage",
                powerSupply : "power supply",
                tahun : "tahun",
                garansi : "garansi",
            },
        }
    }

}
</script>

<style>

</style>