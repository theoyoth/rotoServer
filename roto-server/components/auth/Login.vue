<template>
<div class="h-screen background-image bg-hero">
    <div class="flex h-full  px-4 py-2 justify-between">
          
        <div class="w-3/4 p-2 flex flex-col justify-around maintenance-login">
            <section class="layout-one flex justify-around">
                <div class="temperature-container homepage-maintenance p-2">
                    <div class="temperature">
                        <font-awesome-icon :icon="['fas','temperature-low']" />
                        <p class="font-title">suhu</p>
                    </div>
                    <p class="font-result">20°c</p>
                </div>
                <div class="humidity-container homepage-maintenance p-4">
                    <div class="humidty flex justify-between align-items-center">
                        <font-awesome-icon :icon="['fas','tint']" />
                        <p class="font-title">kelembapan</p>
                    </div>
                    <p class="font-result">40%</p>
                </div>
                <div class="ac-container homepage-maintenance p-4">
                    <div class="ac flex justify-between align-items-center">
                        <font-awesome-icon :icon="['fas','wind']"/>
                        <p class="font-title">AC</p>
                    </div>
                    <p class="font-result">20°c</p>
                </div>
                <div class="ups-container homepage-maintenance p-4">
                    <div class="ups flex justify-between align-items-center">
                        <font-awesome-icon :icon="['fas','car-battery']" />
                        <p class="font-title">UPS</p>
                    </div>
                    <p class="font-result">600w</p>
                </div>
            </section>
            <section class="layout-two flex justify-between">
                <BarChart/>     
                <BarChart/>     
            </section>
        </div>
        <div class="form-login flex flex-col justify-center w-80 px-5">
            <h1 class="text-center mb-4 text-3xl font-semibold">Login</h1>
            <div v-show="msg" class="bg-red-400 p-1 rounded mb-4 text-center font-semibold">
                <p>{{msg}}</p>
            </div>
            <form @submit.prevent="userLogin">
                <input type="text" name="nama" placeholder="nama" class="rounded-lg mb-2 p-2 w-full outline-none" v-model="login.nama" required>
                <input type="password" name="sandi" placeholder="kata sandi" class="rounded-lg p-2 w-full outline-none" v-model="login.sandi" required> 
                <nuxt-link to="">
                    <p class="text-xs text-center mt-4">lupa kata sandi?</p>
                </nuxt-link>
                <button type="submit" class="bg-blue-600 py-2 rounded-lg w-full text-white mt-5">Masuk</button>
            </form>
    
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'
// import {mapMutations} from 'vuex'
export default {
    // auth : false,
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
        // ...mapMutations(['setisauth']),
        async userLogin() {
            try{
                const res = await this.$auth.loginWith("local", { data: this.login})
                console.log(res)
                this.$router.push('/homepage')
                if(res.data.msg){
                    this.msg = res.data.msg
                }
            }
            catch(err){ 
                console.log(err)
            }
        }         
    }
}
  

</script>

<style lang="scss">
.background-image{

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

        .font-title{
            font-size: .8rem;
        }
    }
    .temperature-container{
        background-color:#d9e0f9;

        .temperature{
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
        }
    }
    .humidity-container{
        background-color:#ffc7c7;
    }
    .ac-container{
        background-color:#e5b4ff;
    }
    .ups-container{
        background-color:#ffcbad;
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
}
</style>