<template>
<div class="bg-gray-300 min-h-screen w-widthContent ml-auto">
    <!-- <HeaderListItem :apar="master.nama"/> -->
    <Navbar/>
    <section class="bg-gray-100 min-h-screen w-widthContentField m-auto mt-7 p-4">
        <p class="text-center text-lg text-gray-700 font-semibold">Halaman master Apar</p>
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
            <NuxtLink to="/master/input/inputapar"
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
                    <th class="font-semibold">tipe</th>    
                    <th class="font-semibold">tahun</th>
                    <th class="font-semibold">garansi</th>
                    <th class="font-semibold w-20">aksi</th>
                </tr>
            </thead>
            <tbody v-if="caribarang !== ''" class="text-center bg-white bg-opacity-40 divide-y divide-gray-300">
                <tr class="text-sm" v-for="(hasilcari,index) in cariapar" :key="index">
                    <td>{{index+1}}</td>
                    <td class="py-3">{{hasilcari.merek}}</td>
                    <td>{{hasilcari.model}}</td>
                    <td>{{hasilcari.tipe}}</td>
                    <td class="w-32">{{$moment(hasilcari.tahun).format('DD-MM-YYYY')}}</td>
                    <td class="w-32">{{$moment(hasilcari.garansi).format('DD-MM-YYYY')}}</td>
                    <td class="py-3 flex justify-evenly w-full">
                        <div class="has-tooltip">
                        <span
                        class="
                            tooltip
                            rounded
                            text-xs
                            shadow-lg
                            p-1
                            bg-gray-700
                            text-white
                            mt-7 -ml-4
                        "
                        >edit</span
                        >
                            <div class="bg-gray-700 w-7 h-7 rounded-xl flex items-center justify-center">
                                <NuxtLink :to="{name : 'master-update-updateapar-apar', params:{id : hasilcari.id_apar} }">
                                    <font-awesome-icon :icon="['fas','pencil-alt']" class="text-yellow-500"/>
                                </NuxtLink>
                            </div>
                        </div>
                        <div class="has-tooltip">
                        <span
                            class="
                                tooltip
                                rounded
                                text-xs
                                shadow-lg
                                p-1
                                bg-gray-700
                                text-white
                                mt-7 -ml-4
                            "
                            >hapus</span
                            >
                            <div class="bg-gray-700 w-7 h-7 rounded-xl flex items-center justify-center">
                                <button @click="deleteData(hasilcari.id_apar)">
                                    <font-awesome-icon :icon="['fas','trash']" class="text-yellow-500"/>
                                </button> 
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
            <tbody v-else class="text-center bg-white bg-opacity-40 divide-y divide-gray-300">
                <tr v-show="apar" class="text-sm" v-for="(apar,index) in apars" :key="index">
                    <td>{{index+1}}</td>
                    <td class="py-3">{{apar.merek}}</td>
                    <td>{{apar.model}}</td>
                    <td>{{apar.tipe}}</td>
                    <td class="w-32">{{$moment(apar.tahun).format('DD-MM-YYYY')}}</td>
                    <td class="w-32">{{$moment(apar.garansi).format('DD-MM-YYYY')}}</td>
                    <td class="py-3 flex justify-evenly w-full">
                        <div class="has-tooltip">
                        <span
                        class="
                            tooltip
                            rounded
                            text-xs
                            shadow-lg
                            p-1
                            bg-gray-700
                            text-white
                            mt-7 -ml-4
                        "
                        >edit</span
                        >
                            <div class="bg-gray-700 w-7 h-7 rounded-xl flex items-center justify-center">
                                <NuxtLink :to="{name : 'master-update-updateapar-apar', params:{id : apar.id_apar} }">
                                    <font-awesome-icon :icon="['fas','pencil-alt']" class="text-yellow-500"/>
                                </NuxtLink>
                            </div>
                        </div>
                        <div class="has-tooltip">
                        <span
                            class="
                                tooltip
                                rounded
                                text-xs
                                shadow-lg
                                p-1
                                bg-gray-700
                                text-white
                                mt-7 -ml-4
                            "
                            >hapus</span
                            >
                            <div class="bg-gray-700 w-7 h-7 rounded-xl flex items-center justify-center">
                                <button @click="deleteData(apar.id_apar)" >
                                    <font-awesome-icon :icon="['fas','trash']" class="text-yellow-500"/>
                                </button> 
                            </div>
                        </div>
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
            apars:[],
            cariapar:[],
            master:{
                nama : "inputApar",
            },
            deletemsg:"",
        }
    },
    async fetch(){
        if(this.caribarang !== ""){
            await this.caribarangapar();
        return
        }
    },
    methods:{
        async deleteData(id){
            let indexOfArrayItem = this.apars.findIndex(i => i.id_apar === id)

            const lokasi = this.$auth.user.lokasi
            const resp = await axios.delete(`http://localhost:3000/server/master/deleteapar/${id}/${lokasi}`)
            if(resp){
                this.apars.splice(indexOfArrayItem, 1);
                this.$router.push('/master/apar')
                swal('data dihapus',{icon:'success'})
            }
            if(resp.data.errmsg){
                this.$router.push('/master/apar')
                swal("Error", resp.data.errmsg,{icon:'error'})
            }
        },
         async caribarangapar(){
            this.cariapar = []
            const res = await axios.get(`http://localhost:3000/server/cariapar?cari=${this.caribarang}`)
            res.data.forEach(val =>{
                this.cariapar.push(val)
            })
        },
    },
    async mounted(){
        try{
            const lokasi = this.$auth.user.lokasi
            const resp = await axios.get(`http://localhost:3000/server/masterapar?lokasi=${lokasi}`)
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