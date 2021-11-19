<template>
<div class="bg-gray-200 min-h-screen w-widthContent ml-auto">
    <!-- <HeaderListItem :ups="master.nama"/> -->
    <Navbar/>
    <section class="bg-gray-100 min-h-screen w-widthContentField m-auto mt-7 p-4">
        <p class="text-center text-lg text-gray-700 font-semibold">Halaman master UPS</p>
        <div class="flex justify-between mt-8">
            <div class="flex">
                <input type="text" placeholder="cari" name="cari" v-model.lazy="caribarang" @keyup.enter="$fetch" class="rounded-l-lg p-2 w-52 outline-none bg-gray-200">
                <button class="p-2 rounded-r-lg bg-gray-700 flex items-center justify-center w-12" @click="$fetch">
                    <font-awesome-icon :icon="['fas','search']" class="text-yellow-500"/>
                </button>
            </div>
            <!-- <select id="date" class="rounded-lg p-2 outline-none ml-8 cursor-pointer">
                <option value="hari">hari</option>
                <option value="bulan">bulan</option>
                <option value="tahun">tahun</option>
            </select> -->
            <NuxtLink to="/master/input/inputups"
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

        <table class="table space-y-6 container mx-auto table-auto border-collapse mt-7 divide-y divide-gray-300">
            <thead class="bg-gray-700 text-sm has-tooltip">
                <span class="tooltip rounded shadow-lg p-1 bg-gray-700 text-white -mt-10 absolute left-2/4 transform -translate-x-2/4">semua detail barang</span>
                <tr class="text-xs text-gray-200"> 
                    <th class="font-semibold py-3 px-2 w-4">no.</th>     
                    <th class="font-semibold py-3 w-32">Model</th>     
                    <th class="font-semibold">UPS critical load</th>
                    <th class="font-semibold">nomor serial</th>
                    <th class="font-semibold">nama sistem</th>
                    <th class="font-semibold">manufaktur</th>
                    <th class="font-semibold">garansi</th>
                    <th class="font-semibold w-24">aksi</th>
                </tr>
            </thead>
            <tbody v-if="caribarang !== ''" class="text-center bg-white bg-opacity-40 divide-y divide-gray-300">
                <tr class="text-sm" v-for="(hasilcari,index) in cariups" :key="index">
                    <td>{{index+1}}</td>
                    <td>{{hasilcari.model}}</td>
                    <td class="w-28">{{hasilcari.ups_critical_load}}</td>
                    <td class="w-32">{{hasilcari.nomor_serial}}</td>
                    <td class="w-32">{{hasilcari.nama_sistem}}</td>
                    <td class="w-32">{{hasilcari.manufaktur}}</td>
                    <td class="text-xs w-24">{{$moment(hasilcari.garansi).format('DD-MM-YYYY')}}</td>
                    <td class="py-3 flex justify-around w-full bg-gray-700">
                        <NuxtLink 
                        :to="{name:'master-detail-detailups-detailups',
                            params: { id: hasilcari.id_ups },
                        }">
                            <font-awesome-icon
                            :icon="['fas', 'eye']"
                            class="text-yellow-500"
                            />
                        </NuxtLink>
                        <NuxtLink :to="{name : 'master-update-updateups-ups', params:{id : hasilcari.id_ups} }">
                            <font-awesome-icon :icon="['fas','pencil-alt']" class="text-yellow-500"/>
                        </NuxtLink>
                        <button @click.prevent="deleteData(hasilcari.id_ups)">
                            <font-awesome-icon :icon="['fas','trash']" class="text-yellow-500"/>
                        </button> 
                    </td>
                </tr>
            </tbody>
            <tbody v-else class="text-center bg-white bg-opacity-40 divide-y divide-gray-300">
                <tr class="text-sm" v-for="(ups,index) in upss" :key="index">
                    <td>{{index+1}}</td>
                    <td>{{ups.model}}</td>
                    <td class="w-28">{{ups.ups_critical_load}}</td>
                    <td class="w-32">{{ups.nomor_serial}}</td>
                    <td class="w-32">{{ups.nama_sistem}}</td>
                    <td class="w-32">{{ups.manufaktur}}</td>
                    <td class="text-xs w-24">{{$moment(ups.garansi).format('DD-MM-YYYY')}}</td>
                    <td class="py-3 flex justify-around w-full bg-gray-700">
                        <NuxtLink 
                        :to="{name:'master-detail-detailups-detailups',
                            params: { id: ups.id_ups },
                        }">
                            <font-awesome-icon
                            :icon="['fas', 'eye']"
                            class="text-yellow-500"
                            />
                        </NuxtLink>
                        <NuxtLink :to="{name : 'master-update-updateups-ups', params:{id : ups.id_ups} }">
                            <font-awesome-icon :icon="['fas','pencil-alt']" class="text-yellow-500"/>
                        </NuxtLink>
                        <button @click.prevent="deleteData(ups.id_ups)">
                            <font-awesome-icon :icon="['fas','trash']" class="text-yellow-500"/>
                        </button> 
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
        let indexOfArrayItem = this.upss.findIndex(i => i.id_ups === id)

        const lokasi = this.$auth.user.lokasi
        const resp = await axios.delete(`/server/master/deleteups/${id}/${lokasi}`)
        if(resp){
            this.upss.splice(indexOfArrayItem, 1);
            this.$router.push('/master/ups')
            swal('data dihapus',{icon:'success'})
        }
        if(resp.data.errmsg){
            this.$router.push('/master/ups')
            swal('Error',resp.data.errmsg,{icon:'error'})
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
            const idlogin = this.$auth.user.id
            const resp = await axios.get(`http://localhost:3000/server/masterups/${lokasi}/${idlogin}`)
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