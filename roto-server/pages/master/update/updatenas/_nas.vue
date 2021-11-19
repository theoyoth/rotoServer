<template>
  <div class="bg-gray-300 min-h-screen w-widthContent ml-auto">
    <!-- <InputHeader item="NAS"/> -->
    <Navbar/>
    <section class="bg-gray-100 min-h-screen w-widthContentField m-auto mt-7 p-4">
        <NuxtLink to="/master/nas"
          class="flex items-center justify-between rounded-md w-28 px-4 py-2 bg-gray-700">
          <div>
            <font-awesome-icon :icon="['fas', 'arrow-left']" class="text-gray-200" />
          </div>
          <p class="font-medium text-sm text-gray-200">kembali</p>
        </NuxtLink> 
        <p class="text-center text-xl text-gray-700 font-semibold">Input data baru</p>
    <form @submit.prevent="updateDataNas" class="w-11/12 mt-10">
        <div>
            <div class="grid grid-cols-3 grid-rows-4">
                <div class="mb-4">
                    <label for="merek" class="block mb-2 text-sm">merek</label>
                    <input type="text" v-model="updateNas.merek" name="merek" id="merek" class="p-2 w-72 rounded-lg outline-none bg-gray-300">
                </div>
                <div class="mb-4">
                    <label for="model" class="block mb-2 text-sm">model</label>
                    <input type="text" v-model="updateNas.model" name="model" id="model" class="p-2 w-72 rounded-lg outline-none bg-gray-300">
                </div>
                <div class="mb-4">
                    <label for="tipe" class="block mb-2 text-sm">tipe</label>
                    <input type="text" v-model="updateNas.tipe" name="tipe" id="tipe" class="p-2 w-72 rounded-lg outline-none bg-gray-300">
                </div>
                <div class="mb-4">
                    <label for="storage" class="block mb-2 text-sm">storage</label>
                    <div class="flex">
                        <input type="text" v-model="updateNas.storage" name="storage" id="storage" class="p-2 w-60 rounded-lg outline-none bg-gray-300">
                        <select name="storage" id="storage" class="p-2 rounded-r-lg -ml-2">
                            <option value="0">GB</option>
                            <option value="1">TB</option>
                        </select>
                    </div>
                </div>
                <div class="mb-4">
                    <label for="processor" class="block mb-2 text-sm">processor</label>
                    <input type="text" v-model="updateNas.processor" name="processor" id="processor" class="p-2 w-72 rounded-lg outline-none bg-gray-300">
                </div>
                <div class="mb-4">
                    <label for="cpu" class="block mb-2 text-sm">cpu</label>
                    <input type="text" v-model="updateNas.cpu" name="cpu" id="cpu" class="p-2 w-72 rounded-lg outline-none bg-gray-300">
                </div>
                <div class="mb-4">
                    <label for="raid" class="block mb-2 text-sm">raid</label>
                    <input type="text" v-model="updateNas.raid" name="raid" id="raid" class="p-2 w-72 rounded-lg outline-none bg-gray-300">
                </div>
                <div class="mb-4">
                    <label for="tahun" class="block mb-2 text-sm">tahun</label>
                    <input type="date" v-model="updateNas.tahun" name="tahun" id="tahun" class="p-2 w-72 rounded-lg outline-none bg-gray-300">
                </div>
                <div class="mb-4">
                    <label for="garansi" class="block mb-2 text-sm">garansi</label>
                    <input type="date" v-model="updateNas.garansi" name="garansi" id="garansi" class="p-2 w-72 rounded-lg outline-none bg-gray-300">
                </div>
            </div>
        </div>
        <button class="bg-gray-700 text-gray-300 shadow-md rounded-lg w-28 h-10 outline-none" type="submit">ubah</button>
    </form>
</section>
</div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
export default {
  data(){
        return{
            nass:'',
            updateNas:{
                merek : "",
                model: "",
                processor : "",
                storage: "",
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
            const resp = await axios.get(`http://localhost:3000/server/master/nas/update/${id}/${lokasi}`)
            if(resp){
                resp.data.forEach(nas=>{
                    this.updateNas.merek = nas.merek
                    this.updateNas.model = nas.model
                    this.updateNas.tipe = nas.tipe
                    this.updateNas.processor = nas.processor
                    this.updateNas.storage = nas.storage
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
            const resp = await axios.post('http://localhost:3000/server/master/nas/update',{
                lokasiServer : this.$auth.user.lokasi,
                iduser : this.$auth.user.id,
                idnas : this.$route.params.id,
                merek:this.updateNas.merek,
                model : this.updateNas.model,
                processor : this.updateNas.processor,
                storage : this.updateNas.storage,
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

</style>