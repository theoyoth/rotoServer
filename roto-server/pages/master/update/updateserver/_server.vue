<template>
<div class="bg-gray-300 min-h-screen w-widthContent ml-auto">
    <!-- <InputHeader item="server"/> -->
    <Navbar/>
    <section class="bg-gray-100 min-h-screen w-widthContentField m-auto mt-7 p-4 ">
        <NuxtLink to="/master/server"
          class="flex items-center justify-between rounded-md w-28 px-4 py-2 bg-gray-700 hover:bg-gray-600 transition duration-200">
          <div>
            <font-awesome-icon :icon="['fas', 'arrow-left']" class="text-gray-200" />
          </div>
          <p class="font-medium text-sm text-gray-200">kembali</p>
        </NuxtLink> 
        <p class="text-center text-xl text-gray-700 font-semibold">update Server</p>
    
    <ValidationObserver v-slot={invalid,valid}>
    <form @submit.prevent="updateData" class="w-11/12 mt-10">
        <div>
            <div class="grid grid-cols-3 grid-rows-4">
                <div class="mb-4">
                    <label for="tanggal" class="block mb-2 text-sm">tanggal</label>
                    <input type="date" v-model="updateServer.tanggal" name="tanggal" id="tanggal" class="p-2 w-72 rounded-lg outline-none bg-gray-300">
                </div>
                <div class="mb-4 has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan nama produk</span>
                    <label for="produk" class="block mb-2 text-sm">produk</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|passchar" v-slot={errors}>
                            <input type="text" name="produk" v-model="updateServer.produk" id="produk" class="p-2 w-full rounded-lg outline-none bg-gray-300 uppercase">
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="mb-4 has-tooltip">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan nama merek</span>
                    <label for="merek" class="block mb-2 text-sm">merek</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|passchar" v-slot={errors}>
                            <input type="text"  name="merek" v-model="updateServer.merek" id="merek" class="p-2 w-full rounded-lg outline-none bg-gray-300 uppercase" >
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="mb-4 has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan nama modelnya</span>
                    <label for="model" class="block mb-2 text-sm">model</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|passchar" v-slot={errors}>
                            <input type="text"  name="model" v-model="updateServer.model" id="model" class="p-2 w-full rounded-lg outline-none bg-gray-300 uppercase" >
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>                
                <div class="mb-4 has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-24">masukan jenis processor-nya</span>
                    <label for="processor" class="block mb-2 text-sm">processor</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|passchar" v-slot={errors}>
                            <input type="text" name="processor" id="processor" v-model="updateServer.processor" class="p-2 w-full rounded-lg outline-none bg-gray-300 uppercase">
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="mb-4 has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan jumlah memori</span>
                    <label for="memori" class="block mb-2 text-sm">memori</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|passchar" v-slot={errors}>
                            <div class="flex">
                                <input type="text" name="memori" id="memori" v-model="updateServer.memori" class="p-2 w-full rounded-lg outline-none bg-gray-300 uppercase" >
                                <select name="kapasitas" id="kapasitas" class="p-2 rounded-r-lg ring-gray-500 -ml-2 bg-gray-200" v-model="updateServer.satuanMemori">
                                    <!-- <option disabled :value="updateServer."></option> -->
                                    <option value="GB">GB</option>
                                    <option value="TB">TB</option>
                                </select>
                            </div>
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="mb-4 has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-20">masukan jumlah internal storage</span>
                    <label for="internalStorage" class="block mb-2 text-sm">internal Storage</label>
                    <div class="flex w-72 flex-col">
                        <ValidationProvider rules="required|passchar" v-slot={errors}>
                            <div class="flex">
                                <input type="text" name="internalStorage" id="internalStorage" v-model="updateServer.internalStorage" class="p-2 w-full rounded-lg outline-none bg-gray-300 uppercase">
                                <select name="kapasitas" id="kapasitas" class="p-2 rounded-r-lg ring-gray-500 -ml-2 bg-gray-200" v-model="updateServer.satuanInternalStorage">
                                    <option value="GB">GB</option>
                                    <option value="TB">TB</option>
                                </select>
                            </div>
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="mb-4 has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-20">masukan nama network controller</span>
                    <label for="netwokController" class="block mb-2 text-sm">network Controller</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|passchar" v-slot={errors}>
                            <input type="text" name="networkController" id="netwokController" v-model="updateServer.networkController" class="p-2 w-full rounded-lg outline-none bg-gray-300 uppercase">
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="mb-4 has-tooltip relative">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-20">masukan besar sumber daya listrik</span>
                    <label for="sumberDayaListrik" class="block mb-2 text-sm">power supply</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required" v-slot={errors}>
                        <div class="flex">
                            <input type="text" name="sumberDayaListrik" id="sumberDayaListrik" v-model="updateServer.sumberDayaListrik" class="p-2 w-full rounded-l-lg outline-none bg-gray-300 uppercase">
                            <input type="text" value="watt" readonly="readonly" class="p-1 w-16 outline-none text-center rounded-r-lg bg-gray-200">
                        </div>
                        <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="mb-4 has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-24">masukan tahun dimasukkan</span>
                    <label for="tahun" class="block mb-2 text-sm">tahun</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required" v-slot={errors}>
                            <input v-model="updateServer.tahun" type="date" name="tahun" id="tahun" class="p-2 w-72 rounded-lg outline-none bg-gray-300">
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="mb-4 has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-20">masukan tahun garansi berakhir</span>
                    <label for="garansi" class="block mb-2 text-sm">garansi</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required" v-slot={errors}>
                            <input type="date" name="garansi" id="garansi" v-model="updateServer.garansi" class="p-2 w-72 rounded-lg outline-none bg-gray-300">
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
            </div>
        </div>
        <button class="opacity-10 mt-10 bg-gray-700 text-gray-200 w-28 py-2 rounded" type="submit" :class="{activesubmit : valid}" :disabled="invalid">ubah</button>
    </form>
    </ValidationObserver>
