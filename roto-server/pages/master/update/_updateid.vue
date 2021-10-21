<template>
<div class="bg-bg-gen min-h-screen">
    <InputHeader item="server"/>
    <section class="container mx-auto mt-8">
    <form @submit.prevent="updateData(servers.id)" method="post" class="w-3/4">
        <div>
            <!-- <input type="hidden" name="id" :value="servers.id"> -->
            <div class="grid grid-cols-3 grid-rows-4">
                <div class="mb-4">
                    <label for="produk" class="block mb-2 text-sm">produk</label>
                    <input type="text" name="produk" v-model="servers.produk" id="produk" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4">
                    <label for="merek" class="block mb-2 text-sm">merek</label>
                    <input type="text"  name="merek" v-model="servers.merek" id="merek" class="p-2 w-72 rounded-lg outline-none" >
                </div>
                <div class="mb-4">
                    <label for="model" class="block mb-2 text-sm">model</label>
                    <input type="text"  name="model" v-model="servers.model" id="model" class="p-2 w-72 rounded-lg outline-none" >
                </div>                
                <div class="mb-4">
                    <label for="processor" class="block mb-2 text-sm">processor</label>
                    <input type="text" name="processor" id="processor" v-model="servers.processor" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4">
                    <label for="memori" class="block mb-2 text-sm">memori</label>
                    <input type="text" name="memori" id="memori" v-model="servers.memori" class="p-2 w-72 rounded-lg outline-none" >
                </div>
                <div class="mb-4">
                    <label for="internalStorage" class="block mb-2 text-sm">internal Storage</label>
                    <input type="text" name="internalStorage" id="internalStorage" v-model="servers.internal_storage" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4">
                    <label for="netwokController" class="block mb-2 text-sm">network Controller</label>
                    <input type="text" name="networkController" id="netwokController" v-model="servers.network_controller" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4">
                    <label for="storage" class="block mb-2 text-sm">Storage</label>
                    <input type="text" name="storage" id="storage" v-model="servers.storage" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4">
                    <label for="sumberDayaListrik" class="block mb-2 text-sm">power supply</label>
                    <input type="text" name="sumberDayaListrik" id="sumberDayaListrik" v-model="servers.sumber_daya_listrik" class="p-2 w-72 rounded-lg outline-none">
                </div>
                <div class="mb-4">
                    <label for="tahun" class="block mb-2 text-sm">tahun</label>
                    <input type="text" v-model="servers.tahun" name="tahun" id="tahun" class="p-2 w-72 rounded-lg outline-none" >
                </div>
                <div class="mb-4">
                    <label for="garansi" class="block mb-2 text-sm">garansi</label>
                    <input type="text" name="garansi" id="garansi" v-model="servers.garansi" class="p-2 w-72 rounded-lg outline-none">
                </div>
            </div>
        </div>
        <button class="bg-blue-400 shadow-md rounded-lg w-28 h-10 mt-8 transform hover:shadow-lg hover:scale-100 transition ease-in duration-200" type="submit">kirim</button>
    </form>
</section>
</div>
</template>

<script>
import axios from 'axios'

export default {
 data(){
        return {
            servers:'',
            produk:'',
            merek:'',
            model: '',
            processor: '',
            networkController: '',
            tahun: '',
            garansi: '',
            sumberDayaListrik: '',
            storage: '',
            internalStorage: '',
            memori: '',
        }
    },
    async fetch(){
        await this.dataMaster()
    },
    methods:{
        async dataMaster(){
         const data = await axios.get(`http://localhost:3000/server/master/update/updateserver/${this.$route.params.id}`)
         const result = await data
         this.servers = result.data[0]
        },
        updateData(id){
            const data = {
                produk : this.produk,
                merek : this.merek,
                model : this.model,
                processor : this.processor,
                memori : this.memori,
                internalStorage : this.internalStorage,
                networkController : this.networkController,
                tahun : this.tahun,
                garansi : this.garansi,
                sumberDayaListrik : this.sumberDayaListrik,
                storage : this.storage,
            }
         axios.post(`http://localhost:3000/server/master/update/updateserver/${id}`,data)
         .then(()=>{
             this.$route.push('master/server')
         })
        }
    }
}
</script>

<style>

</style>