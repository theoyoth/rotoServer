<template>
<div class="bg-gray-300 min-h-screen w-widthContent ml-auto">
    <!-- <InputHeader maintenance="maintenance"/> -->
    <Navbar/>
    <section class="bg-gray-100 min-h-screen w-widthContentField m-auto mt-7 p-4 ">
        <NuxtLink to="/maintenance"
          class="flex items-center justify-between rounded-md w-28 px-4 py-2 bg-gray-700">
          <div>
            <font-awesome-icon :icon="['fas', 'arrow-left']" class="text-gray-200" />
          </div>
          <p class="font-medium text-sm text-gray-200">kembali</p>
        </NuxtLink> 
        <p class="text-center text-xl text-gray-700 font-semibold">Input maintenance</p>

    <ValidationObserver>
    <form @submit.prevent="postInputMaintenance" class="min-w-min mt-10" id="inputmaintenance">
        <div>
            <div class="grid grid-cols-2">
                <!-- <div class="mb-4">
                    <label for="tanggal" class="block mb-2 text-sm">tanggal</label>
                    <input type="date" v-model="inputMaintenance.tanggal" name="tanggal" id="tanggal" class="p-2 w-72 rounded-lg focus:ring-blue-500 bg-gray-200" >
                </div> -->
                <div class="mb-4">
                    <label for="suhu" class="block mb-2 text-sm">suhu</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|numeric" v-slot={errors}>
                        <input type="text" v-model="inputMaintenance.suhu" name="suhu" id="suhu" class="p-2 w-full rounded-lg focus:ring-blue-500 bg-gray-200">
                        <p class="text-xs mt-1 text-right text-red-500">{{ errors[0] }}</p>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="mb-2">
                    <label for="kelembapan" class="block mb-2 text-sm">kelembapan</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|numeric" v-slot={errors}>
                        <input type="text" v-model="inputMaintenance.kelembapan" name="kelembapan" id="kelembapan" class="p-2 w-full rounded-lg focus:ring-blue-500 bg-gray-200">
                        <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="mb-2">
                    <label for="ac" class="block mb-2 text-sm">AC</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|numeric" v-slot={errors}>
                        <input type="text" v-model="inputMaintenance.ac" name="ac" id="ac" class="p-2 w-full rounded-lg focus:ring-blue-500 bg-gray-200">
                        <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="mb-2">
                    <label for="ups" class="block mb-2 text-sm">UPS</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|numeric" v-slot={errors}>
                        <input type="text" v-model="inputMaintenance.ups" name="ups" id="ups" class="p-2 w-full rounded-lg focus:ring-blue-500 bg-gray-200" >
                        <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="mb-2">
                    <label for="baterai" class="block mb-2 text-sm">baterai</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|numeric" v-slot={errors}>
                        <input type="text" v-model="inputMaintenance.baterai" name="baterai" id="baterai" class="p-2 w-full rounded-lg focus:ring-blue-500 bg-gray-200">
                        <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="mb-2">
                    <label for="network" class="block mb-2 text-sm">network</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|numeric" v-slot={errors}>
                        <input type="text" v-model="inputMaintenance.network" name="network" id="network" class="p-2 w-full rounded-lg focus:ring-blue-500 bg-gray-200">
                        <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="mb-2">
                    <label for="server" class="block mb-2 text-sm">server</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|alpha_spaces|alpha_dash" v-slot={errors}>
                        <input type="text" v-model="inputMaintenance.server" name="server" id="server" class="p-2 w-full rounded-lg focus:ring-blue-500 bg-gray-200">
                        <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="mb-2">
                    <label for="keterangan" class="block mb-2 text-sm">keterangan</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|alpha_spaces" v-slot={errors}>
                        <textarea rows="4" form="inputmaintenance" type="text" v-model="inputMaintenance.keterangan" name="keterangan" id="keterangan" class="p-2 w-full rounded-lg focus:ring-blue-500 bg-gray-200"></textarea>
                        <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
            </div>
        </div>
        <button class="bg-gray-700 text-gray-200 shadow-md rounded-lg w-28 h-10 mt-8 transition duration-300 ease-in-out transform hover:-translate-y-px" type="submit">kirim</button>
    </form>
    </ValidationObserver>
</section>
</div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
import { ValidationObserver, ValidationProvider } from "vee-validate";

export default {
    middleware:"isAuthenticated",
    components: {
        ValidationObserver,
        ValidationProvider
    },
    data(){
        return{
            inputMaintenance:{
                tanggal:'',
                suhu:'',
                kelembapan:'',
                ac:'',
                ups:'',
                baterai:'',
                network:'',
                server:'',
                keterangan:''
            }
        }
    },
    computed: {
        loggedIn() {
        return this.$auth.loggedIn
        },
        user() {
        return this.$auth.user
        },
    },
    methods:{
        async postInputMaintenance(){
            const resp = await axios.post('http://localhost:3000/server/inputmaintenance',{
                iduser: this.$auth.user.id,
                nama:this.$auth.user.nama,
                lokasiServer:this.$auth.user.lokasi,
                tanggal:this.inputMaintenance.tanggal,
                suhu: this.inputMaintenance.suhu,
                kelembapan : this.inputMaintenance.kelembapan,
                ac: this.inputMaintenance.ac,
                ups: this.inputMaintenance.ups,
                baterai: this.inputMaintenance.baterai,
                network: this.inputMaintenance.network,
                server: this.inputMaintenance.server,
                keterangan: this.inputMaintenance.keterangan,
            })
                if(resp){
                    swal('data berhasil ditambahkan',{icon:'success'})
                    this.$router.push('/maintenance')
                }
        }
    }, 
    mounted(){
        this.inputMaintenance.tanggal = moment().format("YYYY-MM-DD")
    }
}
</script>

<style>

</style>