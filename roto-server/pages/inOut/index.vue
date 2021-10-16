<template>
<div class="bg-hero h-screen">
    <InputHeader/>
    <section class="grid place-items-center h-3/4">
        <div class="grid grid-cols-3 h-3/4 w-4/5 place-items-center">
            <nuxt-link to="/inout/tambahbarang" class="master-menu h-36 w-60 rounded-xl relative backdrop-blur-md bg-opacity-10 flex justify-center items-center bg-gr-white transform hover:translate-y-1 hover:shadow-lg transition ease-in-out duration-300">
                <h1 class="font-medium">Tambah barang</h1>
                <font-awesome-icon :icon="['fas','plus']" class="absolute top-4 left-4" />
            </nuxt-link>
            <nuxt-link to="/inout/ambilbarang" class="maintenance-menu h-36 w-60 rounded-xl relative backdrop-blur-md bg-opacity-10 flex justify-center items-center bg-gr-white transform hover:translate-y-1 hover:shadow-lg transition ease-in-out duration-300">
                <h1 class="font-medium">Ambil barang</h1>
                <font-awesome-icon :icon="['fas','file-medical']" class="absolute top-4 left-4"/>
            </nuxt-link>
            <nuxt-link to="/inout/gantibarang" class="in/out-menu h-36 w-60 rounded-xl relative backdrop-blur-md bg-opacity-10 flex justify-center items-center bg-gr-white transform hover:translate-y-1 hover:shadow-lg transition ease-in-out duration-300">
                <h1 class="font-medium">Ganti barang</h1>
                <font-awesome-icon :icon="['fas','people-carry']" class="absolute top-4 left-4"  />
            </nuxt-link>

        </div>
    </section>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>