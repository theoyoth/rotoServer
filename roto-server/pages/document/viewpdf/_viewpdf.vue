<template>
  <div class="min-h-screen w-widthContent ml-auto overflow-x-hidden" id="pdffile">
    <section class="bg-gray-100 min-h-screen w-widthContentField m-auto mt-7 p-4">
    </section>
  </div>
</template>

<script>
export default {
  
  data(){
    return{ 
      viewpdf:"",
      linkfile:"",
    }
  },
  mounted() {
    this.viewpdf = this.$route.params.id
    this.linkfile = `/assets/uploads/${this.viewpdf}`
  },
};
</script>

<style>
</style>