<template>
<div class="bg-hero min-h-screen">
    <HeaderListItem :mouse="master.nama"/>
    <p class="text-center text-lg">Halaman master Mouse</p>
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
                <th class="font-semibold">tipe</th>    
                <th class="font-semibold">tahun</th>
                <th class="font-semibold">garansi</th>
                <th class="font-semibold">aksi</th>
            </tr>
        </thead>
        <tbody v-if="caribarang !== ''" class="text-center bg-white bg-opacity-40">
            <tr class="text-sm" v-for="(hasilcari,index) in carimouse" :key="index">
                <td class="py-3">{{hasilcari.merek}}</td>
                <td>{{hasilcari.model}}</td>
                <td>{{hasilcari.tipe}}</td>
                <td>{{$moment(hasilcari.tahun).format('DD-MM-YYYY')}}</td>
                <td>{{$moment(hasilcari.garansi).format('DD-MM-YYYY')}}</td>
                <td class="py-3 flex justify-evenly">
                     <NuxtLink :to="{name : 'master-update-updatemouse-mouse', params:{id : hasilcari.id} }">
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
            <tr v-show="mouse" class="text-sm" v-for="(mouse,index) in mouses" :key="index">
                <td class="py-3">{{mouse.merek}}</td>
                <td>{{mouse.model}}</td>
                <td>{{mouse.tipe}}</td>
                <td>{{$moment(mouse.tahun).format('DD-MM-YYYY')}}</td>
                <td>{{$moment(mouse.garansi).format('DD-MM-YYYY')}}</td>
                <td class="py-3 flex justify-evenly">
                    <NuxtLink :to="{name : 'master-update-updatemouse-mouse', params:{id : mouse.id} }">
                        <font-awesome-icon :icon="['fas','pencil-alt']" class="text-blue-500"/>
                    </NuxtLink>
                     <form @click="deleteData(mouse.id)" class="ml-4">
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
            carimouse:[],
            mouses:[],
            master:{
                nama : "inputMouse",
            },
            deletemsg:"",
        }
    },
     async fetch(){
        if(this.caribarang !== ""){
            await this.caribarangmouse();
        return
        }
    },
    methods:{
        async deleteData(id){
            const resp = await axios.post(`/server/master/deletemouse/${id}`)
            this.$router.push('/master/mouse')
            if(resp.data.msg){
                this.deletemsg = resp.data.msg
            }

        },
        async caribarangmouse(){
            this.carimouse = []
            const res = await axios.get(`http://localhost:3000/server/carimouse?cari=${this.caribarang}`)
            res.data.forEach(val =>{
                this.carimouse.push(val)
            })
        },
    },
    async mounted(){
        try{
            const lokasi = this.$auth.user.lokasi
            const resp = await axios.get(`http://localhost:3000/server/mastermouse?lokasi=${lokasi}`)
            resp.data.forEach(mouse => {
            this.mouses.push(mouse)
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