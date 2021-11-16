<template>
<div class="bg-gray-200 min-h-screen w-widthContent ml-auto">
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

    <form @submit.prevent="postInputServer" class="mt-8 min-w-min">
        <div class="grid grid-cols-2">
            <div>
                <div class="has-tooltip ">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-36">masukan nama produk</span>
                   
                    <label for="produk" class="block mb-2 text-sm">produk</label>
                    <input type="text" name="produk" id="produk" class="p-2 w-72 rounded-lg ring-blue-500 bg-gray-200" focus:ring-blue-500 v-model="inputServer.produk" >
                    <p v-if="errproduk" class="text-xs px-4 py-1 text-red-400 mt-1">{{errproduk}}</p>
                </div>
            </div>
            <div class="mt-2" v-show="inputServer.produk !== ''">
                <div class="has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-36">masukan nama merek</span>
                    <label for="merek" class="block mb-2 text-sm">merek</label>
                    <input type="text" name="merek" id="merek" class="p-2 w-72 rounded-lg ring-blue-500 bg-gray-200" v-model="inputServer.merek" >
                    <!-- <p v-if="errormsg.param='merek'" class="text-xs texst-red-400 mt-1">{{errormsg.msg}}</p> -->
                </div>
            </div>
            <div class="mt-2" v-show="inputServer.merek !== ''">
                <div class="has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan nama modelnya</span>
                    <label for="model" class="block mb-2 text-sm">model</label>
                    <input type="text" name="model" id="model" class="p-2 w-72 rounded-lg ring-blue-500 bg-gray-200" v-model="inputServer.model" >
                    <!-- <p v-if="errormsg.param='model'" class="text-xs text-red-400 mt-1">{{errormsg.msg}}</p> -->
                </div>  
            </div>
            <div class="mt-2" v-show="inputServer.model !== ''">
                <div class="has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-24">masukan jenis processor-nya</span>
                    <label for="processor" class="block mb-2 text-sm">processor</label>
                    <input type="text" name="processor" id="processor" class="p-2 w-72 rounded-lg ring-blue-500 bg-gray-200" v-model="inputServer.processor" >
                    <!-- <p v-if="errormsg.param='processor'" class="text-xs text-red-400 mt-1">{{errormsg.msg}}</p> -->
                </div>
            </div>              
            <div class="mt-2" v-show="inputServer.processor !== ''">
                <div class="has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan jumlah memori</span>
                    <label for="memori" class="block mb-2 text-sm">memori</label>
                    <input type="text" name="memori" id="memori" class="p-2 w-72 rounded-l-lg ring-blue-500 bg-gray-200" v-model="inputServer.memori" >
                    <select name="kapasitas" id="kapasitas" class="p-2 rounded-r-lg ring-blue-500 -ml-2">
                        <option value="gb">GB</option>
                        <option value="tb">TB</option>
                    </select> 
                </div>
            </div>
            <div class="mt-2" v-show="inputServer.memori !== ''">
                <div class="has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-24">masukan jumlah internal storage</span>
                    <label for="internalStorage" class="block mb-2 text-sm">internal Storage</label>
                    <input type="text" name="internalStorage" id="internalStorage" class="p-2 w-72 rounded-l-lg ring-blue-500 bg-gray-200" v-model="inputServer.internalStorage" >
                    <select name="kapasitas" id="kapasitas" class="p-2 rounded-r-lg -ml-2 ring-blue-500">
                        <option value="gb">GB</option>
                        <option value="tb">TB</option>
                    </select>
                </div>
            </div>
            <div class="mt-2" v-show="inputServer.internalStorage !== ''">
                <div class="has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-20">masukan nama network controller</span>
                    <label for="netwokController" class="block mb-2 text-sm">network Controller</label>
                    <input type="text" name="networkController" id="netwokController" class="p-2 w-72 rounded-lg ring-blue-500 bg-gray-200" v-model="inputServer.networkController" >
                </div>
            </div>
            <div class="mt-2" v-show="inputServer.networkController !== ''">
                <div class="has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan jumlah storage</span>
                    <label for="storage" class="block mb-2 text-sm">Storage</label>
                    <input type="text" name="storage" id="storage" class="p-2 w-72 rounded-l-lg ring-blue-500 bg-gray-200" v-model="inputServer.storage" >
                    <select name="kapasitas" id="kapasitas" class="p-2 ring-blue-500 rounded-r-lg -ml-2">
                        <option value="gb">GB</option>
                        <option value="tb">TB</option>
                    </select>
                </div>
            </div>
            <div class="mt-2" v-show="inputServer.storage !== ''">
                <div class="has-tooltip relative">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-20">masukan besar sumber daya listrik</span>
                    <label for="sumberDayaListrik" class="block mb-2 text-sm">power supply (dalam watt)</label>
                    <input type="text" name="sumberDayaListrik" id="sumberDayaListrik" class="p-2 w-72 rounded-lg ring-blue-500 bg-gray-200 bg-gray-200" v-model="inputServer.sumberDayaListrik" >
                    <!-- <input type="text" value="watt" readonly="readonly" class="absolute w-14 right-28 bottom-2 p-1 rounded"> -->
                </div>
            </div>
            <div class="mt-2" v-show="inputServer.sumberDayaListrik !== ''">
                <div class="has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-24">masukan tahun dimasukkan</span>
                    <label for="tahun" class="block mb-2 text-sm">tahun</label>
                    <input type="date" name="tahun" id="tahun" class="p-2 w-72 rounded-lg ring-blue-500 bg-gray-200" v-model="inputServer.tahun" >
                </div>
            </div>
            <div class="mt-2" v-show="inputServer.sumberDayaListrik !== ''">
                <div class="has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-20">masukan tahun garansi berakhir</span>
                    <label for="garansi" class="block mb-2 text-sm">garansi</label>
                    <input type="date" name="garansi" id="garansi" ref="garansi" class="p-2 w-72 rounded-lg ring-blue-500 bg-gray-200" v-model="inputServer.garansi" >
                </div>
            </div>
        </div>
        <button class="bg-gray-700 text-gray-200 rounded-lg w-28 h-10 mt-8" type="submit">kirim</button>
    </form>
</section>
</div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
export default {
    middleware:"isAuthenticated",
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
</style>