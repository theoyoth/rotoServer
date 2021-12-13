<template>
  <ResetPassword :tokenuser="usertoken"/>
</template>

<script>
export default {
  data(){
    return{
      usertoken:"",
    }
  },
  mounted(){
    this.usertoken = this.$route.params.token
  }
}
</script>
