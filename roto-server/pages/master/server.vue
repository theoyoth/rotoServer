<template>
<div class="bg-hero min-h-screen ">
    <HeaderListItem :server="master.nama"/>
        <p class="text-center text-lg">Halaman master server</p>
    <div class="container mx-auto flex mt-8">
        <div class="flex">
            <input type="text" placeholder="cari" name="cari" v-model.lazy="caribarang" @keyup.enter="$fetch" class="rounded-l-lg p-2 outline-none">
            <button class="p-2 rounded-r-lg bg-gray-400 flex items-center justify-center" @click="clearSearch">
                <!-- <font-awesome-icon :icon="['fas','search']" class="text-black-500"/> -->
                <p>hapus</p>
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
                <th class="font-semibold py-3">Produk</th>
                <th class="font-semibold py-3">Merek</th>
                <th class="font-semibold py-3">Model</th>
                <th class="font-semibold">Processor</th>
                <th class="font-semibold">memori</th>
                <th class="font-semibold" >internal storage</th>
                <th class="font-semibold">network controller</th>
                <th class="font-semibold">storage</th>
                <th class="font-semibold">sumber daya listrik</th>  
                <th class="font-semibold">tahun</th>  
                <th class="font-semibold">garansi</th>
                <th  class="font-semibold">aksi</th>
            </tr>
        </thead>
        <tbody v-if="caribarang !== ''" class="text-center bg-white bg-opacity-40">
            <tr class="text-sm" v-for="(hasilcari,index) in cariserver" :key="index">
                <td>{{hasilcari.produk}}</td>
                <td>{{hasilcari.merek}}</td>
                <td>{{hasilcari.model}}</td>
                <td>{{hasilcari.processor}}</td>
                <td>{{hasilcari.memori}}</td>
                <td>{{hasilcari.internal_storage}}</td>
                <td>{{hasilcari.network_controller}}</td>
                <td>{{hasilcari.storage}}</td>
                <td>{{hasilcari.sumber_daya_listrik}}</td>
                <td class="text-xs">{{new Date(hasilcari.tahun).toLocaleString()}}</td>
                <td class="text-xs">{{new Date(hasilcari.garansi).toLocaleString()}}</td>
                <td class="py-3 flex w-3">
                    <NuxtLink :to="{name : 'master-update-updateserver-server', params:{id : hasilcari.id} }">
                        <font-awesome-icon :icon="['fas','pencil-alt']" class="text-blue-500"/>
                    </NuxtLink>
                    <form @click="deleteData(hasilcari.id,nama.server)" class="ml-2">
                    <button type="submit">
                        <font-awesome-icon :icon="['fas','trash']" class="text-red-500"/>
                    </button> 
                    </form>
                </td>
            </tr>
        </tbody>
        <tbody v-else class="text-center bg-white bg-opacity-40">
            <tr class="text-sm" v-for="(server,index) in servers" :key="index">
                <td>{{server.produk}}</td>
                <td>{{server.merek}}</td>
                <td>{{server.model}}</td>
                <td>{{server.processor}}</td>
                <td>{{server.memori}}</td>
                <td>{{server.internal_storage}}</td>
                <td>{{server.network_controller}}</td>
                <td>{{server.storage}}</td>
                <td>{{server.sumber_daya_listrik}}</td>
                <td class="text-xs">{{new Date(server.tahun).toLocaleString()}}</td>
                <td class="text-xs">{{new Date(server.tahun).toLocaleString()}}</td>
                <td class="py-3 flex w-3">
                    <NuxtLink :to="{name : 'master-update-updateserver-server', params:{id : server.id} }">
                        <font-awesome-icon :icon="['fas','pencil-alt']" class="text-blue-500"/>
                    </NuxtLink>
                    <form @click="deleteData(server.id,nama.nama_tabel)" class="ml-2">
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
import axios from "axios"

export default {
    data(){
        return{
            caribarang:"",
            cariserver:[],
            servers : [],
            master:{
                nama : "inputServer",
            },
            nama:{
                nama_tabel : 'master_server',
            },
        }
    },
    async fetch(){
        if(this.caribarang !== ""){
            await this.caribarangserver()
        return
        }
    },
    methods:{
        deleteData(id,nama){
            axios.post(`/server/master/delete/${id}/${nama}`)
        },
        async caribarangserver(){
            const res = await axios.get(`http://localhost:3000/server/cariserver?cari=${this.caribarang}`)
            res.data.forEach(val =>{
                this.cariserver.push(val)
            })
        },
        clearSearch(){
            this.caribarang = ''
            this.cariserver = []
        },
    },
    async mounted(){
        try{
            const resp = await axios.get('http://localhost:3000/server/masterserver')
            resp.data.forEach(server => {
            this.servers.push(server)
            })
        }
        catch(err) {
            console.error(err);
        };
    }
}
</script>

<style lang=scss>
</style>