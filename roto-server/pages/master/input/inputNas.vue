z<template>
<div class="bg-gray-300 min-h-screen w-widthContent ml-auto overflow-x-hidden">
    
    <section class="bg-gray-100 min-h-screen w-widthContentField m-auto mt-7 p-4">
        <NuxtLink to="/master/nas"
          class="flex items-center justify-between rounded-md w-28 px-4 py-2 bg-gray-700 hover:bg-gray-600 transition duration-200">
          <div>
            <font-awesome-icon :icon="['fas', 'arrow-left']" class="text-gray-200" />
          </div>
          <p class="font-medium text-sm text-gray-200">kembali</p>
        </NuxtLink> 
        <p class="text-center text-xl text-gray-700 font-semibold">Input data baru NAS</p>

    <ValidationObserver v-slot={invalid,valid}>
    <form class="min-w-min mt-6" @submit.prevent="postInputNas">
        <div>
            <div class="grid grid-cols-2">
                <div class="mb-4 has-tooltip">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan nama merek</span>

                    <label for="merek" class="block mb-2 text-sm">merek</label>
                     <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|passchar" v-slot={errors}>
                            <input type="text" v-model="inputNas.merek" name="merek" id="merek" class="p-2 w-full rounded-lg bg-gray-300 outline-none uppercase">
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="mb-4 has-tooltip" :class="[inputNas.merek !== '' ? 'incop' : 'decop']">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan nama model</span>

                    <label for="model" class="block mb-2 text-sm">model</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|inputval" v-slot={errors}>
                            <input type="text" v-model="inputNas.model" name="model" id="model" class="p-2 w-full rounded-lg bg-gray-300 outline-none uppercase" :disabled="inputNas.merek === ''">
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="mb-4 has-tooltip" :class="[inputNas.model !== '' ? 'incop' : 'decop']">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan tipe NAS</span>

                    <label for="tipe" class="block mb-2 text-sm">tipe</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|inputval" v-slot={errors}>
                            <input type="text" v-model="inputNas.tipe" name="tipe" id="tipe" class="p-2 w-full rounded-lg bg-gray-300 outline-none uppercase" :disabled="inputNas.model === ''">
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="mb-4 has-tooltip" :class="[inputNas.tipe !== '' ? 'incop' : 'decop']">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan jumlah storage</span>

                    <label for="storage" class="block mb-2 text-sm">storage</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|passchar" v-slot={errors}>
                            <div class="flex">
                            <input type="text" v-model="inputNas.storage" name="storage" id="storage" class="p-2 w-full rounded-l-lg outline-none bg-gray-300" :disabled="inputNas.tipe === ''">
                            <select name="storage" id="storage" class="p-2 rounded-r-lg -ml-2" :disabled="inputNas.tipe === ''" v-model="inputNas.satuanStorage" required>
                                <option disabled value="" class="text-gray-700 text-xs">satuan</option>
                                <option value="GB">GB</option>
                                <option value="TB">TB</option>
                            </select>
                            </div>
                             <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="mb-4 has-tooltip" :class="[inputNas.storage !== '' ? 'incop' : 'decop']">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan nama processor</span>

                    <label for="processor" class="block mb-2 text-sm">processor</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|passchar" v-slot={errors}>
                            <input type="text" v-model="inputNas.processor" name="processor" id="processor" class="p-2 w-full rounded-lg bg-gray-300 outline-none uppercase" :disabled="inputNas.storage === ''">
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="mb-4 has-tooltip" :class="[inputNas.processor !== '' ? 'incop' : 'decop']">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan nama cpu</span>

                    <label for="cpu" class="block mb-2 text-sm">cpu</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|inputval" v-slot={errors}>
                            <input type="text" v-model="inputNas.cpu" name="cpu" id="cpu" class="p-2 w-full rounded-lg bg-gray-300 outline-none uppercase" :disabled="inputNas.processor === ''">
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="mb-4 has-tooltip" :class="[inputNas.cpu !== '' ? 'incop' : 'decop']">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan raid</span>

                    <label for="raid" class="block mb-2 text-sm">raid</label>
                     <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|passchar" v-slot={errors}>
                            <input type="text" v-model="inputNas.raid" name="raid" id="raid" class="p-2 w-full rounded-lg bg-gray-300 outline-none uppercase" :disabled="inputNas.cpu === ''">
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="mb-4 has-tooltip" :class="[inputNas.raid !== '' ? 'incop' : 'decop']">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan tahun masuk NAS</span>

                    <label for="tahun" class="block mb-2 text-sm">tahun</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required" v-slot={errors}>
                            <input type="date" v-model="inputNas.tahun" name="tahun" id="tahun" class="p-2 w-full rounded-lg bg-gray-300 outline-none" :disabled="inputNas.raid === ''">
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div> 
                <div class="mb-4 has-tooltip" :class="[inputNas.raid !== '' ? 'incop' : 'decop']">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan batas garansi</span>

                    <label for="garansi" class="block mb-2 text-sm">garansi</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required" v-slot={errors}>
                            <input type="date" v-model="inputNas.garansi" name="garansi" id="garansi" class="p-2 w-72 rounded-lg bg-gray-300 outline-none uppercase" :disabled="inputNas.raid === ''">
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
        ValidationProvider,
        ValidationObserver,
    },
    data(){
        return {
            inputNas:{
                merek:"",
                model: "",
                processor: "",
                storage : "",
                satuanStorage: "",
                tipe: "",
                cpu: "",
                raid:"",
                tahun : moment().format('YYYY-MM-DD'),
                garansi : "",
            },
        }
    },
     methods:{
        async postInputNas(){
                const res = await this.$axios.post('/master/inputnas',{
                    iduser: this.$auth.user.id,
                    lokasiServer: this.$auth.user.lokasi,
                    merek : this.inputNas.merek,
                    model : this.inputNas.model,
                    processor : this.inputNas.processor,
                    storage: this.inputNas.storage,
                    satuanStorage : this.inputNas.satuanStorage,
                    tipe: this.inputNas.tipe,
                    cpu : this.inputNas.cpu,
                    raid : this.inputNas.raid,
                    tahun: this.inputNas.tahun,
                    garansi : this.inputNas.garansi,
                })
               
                if(res.data.errors){
                    this.errors=res.data.errors
                    this.$router.push('/master/input/inputNas')
                }
                else{
                    swal('data berhasil ditambahkan',{icon:'success'})
                    this.$router.push('/master/nas')
                }
        }
    },
    mounted(){
        this.inputNas.tahun = moment().format('YYYY-MM-DD')
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
    background-color: rgb(55, 65, 81);
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