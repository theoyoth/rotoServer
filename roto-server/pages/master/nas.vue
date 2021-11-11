<template>
<div class="bg-hero min-h-screen">
    <HeaderListItem :nas="master.nama"/>
    <p class="text-center text-lg">Halaman master NAS</p>
    <div class="container mx-auto flex mt-8">
        <div class="flex">
            <input type="text" placeholder="cari" name="cari" v-model.lazy="caribarang" @keyup.enter="$fetch" class="rounded-l-lg p-2 outline-none">
            <button class="p-2 rounded-r-lg bg-gray-400 flex items-center justify-center" @click="$fetch">
                <font-awesome-icon :icon="['fas','search']" class="text-white"/>
            </button>
        </div>
        <!-- <select id="date" class="rounded-lg p-2 outline-none ml-8 cursor-pointer">
            <option value="hari">hari</option>
            <option value="bulan">bulan</option>
            <option value="tahun">tahun</option>
        </select> -->
    </div>

    <div v-if="deletemsg" class="relative mt-5 w-1/4 text-center m-auto">
      <p class="text-white bg-blue-500 font-semibold p-2 rounded-lg">{{ deletemsg }}</p>
    </div>

    <table class="table space-y-6 container mx-auto table-auto border-collapse border border-white mt-7">
        <thead class="bg-white text-sm has-tooltip">
            <span class="tooltip rounded shadow-lg p-1 bg-gray-700 text-white -mt-10 absolute left-2/4 transform -translate-x-2/4">semua detail barang</span>
            <tr class="text-xs"> 
                <th class="font-semibold py-3">Merek</th>
                <th class="font-semibold py-3">Model</th>
                <th class="font-semibold">Processor</th>
                <th class="font-semibold">storage</th>  
                <th class="font-semibold">tipe</th>    
                <th class="font-semibold">CPU</th>
                <th class="font-semibold">RAID</th>
                <th class="font-semibold">tahun</th>
                <th class="font-semibold">garansi</th>
                <th class="font-semibold">aksi</th>
            </tr>
        </thead>
        <tbody v-if="caribarang !== ''" class="text-center bg-white bg-opacity-40">
            <tr class="text-sm" v-for="(hasilcari,index) in carinas" :key="index">
                <td>{{hasilcari.merek}}</td>
                <td>{{hasilcari.model}}</td>
                <td>{{hasilcari.processor}}</td>
                <td>{{hasilcari.storage}}</td>
                <td>{{hasilcari.tipe}}</td>
                <td>{{hasilcari.cpu}}</td>
                <td>{{hasilcari.raid}}</td>
                <td>{{$moment(hasilcari.tahun).format('DD-MM-YYYY')}}</td>
                <td>{{$moment(hasilcari.garansi).format('DD-MM-YYYY')}}</td>
                <td class="py-3 flex justify-evenly">
                    <NuxtLink :to="{name : 'master-update-updatenas-nas',params:{id : hasilcari.id} }">
                        <font-awesome-icon :icon="['fas','pencil-alt']" class="text-blue-500"/>
                    </NuxtLink>
                    <form @click="deleteData(hasilcari.id)" class="ml-4">
                    <button type="submit">
                        <font-awesome-icon :icon="['fas','trash']" class="text-red-500"/>
                    </button> 
                    </form>
                </td>
            </tr>
        </tbody>
        <tbody v-else class="text-center bg-white bg-opacity-40">
            <tr class="text-sm" v-for="(nas,index) in nass" :key="index">
                <td>{{nas.merek}}</td>
                <td>{{nas.model}}</td>
                <td>{{nas.processor}}</td>
                <td>{{nas.storage}}</td>
                <td>{{nas.tipe}}</td>
                <td>{{nas.cpu}}</td>
                <td>{{nas.raid}}</td>
                <td>{{$moment(nas.tahun).format('DD-MM-YYYY')}}</td>
                <td>{{$moment(nas.garansi).format('DD-MM-YYYY')}}</td>
                <td class="py-3 flex justify-evenly">
                    <NuxtLink :to="{name : 'master-update-updatenas-nas', params:{id : nas.id} }">
                        <font-awesome-icon :icon="['fas','pencil-alt']" class="text-blue-500"/>
                    </NuxtLink>
                    <form @click="deleteData(nas.id)" class="ml-4">
                    <button type="submit">
                        <font-awesome-icon :icon="['fas','trash']" class="text-red-500"/>
                    </button> 
                    </form>
                </td>
            </tr>
        </tbody>
    </table>
   
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
            carinas:[],
            nass:[],
            master:{
                nama : "inputNas",
            },
            deletemsg:"",
        }
    },
    async fetch(){
        if(this.caribarang !== ""){
            await this.caribarangnas()
        return 
        }
    },
    methods:{
        async deleteData(id){
            const resp = await axios.post(`/server/master/deletenas/${id}`)
            this.$router.push('/master/nas')
            if(resp.data.msg){
                this.deletemsg = resp.data.msg
            }
        },
        async caribarangnas(){
            this.carinas = []
            const res = await axios.get(`http://localhost:3000/server/carinas?cari=${this.caribarang}`)
            res.data.forEach(val =>{
                this.carinas.push(val)
            })
        },
    },
    async mounted(){
        try{
            const lokasi = this.$auth.user.lokasi
            const resp = await axios.get(`http://localhost:3000/server/masternas?lokasi=${lokasi}`)
            resp.data.forEach(nas => {
                this.nass.push(nas)
            })
        }
        catch(err){
            console.error(err);
        };
    }

}
</script>

<style>

</style>