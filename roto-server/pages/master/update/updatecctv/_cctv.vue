<template>
  <div class="bg-gray-300 min-h-screen w-widthContent ml-auto">
    <!-- <InputHeader item="CCTV"/> -->
    <Navbar/>
    <section class="bg-gray-100 min-h-screen w-widthContentField m-auto mt-7 p-4">
        <NuxtLink to="/master/cctv"
          class="flex items-center justify-between rounded-md w-28 px-4 py-2 bg-gray-700">
          <div>
            <font-awesome-icon :icon="['fas', 'arrow-left']" class="text-gray-200" />
          </div>
          <p class="font-medium text-sm text-gray-200">kembali</p>
        </NuxtLink> 
        <p class="text-center text-xl text-gray-700 font-semibold">update CCTV</p>
    <form @submit.prevent="updateDataCctv" class="w-11/12 mt-10">
        <div>
            <div class="grid grid-cols-3 grid-rows-4">
                <div class="mb-4">
                    <label for="merek" class="block mb-2 text-sm">merek</label>
                    <input type="text" v-model="updateCctv.merek" name="merek" id="merek" class="p-2 w-72 rounded-lg outline-none bg-gray-300 uppercase">
                </div>
                <div class="mb-4">
                    <label for="model" class="block mb-2 text-sm">model</label>
                    <input type="text" v-model="updateCctv.model" name="model" id="model" class="p-2 w-72 rounded-lg outline-none bg-gray-300 uppercase">
                </div>
                <div class="mb-4">
                    <label for="garansi" class="block mb-2 text-sm">garansi</label>
                    <input type="date" v-model="updateCctv.garansi" name="garansi" id="garansi" class="p-2 w-72 rounded-lg outline-none bg-gray-300">
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
            cctvs:'',
            updateCctv:{
                merek : "",
                model: "",
                garansi : "",
            }
        }
    },
    async mounted(){
        try{
            const lokasi = this.$auth.user.lokasi
            const id = this.$route.params.id

            const resp = await this.$axios.get(`/master/cctv/update/${id}/${lokasi}`)
            if(resp){
                resp.data.forEach(cctv=>{
                    this.updateCctv.merek = cctv.merek
                    this.updateCctv.model = cctv.model
                    this.updateCctv.garansi = moment(cctv.garansi).format('YYYY-MM-DD')
                })
            }
            
        }
        catch(err){
            console.log(err)
        }
        
    },
    methods:{
        async updateDataCctv(){
            const resp = await this.$axios.post('/master/cctv/update',{
                iduser: this.$auth.user.id,
                lokasiServer: this.$auth.user.lokasi,
                idcctv: this.$route.params.id,
                merek:this.updateCctv.merek,
                model: this.updateCctv.model,
                garansi : this.updateCctv.garansi,
            })
             if(resp){
                this.$router.push('/master/cctv')
                swal('data di update',{icon:'success'})
            }
            else{
                swal('Error',resp.data.errmsg,{icon:'error'})
                this.$router.push('/master/cctv/updatecctv')
            }
        }
    }

}
</script>

<style>

</style>