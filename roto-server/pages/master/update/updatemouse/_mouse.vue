<template>
  <div class="bg-gray-300 min-h-screen w-widthContent ml-auto">
    <!-- <InputHeader item="Mouse"/> -->
    <Navbar/>
    <section class="bg-gray-100 min-h-screen w-widthContentField m-auto mt-7 p-4">
        <NuxtLink to="/master/mouse"
          class="flex items-center justify-between rounded-md w-28 px-4 py-2 bg-gray-700">
          <div>
            <font-awesome-icon :icon="['fas', 'arrow-left']" class="text-gray-200" />
          </div>
          <p class="font-medium text-sm text-gray-200">kembali</p>
        </NuxtLink> 
        <p class="text-center text-xl text-gray-700 font-semibold">update mouse</p>
    <form @submit.prevent="updateDataMouse" class="w-11/12 mt-10">
        <div>
            <div class="grid grid-cols-3 grid-rows-4">
                <div class="mb-4">
                    <label for="merek" class="block mb-2 text-sm">merek</label>
                    <input type="text" v-model="updateMouse.merek" name="merek" id="merek" class="p-2 w-72 rounded-lg outline-none bg-gray-300 uppercase">
                </div>
                <div class="mb-4">
                    <label for="model" class="block mb-2 text-sm">model</label>
                    <input type="text" v-model="updateMouse.model" name="model" id="model" class="p-2 w-72 rounded-lg outline-none bg-gray-300 uppercase">
                </div>
                <div class="mb-4">
                    <label for="tipe" class="block mb-2 text-sm">tipe</label>
                    <input type="text" v-model="updateMouse.tipe" name="tipe" id="tipe" class="p-2 w-72 rounded-lg outline-none bg-gray-300 uppercase">
                </div>
                <div class="mb-4">
                    <label for="tahun" class="block mb-2 text-sm">tahun</label>
                    <input type="date" v-model="updateMouse.tahun" name="tahun" id="tahun" class="p-2 w-72 rounded-lg outline-none bg-gray-300">
                </div>
                <div class="mb-4">
                    <label for="garansi" class="block mb-2 text-sm">garansi</label>
                    <input type="date" v-model="updateMouse.garansi" name="garansi" id="garansi" class="p-2 w-72 rounded-lg outline-none bg-gray-300">
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
            mouses:'',
             updateMouse:{
                merek : "",
                model: "",
                tipe : "",
                tahun: "",
                garansi : "",
            }
        }
    },
    async mounted(){
        try{
            const id = this.$route.params.id
            const lokasi = this.$auth.user.lokasi

            const resp = await this.$axios.get(`/master/mouse/update/${id}/${lokasi}`)
            if(resp){
                resp.data.forEach(mouse=>{
                    this.updateMouse.merek = mouse.merek
                    this.updateMouse.model = mouse.model
                    this.updateMouse.tipe = mouse.tipe
                    this.updateMouse.tahun = moment(mouse.tahun).format('YYYY-MM-DD')
                    this.updateMouse.garansi = moment(mouse.garansi).format('YYYY-MM-DD')
                })
            }
        }
        catch (err) {
            console.log(err)
        }  
    },
    methods: {
        async updateDataMouse(){
            const resp = await this.$axios.post('/master/mouse/update',{
                lokasiServer : this.$auth.user.lokasi,
                iduser : this.$auth.user.id,
                idmouse : this.$route.params.id,
                merek:this.updateMouse.merek,
                model : this.updateMouse.model,
                tipe : this.updateMouse.tipe,
                tahun : this.updateMouse.tahun,
                garansi: this.updateMouse.garansi,
            })
            if(resp){
                this.$router.push('/master/mouse')
                swal('data di update',{icon:'success'})
            }
            else{
                swal('Error',resp.data.errmsg,{icon:'error'})
                this.$router.push('/master/mouse/updatemouse')
            }
        }
    }
}
</script>

<style>

</style>