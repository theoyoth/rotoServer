<template>
<div class="bg-hero min-h-screen">
    <!-- <ListItem :apar="master"/> -->
    <HeaderListItem :nas="master"/>
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
                <th class="font-semibold py-3">Merek</th>
                <th class="font-semibold py-3">Model</th>   
                <th class="font-semibold">tipe</th>    
                <th class="font-semibold">tahun</th>
                <th class="font-semibold">garansi</th>
                <th class="font-semibold">aksi</th>
            </tr>
        </thead>
        <tbody v-if="caribarang !== ''" class="text-center bg-white bg-opacity-40">
            <tr class="text-sm" v-for="(hasilcari,index) in cariapar" :key="index">
                <td class="py-3">{{hasilcari.merek}}</td>
                <td>{{hasilcari.model}}</td>
                <td>{{hasilcari.tipe}}</td>
                <td>{{hasilcari.tahun}}</td>
                <td>{{hasilcari.garansi}}</td>
                <td class="py-3">
                    <a href="#">
                        <font-awesome-icon :icon="['fas','pencil-alt']" class="text-blue-500"/>
                    </a>
                     <form @click="deleteData(hasilcari.id,nama.nama_tabel)" class="ml-4">
                    <button type="submit">
                        <font-awesome-icon :icon="['fas','trash']" class="text-red-500"/>
                    </button> 
                    </form>
                </td>
            </tr>
        </tbody>
        <tbody v-else class="text-center bg-white bg-opacity-40">
            <tr v-show="apar" class="text-sm" v-for="(apar,index) in apars" :key="index">
                <td class="py-3">{{apar.merek}}</td>
                <td>{{apar.model}}</td>
                <td>{{apar.tipe}}</td>
                <td>{{apar.tahun}}</td>
                <td>{{apar.garansi}}</td>
                <td class="py-3">
                    <a href="#">
                        <font-awesome-icon :icon="['fas','pencil-alt']" class="text-blue-500"/>
                    </a>
                     <form @click="deleteData(apar.id,nama.nama_tabel)" class="ml-4">
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

export default {
    data(){
        return{
            caribarang:"",
            apars:[],
            cariapar:[],
            master:{
                nama : "inputApar",
            },
            nama:{
                nama_tabel:"master_apar"
            }
        }
    },
    async fetch(){
        if(this.caribarang !== ""){
            await this.caribarangapar();
        return
        }
    },
    methos:{
         deleteData(id,nama){
            axios.post(`/server/master/delete/${id}/${nama}`)
        },
        clearSearch(){
            this.caribarang = ''
            this.cariapar = []
        },
         async caribarangapar(){
            const res = await axios.get(`http://localhost:3000/server/cariapar?cari=${this.caribarang}`)
            res.data.forEach(val =>{
                this.cariapar.push(val)
            })
        },
    },
    async mounted(){
        try{
            const resp = await axios.get('http://localhost:3000/server/masterapar')
            resp.data.forEach(apar => {
                this.apars.push(apar)
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