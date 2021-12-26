<template>
<div class="bg-gray-300 min-h-screen w-widthContent ml-auto overflow-x-hidden">
    <section class="bg-gray-100 min-h-screen w-widthContentField m-auto mt-7 p-4 ">
        <NuxtLink to="/maintenance"
          class="flex items-center justify-between rounded-md w-28 px-4 py-2 bg-gray-700 hover:bg-gray-600 transition duration-200">
          <div>
            <font-awesome-icon :icon="['fas', 'arrow-left']" class="text-gray-200" />
          </div>
          <p class="font-medium text-sm text-gray-200">kembali</p>
        </NuxtLink> 
        <p class="text-center text-xl text-gray-700 font-semibold mt-4 mb-4">Input maintenance</p>
        <hr>

    <ValidationObserver v-slot={invalid,valid} ref="obserf">
    <form @submit.prevent="[postInputMaintenance(),sendNotifyMaintenance()]" class="min-w-min mt-10" id="inputmaintenance">
        <div>
            <div class="grid grid-cols-2">
                <div class="mb-4">
                    <div class="has-tooltip">
                        <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-24">masukan suhu ruangan server</span>
                        <label for="suhu" class="block mb-2 text-sm">suhu</label>
                        <div class="flex flex-col w-72">
                            <ValidationProvider rules="required|numeric" v-slot={errors}>
                            <div class="flex items-center w-full">
                                <div class="flex">
                                    <input type="text" v-model="inputMaintenance.suhu" name="suhu" id="suhu" class="p-2 w-full rounded-l-lg bg-gray-300 outline-none">
                                    <input type="text" readonly class="rounded-r-lg py-2 w-16 bg-gray-200 cursor-default text-center text-gray-700 outline-none" value="℃">
                                </div>
                                <font-awesome-icon :icon="['fas', 'check-circle']" class="transition-all duration-200 text-green-500 ml-2 opacity-10" :class="{checktrue : inputMaintenance.suhu!=='' && !errors[0]}"/>
                            </div>
                            <p class="text-xs mt-1 text-right text-red-500">{{ errors[0] }}</p>
                            </ValidationProvider>
                        </div>
                        <small v-if="inputMaintenance.suhu > 50" class="text-green-500">suhu ruangan tinggi</small>
                    </div>
                </div>
                <div class="mb-2" :class="[inputMaintenance.suhu !== '' ? 'incop' : 'decop']">
                    <div class="has-tooltip">
                        <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-36">masukan kelembapan ruangan server</span>
                        <label for="kelembapan" class="block mb-2 text-sm">kelembapan</label>
                        <div class="flex flex-col w-72">
                            <ValidationProvider rules="required|numeric" v-slot={errors}>
                            <div class="flex items-center">
                                <div class="flex">
                                    <input type="text" v-model="inputMaintenance.kelembapan" name="kelembapan" id="kelembapan" class="p-2 w-full rounded-l-lg outline-none bg-gray-300" :disabled="inputMaintenance.suhu === ''">
                                    <input type="text" readonly class="rounded-r-lg py-2 w-16 bg-gray-200 cursor-default text-center text-gray-700 outline-none" value="%">
                                </div>
                                <font-awesome-icon :icon="['fas', 'check-circle']" class="transition-all duration-200 text-green-500 ml-2 opacity-10" :class="{checktrue : inputMaintenance.kelembapan !=='' && !errors[0]}"/>
                            </div>
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                            </ValidationProvider>
                        </div>
                        <small v-if="inputMaintenance.kelembapan > 80" class="text-green-500">kelembapan ruangan tinggi</small>
                    </div>
                </div>
                <div class="mb-2" :class="[inputMaintenance.kelembapan !== '' ? 'incop' : 'decop']">
                    <div class="has-tooltip">
                        <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-36">masukan kondisi suhu AC</span>
                        <label for="ac" class="block mb-2 text-sm">AC</label>
                        <div class="flex flex-col w-72">
                            <ValidationProvider rules="required" v-slot={errors}>
                            <div class="flex items-center">
                                <select name="ac" id="ac" class="p-2 w-full rounded-lg  bg-gray-300 outline-none" v-model="inputMaintenance.ac" :disabled="inputMaintenance.kelembapan === ''">
                                    <option value="" disabled>pilih kondisi</option>
                                    <option value="baik">baik</option>
                                    <option value="tidak baik">tidak baik</option>
                                </select>
                                <font-awesome-icon :icon="['fas', 'check-circle']" class="transition-all duration-200 text-green-500 ml-2 opacity-10" :class="{checktrue : inputMaintenance.ac !=='' && !errors[0]}"/>
                            </div>
                            <textarea v-if="inputMaintenance.ac === 'tidak baik'" v-model="inputMaintenance.keteranganAc" name="acexplain" id="acexplain" cols="15" rows="3" class="bg-gray-300 mt-1 p-2 outline-none rounded-lg" placeholder="note..."></textarea>
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                            </ValidationProvider>
                        </div>
                    </div>
                </div>
                <div class="mb-2" :class="[inputMaintenance.ac !== '' ? 'incop' : 'decop']">
                    <div class="has-tooltip">
                        <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-36">masukan kondisi UPS</span>
                        <label for="ups" class="block mb-2 text-sm">UPS</label>
                        <div class="flex flex-col w-72">
                            <ValidationProvider rules="required" v-slot={errors}>
                            <div class="flex items-center">
                                <select name="ups" id="ups" class="p-2 w-full rounded-lg bg-gray-300  outline-none" v-model="inputMaintenance.ups" :disabled="inputMaintenance.ac === ''">
                                    <option value="" disabled>pilih kondisi</option>
                                    <option value="baik">baik</option>
                                    <option value="tidak baik">tidak baik</option>
                                </select>
                                <font-awesome-icon :icon="['fas', 'check-circle']" class="transition-all duration-200 text-green-500 ml-2 opacity-10" :class="{checktrue : inputMaintenance.ups !=='' && !errors[0]}"/>
                            </div>
                            <textarea v-if="inputMaintenance.ups === 'tidak baik'" v-model="inputMaintenance.keteranganUps" name="acexplain" id="acexplain" cols="15" rows="3" class="bg-gray-300 mt-1 p-2 outline-none rounded-lg" placeholder="note..."></textarea>
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                            </ValidationProvider>
                        </div>
                    </div>
                </div>
                <div class="mb-2" :class="[inputMaintenance.ups !== '' ? 'incop' : 'decop']">
                    <div class="has-tooltip">
                        <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-36">masukan kondisi baterai</span>
                        <label for="baterai" class="block mb-2 text-sm">baterai</label>
                        <div class="flex flex-col w-72">
                            <ValidationProvider rules="required" v-slot={errors}>
                            <div class="flex items-center">
                                <select v-model="inputMaintenance.baterai" name="baterai" id="baterai" class="p-2 w-full rounded-lg bg-gray-300 outline-none" :disabled="inputMaintenance.ups === ''">
                                    <option value="" disabled>pilih kondisi</option>
                                    <option value="baik">baik</option>
                                    <option value="tidak baik">tidak baik</option>
                                </select>
                                <font-awesome-icon :icon="['fas', 'check-circle']" class="transition-all duration-200 text-green-500 ml-2 opacity-10" :class="{checktrue : inputMaintenance.baterai !== '' && !errors[0]}"/>
                            </div>
                            <textarea v-if="inputMaintenance.baterai === 'tidak baik'" v-model="inputMaintenance.keteranganBaterai" name="acexplain" id="acexplain" cols="15" rows="3" class="bg-gray-300 mt-1 p-2 outline-none rounded-lg" placeholder="note..."></textarea>
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                            </ValidationProvider>
                        </div>
                    </div>
                </div>
                <div class="mb-2" :class="[inputMaintenance.baterai !== '' ? 'incop' : 'decop']">
                    <div class="has-tooltip">
                        <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-20">masukan kondisi server</span>
                        <label for="server" class="block mb-2 text-sm">server</label>
                        <div class="flex flex-col w-72">
                            <ValidationProvider rules="required|alpha_spaces" v-slot={errors}>
                            <div class="flex items-center">
                                <select v-model="inputMaintenance.server" name="server" id="server" class="p-2 w-full rounded-lg bg-gray-300 outline-none" :disabled="inputMaintenance.baterai === ''">
                                    <option value="" disabled>pilih kondisi</option>
                                    <option value="baik">baik</option>
                                    <option value="tidak baik">tidak baik</option>
                                </select>
                                <font-awesome-icon :icon="['fas', 'check-circle']" class="transition-all duration-200 text-green-500 ml-2 opacity-10" :class="{checktrue : inputMaintenance.server !== '' && !errors[0]}"/>
                            </div>
                            <textarea v-if="inputMaintenance.server === 'tidak baik'" v-model="inputMaintenance.keteranganServer" name="acexplain" id="acexplain" cols="15" rows="3" class="bg-gray-300 mt-1 p-2 outline-none rounded-lg" placeholder="note..."></textarea>
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                            </ValidationProvider>
                        </div>
                    </div>
                </div>
                <div class="mb-2" :class="[inputMaintenance.server !== '' ? 'incop' : 'decop']">
                    <div class="has-tooltip">
                        <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-20">masukan keterangan</span>
                        <label for="keterangan" class="block mb-2 text-sm">keterangan</label>
                        <div class="flex flex-col w-72">
                            <textarea rows="4" form="inputmaintenance" type="text" v-model="inputMaintenance.keterangan" name="keterangan" id="keterangan" class="p-2 w-full rounded-lg bg-gray-300 outline-none" :disabled="inputMaintenance.server === ''"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <button class="opacity-10 px-6 bg-gray-700 text-gray-200 py-2 rounded cursor-default mt-4 text-center transition duration-200 hover:bg-gray-600" :class="{activesubmit : valid}" type="submit" :disabled="invalid">simpan</button>
    </form>
    </ValidationObserver>
