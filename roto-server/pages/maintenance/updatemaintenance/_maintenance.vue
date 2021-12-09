<template>
  <div class="bg-gray-300 min-h-screen w-widthContent ml-auto">
    <!-- <InputHeader maintenance="maintenance"/> -->
    <Navbar/>
    <section class="bg-gray-100 min-h-screen w-widthContentField m-auto mt-7 p-4">
        <NuxtLink to="/maintenance"
          class="flex items-center justify-between rounded-md w-28 px-4 py-2 bg-gray-700 hover:bg-gray-600 transition duration-200">
          <div>
            <font-awesome-icon :icon="['fas', 'arrow-left']" class="text-gray-200" />
          </div>
          <p class="font-medium text-sm text-gray-200">kembali</p>
        </NuxtLink> 
        <p class="text-center text-xl text-gray-700 font-semibold">update maintenance</p>

    <ValidationObserver>
    <form @submit.prevent="updateDataMaintenance" class="w-11/12 mt-10" id="updatemaintenance">
        <div>
            <input type="hidden" name="id" :value="maintenances.id">
            <div class="grid grid-cols-3">
                <div class="mb-4">
                    <label for="tanggal" class="block mb-2 text-sm">tanggal</label>
                    <input type="date" v-model="updateMaintenance.tanggal" name="tanggal" id="tanggal" class="p-2 w-72 rounded-lg outline-none bg-gray-300">
                </div>
                <div class="mb-4">
                    <div class="has-tooltip">
                        <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-24">masukan suhu ruangan server</span>
                        <label for="suhu" class="block mb-2 text-sm">suhu</label>
                        <div class="flex flex-col w-72">
                            <ValidationProvider rules="required|numeric" v-slot={errors}>
                            <div class="flex items-center w-full">
                                <input type="text" v-model="updateMaintenance.suhu" name="suhu" id="suhu" class="p-2 w-full rounded-lg bg-gray-300 outline-none" >
                                <font-awesome-icon :icon="['fas', 'check-circle']" class="transition-all duration-200 text-green-500 ml-2 opacity-10" :class="{checktrue : updateMaintenance.suhu!=='' && !errors[0]}"/>
                            </div>
                            <p class="text-xs mt-1 text-right text-red-500">{{ errors[0] }}</p>
                            </ValidationProvider>
                        </div>
                        <small v-if="updateMaintenance.suhu > 50" class="text-green-500">suhu ruangan tinggi</small>
                    </div>
                </div>
                <div class="mb-4">
                    <div class="has-tooltip">
                        <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-36">masukan kelembapan ruangan server</span>
                        <label for="kelembapan" class="block mb-2 text-sm">kelembapan</label>
                        <div class="flex flex-col w-72">
                            <ValidationProvider rules="required|numeric" v-slot={errors}>
                            <div class="flex items-center">
                                <input type="text" v-model="updateMaintenance.kelembapan" name="kelembapan" id="kelembapan" class="p-2 w-full rounded-lg outline-none bg-gray-300" >
                                <font-awesome-icon :icon="['fas', 'check-circle']" class="transition-all duration-200 text-green-500 ml-2 opacity-10" :class="{checktrue : updateMaintenance.kelembapan !=='' && !errors[0]}"/>
                            </div>
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                            </ValidationProvider>
                        </div>
                        <small v-if="updateMaintenance.kelembapan > 80" class="text-green-500">kelembapan ruangan tinggi</small>
                    </div>
                </div>
                <div class="mb-4">
                    <div class="has-tooltip">
                        <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-36">masukan kondisi suhu AC</span>
                        <label for="ac" class="block mb-2 text-sm">AC</label>
                        <div class="flex flex-col w-72">
                            <ValidationProvider rules="required" v-slot={errors}>
                            <div class="flex items-center">
                                <select name="ac" id="ac" class="p-2 w-full rounded-lg  bg-gray-300 outline-none" v-model="updateMaintenance.ac" >
                                    <option value="baik">baik</option>
                                    <option value="tidak baik">tidak baik</option>
                                </select>
                                <font-awesome-icon :icon="['fas', 'check-circle']" class="transition-all duration-200 text-green-500 ml-2 opacity-10" :class="{checktrue : updateMaintenance.ac !=='' && !errors[0]}"/>
                            </div>
                            <textarea v-if="updateMaintenance.ac === 'tidak baik'" v-model="updateMaintenance.keteranganAc" name="acexplain" id="acexplain" cols="15" rows="3" class="bg-gray-300 mt-1 p-2 outline-none rounded" placeholder="note..."></textarea>
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                            </ValidationProvider>
                        </div>
                    </div>
                </div>
                <div class="mb-4">
                    <div class="has-tooltip">
                        <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-36">masukan kondisi UPS</span>
                        <label for="ups" class="block mb-2 text-sm">UPS</label>
                        <div class="flex flex-col w-72">
                            <ValidationProvider rules="required" v-slot={errors}>
                            <div class="flex items-center">
                                <select name="ups" id="ups" class="p-2 w-full rounded-lg bg-gray-300  outline-none" v-model="updateMaintenance.ups" >
                                    <option value="" disabled>pilih kondisi</option>
                                    <option value="baik">baik</option>
                                    <option value="tidak baik">tidak baik</option>
                                </select>
                                <font-awesome-icon :icon="['fas', 'check-circle']" class="transition-all duration-200 text-green-500 ml-2 opacity-10" :class="{checktrue : updateMaintenance.ups !=='' && !errors[0]}"/>
                            </div>
                            <textarea v-if="updateMaintenance.ups === 'tidak baik'" v-model="updateMaintenance.keteranganUps" name="acexplain" id="acexplain" cols="15" rows="3" class="bg-gray-300 mt-1 p-2 outline-none rounded" placeholder="note..."></textarea>
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                            </ValidationProvider>
                        </div>
                    </div>
                </div>
                <div class="mb-4">
                    <div class="has-tooltip">
                        <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-36">masukan kondisi baterai</span>
                        <label for="baterai" class="block mb-2 text-sm">baterai</label>
                        <div class="flex flex-col w-72">
                            <ValidationProvider rules="required" v-slot={errors}>
                            <div class="flex items-center">
                                <select v-model="updateMaintenance.baterai" name="baterai" id="baterai" class="p-2 w-full rounded-lg bg-gray-300 outline-none">
                                    <option value="" disabled>pilih kondisi</option>
                                    <option value="baik">baik</option>
                                    <option value="tidak baik">tidak baik</option>
                                </select>
                                <font-awesome-icon :icon="['fas', 'check-circle']" class="transition-all duration-200 text-green-500 ml-2 opacity-10" :class="{checktrue : updateMaintenance.baterai !== '' && !errors[0]}"/>
                            </div>
                            <textarea v-if="updateMaintenance.baterai === 'tidak baik'" v-model="updateMaintenance.keteranganBaterai" name="acexplain" id="acexplain" cols="15" rows="3" class="bg-gray-300 mt-1 p-2 outline-none rounded" placeholder="note..."></textarea>
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                            </ValidationProvider>
                        </div>
                    </div>
                </div>
                <div class="mb-4">
                    <div class="flex flex-col w-72 has-tooltip">
                         <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-20">masukan kondisi server</span>
                        <label for="server" class="block mb-2 text-sm">server</label>
                        <ValidationProvider rules="required|passchar" v-slot={errors}>
                        <div class="flex items-center">
                            <select v-model="updateMaintenance.server" name="server" id="server" class="p-2 w-full rounded-lg bg-gray-300 outline-none" >
                                <option value="" disabled>pilih kondisi</option>
                                <option value="baik">baik</option>
                                <option value="tidak baik">tidak baik</option>
                            </select>
                            <font-awesome-icon :icon="['fas', 'check-circle']" class="transition-all duration-200 text-green-500 ml-2 opacity-10" :class="{checktrue : updateMaintenance.server !== '' && !errors[0]}"/>
                        </div>
                        <textarea v-if="updateMaintenance.server === 'tidak baik'" v-model="updateMaintenance.keteranganServer" name="acexplain" id="acexplain" cols="15" rows="3" class="bg-gray-300 mt-1 p-2 outline-none rounded" placeholder="note..."></textarea>
                        <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                   
                </div>
                <div class="mb-4">
                    <div class="has-tooltip">
                        <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-28">masukan keterangan</span>
                        <label for="keterangan" class="block mb-2 text-sm">keterangan</label>
                        <div class="flex flex-col w-72">
                            <ValidationProvider rules="required|passchar" v-slot={errors}>
                            <textarea rows="4" form="updatemaintenance" type="text" v-model="updateMaintenance.keterangan" name="keterangan" id="keterangan" class="p-2 w-full rounded-lg bg-gray-300 outline-none"></textarea>
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                            </ValidationProvider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <button class="bg-gray-700 text-gray-200 w-24 py-2 rounded mt-10" type="submit" >ubah</button>
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
    components: {
        ValidationObserver,
        ValidationProvider
    },
  data(){
    return{
      maintenances:'',
      updateMaintenance:{
        id : "",
        nama : "",
        tanggal : "",
        suhu : "",
        kelembapan : "",
        ac : "",
        ups : "",
        baterai : "",
        network : "",
        server : "",
        keterangan : "",
        keteranganAc : "",
        keteranganUps : "",
        keteranganBaterai : "",
        keteranganServer : "",
      }
    }
  },
  methods:{
      async updateDataMaintenance(){
          const resp = await this.$axios.post('/maintenance/update/updatemaintenance',{
            lokasiServer : this.$auth.user.lokasi,
            iduser : this.$auth.user.id,
            idmaintenance : this.$route.params.id,
            nama : this.updateMaintenance.nama,
            tanggal : this.updateMaintenance.tanggal,
            suhu: this.updateMaintenance.suhu,
            kelembapan: this.updateMaintenance.kelembapan,
            ac : this.updateMaintenance.ac,
            ups : this.updateMaintenance.ups,
            baterai : this.updateMaintenance.baterai,
            server : this.updateMaintenance.server,
            keterangan : this.updateMaintenance.keterangan,
            keteranganAc : this.updateMaintenance.keteranganAc,
            keteranganUps : this.updateMaintenance.keteranganUps,
            keteranganBaterai : this.updateMaintenance.keteranganBaterai,
            keteranganServer : this.updateMaintenance.keteranganServer,
          })
          if(resp){
                this.$router.push('/maintenance')
                swal('data di update',{icon:'success'})
            }
            else{
                swal('Error',resp.data.errmsg,{icon:'error'})
                this.$router.push('/maintenance/updatemaintenance')
            }
      }
  },
  async mounted(){
    try{
    const lokasi = this.$auth.user.lokasi
    const id = this.$route.params.id
    const resp = await this.$axios.get(`/maintenance/getdatamaintenanceupdate/${id}/${lokasi}`)
    if(resp){
        resp.data.forEach(dmain=>{
            this.updateMaintenance.tanggal = moment(dmain.tanggal).format('YYYY-MM-DD')
            this.updateMaintenance.nama = dmain.nama_pemeriksa
            this.updateMaintenance.suhu = dmain.suhu
            this.updateMaintenance.kelembapan = dmain.kelembapan
            this.updateMaintenance.ac = dmain.ac
            this.updateMaintenance.ups = dmain.ups
            this.updateMaintenance.baterai = dmain.baterai
            this.updateMaintenance.server = dmain.server
            this.updateMaintenance.keterangan = dmain.keterangan
            this.updateMaintenance.keteranganAc = dmain.keterangan_ac
            this.updateMaintenance.keteranganUps = dmain.keterangan_ups
            this.updateMaintenance.keteranganBaterai = dmain.keterangan_baterai
            this.updateMaintenance.keteranganServer = dmain.keterangan_server
        })
        }
    } catch(err) {
        console.log(err)
    }
  }
}
</script>

<style>
.checktrue{
    opacity:1;
}
    .activesubmit {
        background-color: rgb(55, 65, 81);
        color:whitesmoke;
        cursor:pointer;
        width:100px;
        opacity:1;
        padding-top: .5rem;
        padding-bottom: .5rem;
        transition: all 0.5s;
        transform:translateY(4px);
    }
    .redring:focus {
        outline: 1px solid rgb(238, 56, 56);
    }
    .bluering {
        outline: 1px solid rgb(56, 135, 238);
    }
    .incop{
        opacity:1,
    }
    .decop{
        opacity: 0.1;
    }
</style>