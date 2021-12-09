<template>
  <div class="min-h-screen bg-gray-300 w-widthContent ml-auto">
    <!-- <InputHeader item="AC"/> -->
    <Navbar/>

    <section class="bg-gray-100 min-h-screen w-widthContentField m-auto mt-7 p-4">
         <NuxtLink to="/master/ac"
          class="flex items-center justify-between rounded-md w-28 px-4 py-2 bg-gray-700 hover:bg-gray-600 transition duration-200">
          <div>
            <font-awesome-icon :icon="['fas', 'arrow-left']" class="text-gray-200" />
          </div>
          <p class="font-medium text-sm text-gray-200">kembali</p>
        </NuxtLink> 
        <p class="text-center text-xl text-gray-700 font-semibold">update AC</p>

    <ValidationObserver v-slot={invalid,valid}>
    <form @submit.prevent="updateDataAc" class="w-11/12 mt-10">
        <div>
            <div class="grid grid-cols-3">
                <div class="mb-4 has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan nama merek AC</span>

                    <label for="merek" class="block mb-2 text-sm">merek</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|passchar" v-slot={errors}>
                            <input type="text" v-model="updateAc.merek" name="merek" id="merek" class="p-2 w-72 rounded-lg outline-none bg-gray-300 uppercase">
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="mb-4 has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan model barang</span>

                    <label for="model" class="block mb-2 text-sm">model</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|passchar" v-slot={errors}>
                            <input type="text" v-model="updateAc.model" name="model" id="model" class="p-2 w-72 rounded-lg outline-none bg-gray-300 uppercase">
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="mb-4 has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan sumber daya listrik</span>

                    <label for="sumberDayaListrik" class="block mb-2 text-sm">sumber daya listrik</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|numeric" v-slot={errors}>
                            <input type="text" v-model="updateAc.sumberDayaListrik" name="sumberDayaListrik" id="sumberDayaListrik" class="p-2 w-72 rounded-lg outline-none bg-gray-300">
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
                 <div class="mb-4 has-tooltip">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan dimensi AC</span>

                    <label for="dimensi" class="block mb-2 text-sm">dimensi</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|passchar" v-slot={errors}>
                            <input type="text" v-model="updateAc.dimensi" name="dimensi" id="dimensi" class="p-2 w-72 rounded-lg outline-none bg-gray-300 uppercase">
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="mb-4 has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan konsumsi daya</span>

                    <label for="konsumsiDaya" class="block mb-2 text-sm">konsumsi daya listrik</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|numeric" v-slot={errors}>
                            <input type="text" v-model="updateAc.konsumsiDayaListrik" name="konsumsiDayaListrik" id="konsumsiDaya" class="p-2 w-72 rounded-lg outline-none bg-gray-300">
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="mb-4 has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan kapasitas pendingin</span>

                    <label for="kapasitasPendingin" class="block mb-2 text-sm">kapasitas pendingin</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|passchar" v-slot={errors}>
                            <input type="text" v-model="updateAc.kapasitasPendingin" name="kapasitasPendingin" id="kapasitasPendingin" class="p-2 w-72 rounded-lg outline-none bg-gray-300">
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="mb-4 has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan tahun masuk AC</span>

                    <label for="tahun" class="block mb-2 text-sm">tahun</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required" v-slot={errors}>
                            <input type="date" v-model="updateAc.tahun" name="tahun" id="tahun" class="p-2 w-72 rounded-lg outline-none bg-gray-300">
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="mb-4 has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan batas garansi</span>

                    <label for="garansi" class="block mb-2 text-sm">garansi</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required" v-slot={errors}>
                            <input type="date" v-model="updateAc.garansi" name="garansi" id="garansi" class="p-2 w-72 rounded-lg outline-none bg-gray-300">
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>    
            </div>
        </div>
        <button class="opacity-10 bg-gray-700 text-gray-300 shadow-md rounded-lg w-28 h-10 mt-6" type="submit" :class="{activesubmit : valid}" :disabled="invalid">ubah</button>
    </form>
    </ValidationObserver>
</section>
</div>
</template>

<script>
import moment from 'moment'
import {ValidationObserver, ValidationProvider} from "vee-validate";

export default {
    middleware:"isAuthenticated",
    components:{
        ValidationObserver,
        ValidationProvider
    },
    data(){
        return{
            acs:'',
            updateAc:{
                merek : "",
                model : "",
                sumberDayaListrik : "",
                dimensi : "",
                konsumsiDayaListrik : "",
                kapasitasPendingin : "",
                tahun : "",
                garansi : "",
            }
        }
    },
    async mounted(){
        const lokasi = this.$auth.user.lokasi
        const id = this.$route.params.id

        const resp = await this.$axios.get(`/master/ac/update/${id}/${lokasi}`)
        if(resp){
            resp.data.forEach(ac=>{
                this.updateAc.merek = ac.merek
                this.updateAc.model = ac.model
                this.updateAc.sumberDayaListrik = ac.sumber_daya_listrik
                this.updateAc.dimensi = ac.dimensi
                this.updateAc.konsumsiDayaListrik = ac.konsumsi_daya_listrik
                this.updateAc.kapasitasPendingin = ac.kapasitas_pendingin
                this.updateAc.tahun = moment(ac.tahun).format('YYYY-MM-DD')
                this.updateAc.garansi = moment(ac.garansi).format('YYYY-MM-DD')
            })
        }
    },
    methods:{
        async updateDataAc(){
            const resp = await this.$axios.post('/master/ac/update',{
            lokasiServer : this.$auth.user.lokasi,
            iduser : this.$auth.user.id,
            idac : this.$route.params.id,
            merek:this.updateAc.merek,
            model : this.updateAc.model,
            sumberDayaListrik : this.updateAc.sumberDayaListrik,
            dimensi : this.updateAc.dimensi,
            kapasitasPendingin : this.updateAc.kapasitasPendingin,
            tahun : this.updateAc.tahun,
            garansi : this.updateAc.garansi,
          })
          if(resp){
                this.$router.push('/master/ac')
                swal('data di update',{icon:'success'})
            }
            else{
                swal('Error',resp.data.errmsg,{icon:'error'})
                this.$router.push('/master/update/updateac')
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