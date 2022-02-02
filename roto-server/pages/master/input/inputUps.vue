<template>
<div class="bg-gray-300 min-h-screen w-widthContent ml-auto overflow-x-hidden">
    
    <section class="bg-gray-100 min-h-screen w-widthContentField m-auto mt-7 p-4 ">
         <NuxtLink to="/master/ups"
          class="flex items-center justify-between rounded-md w-28 px-4 py-2 bg-gray-700 hover:bg-gray-600 transition duration-200">
          <div>
            <font-awesome-icon :icon="['fas', 'arrow-left']" class="text-gray-200" />
          </div>
          <p class="font-medium text-sm text-gray-200">kembali</p>
        </NuxtLink> 
        <p class="text-center text-xl text-gray-700 font-semibold">Input data baru</p>

        <div class="grid grid-cols-3 w-11/12 mt-6">
            <div v-for="(err,index) in errors" :key="index" class="bg-white rounded-lg w-4/5 mb-1 bg-opacity-90">
                <li class="text-red-400 text-xs p-2">{{err.msg}}</li>
            </div>
        </div>
    <ValidationObserver v-slot={invalid,valid}>
    <form class="mt-8 min-w-min" @submit.prevent="postInputUps">
        <div>
            <div class="grid grid-cols-3">
                <div class="mb-4 has-tooltip">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan beban kritis ups-nya</span>

                    <label for="upsCriticalLoad" class="block mb-2 text-sm">ups critical load</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|numeric" v-slot={errors}>
                            <input type="text" v-model="inputUps.upsCriticalLoad" name="upsCriticalLoad" id="upsCriticalLoad" class="p-2 w-full rounded-lg outline-none bg-gray-200 uppercase">
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="mb-4 has-tooltip" :class="[inputUps.upsCriticalLoad !== '' ? 'incop' : 'decop']">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan suhu kritis-nya</span>

                    <label for="upsCriticalTemperature" class="block mb-2 text-sm">ups critical temperature</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|numeric" v-slot={errors}>
                            <input type="text" v-model="inputUps.upsCriticalTemperature" name="upsCriticalTemperature" id="upsCriticalTemperature" class="p-2 w-full rounded-lg outline-none bg-gray-200 uppercase" :disabled="inputUps.upsCriticalLoad === ''">
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="mb-4 has-tooltip" :class="[inputUps.upsCriticalTemperature !== '' ? 'incop' : 'decop']">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan kapasitas kritis</span>

                    <label for="upsCriticalCapacity" class="block mb-2 text-sm">ups critical capacity</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|numeric" v-slot={errors}>
                            <input type="text" v-model="inputUps.upsCriticalCapacity" name="upsCriticalCapacity" id="upsCriticalCapacity" class="p-2 w-full rounded-lg outline-none bg-gray-200 uppercase" :disabled="inputUps.upsCriticalTemperature === ''">
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="mb-4 has-tooltip" :class="[inputUps.upsCriticalCapacity !== '' ? 'incop' : 'decop']">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan nomor serial ups-nya</span>

                    <label for="nomorSerial" class="block mb-2 text-sm">nomor serial</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|alpha_dash" v-slot={errors}>
                            <input type="text" v-model="inputUps.nomorSerial" name="nomorSerial" id="nomorSerial" class="p-2 w-full rounded-lg outline-none bg-gray-200 uppercase" :disabled="inputUps.upsCriticalCapacity === ''">
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="mb-4 has-tooltip" :class="[inputUps.nomorSerial !== '' ? 'incop' : 'decop']">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan nama sistem ups-nya</span>

                    <label for="namaSistem" class="block mb-2 text-sm">nama sistem</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|passchar" v-slot={errors}>
                            <input type="text" v-model="inputUps.namaSistem" name="namaSistem" id="namaSistem" class="p-2 w-full rounded-lg outline-none bg-gray-200 uppercase" :disabled="inputUps.nomorSerial === ''">
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="mb-4 has-tooltip" :class="[inputUps.namaSistem !== '' ? 'incop' : 'decop']">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan model ups</span>

                    <label for="model" class="block mb-2 text-sm">model</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|passchar" v-slot={errors}>
                            <input type="text" v-model="inputUps.model" name="model" id="model" class="p-2 w-full rounded-lg outline-none bg-gray-200 uppercase" :disabled="inputUps.namaSistem === ''">
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="mb-4 has-tooltip" :class="[inputUps.model !== '' ? 'incop' : 'decop']">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan manufaktur ups</span>

                    <label for="manufaktur" class="block mb-2 text-sm">manufaktur</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|passchar" v-slot={errors}>
                            <input type="text" v-model="inputUps.manufaktur" name="manufaktur" id="manufaktur" class="p-2 w-full rounded-lg outline-none bg-gray-200 uppercase" :disabled="inputUps.model === ''">
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="mb-4 has-tooltip" :class="[inputUps.manufaktur !== '' ? 'incop' : 'decop']">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan peringkat tegangan atau voltage rating</span>

                    <label for="peringkatTegangan" class="block mb-2 text-sm">peringkat tegangan</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|numeric" v-slot={errors}>
                            <input type="text" v-model="inputUps.peringkatTegangan" name="peringkatTegangan" id="peringkatTegangan" class="p-2 w-full rounded-lg outline-none bg-gray-200 uppercase" :disabled="inputUps.manufaktur === ''">
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="mb-4 has-tooltip" :class="[inputUps.peringkatTegangan !== '' ? 'incop' : 'decop']">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-4">masukan peringkat frekuensi atau rating frequency</span>

                    <label for="peringkatFrekuensi" class="block mb-2 text-sm">peringkat frekuensi</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|numeric" v-slot={errors}>
                            <input type="text" v-model="inputUps.peringkatFrekuensi" name="peringkatFrekuensi" id="peringkatFrekuensi" class="p-2 w-full rounded-lg outline-none bg-gray-200 uppercase" :disabled="inputUps.peringkatTegangan === ''">
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="mb-4 has-tooltip" :class="[inputUps.peringkatFrekuensi !== '' ? 'incop' : 'decop']">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan peringkat tegangan baterai atau voltage rating battery</span>

                    <label for="peringkatTeganganBaterai" class="block mb-2 text-sm">peringkat tegangan baterai</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|numeric" v-slot={errors}>
                            <input type="text" v-model="inputUps.peringkatTeganganBaterai" name="peringkatTeganganBaterai" id="peringkatTeganganBaterai" class="p-2 w-full rounded-lg outline-none bg-gray-200 uppercase" :disabled="inputUps.peringkatFrekuensi === ''">
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="mb-4 has-tooltip" :class="[inputUps.peringkatTeganganBaterai !== '' ? 'incop' : 'decop']">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan tahun masuk barang</span>

                    <label for="tahun" class="block mb-2 text-sm">tahun</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required" v-slot={errors}>
                            <input type="date" v-model="inputUps.tahun" name="tahun" id="tahun" class="p-2 w-full rounded-lg outline-none bg-gray-200 uppercase" :disabled="inputUps.peringkatTeganganBaterai === ''">
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="mb-4 has-tooltip" :class="[inputUps.peringkatTeganganBaterai !== '' ? 'incop' : 'decop']">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan batas garansi</span>

                    <label for="garansi" class="block mb-2 text-sm">garansi</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required" v-slot={errors}>
                            <input type="date" v-model="inputUps.garansi" name="garansi" id="garansi" class="p-2 w-full rounded-lg outline-none bg-gray-200 uppercase" :disabled="inputUps.peringkatTeganganBaterai === ''">
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
            </div>
        </div>
        <button class="mt-10 opacity-10 bg-gray-700 text-gray-200 w-24 py-2 rounded cursor-default" type="submit" :class="{activesubmit : valid}" :disabled="invalid">simpan</button>
    </form>
    </ValidationObserver>
