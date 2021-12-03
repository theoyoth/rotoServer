<template>
  <div class="min-h-screen bg-gray-300 w-widthContent ml-auto">
    <!-- <InputHeader item="AC"/> -->
    <Navbar/>

    <section class="bg-gray-100 min-h-screen w-widthContentField m-auto mt-7 p-4">
         <NuxtLink to="/master/ac"
          class="flex items-center justify-between rounded-md w-28 px-4 py-2 bg-gray-700">
          <div>
            <font-awesome-icon :icon="['fas', 'arrow-left']" class="text-gray-200" />
          </div>
          <p class="font-medium text-sm text-gray-200">kembali</p>
        </NuxtLink> 
        <p class="text-center text-xl text-gray-700 font-semibold">update AC</p>
    <form @submit.prevent="updateDataAc" class="w-11/12 mt-10">
        <div>
            <div class="grid grid-cols-3 grid-rows-4">
                <div class="mb-4">
                    <label for="merek" class="block mb-2 text-sm">merek</label>
                    <input type="text" v-model="updateAc.merek" name="merek" id="merek" class="p-2 w-72 rounded-lg outline-none bg-gray-300 uppercase">
                </div>
                <div class="mb-4">
                    <label for="model" class="block mb-2 text-sm">model</label>
                    <input type="text" v-model="updateAc.model" name="model" id="model" class="p-2 w-72 rounded-lg outline-none bg-gray-300 uppercase">
                </div>
                <div class="mb-4">
                    <label for="sumberDayaListrik" class="block mb-2 text-sm">sumber daya listrik</label>
                    <input type="text" v-model="updateAc.sumberDayaListrik" name="sumberDayaListrik" id="sumberDayaListrik" class="p-2 w-72 rounded-lg outline-none bg-gray-300">
                </div>
                 <div class="mb-4">
                    <label for="dimensi" class="block mb-2 text-sm">dimensi</label>
                    <input type="text" v-model="updateAc.dimensi" name="dimensi" id="dimensi" class="p-2 w-72 rounded-lg outline-none bg-gray-300 uppercase">
                </div>
                <div class="mb-4">
                    <label for="konsumsiDaya" class="block mb-2 text-sm">konsumsi daya listrik</label>
                    <input type="text" v-model="updateAc.konsumsiDayaListrik" name="konsumsiDayaListrik" id="konsumsiDaya" class="p-2 w-72 rounded-lg outline-none bg-gray-300">
                </div>
                <div class="mb-4">
                    <label for="kapasitasPendingin" class="block mb-2 text-sm">kapasitas pendingin</label>
                    <input type="text" v-model="updateAc.kapasitasPendingin" name="kapasitasPendingin" id="kapasitasPendingin" class="p-2 w-72 rounded-lg outline-none bg-gray-300">
                </div>
                <div class="mb-4">
                    <label for="tahun" class="block mb-2 text-sm">tahun</label>
                    <input type="date" v-model="updateAc.tahun" name="tahun" id="tahun" class="p-2 w-72 rounded-lg outline-none bg-gray-300">
                </div>
                <div class="mb-4">
                    <label for="garansi" class="block mb-2 text-sm">garansi</label>
                    <input type="date" v-model="updateAc.garansi" name="garansi" id="garansi" class="p-2 w-72 rounded-lg outline-none bg-gray-300">
                </div>
                
            </div>
        </div>
        <button class="bg-gray-700 text-gray-300 shadow-md rounded-lg w-28 h-10 mt-8" type="submit">ubah</button>
    </form>
</section>
</div>
</template>

<script>
import moment from 'moment'

export default {
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

</style>