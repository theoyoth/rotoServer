<template>
  <section class="bg-hero h-screen grid place-items-center">
    <div class="mx-auto grid grid-cols-2 place-items-center bg-gr-white w-11/12 h-5/6 rounded-xl">
        <div class="container p-4 flex flex-col items-center justify-between h-1/2">
            <h1 v-if="error.statusCode === 404" class="text-4xl font-semibold text-center">Tidak dapat menemukan halaman yang di cari</h1>
            <h1 v-else>masalah terjadi</h1>
            <NuxtLink to="/" class="w-36 h-9 bg-blue-400 py-2 px-4 rounded-lg text-center">
              <p class="text-sm font-medium">Homepage</p>
            </NuxtLink>
        </div>
        <div class="container p-4"></div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['error'],
  layout: 'error'
}
</script>