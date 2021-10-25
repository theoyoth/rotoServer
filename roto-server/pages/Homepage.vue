<template>
<div class="bg-hero h-screen">
    <div class="container mx-auto h-full py-5">
        <header>
            <div class="flex justify-between items-center">
                <div>
                    <p>{{user}}</p>
                </div>
                <div class="maintenance-result w-96 flex justify-between">
                    <div class="has-tooltip">
                    <nuxt-link to="/graphictemperature" class="temperature h-10 w-44 rounded-md bg-gr-blue flex justify-around items-center shadow-md transform hover:scale-95 hover:shadow-lg transition ease-in duration-200">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white -mb-20">hasil maintenance suhu</span>
                        <p class="text-xs">suhu</p>
                        <p>20°c</p>
                    </nuxt-link>
                    </div>
                    <div class="has-tooltip">
                    <nuxt-link to="/graphichumidity" class="humidity h-10 w-44 rounded-md bg-gr-red flex justify-around items-center shadow-md transform hover:scale-95 hover:shadow-lg transition ease-in duration-200">
                        <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 w-52 text-white -mb-20">hasil maintenance kelembapan</span>
                        <p class="text-xs">kelembapan</p>
                        <p>30%</p>
                    </nuxt-link>
                    </div>
                </div>
                <form method="post" @submit.prevent="logout" class="logout-btn px-2 w-28 flex rounded-md justify-between items-center">
                    <button class="font-medium">Logout</button>
                    <div class="bg-blue-400 w-8 h-8 rounded-full flex items-center justify-center">
                        <font-awesome-icon :icon="['fas','sign-out-alt']" class="text-white" />
                    </div>
                </form>
                <!-- <div class="logout-btn px-2 w-28 flex rounded-md justify-between items-center" @click="$auth.logout()">
                    <button class="font-medium">Logout</button>
                    <div class="bg-blue-400 w-8 h-8 rounded-full flex items-center justify-center">
                        <font-awesome-icon :icon="['fas','sign-out-alt']" class="text-white" />
                    </div>
                </div> -->
            </div>
        </header>
        <section class="grid place-items-center h-5/6">
            <div class="grid grid-cols-3 h-3/4 w-4/5 place-items-center">
                <div class="has-tooltip">
                <nuxt-link to="/master" class="master-menu h-36 w-60 rounded-xl relative backdrop-blur-md bg-opacity-10 flex justify-center items-center bg-gr-white transform hover:translate-y-1 hover:shadow-lg transition ease-in-out duration-300">
                    <span class="tooltip text-sm rounded shadow-lg p-1 bg-gray-700 text-white -mt-48">master barang di server</span>
                    <h1 class="font-medium">Master</h1>
                    <font-awesome-icon :icon="['fas','database']" class="absolute top-4 left-4" />
                </nuxt-link>
                </div>
                <div class="has-tooltip">
                <nuxt-link to="/maintenance" class="maintenance-menu h-36 w-60 rounded-xl relative backdrop-blur-md bg-opacity-10 flex justify-center items-center bg-gr-white transform hover:translate-y-1 hover:shadow-lg transition ease-in-out duration-300">
                    <span class="tooltip text-sm rounded shadow-lg p-1 bg-gray-700 text-white -mt-48">maintenance server</span>
                    <h1 class="font-medium">Maintenance</h1>
                    <font-awesome-icon :icon="['fas','file-medical']" class="absolute top-4 left-4"/>
                </nuxt-link>
                </div>
                <div class="has-tooltip">
                <nuxt-link to="/inout" class="in/out-menu h-36 w-60 rounded-xl relative backdrop-blur-md bg-opacity-10 flex justify-center items-center bg-gr-white transform hover:translate-y-1 hover:shadow-lg transition ease-in-out duration-300">
                    <span class="tooltip text-sm rounded shadow-lg p-1 bg-gray-700 text-white -mt-48 w-72">input dan output barang di server</span>
                    <h1 class="font-medium">Masuk/Keluar barang</h1>
                    <font-awesome-icon :icon="['fas','people-carry']" class="absolute top-4 left-4"  />
                </nuxt-link>
                </div>
                <div class="has-tooltip">
                <nuxt-link to="/document" class="documentation-menu h-36 w-60 rounded-xl relative backdrop-blur-md bg-opacity-10 flex justify-center items-center bg-gr-white transform hover:translate-y-1 hover:shadow-lg transition ease-in-out duration-300">
                    <span class="tooltip text-sm rounded shadow-lg p-1 bg-gray-700 text-white -mt-48">dokumen SOP dan lainnya</span>
                    <h1 class="font-medium">Dokumentasi</h1>
                    <font-awesome-icon :icon="['fas','file-alt']" class="absolute top-4 left-4"  />
                </nuxt-link>
                </div>
                <div class="has-tooltip">
                <nuxt-link to="/map" class="map-menu h-36 w-60 rounded-xl relative backdrop-blur-md bg-opacity-10 flex justify-center items-center bg-gr-white transform hover:translate-y-1 hover:shadow-lg transition ease-in-out duration-300">
                     <span class="tooltip text-sm rounded shadow-lg p-1 bg-gray-700 text-white -mt-48">peta ruang server</span>
                    <h1 class="font-medium">Peta</h1>
                    <font-awesome-icon :icon="['fas','map']" class="absolute top-4 left-4"  />
                </nuxt-link>
                </div>
            </div>
        </section>
    </div>
</div>
</template>

<script>
import axios from 'axios'
// import { mapGetters, mapMutations } from 'vuex'

export default {
    data(){
        return{
            user : '',
            message : '',
        }
    },
    // middleware: 'auth',
    // computed: {
    //     ...mapGetters([
    //     'user', 
    //     'isLoggedIn'
    // ])
        // loggedIn() {
        //     return this.$auth.loggedIn
        // },
        // user() {
        //     return this.$auth.user
        // }
    // },
    async mounted(){
        // this.$nuxt.$on('auth',auth=>{
        //     this.auth = auth
        // })

        // const cookie = document.cookie
        // if(!cookie){
        //     this.$router.push('/')
        // }

        try{
            const resp = await axios.get('http://localhost:3000/server/homepage',{},{withCredentials: true})

            this.user = resp.data.nama
            // this.$nuxt.$emit('auth',true)
            // console.log(resp.data)
            //  let response = await this.$auth.loginWith('local', {})
            // this.user = response.data.nama
            // this.$nuxt.$emit('auth',true)
            
            
        }
        catch (err){
            this.message = 'you are not login'
            // this.$nuxt.$emit('auth',false)
        }
  },
  methods:{
    //   ...mapMutations(['setisauth']),
      logout(){
          axios.post('/server/logout',{},{withCredentials : true})

          this.$router.push('/')
      }

    //   async logout() {
    //         await this.$auth.logout() 
    //         this.setisauth(false) 
    //         this.$router.push('/login') 
    //     }
  }
}
</script>

<style>

</style>