<template>
<div class="bg-gray-200 h-screen w-widthContent ml-auto">
    <!-- <HeaderListItem maintenance="maintenance" /> -->
    <Navbar/>
    <section class="bg-white min-h-screen w-widthContentField m-auto mt-7 p-4">
        <div class="flex justify-between mt-8 ">
            <div class="flex">
                <input type="text" placeholder="cari" name="cari" v-model.lazy="carimaintenance" class="rounded-l-lg p-2 outline-none bg-gray-200" @keyup.enter="$fetch">
                <button class="p-2 rounded-r-lg bg-gray-700 flex items-center justify-center w-12" @click="$fetch">
                    <font-awesome-icon :icon="['fas','search']" class="text-yellow-500"/>
                </button>
            </div>
            <!-- <select id="date" ref="date" class="rounded-lg p-2 outline-none ml-8 cursor-pointer">
                <option value="hari">hari</option>
                <option value="bulan">bulan</option>
                <option value="tahun">tahun</option>
            </select> -->
            <NuxtLink to="/maintenance/inputmaintenance"
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


        <table class="table space-y-6 container mx-auto table-auto border-collapse border border-white mt-7 divide-y divide-gray-300" ref="listitem" id="listitem">
            <thead class="bg-white text-sm bg-gray-700">
                <tr class="text-xs text-gray-200"> 
                    <th class="font-semibold py-3">nama</th>
                    <th class="font-semibold py-3">tanggal</th>
                    <th class="font-semibold" >suhu</th>
                    <th class="font-semibold" >kelembapan</th>
                    <th class="font-semibold" >AC</th>
                    <th class="font-semibold" >UPS</th>
                    <th class="font-semibold" >baterai</th>
                    <th class="font-semibold" >network</th>
                    <th class="font-semibold" >server</th>
                    <th class="font-semibold" >keterangan</th>
                    <th class="font-semibold w-16" >aksi</th>
                </tr>
            </thead>
            <tbody v-if="carimaintenance !== ''" class="text-center bg-white bg-opacity-40 divide-y divide-gray-300">
                <tr class="text-sm" v-for="(hasilcari,index) in hasilcarimaintenance" :key="index">
                    <td class="py-3">{{hasilcari.nama}}</td>
                    <td>{{$moment(hasilcari.tanggal).format("DD-MM-YYYY")}}</td>
                    <td>{{hasilcari.suhu}}</td>
                    <td>{{hasilcari.kelembapan}}</td>
                    <td>{{hasilcari.ac}}</td>
                    <td>{{hasilcari.ups}}</td>
                    <td>{{hasilcari.baterai}}</td>
                    <td>{{hasilcari.network}}</td>
                    <td>{{hasilcari.server}}</td>
                    <td>{{hasilcari.keterangan}}</td>
                    <td class="py-3 flex justify-evenly w-full bg-gray-700">
                        <NuxtLink :to="{name : 'maintenance-updatemaintenance-maintenance', params:{id : hasilcari.id} }">
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
                <tr class="text-sm" v-for="(main,index) in hasilMaintenance" :key="index">
                    <td class="py-3">{{main.nama}}</td>
                    <td>{{$moment(main.tanggal).format("DD-MM-YYYY")}}</td>
                    <td>{{main.suhu}}</td>
                    <td>{{main.kelembapan}}</td>
                    <td>{{main.ac}}</td>
                    <td>{{main.ups}}</td>
                    <td>{{main.baterai}}</td>
                    <td>{{main.network}}</td>
                    <td>{{main.server}}</td>
                    <td>{{main.keterangan}}</td>
                    <td class="py-3 flex justify-evenly w-full bg-gray-700">
                        <NuxtLink :to="{name : 'maintenance-updatemaintenance-maintenance', params:{id : main.id} }">
                            <font-awesome-icon :icon="['fas','pencil-alt']" class="text-yellow-500"/>
                        </NuxtLink>
                        <form @click="deleteData(main.id)" class="ml-4">
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
            carimaintenance:"",
            hasilMaintenance:[],
            hasilcarimaintenance:[],
            deletemsg:"",
        }
    },   
   
    async fetch(){
        if(this.carimaintenance !== ''){
            await this.caridimaintenance()
        return
        }
    },
    methods:{
        async deleteData(id){
            const resp = await axios.post(`/server/maintenance/delete/${id}`)
            this.$router.push('/maintenance')
            if(resp.data.msg){
              this.deletemsg = resp.data.msg
            }
        },
        async caridimaintenance(){
            this.hasilcarimaintenance = []
            const res = await axios.get(`http://localhost:3000/server/maintenance/carimaintenance?cari=${this.carimaintenance}`)
            res.data.forEach(val =>{
                this.hasilcarimaintenance.push(val)
            })
        },
    },
    mounted(){
        axios.get('http://localhost:3000/server/inputmaintenance')
            .then(resp => {
              resp.data.forEach(maintenance => {
                  this.hasilMaintenance.push(maintenance)
              })
            })
            .catch(err => {
                console.log(err);
            });
    },
}
</script>

<style>

</style>