</section>
</div>
</template>

<script>
import moment from 'moment'
import { ValidationObserver, ValidationProvider } from "vee-validate";
require('dotenv').config()

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
                server:'',
                keterangan:'',
                keteranganAc:'',
                keteranganUps:'',
                keteranganBaterai:'',
                keteranganServer:''
            },
            disabled:true,
            tokentelegram:process.env.TokenTelegram,
            chatId:process.env.ChatId,
        }
    },
    computed: {
        loggedIn() {
        return this.$auth.loggedIn
        },
        user() {
        return this.$auth.user
        },
        validated(){
            if(this.inputMaintenance.suhu !== ''){
                return true
            }
        }
    },
    methods:{
        async postInputMaintenance(){
            const resp = await this.$axios.post('/inputmaintenance',{
                iduser: this.$auth.user.id,
                nama:this.$auth.user.nama,
                lokasiServer:this.$auth.user.lokasi,
                tanggal:this.inputMaintenance.tanggal,
                suhu: this.inputMaintenance.suhu,
                kelembapan: this.inputMaintenance.kelembapan,
                ac: this.inputMaintenance.ac,
                ups: this.inputMaintenance.ups,
                baterai: this.inputMaintenance.baterai,
                network: this.inputMaintenance.network,
                server: this.inputMaintenance.server,
                keterangan: this.inputMaintenance.keterangan,
                keteranganAc: this.inputMaintenance.keteranganAc,
                keteranganUps: this.inputMaintenance.keteranganUps,
                keteranganBaterai: this.inputMaintenance.keteranganBaterai,
                keteranganServer: this.inputMaintenance.keteranganServer,
            })
                if(resp){
                    swal('data berhasil ditambahkan',{icon:'success'})
                    this.$router.push('/maintenance')
                }
        },
        async sendNotifyMaintenance(){
            if(this.inputMaintenance.suhu > 50 && this.$auth.user.role === 'Security' || this.inputMaintenance.suhu > 50 && this.$auth.user.role === 'Admin teknisi' || this.inputMaintenance.suhu > 50 && this.$auth.user.role === 'Teknisi listrik' || this.inputMaintenance.suhu > 50 && this.$auth.user.role === 'Teknisi ac'){
                const flashMessage = `suhu ruangan server : ${this.inputMaintenance.suhu}℃. suhu terlalu tinggi. harap melakukan pemeriksaan di ${this.user.lokasi}`
                const resp = await this.$axios.post(`https://api.telegram.org/bot${this.tokentelegram}/sendMessage?chat_id=${this.chatId}&parse_mode=Markdown&text=${flashMessage}`)
                if(resp){
                    swal('pesan di kirim ke EDP dan PA',{icon:'success'})
                    this.$router.push('/maintenance')
                }
                else{ 
                    swal('data tidak terkirim',{icon:'error'})
                }
            }
            if(this.inputMaintenance.kelembapan > 80 && this.$auth.user.role === 'Security' || this.inputMaintenance.kelembapan > 80 && this.$auth.user.role === 'Admin teknisi' || this.inputMaintenance.kelembapan > 80 && this.$auth.user.role === 'Teknisi listrik' || this.inputMaintenance.kelembapan > 80 && this.$auth.user.role === 'Teknisi ac'){
                const flashMessage = `kelembapan ruangan server : ${this.inputMaintenance.kelembapan}%. kelembapan terlalu tinggi. harap melakukan pemeriksaan ${this.user.lokasi}`
                const resp = await this.$axios.post(`https://api.telegram.org/bot${this.tokentelegram}/sendMessage?chat_id=${this.chatId}&parse_mode=Markdown&text=${flashMessage}`)
                if(resp){
                    swal('pesan di kirim ke EDP dan PA',{icon:'success'})
                    this.$router.push('/maintenance')
                }
                else{ 
                    swal('data tidak terkirim',{icon:'error'})
                }
            }
            if(this.inputMaintenance.ac === 'tidak baik' && this.$auth.user.role === "Security" || this.inputMaintenance.ac === 'tidak baik' && this.$auth.user.role === "Admin teknisi" || this.inputMaintenance.ac === 'tidak baik' && this.$auth.user.role === "Admin teknisi" || this.inputMaintenance.ac === 'tidak baik' && this.$auth.user.role === "Teknisi listrik" || this.inputMaintenance.ac === 'tidak baik' && this.$auth.user.role === "Teknisi ac"){
                const flashMessage = `AC sedang bermasalah, harap melakukan pemeriksaan. note : ${this.inputMaintenance.keteranganAc} di ${this.user.lokasi}`
                const resp = await this.$axios.post(`https://api.telegram.org/bot${this.tokentelegram}/sendMessage?chat_id=${this.chatId}&parse_mode=Markdown&text=${flashMessage}`)
                if(resp){
                    swal('pesan di kirim ke EDP dan PA',{icon:'success'})
                    this.$router.push('/maintenance')
                }
                else{ 
                    swal('data tidak terkirim',{icon:'error'})
                }
            }
            if(this.inputMaintenance.ups === 'tidak baik' && this.$auth.user.role === "Security" || this.inputMaintenance.ups === 'tidak baik' && this.$auth.user.role === "Admin teknisi" || this.inputMaintenance.ups === 'tidak baik' && this.$auth.user.role === "Teknisi listrik" || this.inputMaintenance.ups === 'tidak baik' && this.$auth.user.role === "Teknisi ac"){
                const flashMessage = `UPS sedang bermasalah, harap melakukan pemeriksaan. note : ${this.inputMaintenance.keteranganUps} di ${this.user.lokasi}`
                const resp = await this.$axios.post(`https://api.telegram.org/bot${this.tokentelegram}/sendMessage?chat_id=${this.chatId}&parse_mode=Markdown&text=${flashMessage}`)
                if(resp){
                    swal('pesan di kirim ke EDP dan PA',{icon:'success'})
                    this.$router.push('/maintenance')
                }
                else{ 
                    swal('data tidak terkirim',{icon:'error'})
                }
            }
            if(this.inputMaintenance.baterai === 'tidak baik' && this.$auth.user.role === "Security" || this.inputMaintenance.baterai === 'tidak baik' && this.$auth.user.role === "Admin teknisi" || this.inputMaintenance.baterai === 'tidak baik' && this.$auth.user.role === "Teknisi listrik" || this.inputMaintenance.baterai === 'tidak baik' && this.$auth.user.role === "Teknisi ac"){
                const flashMessage = `Baterai sedang bermasalah, harap melakukan pemeriksaan. note : ${this.inputMaintenance.keteranganBaterai} di ${this.user.lokasi}`
                const resp = await this.$axios.post(`https://api.telegram.org/bot${this.tokentelegram}/sendMessage?chat_id=${this.chatId}&parse_mode=Markdown&text=${flashMessage}`)
                if(resp){
                    swal('pesan di kirim ke EDP dan PA',{icon:'success'})
                    this.$router.push('/maintenance')
                }
                else{ 
                    swal('data tidak terkirim',{icon:'error'})
                }
            }
            if(this.inputMaintenance.server === 'tidak baik' && this.$auth.user.role === "Security" || this.inputMaintenance.server === 'tidak baik' && this.$auth.user.role === "Admin teknisi" || this.inputMaintenance.server === 'tidak baik' && this.$auth.user.role === "Teknisi listrik" || this.inputMaintenance.server === 'tidak baik' && this.$auth.user.role === "Teknisi ac"){
                const flashMessage = `Server sedang bermasalah, harap melakukan pemeriksaan. note : ${this.inputMaintenance.keteranganServer} di ${this.user.lokasi}`
                const resp = await this.$axios.post(`https://api.telegram.org/bot${this.tokentelegram}/sendMessage?chat_id=${this.chatId}&parse_mode=Markdown&text=${flashMessage}`)
                if(resp){
                    swal('pesan di kirim ke EDP dan PA',{icon:'success'})
                    this.$router.push('/maintenance')
                }
                else{ 
                    swal('data tidak terkirim',{icon:'error'})
                }
            }
        }
    }, 
    mounted(){
        this.inputMaintenance.tanggal = moment().format("YYYY-MM-DD")
    }
}
</script>

<style>
.checktrue{
    opacity:1;
}
.activesubmit {
    background-color: rgb(55, 65, 81);
    color:whitesmoke;
    cursor:pointer;
    opacity:1;
    padding-top: .5rem;
    padding-bottom: .5rem;
    transition: all 0.5s;
    transform:translateY(4px);
    text-align:center;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
}
.redring:focus {
    outline: 1px solid rgb(238, 56, 56);
}
.bluering {
    outline: 1px solid rgb(56, 135, 238);
}
.incop{
    opacity:1,
}
.decop{
    opacity: 0.1;
}
</style>