</section>
</div>
</template>

<script>
import moment from 'moment'
import { ValidationObserver, ValidationProvider} from "vee-validate";

export default {
    middleware:"isAuthenticated",
    components:{
        ValidationObserver,
        ValidationProvider
    },
    data(){
        return {
            updateServer:{
                idserver:"",
                tanggal:"",
                produk : "",
                merek : "",
                model : "",
                processor : "",
                memori : "",
                satuanMemori : "",
                internalStorage : "",
                satuanInternalStorage : "",
                networkController : "",
                sumberDayaListrik : "",
                tahun : "",
                garansi : "",
            }
        }
    },
    
    async mounted(){
        try{
            const lokasi = this.$auth.user.lokasi
            const idserver = this.$route.params.id
            const resp = await this.$axios.get(`/master/update/updateserver/${idserver}/${lokasi}`)
            if(resp){
                resp.data.forEach(servers=>{
                    this.updateServer.produk = servers.produk
                    this.updateServer.tanggal = moment(servers.tanggal).format('YYYY-MM-DD'),
                    this.updateServer.merek = servers.merek
                    this.updateServer.model = servers.model
                    this.updateServer.processor = servers.processor
                    this.updateServer.memori = servers.memori
                    this.updateServer.satuanMemori = servers.satuan_memori
                    this.updateServer.internalStorage = servers.internal_storage
                    this.updateServer.satuanInternalStorage = servers.satuan_internal_storage
                    this.updateServer.networkController = servers.network_controller
                    this.updateServer.sumberDayaListrik = servers.sumber_daya_listrik
                    this.updateServer.tahun = moment(servers.tahun).format('YYYY-MM-DD')
                    this.updateServer.garansi = moment(servers.garansi).format('YYYY-MM-DD')
                    this.updateServer.idserver = servers.id_server
                })
            } else{
                swal('Error','data tidak ada',{icon:'error'})
            }
        }
        catch(err){
            console.log(err)
        }
    },
    methods:{
        async updateData(){
            const resp = await this.$axios.post(`/master/server/update`,{
                lokasiServer : this.$auth.user.lokasi,
                iduser : this.$auth.user.id,
                idproduk:this.updateServer.idserver,
                tanggal:this.updateServer.tanggal,
                produk : this.updateServer.produk,
                merek : this.updateServer.merek,
                model : this.updateServer.model,
                processor : this.updateServer.processor,
                memori : this.updateServer.memori,
                satuanMemori : this.updateServer.satuanMemori,
                internalStorage : this.updateServer.internalStorage,
                satuanInternalStorage : this.updateServer.satuanInternalStorage,
                networkController : this.updateServer.networkController,
                sumberDayaListrik : this.updateServer.sumberDayaListrik,
                tahun : this.updateServer.tahun,
                garansi : this.updateServer.garansi,
                })
            if(resp){
                this.$router.push('/master/server')
                swal('data di update',{icon:'success'})
            }
            else{
                swal('Error',resp.data.msg,{icon:'error'})
                this.$router.push('/master/server/updateServer')
            }
                
        }
    }
    
}
</script>

<style>
.activesubmit {
    background-color: rgb(55, 65, 81);
    color:whitesmoke;
    width:7rem;
    cursor:pointer;
    opacity:1;
    padding-top: .5rem;
    padding-bottom: .5rem;
    transition: all 0.5s;
    transform:translateY(-2px);
}
</style>