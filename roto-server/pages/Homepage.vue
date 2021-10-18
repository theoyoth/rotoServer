<template>
<div class="bg-hero h-screen">
    <div class="container mx-auto h-full py-5">
        <header>
            <div class="flex justify-between items-center">
                <div class="flex">
                    <p>{{users[0]}}</p>
                    <p>|</p>
                    <p>{{lokasis[0]}}</p>
                </div>
                <div class="maintenance-result w-96 flex justify-between">
                    <nuxt-link to="/graphictemperature" class="temperature h-10 w-44 rounded-md bg-gr-blue flex justify-around items-center shadow-md transform hover:scale-95 hover:shadow-lg transition ease-in duration-200">
                        <p class="text-xs">suhu</p>
                        <p>20°c</p>
                    </nuxt-link>
                    <nuxt-link to="/graphichumidity" class="humidity h-10 w-44 rounded-md bg-gr-red flex justify-around items-center shadow-md transform hover:scale-95 hover:shadow-lg transition ease-in duration-200">
                        <p class="text-xs">kelembapan</p>
                        <p>30%</p>
                    </nuxt-link>
                </div>
                <nuxt-link to="" class="logout-btn px-2 w-28 flex rounded-md justify-between items-center">
                    <p class="font-medium">Logout</p>
                    <div class="bg-blue-400 w-8 h-8 rounded-full flex items-center justify-center">
                        <font-awesome-icon :icon="['fas','sign-out-alt']" class="text-white" />
                    </div>
                </nuxt-link>
            </div>
        </header>
        <section class="grid place-items-center h-5/6">
            <div class="grid grid-cols-3 h-3/4 w-4/5 place-items-center">
                <nuxt-link to="/master" class="master-menu h-36 w-60 rounded-xl relative backdrop-blur-md bg-opacity-10 flex justify-center items-center bg-gr-white transform hover:translate-y-1 hover:shadow-lg transition ease-in-out duration-300">
                    <h1 class="font-medium">Master</h1>
                    <font-awesome-icon :icon="['fas','database']" class="absolute top-4 left-4" />
                </nuxt-link>
                <nuxt-link to="/maintenance" class="maintenance-menu h-36 w-60 rounded-xl relative backdrop-blur-md bg-opacity-10 flex justify-center items-center bg-gr-white transform hover:translate-y-1 hover:shadow-lg transition ease-in-out duration-300">
                    <h1 class="font-medium">Maintenance</h1>
                    <font-awesome-icon :icon="['fas','file-medical']" class="absolute top-4 left-4"/>
                </nuxt-link>
                <nuxt-link to="/inout" class="in/out-menu h-36 w-60 rounded-xl relative backdrop-blur-md bg-opacity-10 flex justify-center items-center bg-gr-white transform hover:translate-y-1 hover:shadow-lg transition ease-in-out duration-300">
                    <h1 class="font-medium">Masuk/Keluar barang</h1>
                    <font-awesome-icon :icon="['fas','people-carry']" class="absolute top-4 left-4"  />
                </nuxt-link>
                <nuxt-link to="/document" class="documentation-menu h-36 w-60 rounded-xl relative backdrop-blur-md bg-opacity-10 flex justify-center items-center bg-gr-white transform hover:translate-y-1 hover:shadow-lg transition ease-in-out duration-300">
                    <h1 class="font-medium">Dokumentasi</h1>
                    <font-awesome-icon :icon="['fas','file-alt']" class="absolute top-4 left-4"  />
                </nuxt-link>
                <nuxt-link to="/map" class="map-menu h-36 w-60 rounded-xl relative backdrop-blur-md bg-opacity-10 flex justify-center items-center bg-gr-white transform hover:translate-y-1 hover:shadow-lg transition ease-in-out duration-300">
                    <h1 class="font-medium">Peta</h1>
                    <font-awesome-icon :icon="['fas','map']" class="absolute top-4 left-4"  />
                </nuxt-link>
            </div>
        </section>
    </div>
</div>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return{
            users : [],
            lokasis : [],
        }
    },
    mounted(){
     axios.get('http://localhost:3000/server')
            .then(resp => {
              resp.data.forEach(user => {
                this.users.push(user.nama)
              })
            })
            .catch(err => {
                console.error(err);
            });
     axios.get('http://localhost:3000/server/lokasiserver')
            .then(resp => {
              resp.data.forEach(lokasi => {
                this.lokasis.push(lokasi.nama)
              })
            })
            .catch(err => {
                console.error(err);
            });
  }
}
</script>

<style>

</style>