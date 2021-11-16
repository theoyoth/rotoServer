<template>
<div class="bg-gray-200 min-h-screen w-widthContent ml-auto">
    <!-- <InputHeader item="AC"/> -->
    <Navbar/>
    <section class="bg-white min-h-screen w-widthContentField m-auto mt-7 p-4 ">
        <NuxtLink to="/master/ac"
          class="flex items-center justify-between rounded-md w-28 px-4 py-2 bg-gray-700">
          <div>
            <font-awesome-icon :icon="['fas', 'arrow-left']" class="text-gray-200" />
          </div>
          <p class="font-medium text-sm text-gray-200">kembali</p>
        </NuxtLink> 
        <p class="text-center text-xl text-gray-700 font-semibold">Input data baru</p>
    
    <div class="grid grid-cols-3 w-10/12 mt-6">
        <div v-for="(err,index) in errors" :key="index" class="bg-white w-4/5 rounded-lg mb-1 bg-opacity-90">
            <li class="text-red-400 text-xs p-2">{{err.msg}}</li>
        </div>
    </div>

    <form class="mt-8 min-w-min" @submit.prevent="postInputAc">
        <div>
            <div class="grid grid-cols-2">
                <div class="mb-4 has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan nama merek AC</span>

                    <label for="merek" class="block mb-2 text-sm">merek</label>
                    <input type="text" v-model="inputAc.merek" name="merek" id="merek" class="p-2 w-72 rounded-lg focus:ring-blue-500 bg-gray-200">
                </div>
                <div class="mb-4 has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan model barang</span>

                    <label for="model" class="block mb-2 text-sm">model</label>
                    <input type="text" v-model="inputAc.model" name="model" id="model" class="p-2 w-72 rounded-lg focus:ring-blue-500 bg-gray-200">
                </div>
                <div class="mb-4 has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan sumber daya listrik</span>

                    <label for="sumberDayaListrik" class="block mb-2 text-sm">sumber daya listrik</label>
                    <input type="text" v-model="inputAc.sumberDayaListrik" name="sumberDayaListrik" id="sumberDayaListrik" class="p-2 w-72 rounded-lg focus:ring-blue-500 bg-gray-200">
                </div>
                 <div class="mb-4 has-tooltip">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan dimensi AC</span>

                    <label for="dimensi" class="block mb-2 text-sm">dimensi</label>
                    <input type="text" v-model="inputAc.dimensi" name="dimensi" id="dimensi" class="p-2 w-72 rounded-lg focus:ring-blue-500 bg-gray-200">
                </div>
                <div class="mb-4 has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan konsumsi daya</span>

                    <label for="konsumsiDaya" class="block mb-2 text-sm">konsumsi daya</label>
                    <input type="text" v-model="inputAc.konsumsiDaya" name="konsumsiDaya" id="konsumsiDaya" class="p-2 w-72 rounded-lg focus:ring-blue-500 bg-gray-200">
                </div>
                <div class="mb-4 has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan kapasitas pendingin</span>

                    <label for="kapasitasPendingin" class="block mb-2 text-sm">kapasitas pendingin</label>
                    <input type="text" v-model="inputAc.kapasitasPendingin" name="kapasitasPendingin" id="kapasitasPendingin" class="p-2 w-72 rounded-lg focus:ring-blue-500 bg-gray-200">
                </div>
                <div class="mb-4 has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan tahun masuk AC</span>

                    <label for="tahun" class="block mb-2 text-sm">tahun</label>
                    <input type="date" v-model="inputAc.tahun" name="tahun" id="tahun" class="p-2 w-72 rounded-lg focus:ring-blue-500 bg-gray-200">
                </div>
                <div class="mb-4 has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan batas garansi</span>

                    <label for="garansi" class="block mb-2 text-sm">garansi</label>
                    <input type="date" v-model="inputAc.garansi" name="garansi" id="garansi" class="p-2 w-72 rounded-lg focus:ring-blue-500 bg-gray-200">
                </div>
                
            </div>
        </div>
        <button class="bg-gray-700 text-gray-200 shadow-md rounded-lg w-28 h-10 mt-6" type="submit">kirim</button>
    </form>
</section>
</div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
export default {
    data(){
        return {
            inputAc:{
                merek:"",
                model: "",
                sumberDayaListrik : "",
                dimensi: "",
                konsumsiDaya: "",
                kapasitasPendingin : "",
                tahun : moment().format('YYYY-MM-DD'),
                garansi : "",
            },
            errors:"",
        }
    },
     methods:{
        async postInputAc(){
                const res = await axios.post('http://localhost:3000/server/master/inputac',{
                    merek : this.inputAc.merek,
                    model : this.inputAc.model,
                    sumberDayaListrik : this.inputAc.sumberDayaListrik,
                    dimensi: this.inputAc.dimensi,
                    konsumsiDaya: this.inputAc.konsumsiDaya,
                    kapasitasPendingin : this.inputAc.kapasitasPendingin,
                    tahun: this.inputAc.tahun,
                    garansi : this.inputAc.garansi,
                })
               
                if(res.data.errors){
                    this.errors=res.data.errors
                    this.$router.push('/master/input/inputAc')
                }
                else{
                    swal('data berhasil ditambahkan',{icon:'success'})
                    this.$router.push('/master/ac')
                }
        }
    },
    mounted(){
        this.inputAc.tahun = moment().format('YYYY-MM-DD')
    }

}
</script>

<style>

</style>