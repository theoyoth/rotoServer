<template>
  <div class="min-h-screen w-widthContent ml-auto overflow-x-hidden" id="pdffile">
    <embed :src="linkfile" type="application/pdf" width="100%" height="1000px">
  </div>
</template>

<script>
export default {
  
  data(){
    return{ 
      viewpdf:"",
      linkfile:null,
    }
  },
  mounted() {
    this.viewpdf = this.$route.params.id
    const lokasi = this.$auth.user.lokasi
    if(lokasi === 'rotogravure 1'){
      this.linkfile = `../../../uploads/roto1/${this.viewpdf}`
    } else if(lokasi === 'rotogravure 2'){
      this.linkfile = `../../../uploads/roto2/${this.viewpdf}`
    } else if(lokasi === 'rotogravure 3'){
      this.linkfile = `../../../uploads/roto3/${this.viewpdf}`
    } else if(lokasi === 'rotogravure tinta'){
      this.linkfile = `../../../uploads/rototinta/${this.viewpdf}`
    }
  },
};
</script>

<style>
</style>