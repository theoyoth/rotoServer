<template>
  <div>
    <AuthLogin/>
  </div>
</template>

<script>
export default {
  async asyncData({$http}){
    try{
      const test = await $http.$get('/server')
      return{
        test
      }
    }
    catch(err){
      return err
    }
  },
  
}
</script>
