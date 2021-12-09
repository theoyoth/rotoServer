<template>
  <div class="bg-gray-300 w-widthContent ml-auto">
    <!-- <InputHeader item="baterai"/> -->
    <Navbar/>
    <section class="bg-gray-100 min-h-screen w-widthContentField m-auto mt-7 p-4">
         <NuxtLink to="/master/baterai"
          class="flex items-center justify-between rounded-md w-28 px-4 py-2 bg-gray-700 hover:bg-gray-600 transition duration-200">
          <div>
            <font-awesome-icon :icon="['fas', 'arrow-left']" class="text-gray-200" />
          </div>
          <p class="font-medium text-sm text-gray-200">kembali</p>
        </NuxtLink> 
        <p class="text-center text-xl text-gray-700 font-semibold">update Baterai</p>
    <ValidationObserver v-slot={invalid,valid}>
    <form @submit.prevent="updateDataBaterai" class="w-11/12 mt-10">
        <div >
            <div class="grid grid-cols-3">
                <div class="mb-4 has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan accu baterai</span>

                    <label for="accu" class="block mb-2 text-sm">accu</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|numeric" v-slot={errors}>
                            <input type="text" v-model="updateBaterai.accu" name="accu" id="accu" class="p-2 w-72 rounded-lg outline-none bg-gray-300">
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="mb-4 has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan jumlah baterai yang di input</span>

                    <label for="kuantitas" class="block mb-2 text-sm">kuantitas</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|numeric" v-slot={errors}>
                            <input type="text" v-model="updateBaterai.kuantitas" name="kuantitas" id="kuantitas" class="p-2 w-72 rounded-lg outline-none bg-gray-300">
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="mb-4 has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan tegangan baterai</span>

                    <label for="tegangan" class="block mb-2 text-sm">tegangan</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|numeric" v-slot={errors}>
                            <input type="text" v-model="updateBaterai.voltage" name="tegangan" id="tegangan" class="p-2 w-72 rounded-lg outline-none bg-gray-300">
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>

                <div class="mb-4 has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan tahun masuk barang</span>

                    <label for="tahun" class="block mb-2 text-sm">tahun</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required" v-slot={errors}>
                            <input type="date" v-model="updateBaterai.tahun" name="tahun" id="tahun" class="p-2 w-72 rounded-lg outline-none bg-gray-300">
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="mb-4 has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan batas garansi</span>

                    <label for="garansi" class="block mb-2 text-sm">garansi</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required" v-slot={errors}>
                            <input type="date" v-model="updateBaterai.garansi" name="garansi" id="garansi" class="p-2 w-72 rounded-lg outline-none rounded-lg outline-none bg-gray-300">
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
            </div>
        </div>
        <button class="opacity-10 bg-gray-700 cursor-default text-gray-100 rounded-lg w-28 py-2 mt-6" type="submit" :class="{activesubmit : valid}" :disabled="invalid">ubah</button>
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
        return{
            baterais:'',
            updateBaterai:{
                accu : "",
                kuantitas : "",
                voltage: "",
                tahun : "",
                garansi : "",
            }
        }
    },
    methods:{
        async updateDataBaterai(){
            const resp = await this.$axios.post('/master/baterai/update',{
                lokasiServer : this.$auth.user.lokasi,
                iduser : this.$auth.user.id,
                idbaterai : this.$route.params.id,
                accu : this.updateBaterai.accu,
                kuantitas: this.updateBaterai.kuantitas,
                voltage: this.updateBaterai.voltage,
                tahun: this.updateBaterai.tahun, 
                garansi: this.updateBaterai.garansi,
            })
            if(resp){
                this.$router.push('/master/baterai')
                swal('data di update',{icon:'success'})
            }
            else{
                swal('Error',resp.data.errmsg,{icon:'error'})
                this.$router.push('/master/updatebaterai')
            }
        }
    },
    async mounted(){
        const lokasi = this.$auth.user.lokasi
        const id = this.$route.params.id

        const resp = await this.$axios.get(`/master/baterai/update/${id}/${lokasi}`)
        if(resp){
            resp.data.forEach(baterai=>{
                this.updateBaterai.accu = baterai.accu
                this.updateBaterai.kuantitas = baterai.kuantitas
                this.updateBaterai.voltage = baterai.voltage
                this.updateBaterai.tahun = moment(baterai.tahun).format('YYYY-MM-DD')
                this.updateBaterai.garansi = moment(baterai.garansi).format('YYYY-MM-DD')
            })
        }
        else{
            console.log("error")
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