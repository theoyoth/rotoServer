<template>
<div class="bg-gray-300 min-h-screen w-widthContent ml-auto">
    <!-- <InputHeader item="server"/> -->
    <Navbar/>
    <section class="bg-white min-h-screen w-widthContentField m-auto mt-7 p-4 ">
        <NuxtLink to="/master/server"
          class="flex items-center justify-between rounded-md w-28 px-4 py-2 bg-gray-700">
          <div>
            <font-awesome-icon :icon="['fas', 'arrow-left']" class="text-gray-200" />
          </div>
          <p class="font-medium text-sm text-gray-200">kembali</p>
        </NuxtLink> 
        <p class="text-center text-xl text-gray-700 font-semibold">Input data baru Server</p>

    <!-- <div class="grid grid-cols-3 w-10/12 mt-6">
        <div v-for="(err,index) in errors" :key="index" class="bg-white w-11/12 rounded-lg mb-1 bg-opacity-90">
            <li class="text-red-400 text-xs p-2">{{err.msg}}</li>
        </div>
    </div> -->
    <ValidationObserver v-slot={invalid,valid}>
    <form @submit.prevent="postInputServer" class="min-w-min mt-10">
        <div class="grid grid-cols-2">
            <div>
                <div class="has-tooltip ">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-36">masukan nama produk</span>

                    <label for="produk" class="block mb-2 text-sm">produk</label>
                    
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|alpha_dash" v-slot={errors}>
                            <input type="text" name="produk" id="produk" class="p-2 w-full rounded-lg bg-gray-300 outline-none" v-model="inputServer.produk" autofocus>
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
                        <ValidationProvider rules="required|alpha_spaces" v-slot={errors}>
                            <input type="text" name="merek" id="merek" class="p-2 w-full rounded-lg outline-none bg-gray-300" v-model="inputServer.merek" :disabled="inputServer.produk === ''">
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
                        <ValidationProvider rules="required|alpha_spaces" v-slot={errors}>
                            <input type="text" name="model" id="model" class="p-2 w-full outline-none rounded-lg bg-gray-300" v-model="inputServer.model" :disabled="inputServer.merek === ''" >
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
                        <ValidationProvider rules="required" v-slot={errors}>
                            <input type="text" name="processor" id="processor" class="p-2 w-full rounded-lg bg-gray-300 outline-none" v-model="inputServer.processor" :disabled="inputServer.model === ''" >
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
                        <ValidationProvider rules="required|numeric" v-slot={errors}>
                            <div class="flex">
                            <input type="text" name="memori" id="memori" class="p-2 w-full rounded-lg ring-gray-500 bg-gray-300" v-model="inputServer.memori" :disabled="inputServer.processor === ''" >
                            <select name="kapasitas" id="kapasitas" class="p-2 rounded-r-lg ring-gray-500 -ml-2" :disabled="inputServer.processor === ''" >
                                <option value="gb">GB</option>
                                <option value="tb">TB</option>
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
                        <ValidationProvider rules="required|numeric" v-slot={errors}>
                            <div class="flex">
                            <input type="text" name="internalStorage" id="internalStorage" class="p-2 w-full rounded-lg bg-gray-300 outline-none" v-model="inputServer.internalStorage" :disabled="inputServer.memori === ''" >
                            <select name="kapasitas" id="kapasitas" class="p-2 rounded-r-lg -ml-2 ring-blue-500" :disabled="inputServer.memori === ''" >
                                <option value="gb">GB</option>
                                <option value="tb">TB</option>
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
                        <ValidationProvider rules="required|numeric" v-slot={errors}>
                            <input type="text" name="networkController" id="netwokController" class="p-2 w-full rounded-lg bg-gray-300 outline-none" v-model="inputServer.networkController" :disabled="inputServer.internalStorage === ''" >
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
            </div>
            <div class="mt-2" :class="[inputServer.internalStorage !== '' ? 'incop' : 'decop']">
                <div class="has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan jumlah storage</span>
                    <label for="storage" class="block mb-2 text-sm">Storage</label>

                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|numeric" v-slot={errors}>
                            <div class="flex">
                            <input type="text" name="storage" id="storage" class="p-2 w-full rounded-lg bg-gray-300 outline-none" v-model="inputServer.storage" :disabled="inputServer.networkController === ''" >
                            <select name="kapasitas" id="kapasitas" class="p-2 ring-blue-500 rounded-r-lg -ml-2" :disabled="inputServer.networkController === ''" >
                                <option value="gb">GB</option>
                                <option value="tb">TB</option>
                            </select>
                            </div>
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
            </div>
            <div class="mt-2" :class="[inputServer.storage !== '' ? 'incop' : 'decop']">
                <div class="has-tooltip relative">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-20">masukan besar sumber daya listrik</span>
                    <label for="sumberDayaListrik" class="block mb-2 text-sm">power supply (dalam watt)</label>

                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|numeric" v-slot={errors}>
                            <input type="text" name="sumberDayaListrik" id="sumberDayaListrik" class="p-2 w-full rounded-lg bg-gray-300 outline-none" v-model="inputServer.sumberDayaListrik" :disabled="inputServer.storage === ''">
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
                            <input type="date" name="tahun" id="tahun" class="p-2 w-full rounded-lg bg-gray-300 outline-none" v-model="inputServer.tahun" :disabled="inputServer.sumberDayaListrik === ''">
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
                        <input type="date" name="garansi" id="garansi" ref="garansi" class="p-2 w-full rounded-lg bg-gray-300 outline-none" v-model="inputServer.garansi" :disabled="inputServer.sumberDayaListrik === ''">
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
            </div>
        </div>
        <button class="mt-10 opacity-10 bg-gray-700 text-gray-200 w-24 py-2 rounded cursor-default" type="submit" :class="{activesubmit : valid}" :disabled="invalid">kirim</button>
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
    components:{
        ValidationObserver,
        ValidationProvider,
    },
    data(){
        return {
            item : "server",
            inputServer : {
                produk:"",
                merek : "",
                model : "",
                processor:"",
                memori : "",
                internalStorage : "",
                networkController: "",
                storage : "",
                sumberDayaListrik : "",
                tahun : "",
                garansi : "",
            },
            errors:[],
            errproduk : '',

        }
    },
    computed: {
        // errors(){
        //     return this.$store.state.inputmasterbarang.errors
        // },
        
    },
    methods:{
        // postInputServer(){
        //     this.$store.dispatch('inputmasterbarang/postInputServer',this.inputServer)
        //     this.errors = this.$store.state.inputmasterbarang.theerrors
        // },
        async postInputServer(){
                const res = await axios.post('http://localhost:3000/server/master/inputserver',{
                    iduser : this.$auth.user.id,
                    lokasiServer : this.$auth.user.lokasi,
                    produk : this.inputServer.produk,
                    merek : this.inputServer.merek,
                    model : this.inputServer.model,
                    processor : this.inputServer.processor,
                    memori : this.inputServer.memori,
                    internalStorage : this.inputServer.internalStorage,
                    networkController : this.inputServer.networkController,
                    storage : this.inputServer.storage,
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
.widthFormInput{
    width:calc(100vw - 50%);
}
.widthinputfield{
    width:1100px;
    height:300px;
}
.btnnextactive{
    transform:translateX(-1100px);
    transition:all ease-in-out .5s;
}
.btnpreviousactive{
    transform:translateX(0);
    transition:all ease-in-out .5s;
}
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