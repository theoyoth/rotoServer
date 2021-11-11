<template>
<div class="bg-hero min-h-screen">
    <HeaderListItem :ups="master.nama"/>
    <p class="text-center text-lg">Halaman master UPS</p>
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
                <th class="font-semibold py-3">Model</th>     
                <th class="font-semibold">UPS critical load</th>
                <th class="font-semibold">UPS critical temperature</th>
                <th class="font-semibold">UPS critical capacity</th>
                <th class="font-semibold">nomor serial</th>
                <th class="font-semibold">nama sistem</th>
                <th class="font-semibold">manufaktur</th>
                <th class="font-semibold">voltage rating</th>
                <th class="font-semibold">frequency rating</th>
                <th class="font-semibold">battery voltage rating</th>
                <th class="font-semibold">tahun</th>
                <th class="font-semibold">garansi</th>
                <th class="font-semibold">aksi</th>
            </tr>
        </thead>
        <tbody v-if="caribarang !== ''" class="text-center bg-white bg-opacity-40">
            <tr class="text-sm" v-for="(hasilcari,index) in cariups" :key="index">
                <td>{{hasilcari.model}}</td>
                <td>{{hasilcari.ups_critical_load}}</td>
                <td>{{hasilcari.ups_critical_temperature}}</td>
                <td>{{hasilcari.ups_critical_capacity}}</td>
                <td>{{hasilcari.nomor_serial}}</td>
                <td>{{hasilcari.nama_sistem}}</td>
                <td>{{hasilcari.manufaktur}}</td>
                <td>{{hasilcari.peringkat_tegangan}}</td>
                <td>{{hasilcari.peringkat_frekuensi}}</td>
                <td>{{hasilcari.peringkat_tegangan_baterai}}</td>
                <td class="text-xs">{{$moment(hasilcari.tahun).format('DD-MM-YYYY')}}</td>
                <td class="text-xs">{{$moment(hasilcari.garansi).format('DD-MM-YYYY')}}</td>
                <td class="py-3 flex justify-evenly w-full">
                    <NuxtLink :to="{name : 'master-update-updateups-ups', params:{id : hasilcari.id} }">
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
            <tr class="text-sm" v-for="(ups,index) in upss" :key="index">
                <td>{{ups.model}}</td>
                <td>{{ups.ups_critical_load}}</td>
                <td>{{ups.ups_critical_temperature}}</td>
                <td>{{ups.ups_critical_capacity}}</td>
                <td>{{ups.nomor_serial}}</td>
                <td>{{ups.nama_sistem}}</td>
                <td>{{ups.manufaktur}}</td>
                <td>{{ups.peringkat_tegangan}}</td>
                <td>{{ups.peringkat_frekuensi}}</td>
                <td>{{ups.peringkat_tegangan_baterai}}</td>
                <td class="text-xs">{{$moment(ups.tahun).format('DD-MM-YYYY')}}</td>
                <td class="text-xs">{{$moment(ups.garansi).format('DD-MM-YYYY')}}</td>
                <td class="py-3 flex justify-evenly w-full">
                    <NuxtLink :to="{name : 'master-update-updateups-ups', params:{id : ups.id} }">
                        <font-awesome-icon :icon="['fas','pencil-alt']" class="text-blue-500"/>
                    </NuxtLink>
                    <form @click="deleteData(ups.id)" class="ml-4">
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
            cariups:[],
            upss:[],
            master:{
                nama : "inputUps",
            },
            deletemsg:"",
        }
    },
    async fetch(){
        if(this.caribarang !== ""){
            await this.caribarangups()
        return
        }
    },
    methods:{
        async deleteData(id){
        const resp = await axios.post(`/server/master/deleteups/${id}`)
         this.$router.push('/master/ups')
            if(resp.data.msg){
              this.deletemsg = resp.data.msg
            }
        },
        
        async caribarangups(){
            this.cariups = []
            const res = await axios.get(`http://localhost:3000/server/cariups?cari=${this.caribarang}`)
            res.data.forEach(val =>{
                this.cariups.push(val)
            })
        },
    },
    async mounted(){
        try{
            const lokasi = this.$auth.user.lokasi
            const resp = await axios.get(`http://localhost:3000/server/masterups?lokasi=${lokasi}`)
            resp.data.forEach(ups =>{
                this.upss.push(ups)            
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