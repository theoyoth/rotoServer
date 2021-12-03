<template>
  <div class="bg-gray-300 min-h-screen w-widthContent ml-auto">
    <!-- <InputHeader item="Network"/> -->
    <Navbar/>
    <section class="bg-gray-100 min-h-screen w-widthContentField m-auto mt-7 p-4">
        <NuxtLink to="/master/network"
          class="flex items-center justify-between rounded-md w-28 px-4 py-2 bg-gray-700">
          <div>
            <font-awesome-icon :icon="['fas', 'arrow-left']" class="text-gray-200" />
          </div>
          <p class="font-medium text-sm text-gray-200">kembali</p>
        </NuxtLink> 
        <p class="text-center text-xl text-gray-700 font-semibold">update master Network</p>
    <form @submit.prevent="updateDataNetwork" class="w-11/12 mt-10">
        <div>
            <div class="grid grid-cols-3 grid-rows-4">
                <div class="mb-4">
                    <label for="merek" class="block mb-2 text-sm">merek</label>
                    <input type="text" v-model="updateNetwork.merek" name="merek" id="merek" class="p-2 w-72 rounded-lg outline-none bg-gray-300 uppercase">
                </div>
                <div class="mb-4">
                    <label for="model" class="block mb-2 text-sm">model</label>
                    <input type="text" v-model="updateNetwork.model" name="model" id="model" class="p-2 w-72 rounded-lg outline-none bg-gray-300 uppercase">
                </div>
                <div class="mb-4">
                    <label for="tipe" class="block mb-2 text-sm">tipe</label>
                    <input type="text" v-model="updateNetwork.tipe" name="tipe" id="tipe" class="p-2 w-72 rounded-lg outline-none bg-gray-300 uppercase">
                </div>
                <div class="mb-4">
                    <label for="kuantitas" class="block mb-2 text-sm">kuantitas</label>
                    <input type="text" v-model="updateNetwork.kuantitas" name="kuantitas" id="kuantitas" class="p-2 w-72 rounded-lg outline-none bg-gray-300">
                </div>
                <div class="mb-4">
                    <label for="kanal" class="block mb-2 text-sm">kanal</label>
                    <input type="text" v-model="updateNetwork.kanal" name="kanal" id="kanal" class="p-2 w-72 rounded-lg outline-none bg-gray-300">
                </div>
                <div class="mb-4">
                    <label for="tahun" class="block mb-2 text-sm">tahun</label>
                    <input type="date" v-model="updateNetwork.tahun" name="tahun" id="tahun" class="p-2 w-72 rounded-lg outline-none bg-gray-300">
                </div>
                <div class="mb-4">
                    <label for="garansi" class="block mb-2 text-sm">garansi</label>
                    <input type="date" v-model="updateNetwork.garansi" name="garansi" id="garansi" class="p-2 w-72 rounded-lg outline-none bg-gray-300">
                </div>  
            </div>
        </div>
        <button class="bg-gray-700 text-gray-300 shadow-md rounded-lg w-28 h-10" type="submit">ubah</button>
    </form>
</section>
</div>
</template>

<script>
import moment from 'moment'

export default {
   data(){
        return{
            networks:'',
            updateNetwork:{
                merek : "",
                model : "",
                tipe : "",
                kuantitas : "",
                kanal : "",
                tahun : "",
                garansi : "",
            }
        }
    },
    async mounted(){
        try{
            const lokasi = this.$auth.user.lokasi
            const id = this.$route.params.id

            const resp = await this.$axios.get(`/master/network/update/${id}/${lokasi}`)
            if(resp){
                resp.data.forEach(network=>{
                    this.updateNetwork.merek = network.merek
                    this.updateNetwork.model = network.model
                    this.updateNetwork.tipe = network.tipe
                    this.updateNetwork.kuantitas = network.kuantitas
                    this.updateNetwork.kanal = network.kanal
                    this.updateNetwork.tahun = moment(network.tahun).format('YYYY-MM-DD')
                    this.updateNetwork.garansi = moment(network.garansi).format('YYYY-MM-DD')
                })
            }
            
        }
        catch(err){
            console.log(err)
        }   
    },
    methods:{
        async updateDataNetwork(){
            const resp = await this.$axios.post('/master/network/update',{
                lokasiServer : this.$auth.user.lokasi,
                iduser : this.$auth.user.id,
                idnetwork : this.$route.params.id,
                merek:this.updateNetwork.merek,
                model : this.updateNetwork.model,
                tipe: this.updateNetwork.tipe,
                kuantitas : this.updateNetwork.kuantitas,
                kanal: this.updateNetwork.kanal,
                tahun : this.updateNetwork.tahun,
                garansi : this.updateNetwork.garansi
            })
            if(resp){
                this.$router.push('/master/network')
                swal('data di update',{icon:'success'})
            }
            else{
                swal('Error',resp.data.errmsg,{icon:'error'})
                this.$router.push('/master/network/updatenetwork')
            }
        }
    }
}
</script>

<style>

</style>