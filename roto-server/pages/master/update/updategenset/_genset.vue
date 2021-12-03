<template>
  <div class="bg-gray-300 min-h-screen w-widthContent ml-auto">
    <!-- <InputHeader item="Genset"/> -->
    <Navbar/>
    <section class="bg-gray-100 min-h-screen w-widthContentField m-auto mt-7 p-4">
        <NuxtLink to="/master/genset"
          class="flex items-center justify-between rounded-md w-28 px-4 py-2 bg-gray-700">
          <div>
            <font-awesome-icon :icon="['fas', 'arrow-left']" class="text-gray-200" />
          </div>
          <p class="font-medium text-sm text-gray-200">kembali</p>
        </NuxtLink> 
        <p class="text-center text-xl text-gray-700 font-semibold">update Genset</p>
    <form @submit.prevent="updateDataGenset" class="w-11/12 mt-10">
        <div>
            <div class="grid grid-cols-3 grid-rows-4">
                <div class="mb-4">
                    <label for="merek" class="block mb-2 text-sm">merek</label>
                    <input type="text" v-model="updateGenset.merek" name="merek" id="merek" class="p-2 w-72 rounded-lg outline-none bg-gray-300 uppercase">
                </div>
                <div class="mb-4">
                    <label for="model" class="block mb-2 text-sm">model</label>
                    <input type="text" v-model="updateGenset.model" name="model" id="model" class="p-2 w-72 rounded-lg outline-none bg-gray-300 uppercase">
                </div>
                <div class="mb-4">
                    <label for="tipe" class="block mb-2 text-sm">tipe</label>
                    <input type="text" v-model="updateGenset.tipe" name="tipe" id="tipe" class="p-2 w-72 rounded-lg outline-none bg-gray-300 uppercase">
                </div>
                <div class="mb-4">
                    <label for="tahun" class="block mb-2 text-sm">tahun</label>
                    <input type="date" v-model="updateGenset.tahun" name="tahun" id="tahun" class="p-2 w-72 rounded-lg outline-none bg-gray-300">
                </div>
                <div class="mb-4">
                    <label for="garansi" class="block mb-2 text-sm">garansi</label>
                    <input type="date" v-model="updateGenset.garansi" name="garansi" id="garansi" class="p-2 w-72 rounded-lg outline-none bg-gray-300">
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
    middleware:"isAuthenticated",
  data(){
        return{
            gensets:'',
            updateGenset:{
                merek: "",
                model : "",
                tipe : "",
                tahun: "",
                garansi: "",
            }
        }
    },
    async mounted(){
        try{
            const lokasi = this.$auth.user.lokasi
            const id = this.$route.params.id
            const resp = await this.$axios.get(`/master/genset/update/${id}/${lokasi}`) 
            if(resp){
                resp.data.forEach(genset=>{
                    this.updateGenset.merek = genset.merek
                    this.updateGenset.model = genset.model
                    this.updateGenset.tipe = genset.tipe
                    this.updateGenset.tahun = moment(genset.tahun).format('YYYY-MM-DD')
                    this.updateGenset.garansi = moment(genset.garansi).format('YYYY-MM-DD')
                })
            }
        }
        catch(err){
            console.log(err)
        }
    },
     methods: {
        async updateDataGenset(){
            const resp = await this.$axios.post('/master/genset/update',{
                lokasiServer : this.$auth.user.lokasi,
                iduser : this.$auth.user.id,
                idgenset : this.$route.params.id,
                merek:this.updateGenset.merek,
                model : this.updateGenset.model,
                tipe : this.updateGenset.tipe,
                tahun : this.updateGenset.tahun,
                garansi: this.updateGenset.garansi,
            })
            if(resp){
                this.$router.push('/master/genset')
                swal('data di update',{icon:'success'})
            }
            else{
                swal('Error',resp.data.errmsg,{icon:'error'})
                this.$router.push('/master/genset/updategenset')
            }
        }
    }
}
</script>

<style>

</style>