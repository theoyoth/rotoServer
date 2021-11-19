<template>
  <div class="bg-gray-300 min-h-screen w-widthContent ml-auto">
    <!-- <InputHeader item="Keyboard"/> -->
    <Navbar />
    <section class="bg-gray-100 min-h-screen w-widthContentField m-auto mt-7 p-4">
        <NuxtLink to="/master/keyboard"
          class="flex items-center justify-between rounded-md w-28 px-4 py-2 bg-gray-700">
          <div>
            <font-awesome-icon :icon="['fas', 'arrow-left']" class="text-gray-200" />
          </div>
          <p class="font-medium text-sm text-gray-200">kembali</p>
        </NuxtLink> 
        <p class="text-center text-xl text-gray-700 font-semibold">update keyboard</p>
    <form @submit.prevent="updateDataKeyboard" class="w-11/12 mt-10">
        <div>
            <div class="grid grid-cols-3 grid-rows-4">
                <div class="mb-4">
                    <label for="merek" class="block mb-2 text-sm">merek</label>
                    <input type="text" v-model="updateKeyboard.merek" name="merek" id="merek" class="p-2 w-72 rounded-lg outline-none bg-gray-300">
                </div>
                <div class="mb-4">
                    <label for="model" class="block mb-2 text-sm">model</label>
                    <input type="text" v-model="updateKeyboard.model" name="model" id="model" class="p-2 w-72 rounded-lg outline-none bg-gray-300">
                </div>
                <div class="mb-4">
                    <label for="tipe" class="block mb-2 text-sm">tipe</label>
                    <input type="text" v-model="updateKeyboard.tipe" name="tipe" id="tipe" class="p-2 w-72 rounded-lg outline-none bg-gray-300">
                </div>
                <div class="mb-4">
                    <label for="tahun" class="block mb-2 text-sm">tahun</label>
                    <input type="date" v-model="updateKeyboard.tahun" name="tahun" id="tahun" class="p-2 w-72 rounded-lg outline-none bg-gray-300">
                </div>
                <div class="mb-4">
                    <label for="garansi" class="block mb-2 text-sm">garansi</label>
                    <input type="date" v-model="updateKeyboard.garansi" name="garansi" id="garansi" class="p-2 w-72 rounded-lg outline-none bg-gray-300">
                </div>
            </div>
        </div>
        <button class="bg-gray-700 text-gray-300 shadow-md rounded-lg w-28 h-10" type="submit">kirim</button>
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
            keyboards:'',
            updateKeyboard:{
                merek : "",
                model : "",
                tipe : "",
                tahun : "",
                garansi : "",
            }
        }
    },
    async mounted(){
        try{
            const lokasi = this.$auth.user.lokasi
            const id = this.$route.params.id
            const resp = await axios.get(`http://localhost:3000/server/master/keyboard/update/${id}/${lokasi}`)
            if(resp){
            resp.data.forEach(keyboard=>{
                this.updateKeyboard.merek = keyboard.merek
                this.updateKeyboard.model = keyboard.model
                this.updateKeyboard.tipe = keyboard.tipe
                this.updateKeyboard.tahun = moment(keyboard.tahun).format('YYYY-MM-DD')
                this.updateKeyboard.garansi = moment(keyboard.garansi).format('YYYY-MM-DD')
            })
        }
        }
        catch(err){
            console.log(err)
        }   
    },
    methods: {
        async updateDataKeyboard(){
            const resp = await axios.post('http://localhost:3000/server/master/keyboard/update',{
                lokasiServer : this.$auth.user.lokasi,
                iduser : this.$auth.user.id,
                idkeyboard : this.$route.params.id,
                merek:this.updateKeyboard.merek,
                model : this.updateKeyboard.model,
                tipe : this.updateKeyboard.tipe,
                tahun : this.updateKeyboard.tahun,
                garansi: this.updateKeyboard.garansi,
            })
            if(resp){
                this.$router.push('/master/keyboard')
                swal('data di update',{icon:'success'})
            }
            else{
                swal('Error',resp.data.errmsg,{icon:'error'})
                this.$router.push('/master/keyboard/updatekeyboard')
            }
        }
    }
}
</script>

<style>

</style>