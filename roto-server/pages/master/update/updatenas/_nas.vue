<template>
  <div class="bg-gray-300 min-h-screen w-widthContent ml-auto overflow-x-hidden">
    <section class="bg-gray-100 min-h-screen w-widthContentField m-auto mt-7 p-4">
        <NuxtLink to="/master/nas"
          class="flex items-center justify-between rounded-md w-28 px-4 py-2 bg-gray-700 hover:bg-gray-600 transition duration-200">
          <div>
            <font-awesome-icon :icon="['fas', 'arrow-left']" class="text-gray-200" />
          </div>
          <p class="font-medium text-sm text-gray-200">kembali</p>
        </NuxtLink> 
        <p class="text-center text-xl text-gray-700 font-semibold">Input data baru</p>

    <ValidationObserver v-slot={invalid,valid}>
    <form @submit.prevent="updateDataNas" class="w-11/12 mt-10">
        <div>
            <div class="grid grid-cols-3">
                <div class="mb-4 has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan nama merek</span>

                    <label for="merek" class="block mb-2 text-sm">merek</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|passchar" v-slot={errors}>
                            <input type="text" v-model="updateNas.merek"    name="merek" id="merek" class="p-2 w-72 rounded-lg outline-none bg-gray-300 uppercase">
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="mb-4 has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan nama model</span>

                    <label for="model" class="block mb-2 text-sm">model</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|inputval" v-slot={errors}>
                            <input type="text" v-model="updateNas.model" name="model" id="model" class="p-2 w-72 rounded-lg outline-none bg-gray-300 uppercase">
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="mb-4 has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan tipe NAS</span>

                    <label for="tipe" class="block mb-2 text-sm">tipe</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|inputval" v-slot={errors}>
                            <input type="text" v-model="updateNas.tipe" name="tipe" id="tipe" class="p-2 w-72 rounded-lg outline-none bg-gray-300 uppercase">
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="mb-4 has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan jumlah storage</span>

                    <label for="storage" class="block mb-2 text-sm">storage</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|passchar" v-slot={errors}>
                            <div class="flex">
                                <input type="text" v-model="updateNas.storage" name="storage" id="storage" class="p-2 w-60 rounded-lg outline-none bg-gray-300">
                                <select name="storage" id="storage" class="p-2 rounded-r-lg -ml-2" v-model="updateNas.satuanStorage">
                                    <option>GB</option>
                                    <option>TB</option>
                                </select>
                            </div>
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="mb-4 has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan nama processor</span>

                    <label for="processor" class="block mb-2 text-sm">processor</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|passchar" v-slot={errors}>
                            <input type="text" v-model="updateNas.processor" name="processor" id="processor" class="p-2 w-72 rounded-lg outline-none bg-gray-300 uppercase">
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="mb-4 has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan nama cpu</span>

                    <label for="cpu" class="block mb-2 text-sm">cpu</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|inputval" v-slot={errors}>
                            <input type="text" v-model="updateNas.cpu" name="cpu" id="cpu" class="p-2 w-72 rounded-lg outline-none bg-gray-300 uppercase">
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="mb-4 has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan raid</span>

                    <label for="raid" class="block mb-2 text-sm">raid</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|passchar" v-slot={errors}>
                            <input type="text" v-model="updateNas.raid" name="raid" id="raid" class="p-2 w-72 rounded-lg outline-none bg-gray-300 uppercase">
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="mb-4 has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan tahun masuk NAS</span>

                    <label for="tahun" class="block mb-2 text-sm">tahun</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required" v-slot={errors}>
                            <input type="date" v-model="updateNas.tahun" name="tahun" id="tahun" class="p-2 w-72 rounded-lg outline-none bg-gray-300">
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="mb-4 has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan batas garansi</span>

                    <label for="garansi" class="block mb-2 text-sm">garansi</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required" v-slot={errors}>
                            <input type="date" v-model="updateNas.garansi" name="garansi" id="garansi" class="p-2 w-72 rounded-lg outline-none bg-gray-300">
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
            </div>
        </div>
        <button class="opacity-10 bg-gray-700 text-gray-300 shadow-md rounded-lg w-28 py-2 outline-none mt-6" type="submit" :class="{activesubmit : valid}" :disabled="invalid">ubah</button>
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
        return{
            nass:'',
            updateNas:{
                merek : "",
                model: "",
                processor : "",
                storage: "",
                satuanStorage : "",
                tipe : "",
                cpu: "",
                raid : "",
                tahun: "",
                garansi : "",
            }
        }
    },
    async mounted(){
        try{
            const lokasi = this.$auth.user.lokasi
            const id = this.$route.params.id
            const resp = await this.$axios.get(`/master/nas/update/${id}/${lokasi}`)
            if(resp){
                resp.data.forEach(nas=>{
                    this.updateNas.merek = nas.merek
                    this.updateNas.model = nas.model
                    this.updateNas.tipe = nas.tipe
                    this.updateNas.processor = nas.processor
                    this.updateNas.storage = nas.storage
                    this.updateNas.satuanStorage = nas.satuan_storage
                    this.updateNas.tipe = nas.tipe
                    this.updateNas.cpu = nas.cpu
                    this.updateNas.raid = nas.raid
                    this.updateNas.tahun = moment(nas.tahun).format('YYYY-MM-DD')
                    this.updateNas.garansi = moment(nas.garansi).format('YYYY-MM-DD')
                })
            }
        }
        catch(err){
            console.log(err)
        } 
    },
    methods: {
        async updateDataNas(){
            const resp = await this.$axios.post('/master/nas/update',{
                lokasiServer : this.$auth.user.lokasi,
                iduser : this.$auth.user.id,
                idnas : this.$route.params.id,
                merek:this.updateNas.merek,
                model : this.updateNas.model,
                processor : this.updateNas.processor,
                storage : this.updateNas.storage,
                satuanStorage : this.updateNas.satuanStorage,
                tipe : this.updateNas.tipe,
                cpu : this.updateNas.cpu,
                raid : this.updateNas.raid,
                tahun : this.updateNas.tahun,
                garansi: this.updateNas.garansi,
            })
            if(resp){
                this.$router.push('/master/nas')
                swal('data di update',{icon:'success'})
            }
            else{
                swal('Error',resp.data.errmsg,{icon:'error'})
                this.$router.push('/master/nas/updatenas')
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