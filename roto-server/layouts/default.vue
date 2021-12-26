<template>
  <div id="wrapper">
		<Sidebar v-if="loggedIn"/>
		<div id="content-wrapper" class="flex flex-col relative ">
			<div id="content">
				<Navbar v-if="loggedIn" class="w-widthContent ml-auto"/>
				<nuxt/>
			</div>
		</div>
	</div>
</template>
<script>

export default {
  computed:{
    loggedIn() {
      return this.$auth.loggedIn
    },
    user() {
      return this.$auth.user
    },
  },
  mounted(){
    window.onbeforeunload = () => {
      if (localStorage.getItem('token-user') === 'true') {
        localStorage.removeItem('token-user');
      }
    };
  }
  
}
</script>
