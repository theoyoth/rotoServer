<template>
<div class="bg-gray-300 w-widthContent ml-auto">
    <!-- <HeaderListItem maintenance="maintenance" /> -->
    <Navbar/>
    <section class="bg-gray-100 min-h-screen w-widthContentField m-auto mt-7 p-4">
        <p class="text-center text-lg text-gray-700 font-semibold">Halaman maintenance</p>
        <div class="flex justify-between mt-8 ">
            <div class="flex">
                <input type="text" placeholder="cari" name="cari" v-model.lazy="carimaintenance" class="rounded-l-lg w-52 p-2 outline-none bg-gray-200" @keyup.enter="$fetch">
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


        <table class="table space-y-6 container mx-auto table-auto border-collapse mt-7 divide-y divide-gray-300" ref="listitem" id="listitem">
            <thead class="bg-white text-sm bg-gray-700">
                <tr class="text-xs text-gray-200"> 
                    <th class="font-semibold py-3 px-2 w-4">no.</th>
                    <th class="font-semibold py-3">nama</th>
                    <th class="font-semibold py-3 w-32">tanggal input</th>
                    <th class="font-semibold" >suhu</th>
                    <th class="font-semibold w-32">kelembapan</th>
                    <th class="font-semibold" >AC</th>
                    <th class="font-semibold" >UPS</th>
                    <th class="font-semibold w-28" >aksi</th>
                </tr>
            </thead>
            <tbody v-if="carimaintenance !== ''" class="text-center bg-white bg-opacity-40 divide-y divide-gray-300">
                <tr class="text-sm" v-for="(hasilcari,index) in hasilcarimaintenance" :key="index">
                    <td>{{index+1}}</td>
                    <td class="py-3">{{hasilcari.nama_pemeriksa}}</td>
                    <td>{{$moment(hasilcari.tanggal).format("DD-MM-YYYY")}}</td>
                    <td>{{hasilcari.suhu}}</td>
                    <td>{{hasilcari.kelembapan}}</td>
                    <td>{{hasilcari.ac}}</td>
                    <td>{{hasilcari.ups}}</td>
                    <td class="py-3 flex justify-around w-full bg-gray-700">
                        <NuxtLink
                            :to="{
                            name: 'maintenance-detailmaintenance-detail',
                            params: { id: hasilcari.id_maintenance },
                            }"
                        >
                            <font-awesome-icon
                            :icon="['fas', 'eye']"
                            class="text-yellow-500"
                            />
                        </NuxtLink>
                        <NuxtLink :to="{name : 'maintenance-updatemaintenance-maintenance', params:{id : hasilcari.id_maintenance} }">
                            <font-awesome-icon :icon="['fas','pencil-alt']" class="text-yellow-500"/>
                        </NuxtLink>
                        <button @click.prevent="deleteData(hasilcari.id_maintenance)">
                            <font-awesome-icon :icon="['fas','trash']" class="text-yellow-500"/>
                        </button> 
                    </td>
                </tr>
            </tbody> 
            <tbody v-else class="text-center bg-white bg-opacity-40 divide-y divide-gray-300">
                <tr class="text-sm" v-for="(main,index) in hasilMaintenance" :key="index">
                    <td>{{index+1}}</td>
                    <td class="py-3">{{main.nama_pemeriksa}}</td>
                    <td>{{$moment(main.tanggal).format("DD-MM-YYYY")}}</td>
                    <td>{{main.suhu}}</td>
                    <td>{{main.kelembapan}}</td>
                    <td>{{main.ac}}</td>
                    <td>{{main.ups}}</td>
                    <td class="py-3 flex justify-around w-full bg-gray-700">
                        <NuxtLink
                            :to="{
                            name: 'maintenance-detailmaintenance-detail',
                            params: { id: main.id_maintenance },
                            }"
                        >
                            <font-awesome-icon
                            :icon="['fas', 'eye']"
                            class="text-yellow-500"
                            />
                        </NuxtLink>
                        <NuxtLink :to="{name : 'maintenance-updatemaintenance-maintenance', params:{id : main.id_maintenance} }">
                            <font-awesome-icon :icon="['fas','pencil-alt']" class="text-yellow-500"/>
                        </NuxtLink>
                        <button @click.prevent="deleteData(main.id_maintenance)">
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
            let indexOfArrayItem = this.hasilMaintenance.findIndex(i => i.id_maintenance === id)

            const lokasi = this.$auth.user.lokasi
            const resp = await axios.delete(`/server/maintenance/delete/${id}/${lokasi}`)
            if(resp){
                this.hasilMaintenance.splice(indexOfArrayItem, 1);
                this.$router.push('/maintenance')
                swal('data dihapus',{icon:'success'})
            }
            if(resp.data.errmsg){
                this.$router.push('/maintenance')
                swal('Error', resp.data.errmsg,{icon:'error'})
            }
        },
        async caridimaintenance(){
            this.hasilcarimaintenance = []
            const resp = await axios.get(`http://localhost:3000/server/maintenance/carimaintenance/${this.carimaintenance}/${this.$auth.user.lokasi}/${this.$auth.user.id}`)
            resp.data.forEach(val =>{
                this.hasilcarimaintenance.push(val)
            })
        },
    },
    async mounted(){
          const lokasi = this.$auth.user.lokasi
          const idlogin = this.$auth.user.id
        try{
            const resp = await axios.get(`http://localhost:3000/server/inputmaintenance/${lokasi}/${idlogin}`)
            if(resp){
                resp.data.forEach(maintenance => {
                    this.hasilMaintenance.push(maintenance)
                })
            } else{
                console.log('error')
            }
        }catch(err){
            console.log(err)
        }
    },
}
</script>

<style>

</style>