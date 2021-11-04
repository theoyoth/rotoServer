<template>
<div class="bg-bg-gen min-h-screen">
    <InputHeader item="NAS"/>
    <section class="container mx-auto mt-8">

    <div class="grid grid-cols-3 w-11/12">
        <div v-for="(err,index) in errors" :key="index" class="bg-white w-11/12 rounded-lg mb-1 bg-opacity-90">
            <li class="text-red-400 text-xs p-2">{{err.msg}}</li>
        </div>
    </div>

    <form class="w-11/12 mt-10" @submit.prevent="postInputNas">
        <div >
            <div class="grid grid-cols-3 grid-rows-4">
                <div class="mb-4 has-tooltip">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan nama merek</span>

                    <label for="merek" class="block mb-2 text-sm">merek</label>
                    <input type="text" v-model="inputNas.merek" name="merek" id="merek" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4 has-tooltip">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan nama model</span>

                    <label for="model" class="block mb-2 text-sm">model</label>
                    <input type="text" v-model="inputNas.model" name="model" id="model" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4 has-tooltip">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan tipe NAS</span>

                    <label for="tipe" class="block mb-2 text-sm">tipe</label>
                    <input type="text" v-model="inputNas.tipe" name="tipe" id="tipe" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4 has-tooltip">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan jumlah storage</span>

                    <label for="storage" class="block mb-2 text-sm">storage</label>
                    <input type="text" v-model="inputNas.storage" name="storage" id="storage" class="p-2 w-72 rounded-l-lg outline-none">
                    <select name="storage" id="storage" class="p-2 rounded-r-lg -ml-2">
                        <option value="gb">GB</option>
                        <option value="tb">TB</option>
                    </select>
                </div>
                <div class="mb-4 has-tooltip">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan nama processor</span>

                    <label for="processor" class="block mb-2 text-sm">processor</label>
                    <input type="text" v-model="inputNas.processor" name="processor" id="processor" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4 has-tooltip">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan nama cpu</span>

                    <label for="cpu" class="block mb-2 text-sm">cpu</label>
                    <input type="text" v-model="inputNas.cpu" name="cpu" id="cpu" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4 has-tooltip">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan raid</span>

                    <label for="raid" class="block mb-2 text-sm">raid</label>
                    <input type="text" v-model="inputNas.raid" name="raid" id="raid" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4 has-tooltip">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan tahun masuk NAS</span>

                    <label for="tahun" class="block mb-2 text-sm">tahun</label>
                    <input type="date" v-model="inputNas.tahun" name="tahun" id="tahun" class="p-2 w-72 rounded-lg outline-none">
                </div> 
                <div class="mb-4 has-tooltip">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan batas garansi</span>

                    <label for="garansi" class="block mb-2 text-sm">garansi</label>
                    <input type="date" v-model="inputNas.garansi" name="garansi" id="garansi" class="p-2 w-72 rounded-lg outline-none">
                </div>
            </div>
        </div>
        <button class="bg-blue-400 shadow-md rounded-lg w-28 h-10 mt-8" type="submit">kirim</button>
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
            inputNas:{
                merek:"",
                model: "",
                processor: "",
                storage : "",
                tipe: "",
                cpu: "",
                raid:"",
                tahun : moment().format('YYYY-MM-DD'),
                garansi : "",
            },
            errors:"",
        }
    },
     methods:{
        async postInputNas(){
                const res = await axios.post('http://localhost:3000/server/master/inputnas',{
                    merek : this.inputNas.merek,
                    model : this.inputNas.model,
                    processor : this.inputNas.processor,
                    storage: this.inputNas.storage,
                    tipe: this.inputNas.tipe,
                    cpu : this.inputNas.cpu,
                    raid : this.inputNas.raid,
                    tahun: this.inputNas.tahun,
                    garansi : this.inputNas.garansi,
                })
               
                if(res.data.errors){
                    this.errors=res.data.errors
                    this.$router.push('/master/input/inputNas')
                }
                else{
                    this.$router.push('/master/nas')
                }
        }
    },
    mounted(){
        this.inputNas.tahun = moment().format('YYYY-MM-DD')
    }
}
</script>

<style>

</style>