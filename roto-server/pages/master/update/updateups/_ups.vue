<template>
  <div class="bg-gray-300 min-h-screen w-widthContent ml-auto">
    <!-- <InputHeader item="ups"/> -->
    <Navbar/>
    <section class="bg-gray-100 min-h-screen w-widthContentField m-auto mt-7 p-4">
        <NuxtLink to="/master/ups"
          class="flex items-center justify-between rounded-md w-28 px-4 py-2 bg-gray-700 hover:bg-gray-600 transition duration-200">
          <div>
            <font-awesome-icon :icon="['fas', 'arrow-left']" class="text-gray-200" />
          </div>
          <p class="font-medium text-sm text-gray-200">kembali</p>
        </NuxtLink> 
        <p class="text-center text-xl text-gray-700 font-semibold">update Ups</p>

    <ValidationObserver v-slot={invalid,valid}>
    <form @submit.prevent="updateDataUps" class="w-11/12 mt-10">
        <div >
            <div class="grid grid-cols-3">
                <div class="mb-4 has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan beban kritis ups-nya</span>

                    <label for="upsCriticalLoad" class="block mb-2 text-sm">ups critical load</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|numeric" v-slot={errors}>
                            <input type="text" v-model="updateUps.upsCriticalLoad" name="upsCriticalLoad" id="upsCriticalLoad" class="p-2 w-72 rounded-lg outline-none bg-gray-300">
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="mb-4 has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan suhu kritis-nya</span>

                    <label for="upsCriticalTemperature" class="block mb-2 text-sm">ups critical temperature</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|numeric" v-slot={errors}>
                            <input type="text" v-model="updateUps.upsCriticalTemperature" name="upsCriticalTemperature" id="upsCriticalTemperature" class="p-2 w-72 rounded-lg outline-none bg-gray-300">
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="mb-4 has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan kapasitas kritis</span>

                    <label for="upsCriticalCapacity" class="block mb-2 text-sm">up critical capacity</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|numeric" v-slot={errors}>
                            <input type="text" v-model="updateUps.upsCriticalCapacity" name="upsCriticalCapacity" id="upsCriticalCapacity" class="p-2 w-72 rounded-lg outline-none bg-gray-300">
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="mb-4 has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan nomor serial ups-nya</span>

                    <label for="nomorSerial" class="block mb-2 text-sm">nomor serial</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|alpha_dash" v-slot={errors}>
                            <input type="text" v-model="updateUps.nomorSerial" name="nomorSerial" id="nomorSerial" class="p-2 w-72 rounded-lg outline-none bg-gray-300 uppercase">
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="mb-4 has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan nama sistem ups-nya</span>

                    <label for="namaSistem" class="block mb-2 text-sm">nama sistem</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|passchar" v-slot={errors}>
                            <input type="text" v-model="updateUps.namaSistem" name="namaSistem" id="namaSistem" class="p-2 w-72 rounded-lg outline-none bg-gray-300 uppercase">
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="mb-4 has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan model ups</span>

                    <label for="model" class="block mb-2 text-sm">model</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|passchar" v-slot={errors}>
                            <input type="text" v-model="updateUps.model" name="model" id="model" class="p-2 w-72 rounded-lg outline-none bg-gray-300 uppercase">
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="mb-4 has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan manufaktur ups</span>

                    <label for="manufaktur" class="block mb-2 text-sm">manufaktur</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|passchar" v-slot={errors}>
                            <input type="text" v-model="updateUps.manufaktur" name="manufaktur" id="manufaktur" class="p-2 w-72 rounded-lg outline-none bg-gray-300 uppercase">
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="mb-4 has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan peringkat tegangan atau voltage rating</span>

                    <label for="peringkatTegangan" class="block mb-2 text-sm">peringkat tegangan</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|numeric" v-slot={errors}>
                            <input type="text" v-model="updateUps.peringkatTegangan" name="peringkatTegangan" id="peringkatTegangan" class="p-2 w-72 rounded-lg outline-none bg-gray-300">
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="mb-4 has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-4">masukan peringkat frekuensi atau rating frequency</span>

                    <label for="peringkatFrekuensi" class="block mb-2 text-sm">peringkat frekuensi</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|numeric" v-slot={errors}>
                            <input type="text" v-model="updateUps.peringkatFrekuensi" name="peringkatFrekuensi" id="peringkatFrekuensi" class="p-2 w-72 rounded-lg outline-none bg-gray-300">
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="mb-4 has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan peringkat tegangan baterai atau voltage rating battery</span>

                    <label for="peringkatTeganganBaterai" class="block mb-2 text-sm">peringkat tegangan baterai</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|numeric" v-slot={errors}>
                            <input type="text" v-model="updateUps.peringkatTeganganBaterai" name="peringkatTeganganBaterai" id="peringkatTeganganBaterai" class="p-2 w-72 rounded-lg outline-none bg-gray-300">
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="mb-4 has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan tahun masuk barang</span>

                    <label for="tahun" class="block mb-2 text-sm">tahun</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required" v-slot={errors}>
                            <input type="date" v-model="updateUps.tahun" name="tahun" id="tahun" class="p-2 w-72 rounded-lg outline-none bg-gray-300">
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="mb-4 has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan batas garansi</span>

                    <label for="garansi" class="block mb-2 text-sm">garansi</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required" v-slot={errors}>
                            <input type="date" v-model="updateUps.garansi" name="garansi" id="garansi" class="p-2 w-72 rounded-lg outline-none bg-gray-300">
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
            </div>
        </div>
        <button class="opacity-10 bg-gray-700 text-gray-200 w-28 py-2 rounded mt-6" type="submit" :class="{activesubmit : valid}" :disabled="invalid">ubah</button>
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
            upss:'',
            updateUps:{
                model:"",
                upsCriticalLoad : "",
                upsCriticalTemperature:"",
                upsCriticalCapacity:"",
                nomorSerial: "",
                namaSistem: "",
                manufaktur: "",
                peringkatTegangan: "",
                peringkatFrekuensi: "",
                peringkatTeganganBaterai: "",
                tahun: "",
                garansi : "",
            }
        }
    },
    async mounted(){
        const lokasi = this.$auth.user.lokasi
        const id = this.$route.params.id
        const resp = await this.$axios.get(`/master/ups/update/${id}/${lokasi}`)
        if(resp){
            resp.data.forEach(ups=>{
                this.updateUps.model = ups.model
                this.updateUps.upsCriticalLoad = ups.ups_critical_load
                this.updateUps.upsCriticalTemperature = ups.ups_critical_temperature
                this.updateUps.upsCriticalCapacity = ups.ups_critical_capacity
                this.updateUps.nomorSerial = ups.nomor_serial
                this.updateUps.namaSistem = ups.nama_sistem
                this.updateUps.manufaktur = ups.manufaktur
                this.updateUps.peringkatTegangan = ups.peringkat_tegangan
                this.updateUps.peringkatFrekuensi = ups.peringkat_frekuensi
                this.updateUps.peringkatTeganganBaterai = ups.peringkat_tegangan_baterai
                this.updateUps.tahun = moment(ups.tahun).format('YYYY-MM-DD')
                this.updateUps.garansi = moment(ups.garansi).format('YYYY-MM-DD')
            })
        }
    },
    methods:{
        async updateDataUps(){
            const resp = await this.$axios.post('/master/ups/update',{
                iduser: this.$auth.user.id,
                lokasiServer: this.$auth.user.lokasi,
                idups: this.$route.params.id,
                model:this.updateUps.model,
                upsCriticalLoad : this.updateUps.upsCriticalLoad,
                upsCriticalTemperature: this.updateUps.upsCriticalTemperature,
                upsCriticalCapacity: this.updateUps.upsCriticalCapacity,
                nomorSerial: this.updateUps.nomorSerial,
                namaSistem: this.updateUps.namaSistem,
                manufaktur: this.updateUps.manufaktur,
                peringkatTegangan:this.updateUps.peringkatTegangan,
                peringkatFrekuensi: this.updateUps.peringkatFrekuensi,
                peringkatTeganganBaterai: this.updateUps.peringkatTeganganBaterai,
                tahun: this.updateUps.tahun,
                garansi: this.updateUps.garansi,
            })
            if(resp){
                this.$router.push('/master/ups')
                swal('data di update',{icon:'success'})
            }
            else{
                swal('Error',resp.data.errmsg,{icon:'error'})
                this.$router.push('/master/updateups')
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