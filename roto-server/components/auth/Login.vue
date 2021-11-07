<template>
<div class="h-screen">
    <div class="flex h-full px-4 py-2 justify-between bg-gr-black-opac">
        <div class="w-widthGraphic p-2 flex flex-col justify-around">
            <section class="layout-one flex justify-around items-center text-white">
                <div class="homepage-maintenance p-2 border border-white">
                    <div class="flex justify-between">
                        <font-awesome-icon :icon="['fas','temperature-low']" />
                        <p class="font-title">suhu</p>
                    </div>
                    <p class="font-result mt-2">20°c</p>
                </div>
                <div class="homepage-maintenance p-2 border border-white">
                    <div class="flex justify-between align-items-center">
                        <font-awesome-icon :icon="['fas','tint']" />
                        <p class="font-title">kelembapan</p>
                    </div>
                    <p class="font-result mt-2">40%</p>
                </div>
                <div class="homepage-maintenance p-2 border border-white">
                    <div class="ac flex justify-between align-items-center">
                        <font-awesome-icon :icon="['fas','wind']"/>
                        <p class="font-title">AC</p>
                    </div>
                    <p class="font-result mt-2">20°c</p>
                </div>
                <div class="homepage-maintenance p-2 border border-white">
                    <div class="ups flex justify-between align-items-center">
                        <font-awesome-icon :icon="['fas','car-battery']" />
                        <p class="font-title">UPS</p>
                    </div>
                    <p class="font-result mt-2">600w</p>
                </div>
            </section>
            <section class="flex justify-between">
                <BarChart/>     
                <BarChart/>     
            </section>
        </div>
        <div class="w-widthLogin px-5 relative grid place-items-center">
            <div class="h-2/3 grid grid-cols-1 place-items-center">
                <div v-show="msg" class="bg-red-400 p-1 rounded mb-4 text-center font-semibold">
                    <p>{{msg}}</p>
                </div>
                <h1 class="text-center text-3xl font-semibold text-white">Login</h1>
                <form @submit.prevent="userLogin" class="w-3/4">
                    <input type="text" placeholder="nama" class="rounded-lg shadow-md mb-3 p-2 outline-none w-full  bg-gray-200" v-model="login.nama" required>
                    <input type="password" placeholder="kata sandi" class="rounded-lg shadow-md p-2 w-full outline-none mb-3 bg-gray-200" v-model="login.sandi" required> 
                    <div class="flex justify-between">
                        <select name="lokasi" id="lokasi" class="rounded-lg outline-none shadow-md p-2 bg-gray-200 w-widthLoginLokasiPeran">
                            <option value="0">roto 1</option>
                            <option value="1">roto 2</option>
                            <option value="2">roto 3</option>
                            <option value="3">tinta</option>
                        </select>
                        <select name="peran" id="peran" class="rounded-lg outline-none shadow-md p-2 bg-gray-200 w-widthLoginLokasiPeran">
                            <option value="0">EDP</option>
                            <option value="1">PA</option>
                            <option value="2">security</option>
                            <option value="3">teknisi</option>
                            <option value="3">teknisi listrik</option>
                            <option value="3">teknisi AC</option>
                        </select>
                    </div>
                    <nuxt-link to="">
                        <p class="text-xs text-white text-center mt-5">lupa kata sandi?</p>
                    </nuxt-link>
                    <button type="submit" class="bg-blue-600 py-2 shadow-md rounded-lg w-full text-white mt-6">Masuk</button>
                </form>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
    auth:"guest",
    data(){
        return{
            login :{
                nama: '',
                sandi: '',

            },
            msg : ""
        }
    },
    methods:{
        async userLogin() {
            try{
                await this.$auth.loginWith("local", { data: this.login})
                this.$router.push('/homepage')
            }
            catch(err){ 
                console.log(err)
            }
        }         
    },
    mounted(){ 
        if(this.$auth.loggedIn){
            this.$router.push('/homepage')
        }
    }
}
  

</script>

<style lang="scss">
    .maintenance-login{
        background-color:rgba(255,255,255,0.4);
        backdrop-filter: blur(8px);
        border-radius: 10px;
    }
    .homepage-maintenance{
        width:170px;
        height: 100px;
        border-radius: 10px;
        box-shadow: 0 2px 6px rgba(3,3,3,0.2);
        color:white;

        .font-title{
            font-size: .8rem;
        }
    }
    
    .font-result{
        font-size: 1.8rem;
        text-align: center;
    }

    .form-login{
        border-radius: 10px;
        background-color:rgba(255,255,255,0.5);
        backdrop-filter: blur(8px);
        .text-small{
            font-size: 12px;
        }
    }
    .layout-one{
        height: 120px;
    }

</style>