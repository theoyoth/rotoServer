<template>
  <div v-if="!auth">
    <AuthLogin/>
  </div>
</template>

<script>
export default {
  data(){
    return{
      auth : false,
    }
  },
  mounted(){
    this.$nuxt.$on('auth',auth => {
      this.auth = auth;
    })
  }
  
}
</script>
