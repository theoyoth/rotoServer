<template>
<div class="bg-hero min-h-screen">
    <ListItem :rak="master"/>
    <div class="container mx-auto flex mt-8">
        <div class="flex">
            <input type="text" placeholder="cari" name="cari" v-model.lazy="caribarang" class="rounded-l-lg p-2 outline-none">
            <button class="p-2 rounded-r-lg bg-gray-400 flex items-center justify-center" @click="$fetch">
                <font-awesome-icon :icon="['fas','search']" class="text-black-500"/>
                <!-- <p>hapus</p> -->
            </button>
        </div>
        <!-- <select id="date" class="rounded-lg p-2 outline-none ml-8 cursor-pointer">
            <option value="hari">hari</option>
            <option value="bulan">bulan</option>
            <option value="tahun">tahun</option>
        </select> -->
    </div>
    <table class="table space-y-6 container mx-auto table-auto border-collapse border border-white mt-7">
        <thead class="bg-white text-sm has-tooltip">
            <span class="tooltip rounded shadow-lg p-1 bg-gray-700 text-white -mt-10 absolute left-2/4 transform -translate-x-2/4">semua detail barang</span>
            <tr class="text-xs"> 
                <th class="font-semibold py-3">tipe rak</th>
                <th class="font-semibold">tipe pintu</th>
                <th class="font-semibold">nama produk</th>
                <th class="font-semibold">dimensi</th>
                <th class="font-semibold">berat</th>
                <th class="font-semibold">tahun</th>
                <th class="font-semibold">aksi</th>
            </tr>
        </thead>
        <tbody v-if="caribarang !== ''" class="text-center bg-white bg-opacity-40">
            <tr class="text-sm" v-for="(hasilcari,index) in carirak" :key="index">
                <td class="py-3">{{hasilcari.tipe_rak}}</td>
                <td>{{hasilcari.tipe_pintu}}</td>
                <td>{{hasilcari.nama_produk}}</td>
                <td>{{hasilcari.dimensi}}</td>
                <td>{{hasilcari.berat}}</td>
                <td>{{$moment(hasilcari.tahun).format('DD-MM-YYYY')}}</td>
                <td class="py-3 flex w-3">
                    <NuxtLink :to="{name : 'master-update-updaterak-rak', params:{id : hasilcari.id,nama:nama_tabel} }">
                        <font-awesome-icon :icon="['fas','pencil-alt']" class="text-blue-500"/>
                    </NuxtLink>
                    <form @click="deleteData(hasilcari.id,nama.rak)" class="ml-4">
                    <button type="submit">
                        <font-awesome-icon :icon="['fas','trash']" class="text-red-500"/>
                    </button> 
                    </form>
                </td>
            </tr>
        </tbody>
        <tbody v-else class="text-center bg-white bg-opacity-40">
            <tr class="text-sm" v-for="(rak,index) in raks" :key="index">
                <td class="py-3">{{rak.tipe_rak}}</td>
                <td>{{rak.tipe_pintu}}</td>
                <td>{{rak.nama_produk}}</td>
                <td>{{rak.dimensi}}</td>
                <td>{{rak.berat}}</td>
                <td>{{$moment(rak.tahun).format('DD-MM-YYYY')}}</td>
                <td class="py-3 flex justify-evenly w-full">
                    <NuxtLink :to="{name : 'master-update-updaterak-rak', params:{id : rak.id} }">
                        <font-awesome-icon :icon="['fas','pencil-alt']" class="text-blue-500"/>
                    </NuxtLink>
                    <form @click="deleteData(rak.id,nama.nama_tabel)" class="ml-4">
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
    data(){
        return{
            caribarang:"",
            raks:[],
            carirak:[],
            master:{
                nama:"inputRak",
            },
            nama:{
                nama_tabel : 'master_rak',
            }
        }
    },
    async fetch(){
        if(this.caribarang !== ""){
            await this.caribarangrak()
        return
        }
    },
    methods:{
        deleteData(id,nama){
            axios.post(`/server/master/delete/${id}/${nama}`)
        },
        clearSearch(){
            this.caribarang = ''
            this.carirak = []
        },
        async caribarangrak(){
            this.carirak = []
            const res = await axios.get(`http://localhost:3000/server/carirak?cari=${this.caribarang}`)
            res.data.forEach(val =>{
                this.carirak.push(val)
            })
        },
    },
    async mounted(){
        try{
            const resp = await axios.get('http://localhost:3000/server/masterrak')
            resp.data.forEach(rak =>{
                this.raks.push(rak)
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