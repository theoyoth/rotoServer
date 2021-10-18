<template>
    <div class="container mx-auto py-5">
        <header class="flex justify-between">
            <div @click="$router.back()">
            <NuxtLink to="" class="flex justify-between items-center">
                <div class="bg-blue-400 w-8 h-8 rounded-full flex items-center justify-center">
                    <font-awesome-icon :icon="['fas','arrow-left']" class="text-white" />
                </div>
                <p class="font-medium text-xl ml-2">Kembali</p>
            </NuxtLink>
            </div>
            <!-- <p class="text-xl font-medium" v-show="ambilbarang">formulir input data {{ambilbarang}}</p>
            <p class="text-xl font-medium" v-show="gantibarang">formulir input data {{gantibarang}}</p>
            <p class="text-xl font-medium" v-show="tambahbarang">formulir input data {{tambahbarang}}</p>
            <p class="text-xl font-medium" v-show="dokumen">formulir input data {{dokumen}}</p>
            <p class="text-xl font-medium" v-show="maintenance">formulir input data {{maintenance}}</p> -->
            <p class="text-xl font-medium" v-show="!map">formulir input data {{dokumen}}</p>
        </header>
    </div>
</template>

<script>
export default {
    props:['ambilbarang','gantibarang','tambahbarang','dokumen','maintenance','map']
}
</script>

<style>

</style>