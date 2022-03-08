<template>
  <section class="bg-gray-200 h-screen grid place-items-center w-widthContent ml-auto">
    <div class="mx-auto bg-gray-100 w-widthContentField h-5/6 rounded-xl shadow-lg">
        <div class="text-center w-full flex flex-col items-center">
            <div v-if="error.statusCode === 404" class="text-center">
              <div class="flex">
              <h1 class="text-main text-gray-200 font-bold drop-shadow-lg">4</h1>
              <h1 class="text-main text-gray-700 font-bold drop-shadow-lg">0</h1>
              <h1 class="text-main text-gray-200 font-bold drop-shadow-lg">4</h1>
              </div>
              <h1 class="text-2xl text-gray-700 font-semibold text-center">Tidak dapat menemukan halaman yang di cari</h1>
            </div>
            <h1 v-else class="text-3xl text-gray-700 grid place-items-center">masalah terjadi</h1>
            <div v-show="user" class="flex items-center justify-between">
              <p class="text-gray-700 mr-2">Kembali ke</p>
              <NuxtLink to="/homepage" class="py-2 w-32 rounded-lg text-center bg-gray-700">
                <p class="text-sm text-yellow-500 font-medium">Homepage?</p>
              </NuxtLink>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['error'],
  layout: 'error',
  computed:{
    user(){
      return this.$auth.user
    }
  }
}
</script>
<style>
.text-main{
  font-size:250px;
  text-shadow: 0 4px 5px rgba(0,0,0,.3);
}

</style>