<template>
  <div class="px-4 h-screen w-full relative">
    <div class="background absolute top-0 left-0 bg-gray-800 w-full h-screen"></div>
    <div class="flex content-center items-center justify-center h-full">
      <div class="w-full lg:w-4/12 px-4">
        <div
          class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-200"
        >
          <div class="rounded-t px-6 py-6">
            <hr class="mt-4 border-b-1 border-blueGray-300" />
          </div>
          <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
            <div v-if="err" class="bg-red-500 text-gray-100 py-1 px-2 rounded mb-8 text-center font-semibold">
              <p>{{err}}</p>
            </div>
            <div class="text-blueGray-400 text-center mb-5 font-bold">
              <h1 class="text-3xl">Login</h1>
            </div>
            <form  @submit.prevent="userLogin">
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  nama
                </label>
                <input
                  type="text"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="nama" v-model="login.nama" autofocus
                />
              </div>

              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  sandi
                </label>
                <input
                  type="password"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="sandi" v-model="login.sandi"
                />
              </div>
              <div class="relative w-full mb-3">
                 <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  lokasi
                </label>

                <!-- <select v-model="login.lokasi" name="lokasi" id="lokasi" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                    <option disabled value="">pilih lokasi</option>
                    <option v-for="(lokasi,index) in lokasiserver" :key="index" :value="lokasi.nama">{{lokasi.nama}}</option>
                </select> -->
                <select v-model="login.lokasi" name="lokasi" id="lokasi" class="border-0 px-3 py-3 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                    <option disabled value="">pilih lokasi</option>
                    <option value="roto 1">roto 1</option>
                    <option value="roto 2">roto 2</option>
                    <option value="roto 3">roto 3</option>
                    <option value="tinta">tinta</option>
                </select>
              </div>
              <nuxt-link to="">
                  <p class="text-xs text-gray-700 text-center mt-5">lupa kata sandi?</p>
              </nuxt-link>
              <div class="text-center mt-6">
                <button
                  class="bg-gray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                  type="submit"
                >
                  masuk
                </button>
              </div>
            </form>
          </div>
        </div>
       
      </div>
    </div>
  </div>
</template>
<script>

export default {
    auth:"guest",
    data(){
        return{
            login :{
                nama: '',
                sandi: '',
                lokasi:'',
            },
            err : ""
        }
    },
    computed:{
        lokasiserver(){
            return this.$store.state.lokasiServer.lokasi
        }
    },
    methods:{
        async userLogin() {
            try{
                const resp = await this.$auth.loginWith("local", { data: this.login})
                // const token = resp.data.token
                // this.$cookies.set('token',token,{expires:3600000})
                
                // this.$auth.$storage.setLocalStorage("authtoken", token)
                window.addEventListener('storage', function(event){
                  if (event.key == "app-logout") {
                    window.location.assign("http://localhost:3000")
                  }
                }, false);
                this.$router.push('/homepage')
                if(resp.data.errmsg){
                    this.err = resp.data.errmsg
                }
            }
            catch(err){ 
                console.log(err)
            }
        }         
    },
    mounted(){ 
        if(this.$auth.loggedIn){
            return this.$router.go(-1)
        }
        this.$store.dispatch('lokasiServer/getLokasi')
    }
}
</script>
<style lang="scss">
  .background{
    background-image: url('~assets/img/auth.png');
    background-size: cover;
  }

</style>