</section>
</div>
</template>

<script>
import moment from 'moment'
import { ValidationObserver, ValidationProvider } from "vee-validate";

export default {
    middleware:"isAuthenticated",
    components:{
        ValidationObserver,
        ValidationProvider
    },
    data(){
        return{
            inputUps:{
                model : "",
                upsCriticalLoad : "",
                upsCriticalTemperature : "",
                upsCriticalCapacity : "",
                peringkatTegangan : "",
                peringkatFrekuensi : "",
                peringkatTeganganBaterai : "",
                manufaktur : "",
                nomorSerial : "",
                namaSistem : "",
                tahun : "",
                garansi : "",
            },
            errors:"",
        }
    },
    methods:{
        async postInputUps(){
                const res = await this.$axios.post('/master/inputups',{
                    iduser:this.$auth.user.id,
                    lokasiServer:this.$auth.user.lokasi,
                    model : this.inputUps.model,
                    upsCriticalLoad : this.inputUps.upsCriticalLoad,
                    upsCriticalTemperature : this.inputUps.upsCriticalTemperature,
                    upsCriticalCapacity : this.inputUps.upsCriticalCapacity,
                    peringkatTegangan : this.inputUps.peringkatTegangan,
                    peringkatFrekuensi : this.inputUps.peringkatFrekuensi,
                    peringkatTeganganBaterai : this.inputUps.peringkatTeganganBaterai,
                    manufaktur : this.inputUps.manufaktur,
                    nomorSerial : this.inputUps.nomorSerial,
                    namaSistem : this.inputUps.namaSistem,
                    tahun: this.inputUps.tahun,
                    garansi : this.inputUps.garansi,
                })
               
                if(res.data.errors){
                    this.errors=res.data.errors
                    this.$router.push('/master/input/inputUps')
                }
                else{
                    swal('data berhasil ditambahkan',{icon:'success'})
                    this.$router.push('/master/ups')
                }
        }
    },
    mounted(){
        this.inputUps.tahun = moment().format('YYYY-MM-DD')
    }

}
</script>

<style>
.incop{
    opacity:1,
}
.decop{
    opacity: 0.1;
}
.activesubmit {
    background-color: rgb(37, 45, 56);
    color:whitesmoke;
    width:6rem;
    cursor:pointer;
    opacity:1;
    padding-top: .5rem;
    padding-bottom: .5rem;
    transition: all 0.5s;
    transform:translateY(-2px);
}
</style>