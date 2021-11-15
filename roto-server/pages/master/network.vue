<template>
    <div class="bg-gray-200 min-h-screen w-widthContent ml-auto">
    <!-- <HeaderListItem :network="master.nama"/>  -->
    <Navbar/>
    <section class="bg-white min-h-screen w-widthContentField m-auto mt-7 p-4">
        <p class="text-center text-lg text-gray-700 font-semibold">Halaman master Network</p>
        <div class="flex justify-between mt-8">
            <div class="flex">
                <input type="text" placeholder="cari" name="cari" v-model.lazy="caribarang" @keyup.enter="$fetch" class="rounded-l-lg p-2 outline-none bg-gray-200">
                <button class="p-2 rounded-r-lg bg-gray-700 flex items-center justify-center w-12" @click="$fetch">
                    <font-awesome-icon :icon="['fas','search']" class="text-yellow-500"/>
                </button>
            </div>
            <!-- <select id="date" class="rounded-lg p-2 outline-none ml-8 cursor-pointer">
                <option value="hari">hari</option>
                <option value="bulan">bulan</option>
                <option value="tahun">tahun</option>
            </select> -->
            <NuxtLink to="/master/input/inputnetwork"
            class="flex items-center justify-between rounded-md px-3 w-20 bg-gray-700">
            <p class="font-medium text-sm text-gray-200">input</p>
            <div>
                <font-awesome-icon :icon="['fas', 'plus']" class="text-gray-200" />
            </div>
            </NuxtLink>
        </div>

        <!-- <div v-if="deletemsg" class="relative mt-5 w-1/4 text-center m-auto">
        <p class="text-white bg-blue-500 font-semibold p-2 rounded-lg">{{ deletemsg }}</p>
        </div> -->

        <table class="table space-y-6 container mx-auto table-auto border-collapse border border-white mt-7 divide-y divide-gray-300">
            <thead class="bg-gray-700 text-sm has-tooltip">
                <span class="tooltip rounded shadow-lg p-1 bg-gray-700 text-white -mt-10 absolute left-2/4 transform -translate-x-2/4">semua detail barang</span>
                <tr class="text-xs text-gray-200"> 
                    <th class="font-semibold py-3">Merek</th>
                    <th class="font-semibold py-3">Model</th>    
                    <th class="font-semibold">tipe</th>   
                    <th class="font-semibold">kuantitas</th>   
                    <th class="font-semibold">kanal</th>
                    <th class="font-semibold">tahun</th>
                    <th class="font-semibold">garansi</th>
                    <th class="font-semibold w-20">aksi</th>
                </tr>
            </thead>
            <tbody v-if="caribarang !== ''" class="text-center bg-white bg-opacity-40 divide-y divide-gray-300">
                <tr class="text-sm" v-for="(hasilcari,index) in carinetwork" :key="index">
                    <td>{{hasilcari.merek}}</td>
                    <td>{{hasilcari.model}}</td>
                    <td>{{hasilcari.tipe}}</td>
                    <td>{{hasilcari.kuantitas}}</td>
                    <td>{{hasilcari.kanal}}</td>
                    <td class="w-32">{{$moment(hasilcari.tahun).format('DD-MM-YYYY')}}</td>
                    <td class="w-32">{{$moment(hasilcari.garansi).format('DD-MM-YYYY')}}</td>
                    <td class="py-3 flex justify-evenly w-full bg-gray-700">
                        <NuxtLink :to="{name : 'master-update-updatenetwork-network', params:{id : hasilcari.id} }">
                            <font-awesome-icon :icon="['fas','pencil-alt']" class="text-yellow-500"/>
                        </NuxtLink>
                        <form @click="deleteData(hasilcari.id)" class="ml-4">
                        <button type="submit">
                            <font-awesome-icon :icon="['fas','trash']" class="text-yellow-500"/>
                        </button> 
                        </form>
                    </td>
                </tr>
            </tbody>
            <tbody v-else class="text-center bg-white bg-opacity-40 divide-y divide-gray-300">
                <tr class="text-sm" v-for="(network,index) in networks" :key="index">
                    <td>{{network.merek}}</td>
                    <td>{{network.model}}</td>
                    <td>{{network.tipe}}</td>
                    <td>{{network.kuantitas}}</td>
                    <td>{{network.kanal}}</td>
                    <td class="w-32">{{$moment(network.tahun).format('DD-MM-YYYY')}}</td>
                    <td class="w-32">{{$moment(network.garansi).format('DD-MM-YYYY')}}</td>
                    <td class="py-3 flex justify-evenly w-full bg-gray-700">
                        <NuxtLink :to="{name : 'master-update-updatenetwork-network', params:{id : network.id} }">
                            <font-awesome-icon :icon="['fas','pencil-alt']" class="text-yellow-500"/>
                        </NuxtLink>
                        <form @click="deleteData(network.id)" class="ml-4">
                        <button type="submit">
                            <font-awesome-icon :icon="['fas','trash']" class="text-yellow-500"/>
                        </button> 
                        </form>
                    </td>
                </tr>
            </tbody>
        </table>
    </section>
    </div>
</template>
<script>
import axios from 'axios'
import moment from 'moment'
export default {
    middleware:"isAuthenticated",
    data(){
        return{
            caribarang:"",
            networks:[],
            carinetwork:[],
            master:{
                nama : "inputNetwork",
            },
            deletemsg:"",
        }
    },
    async fetch(){
        if(this.caribarang !== ""){
            await this.caribarangnetwork()
        return
        }
    },
    methods:{
         async deleteData(id){
            const resp = await axios.post(`/server/master/deletenetwork/${id}`)
            this.$router.push('/master/network')
            if(resp.data.msg){
                this.deletemsg = resp.data.msg
            }
        },
        async caribarangnetwork(){
            this.carinetwork = []
            const res = await axios.get(`http://localhost:3000/server/carinetwork?cari=${this.caribarang}`)
            res.data.forEach(val =>{
                this.carinetwork.push(val)
            })
        },
    },
    async mounted(){
        try{
            const lokasi = this.$auth.user.lokasi

            const resp = await axios.get(`http://localhost:3000/server/masternetwork?lokasi=${lokasi}`)
            resp.data.forEach(network => {
                this.networks.push(network)   
            })
        }
        catch(err) {
            console.error(err);
        };
    }

}
</script>

<style>

</style>