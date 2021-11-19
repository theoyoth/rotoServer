<template>
  <div class="bg-gray-300 min-h-screen w-widthContent ml-auto">
    <!-- <HeaderListItem :cctv="master.nama"/> -->
    <Navbar/>
    <section class="bg-gray-100 min-h-screen w-widthContentField m-auto mt-7 p-4">
        <p class="text-center text-lg text-gray-700 font-semibold">Halaman master CCTV</p>
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
            <NuxtLink to="/master/input/inputcctv"
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

        <table class="table space-y-6 container mx-auto table-auto border-collapse border border-white mt-7 divide-y divide-gray-300">
            <thead class="bg-gray-700 text-sm has-tooltip">
                <span class="tooltip rounded shadow-lg p-1 bg-gray-700 text-white -mt-10 absolute left-2/4 transform -translate-x-2/4">semua detail barang</span>
                <tr class="text-xs text-gray-200"> 
                    <th class="font-semibold py-3 px-2 w-4">no.</th>
                    <th class="font-semibold py-3">Merek</th>
                    <th class="font-semibold py-3">Model</th>
                    <th class="font-semibold">garansi</th>
                    <th class="font-semibold w-20">aksi</th>
                </tr>
            </thead>
            <tbody v-if="caribarang !== ''" 
            class="text-center bg-white bg-opacity-40 divide-y divide-gray-300">
                <tr class="text-sm" v-for="(hasilcari,index) in caricctv" :key="index">
                    <td>{{index+1}}</td>
                    <td>{{hasilcari.merek}}</td>
                    <td>{{hasilcari.model}}</td>
                    <td>{{$moment(hasilcari.garansi).format('DD-MM-YYYY')}}</td>
                    <td class="py-3 flex justify-evenly w-full bg-gray-700">
                        <NuxtLink :to="{name : 'master-update-updatecctv-cctv', params:{id : hasilcari.id_cctv} }">
                            <font-awesome-icon :icon="['fas','pencil-alt']" class="text-blue-500"/>
                        </NuxtLink>
                        <button @click.prevent="deleteData(hasilcari.id_cctv)">
                            <font-awesome-icon :icon="['fas','trash']" class="text-red-500"/>
                        </button> 
                    </td>
                </tr>
            </tbody>
            <tbody v-else class="text-center bg-white bg-opacity-40 divide-y divide-gray-300">
                <tr class="text-sm" v-for="(cctv,index) in cctvs" :key="index">
                    <td>{{index+1}}</td>
                    <td>{{cctv.merek}}</td>
                    <td>{{cctv.model}}</td>
                    <td>{{$moment(cctv.garansi).format('DD-MM-YYYY')}}</td>
                    <td class="py-3 flex justify-evenly w-full bg-gray-700">
                        <NuxtLink :to="{name : 'master-update-updatecctv-cctv', params:{id : cctv.id_cctv} }">
                            <font-awesome-icon :icon="['fas','pencil-alt']" class="text-yellow-500"/>
                        </NuxtLink>
                        <button @click.prevent="deleteData(cctv.id_cctv)">
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
            caricctv:[],
            cctvs:[],
            master:{
                nama : "inputCctv",
            },
            deletemsg:"",
        }
    },
    async fetch(){
        if(this.caribarang !== ""){
            await this.caribarangcctv()
        return
        }
    },
    methods:{
        async deleteData(id){
            let indexOfArrayItem = this.cctvs.findIndex(i => i.id_cctv === id)

            const lokasi = this.$auth.user.lokasi
            const resp = await axios.delete(`http://localhost:3000/server/master/deletecctv/${id}/${lokasi}`)
            if(resp){
                this.cctvs.splice(indexOfArrayItem, 1);
                this.$router.push('/master/cctv')
                swal('data dihapus',{icon:'success'})
            }
            if(resp.data.errmsg){
                this.$router.push('/master/cctv')
                swal('Error', resp.data.errmsg,{icon:'error'})
            }
        },
        async caribarangcctv(){
            this.caricctv = []
            const res = await axios.get(`http://localhost:3000/server/caricctv?cari=${this.caribarang}`)
            res.data.forEach(val =>{
                this.caricctv.push(val)
            })
        },
    },
    async mounted(){
        try{
            const lokasi = this.$auth.user.lokasi

            const resp = await axios.get(`http://localhost:3000/server/mastercctv?lokasi=${lokasi}`)
            resp.data.forEach(cctv => {
                this.cctvs.push(cctv)
            })
        }
        catch(err){
            console.log(err);
        };
    }

}
</script>

<style>

</style>