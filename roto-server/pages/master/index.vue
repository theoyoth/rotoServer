<template>
<div class="bg-master h-screen">
    <div class="container mx-auto h-full py-5">
        <header class="flex justify-between">
            <nuxt-link to="/homepage" class="logout-btn rounded-md flex items-center">
                <div class="bg-blue-400 w-8 h-8 rounded-full flex items-center justify-center">
                    <font-awesome-icon :icon="['fas','arrow-left']" class="text-white" />
                </div>
                <p class="font-medium text-xl ml-2">Kembali</p>
            </nuxt-link>
            <p>{{user.nama}}</p>
            <p>{{user.level}}</p>
            <p>{{user.lokasi}}</p>
            <p class="text-xl font-medium">Pilih barang</p>
        </header>
        <section class="grid place-items-center h-5/6">
            <div class="grid grid-cols-5 h-3/4 w-4/5 place-items-center">
                <nuxt-link to="/master/server" class="master-menu h-28 w-44 rounded-xl relative backdrop-blur-md bg-opacity-10 flex justify-center items-center bg-gr-white transform hover:bg-blue-500 transition ease-in duration-200">
                    <h1 class="font-medium">Server</h1>
                    <font-awesome-icon :icon="['fas','server']" class="absolute top-4 left-4" />
                </nuxt-link>
                <nuxt-link to="/master/rak" class="maintenance-menu h-28 w-44 rounded-xl relative backdrop-blur-md bg-opacity-10 flex justify-center items-center bg-gr-white transform hover:bg-yellow-500 transition ease-in duration-200">
                    <h1 class="font-medium">Rak</h1>
                    <font-awesome-icon :icon="['fas','file-medical']" class="absolute top-4 left-4"/>
                </nuxt-link>
                <nuxt-link to="/master/ups" class="in/out-menu h-28 w-44 rounded-xl relative backdrop-blur-md bg-opacity-10 flex justify-center items-center bg-gr-white transform hover:bg-red-500 transition ease-in duration-200">
                    <h1 class="font-medium">UPS</h1>
                    <font-awesome-icon :icon="['fas','plug']" class="absolute top-4 left-4"  />
                </nuxt-link>
                <nuxt-link to="/master/baterai" class="documentation-menu h-28 w-44 rounded-xl relative backdrop-blur-md bg-opacity-10 flex justify-center items-center bg-gr-white transform hover:bg-green-500 transition ease-in duration-200">
                    <h1 class="font-medium">Baterai</h1>
                    <font-awesome-icon :icon="['fas','battery-full']" class="absolute top-4 left-4"  />
                </nuxt-link>
                <nuxt-link to="/master/ac" class="map-menu h-28 w-44 rounded-xl relative backdrop-blur-md bg-opacity-10 flex justify-center items-center bg-gr-white transform hover:bg-purple-500 transition ease-in duration-200">
                    <h1 class="font-medium">AC</h1>
                    <font-awesome-icon :icon="['fas','wind']" class="absolute top-4 left-4"  />
                </nuxt-link>
                <nuxt-link to="/master/cctv" class="map-menu h-28 w-44 rounded-xl relative backdrop-blur-md bg-opacity-10 flex justify-center items-center bg-gr-white transform hover:bg-pink-500 transition ease-in duration-200">
                    <h1 class="font-medium">CCTV</h1>
                    <font-awesome-icon :icon="['fas','video']" class="absolute top-4 left-4"  />
                </nuxt-link>
                <nuxt-link to="/master/network" class="map-menu h-28 w-44 rounded-xl relative backdrop-blur-md bg-opacity-10 flex justify-center items-center bg-gr-white transform hover:bg-green-700 transition ease-in duration-200">
                    <h1 class="font-medium">Network</h1>
                    <font-awesome-icon :icon="['fas','network-wired']" class="absolute top-4 left-4"  />
                </nuxt-link>
                <nuxt-link to="/master/apar" class="map-menu h-28 w-44 rounded-xl relative backdrop-blur-md bg-opacity-10 flex justify-center items-center bg-gr-white transform hover:bg-yellow-600 transition ease-in duration-200">
                    <h1 class="font-medium">APAR</h1>
                    <font-awesome-icon :icon="['fas','fire-extinguisher']" class="absolute top-4 left-4"  />
                </nuxt-link>
                <nuxt-link to="/master/monitor" class="map-menu h-28 w-44 rounded-xl relative backdrop-blur-md bg-opacity-10 flex justify-center items-center bg-gr-white transform hover:bg-red-800 transition ease-in duration-200">
                    <h1 class="font-medium">Monitor</h1>
                    <font-awesome-icon :icon="['fas','tv']" class="absolute top-4 left-4"  />
                </nuxt-link>
                <nuxt-link to="/master/keyboard" class="map-menu h-28 w-44 rounded-xl relative backdrop-blur-md bg-opacity-10 flex justify-center items-center bg-gr-white transform hover:bg-blue-800 transition ease-in duration-200">
                    <h1 class="font-medium">Keyboard</h1>
                    <font-awesome-icon :icon="['fas','keyboard']" class="absolute top-4 left-4"  />
                </nuxt-link>
                <nuxt-link to="/master/mouse" class="map-menu h-28 w-44 rounded-xl relative backdrop-blur-md bg-opacity-10 flex justify-center items-center bg-gr-white transform hover:bg-purple-900 transition ease-in duration-200">
                    <h1 class="font-medium">Mouse</h1>
                    <font-awesome-icon :icon="['fas','mouse']" class="absolute top-4 left-4"  />
                </nuxt-link>
                <nuxt-link to="/master/nas" class="map-menu h-28 w-44 rounded-xl relative backdrop-blur-md bg-opacity-10 flex justify-center items-center bg-gr-white transform hover:bg-pink-500 transition ease-in duration-200">
                    <h1 class="font-medium">NAS</h1>
                    <font-awesome-icon :icon="['fas','hdd']" class="absolute top-4 left-4"  />
                </nuxt-link>
                <nuxt-link to="/master/genset" class="map-menu h-28 w-44 rounded-xl relative backdrop-blur-md bg-opacity-10 flex justify-center items-center bg-gr-white transform hover:bg-green-700 transition ease-in duration-200">
                    <h1 class="font-medium">Genset</h1>
                    <font-awesome-icon :icon="['fas','charging-station']" class="absolute top-4 left-4"  />
                </nuxt-link>
            </div>
        </section>
    </div>
</div>
</template>

<script>
export default {
    middleware:["isAuthenticated","cookieRestrict"],
    computed:{
        loggedIn() {
            return this.$auth.loggedIn
        },
        user() {
            return this.$auth.user
        },
    },
    // async mounted(){
    //     const cook = await this.$cookies.get('aksestoken')
    //     if(cook){
    //         this.$cookies.remove('aksestoken')
    //         this.$router.push('/')
    //     }
    // },
}
</script>

<style>

</style>