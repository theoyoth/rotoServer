<template>
  <div class="min-h-screen w-widthContent ml-auto overflow-x-hidden" id="pdffile">
    <embed :src="linkfile" type="application/pdf" width="100%" height="1000px" target="_blank">
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
    this.linkfile = `../../../uploads/${this.viewpdf}`
  },
};
</script>

<style>
</style>