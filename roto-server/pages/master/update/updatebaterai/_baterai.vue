<template>
  <div class="bg-gray-300 w-widthContent ml-auto">
    <!-- <InputHeader item="baterai"/> -->
    <Navbar/>
    <section class="bg-gray-100 min-h-screen w-widthContentField m-auto mt-7 p-4">
         <NuxtLink to="/master/baterai"
          class="flex items-center justify-between rounded-md w-28 px-4 py-2 bg-gray-700">
          <div>
            <font-awesome-icon :icon="['fas', 'arrow-left']" class="text-gray-200" />
          </div>
          <p class="font-medium text-sm text-gray-200">kembali</p>
        </NuxtLink> 
        <p class="text-center text-xl text-gray-700 font-semibold">update Baterai</p>
    <form @submit.prevent="updateDataBaterai" class="w-11/12 mt-10">
        <div >
            <div class="grid grid-cols-3 grid-rows-4">
                <div class="mb-4">
                    <label for="accu" class="block mb-2 text-sm">accu</label>
                    <input type="text" v-model="updateBaterai.accu" name="accu" id="accu" class="p-2 w-72 rounded-lg outline-none bg-gray-300">
                </div>
                <div class="mb-4">
                    <label for="kuantitas" class="block mb-2 text-sm">kuantitas</label>
                    <input type="text" v-model="updateBaterai.kuantitas" name="kuantitas" id="kuantitas" class="p-2 w-72 rounded-lg outline-none bg-gray-300">
                </div>
                <div class="mb-4">
                    <label for="tegangan" class="block mb-2 text-sm">tegangan</label>
                    <input type="text" v-model="updateBaterai.voltage" name="tegangan" id="tegangan" class="p-2 w-72 rounded-lg outline-none bg-gray-300">
                </div>

                <div class="mb-4">
                    <label for="tahun" class="block mb-2 text-sm">tahun</label>
                    <input type="date" v-model="updateBaterai.tahun" name="tahun" id="tahun" class="p-2 w-72 rounded-lg outline-none bg-gray-300">
                </div>
                <div class="mb-4">
                    <label for="garansi" class="block mb-2 text-sm">garansi</label>
                    <input type="date" v-model="updateBaterai.garansi" name="garansi" id="garansi" class="p-2 w-72 rounded-lg outline-none rounded-lg outline-none bg-gray-300">
                </div>
                
            </div>
        </div>
        <button class="bg-gray-700 text-gray-100 shadow-md rounded-lg w-28 h-10">ubah</button>
    </form>
</section>
</div>
</template>

<script>
import moment from 'moment'

export default {
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

</style>