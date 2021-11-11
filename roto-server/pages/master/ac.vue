<template>
<div class="bg-hero min-h-screen">
    <HeaderListItem :ac="master.nama"/>
    <p class="text-center text-lg">Halaman master AC</p>
    <div class="container mx-auto flex mt-8">
        <div class="flex">
            <input type="text" placeholder="cari" name="cari" v-model.lazy="caribarang" @keyup.enter="$fetch" class="rounded-l-lg p-2 outline-none">
            <button class="p-2 rounded-r-lg bg-gray-400 flex items-center justify-center" @click="$fetch">
                <font-awesome-icon :icon="['fas','search']" class="text-black-500"/>
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
                <th class="font-semibold">sumber daya listrik</th>
                <th class="font-semibold">dimensi</th>
                <th class="font-semibold">konsumsi daya</th>
                <th class="font-semibold">kapasitas pendingin</th>
                <th class="font-semibold">tahun</th>
                <th class="font-semibold">garansi</th>
                <th class="font-semibold">aksi</th>
            </tr>
        </thead>
        <tbody v-if="caribarang !== ''" class="text-center bg-white bg-opacity-40">
            <tr class="text-sm" v-for="(hasilcari,index) in cariac" :key="index">
                <td class="py-3">{{hasilcari.merek}}</td>
                <td>{{hasilcari.model}}</td>
                <td>{{hasilcari.sumber_daya_listrik}}</td>
                <td>{{hasilcari.dimensi}}</td>
                <td>{{hasilcari.konsumsi_daya_listrik}}</td>
                <td>{{hasilcari.kapasitas_pendingin}}</td>
                <td>{{$moment(hasilcari.tahun).format('DD-MM-YYYY')}}</td>
                <td>{{$moment(hasilcari.garansi).format('DD-MM-YYYY')}}</td>
                <td class="py-3 flex justify-evenly">
                    <NuxtLink :to="{name : 'master-update-updateac-ac', params:{id : hasilcari.id} }">
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
        <tbody v-else class="text-center bg-white bg-opacity-40"><tr class="text-sm" v-for="(ac,index) in acs" :key="index">
                <td class="py-3">{{ac.merek}}</td>
                <td>{{ac.model}}</td>
                <td>{{ac.sumber_daya_listrik}}</td>
                <td>{{ac.dimensi}}</td>
                <td>{{ac.konsumsi_daya_listrik}}</td>
                <td>{{ac.kapasitas_pendingin}}</td>
                <td>{{$moment(ac.tahun).format("DD-MM-YYYY")}}</td>
                <td>{{$moment(ac.garansi).format("DD-MM-YYYY")}}</td>
                <td class="py-3 flex justify-evenly">
                    <NuxtLink :to="{name : 'master-update-updateac-ac', params:{id : ac.id} }">
                        <font-awesome-icon :icon="['fas','pencil-alt']" class="text-blue-500"/>
                    </NuxtLink>
                    <form @click="deleteData(ac.id)" class="ml-4">
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
            cariac:[],
            acs:[],
            master:{
                nama: "inputAc",
            },
            deletemsg:"",
        }
    },
    async fetch(){
        if(this.caribarang !== ""){
            await this.caribarangac()
        return
        }
    },
    methods:{
    async deleteData(id,nama){
        const resp = await axios.post(`/server/master/deleteac/${id}`)
        this.$router.push('/master/baterai')
        if(resp.data.msg){
            this.deletemsg = resp.data.msg
        }
    },
    async caribarangac(){
        this.cariac = []
        const res = await axios.get(`http://localhost:3000/server/cariac?cari=${this.caribarang}`)
        res.data.forEach(val =>{
            this.cariac.push(val)
        })
    },
    },
    async mounted(){
        try{
            const lokasi = this.$auth.user.lokasi
            const resp = await axios.get(`http://localhost:3000/server/masterac?lokasi=${lokasi}`)
            resp.data.forEach(ac => {
                this.acs.push(ac)
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