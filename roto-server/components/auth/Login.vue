<template>
<div class="h-screen">
    <div class="grid grid-cols-2 h-full px-4 py-4 bg-gray-200 relative">
        <div class="absolute top-0 left-0 h-1/2 w-full bg-green-600 z-0"></div>
        <section class="h-full w-full flex flex-col justify-between z-10 relative ">
                <BarChart class="h-1/2 bg-gray-100 rounded-lg shadow-lg"/>     
                <BarChart class="h-3/4 bg-gray-100 rounded-lg shadow-lg mt-4"/>     
                <!-- <CardBarChart/> -->
                <!-- <CardBarChart/> -->
        </section>
        <div class="grid grid-rows-2 place-self-end w-5/6 h-full z-10 relative ">
            <section class="w-full h-3/4 z-10 grid grid-cols-2 place-items-center">
                <div class="px-6 bg-purple-500 text-gray-100 rounded-lg w-60 h-24 relative shadow-lg transform
                    hover:translate-y-px hover:shadow-lg
                    transition
                    ease-in-out
                    duration-300">
                    <font-awesome-icon :icon="['fas','temperature-low']" class="absolute right-6 top-1/2 transform -translate-y-1/2" style="font-size: 40px"/>
                    <div class="flex flex-col h-full justify-center">
                        <p class="mb-1">suhu</p>
                        <p class="text-3xl font-semibold">20°c</p>
                    <hr class="mt-1">
                    </div>
                </div>
                <div class="px-6 bg-blue-500 text-gray-100 rounded-lg w-60 h-24 relative shadow-lg transform
                    hover:translate-y-px hover:shadow-lg
                    transition
                    ease-in-out
                    duration-300">
                    <font-awesome-icon :icon="['fas','tint']" class="absolute right-6 top-1/2 transform -translate-y-1/2" style="font-size: 40px" />
                    <div class="flex flex-col h-full justify-center">
                        <p class="mb-1">kelembapan</p>
                        <p class="text-3xl font-semibold">40%</p>
                        <hr class="mt-1">
                    </div>
                </div>
                <div class="px-6 bg-green-500 text-gray-100 rounded-lg w-60 h-24 relative shadow-lg transform
                    hover:translate-y-px hover:shadow-lg
                    transition
                    ease-in-out
                    duration-300">
                    <font-awesome-icon :icon="['fas','wind']" class="absolute right-6 top-1/2 transform -translate-y-1/2" style="font-size: 40px" />
                    <div class="flex flex-col h-full justify-center">
                        <p class="mb-1">AC</p>
                        <p class="text-3xl font-semibold">20°c</p>
                        <hr class="mt-1">
                    </div>
                </div>
                <div class="px-6 bg-red-500 text-gray-100 rounded-lg w-60 h-24 relative shadow-lg transform
                    hover:translate-y-px hover:shadow-lg
                    transition
                    ease-in-out
                    duration-300">
                        <font-awesome-icon :icon="['fas','car-battery']" class="absolute right-6 top-1/2 transform -translate-y-1/2" style="font-size: 40px"/>
                    <div class="flex flex-col h-full justify-center">
                        <p class="mb-1">UPS</p>
                        <p class="text-3xl font-semibold">600w</p>
                        <hr class="mt-1">
                    </div>
                </div>
            </section>
            
        <div class="w-full  grid place-items-center -mt-10">
                <div class="rounded-lg grid grid-cols-1 w-3/4 place-items-center h-full bg-gray-300">
                    <div v-if="err" class="bg-red-500 text-gray-100 py-1 px-2 rounded mb-4 text-center font-semibold">
                        <p>{{err}}</p>
                    </div>
                    <h1 class="text-center text-3xl font-semibold text-green-600">Login</h1>
                    <form @submit.prevent="userLogin" class="w-3/4">
                        <input type="text" placeholder="nama" class="rounded-lg shadow-md mb-3 p-2 outline-none w-full  bg-gray-200" v-model="login.nama" >
                        <input type="password" placeholder="kata sandi" class="rounded-lg shadow-md p-2 w-full outline-none mb-3 bg-gray-200" v-model="login.sandi" > 
                        <div class="flex justify-between">
                            <select v-model="login.lokasi" name="lokasi" id="lokasi" class="rounded-lg outline-none shadow-md p-2 bg-gray-200 w-full">
                                <option disabled value="">pilih lokasi</option>
                                <option v-for="(lokasi,index) in lokasiserver" :key="index" :value="lokasi.nama">{{lokasi.nama}}</option>
                            </select>
                            <!-- <select name="peran" id="peran" class="rounded-lg outline-none shadow-md p-2 bg-gray-200 w-widthLoginLokasiPeran">
                                <option value="0">EDP</option>
                                <option value="1">PA</option>
                                <option value="2">security</option>
                                <option value="3">teknisi</option>
                                <option value="3">teknisi listrik</option>
                                <option value="3">teknisi AC</option>
                            </select> -->
                        </div>
                        <nuxt-link to="">
                            <p class="text-xs text-green-600 text-center mt-5">lupa kata sandi?</p>
                        </nuxt-link>
                        <button type="submit" class="bg-green-600 py-2 shadow-md rounded-lg w-full text-white mt-6">Masuk</button>
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
                const msg = await this.$auth.loginWith("local", { data: this.login})
                this.$router.push('/homepage')
                if(msg.data.errmsg){
                    this.err = msg.data.errmsg
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
    .maintenance-login{
        background-color:rgba(255,255,255,0.4);
        backdrop-filter: blur(8px);
        border-radius: 10px;
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