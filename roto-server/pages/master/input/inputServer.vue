<template>
<div class="bg-gray-300 min-h-screen w-widthContent ml-auto overflow-x-hidden">
    
    <section class="bg-gray-100 min-h-screen w-widthContentField m-auto mt-7 p-4 ">
        <NuxtLink to="/master/server"
          class="flex items-center justify-between rounded-md w-28 px-4 py-2 bg-gray-700 hover:bg-gray-600 transition duration-200">
          <div>
            <font-awesome-icon :icon="['fas', 'arrow-left']" class="text-gray-200" />
          </div>
          <p class="font-medium text-sm text-gray-200">kembali</p>
        </NuxtLink> 
        <p class="text-center text-xl text-gray-700 font-semibold">Input data baru Server</p>

    <ValidationObserver v-slot={invalid,valid}>
    <form @submit.prevent="postInputServer" class="min-w-min mt-10">
        <div class="grid grid-cols-2">
            <div>
                <div class="has-tooltip ">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-36">masukan nama produk</span>

                    <label for="produk" class="block mb-2 text-sm">produk</label>
                    
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|passchar" v-slot={errors}>
                            <input type="text" name="produk" id="produk" class="p-2 w-full rounded-lg bg-gray-300 outline-none uppercase" v-model="inputServer.produk" autofocus>
                            <p class="text-xs mt-1 text-right text-red-500">{{ errors[0] }}</p>
                        </ValidationProvider>
                    </div>
                </div>
            </div>
            <div :class="[inputServer.produk !== '' ? 'incop' : 'decop']">
                <div class="has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-36">masukan nama merek</span>
                    <label for="merek" class="block mb-2 text-sm">merek</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|passchar" v-slot={errors}>
                            <input type="text" name="merek" id="merek" class="p-2 w-full rounded-lg outline-none bg-gray-300 uppercase" v-model="inputServer.merek" :disabled="inputServer.produk === ''">
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
            </div>
            <div class="mt-2" :class="[inputServer.merek !== '' ? 'incop' : 'decop']">
                <div class="has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan nama modelnya</span>
                    <label for="model" class="block mb-2 text-sm">model</label>

                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|inputval" v-slot={errors}>
                            <input type="text" name="model" id="model" class="p-2 w-full outline-none rounded-lg bg-gray-300 uppercase" v-model="inputServer.model" :disabled="inputServer.merek === ''" >
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>  
            </div>
            <div class="mt-2" :class="[inputServer.model !== '' ? 'incop' : 'decop']">
                <div class="has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-24">masukan jenis processor-nya</span>
                    <label for="processor" class="block mb-2 text-sm">processor</label>

                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|passchar" v-slot={errors}>
                            <input type="text" name="processor" id="processor" class="p-2 w-full rounded-lg bg-gray-300 outline-none uppercase" v-model="inputServer.processor" :disabled="inputServer.model === ''" >
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
            </div>              
            <div class="mt-2" :class="[inputServer.processor !== '' ? 'incop' : 'decop']">
                <div class="has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan jumlah memori</span>
                    <label for="memori" class="block mb-2 text-sm">memori</label>

                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|passchar" v-slot={errors}>
                            <div class="flex">
                            <input type="text"  name="memori" id="memori" class="p-2 w-full rounded-lg outline-none bg-gray-300 uppercase" v-model="inputServer.memori" :disabled="inputServer.processor === ''" >
                            <select name="kapasitas" id="kapasitas" class="p-2 rounded-r-lg -ml-2 cursor-pointer bg-gray-200" v-model="inputServer.satuanMemori" :disabled="inputServer.processor === ''" required>
                                <option disabled class="text-gray-700 text-xs" value="">satuan</option>
                                <option value="GB">GB</option>
                                <option value="TB">TB</option>
                            </select> 
                            </div>
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
            </div>
            <div class="mt-2" :class="[inputServer.memori !== '' ? 'incop' : 'decop']">
                <div class="has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-24">masukan jumlah internal storage</span>
                    <label for="internalStorage" class="block mb-2 text-sm">internal Storage</label>
                    
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|passchar" v-slot={errors}>
                            <div class="flex">
                            <input type="text"  name="internalStorage" id="internalStorage" class="p-2 w-full rounded-lg bg-gray-300 outline-none uppercase" v-model="inputServer.internalStorage" :disabled="inputServer.memori === ''" >
                            <select name="kapasitas" id="kapasitas" class="p-2 cursor-pointer rounded-r-lg -ml-2 ring-blue-500 bg-gray-200" v-model="inputServer.satuanInternalStorage" :disabled="inputServer.memori === ''" required>
                                <option disabled class="text-gray-700 text-xs" value="">satuan</option>
                                <option value="GB">GB</option>
                                <option value="TB">TB</option>
                            </select>
                            </div>
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
            </div>
            <div class="mt-2" :class="[inputServer.internalStorage !== '' ? 'incop' : 'decop']">
                <div class="has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-20">masukan nama network controller</span>
                    <label for="netwokController" class="block mb-2 text-sm">network Controller</label>

                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|passchar" v-slot={errors}>
                            <input type="text" name="networkController" id="netwokController" class="p-2 w-full rounded-lg bg-gray-300 outline-none uppercase" v-model="inputServer.networkController" :disabled="inputServer.internalStorage === ''" >
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
            </div>
            <div class="mt-2" :class="[inputServer.networkController !== '' ? 'incop' : 'decop']">
                <div class="has-tooltip relative">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-20">masukan besar sumber daya listrik</span>
                    <label for="sumberDayaListrik" class="block mb-2 text-sm">power supply (dalam watt)</label>

                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|numeric" v-slot={errors}>
                            <div class="flex">
                                <input type="text" name="sumberDayaListrik" id="sumberDayaListrik" class="p-2 w-full rounded-l-lg bg-gray-300 outline-none uppercase" v-model="inputServer.sumberDayaListrik" :disabled="inputServer.networkController === ''">
                                <input type="text" value="watt" readonly="readonly" class="w-16 p-1 rounded-r-lg bg-gray-200 outline-none text-center cursor-default">
                            </div>
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
            </div>
            <div class="mt-2" :class="[inputServer.sumberDayaListrik !== '' ? 'incop' : 'decop']">
                <div class="has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-24">masukan tahun dimasukkan</span>
                    <label for="tahun" class="block mb-2 text-sm">tahun</label>

                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required" v-slot={errors}>
                            <input type="date" name="tahun" id="tahun" class="p-2 w-full rounded-lg bg-gray-300 outline-none uppercase" v-model="inputServer.tahun" :disabled="inputServer.sumberDayaListrik === ''">
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
            </div>
            <div class="mt-2" :class="[inputServer.sumberDayaListrik !== '' ? 'incop' : 'decop']">
                <div class="has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-20">masukan tahun garansi berakhir</span>
                    <label for="garansi" class="block mb-2 text-sm">garansi</label>

                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required" v-slot={errors}>
                        <input type="date" name="garansi" id="garansi" ref="garansi" class="p-2 w-full rounded-lg bg-gray-300 outline-none uppercase" v-model="inputServer.garansi" :disabled="inputServer.sumberDayaListrik === ''">
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
        ValidationProvider,
    },
    data(){
        return {
            item : "server",
            inputServer : {
                produk:"",
                tanggal:"",
                merek : "",
                model : "",
                processor:"",
                memori : "",
                satuanMemori:"",
                internalStorage : "",
                satuanInternalStorage : "",
                networkController: "",
                sumberDayaListrik : "",
                tahun : "",
                garansi : "",
            },
            errors:[],
            errproduk : '',

        }
    },
    methods:{
        async postInputServer(){
                const res = await this.$axios.post('/master/inputserver',{
                    iduser : this.$auth.user.id,
                    lokasiServer : this.$auth.user.lokasi,
                    produk : this.inputServer.produk,
                    tanggal: moment().format('YYYY-MM-DD'),
                    merek : this.inputServer.merek,
                    model : this.inputServer.model,
                    processor : this.inputServer.processor,
                    memori : this.inputServer.memori,
                    satuanMemori : this.inputServer.satuanMemori,
                    internalStorage : this.inputServer.internalStorage,
                    satuanInternalStorage : this.inputServer.satuanInternalStorage,
                    networkController : this.inputServer.networkController,
                    sumberDayaListrik : this.inputServer.sumberDayaListrik,
                    tahun: this.inputServer.tahun,
                    garansi : this.inputServer.garansi,
                })
               
                if(res.data.errors){
                    this.errors = res.data.errors
                    console.log(this.errors[0].msg)
                    if(res.data.errors.param === 'produk'){
                        this.errproduk = res.data.errors[0].msg
                    }
                    this.$router.push('/master/input/inputServer')
                }
                else{
                    swal('data berhasil ditambahkan',{icon:'success'})
                    this.$router.push('/master/server')
                }
        }
    },
    mounted(){
        this.inputServer.tahun = moment().format('YYYY-MM-DD')
    }
    
}
</script>

<style lang="scss">
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