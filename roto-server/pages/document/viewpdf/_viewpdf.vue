<template>
  <div class="min-h-screen w-widthContent ml-auto overflow-x-hidden">
    <section class="bg-gray-100 min-h-screen w-widthContentField m-auto mt-7 p-4">{{viewpdf}}
      <embed :src="viewpdf" type="application/pdf" height="900" width="500">
    </section>
  </div>
</template>

<script>

export default {
  data(){
    return{ 
      viewpdf:null,
    }
  },
  mounted() {
    this.viewpdf = this.$route.params.id
  },
};
</script>

<style>
</style>