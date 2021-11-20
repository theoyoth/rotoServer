<template>
<div class="min-h-screen bg-gray-300 w-widthContent ml-auto">
    <!-- <HeaderListItem :ac="master.nama"/> -->
    <Navbar/>
    <section class="bg-gray-100 min-h-screen w-widthContentField m-auto mt-7 p-4">
        <p class="text-center text-lg text-gray-700 font-semibold">Halaman master AC</p>
        <div class="flex justify-between mt-8">
            <div class="flex">
                <input type="text" placeholder="cari" name="cari" v-model.lazy="caribarang" @keyup.enter="$fetch" class="rounded-l-lg p-2 outline-none w-52 bg-gray-200">
                <button class="p-2 rounded-r-lg bg-gray-700 flex items-center justify-center w-12" @click="$fetch">
                    <font-awesome-icon :icon="['fas','search']" class="text-yellow-500"/>
                </button>
            </div>
            <!-- <select id="date" class="rounded-lg p-2 outline-none ml-8 cursor-pointer">
                <option value="hari">hari</option>
                <option value="bulan">bulan</option>
                <option value="tahun">tahun</option>
            </select> -->
            <NuxtLink to="/master/input/inputac"
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
                    <th class="font-semibold">sumber daya listrik</th>
                    <th class="font-semibold">dimensi</th>
                    <th class="font-semibold">kapasitas pendingin</th>
                    <th class="font-semibold">garansi</th>
                    <th class="font-semibold w-24">aksi</th>
                </tr>
            </thead>
            <tbody v-if="caribarang !== ''" class="text-center bg-white bg-opacity-40 divide-y divide-gray-300">
                <tr class="text-sm" v-for="(hasilcari,index) in cariac" :key="index">
                    <td>{{index+1}}</td>
                    <td class="py-3 w-32">{{hasilcari.merek}}</td>
                    <td class="w-32">{{hasilcari.model}}</td>
                    <td class="w-24">{{hasilcari.sumber_daya_listrik}}</td>
                    <td class="w-24">{{hasilcari.dimensi}}</td>
                    <td class="w-24">{{hasilcari.kapasitas_pendingin}}</td>
                    <td class="w-24">{{$moment(hasilcari.garansi).format('DD-MM-YYYY')}}</td>
                    <td class="py-3 flex justify-around w-full">
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
                                mt-7 -ml-5
                            "
                            >detail</span
                            >
                            <div class="bg-gray-700 w-7 h-7 rounded-xl flex items-center justify-center">
                                <NuxtLink
                                    :to="{
                                    name: 'master-detail-detailac-detailac',
                                    params: { id: hasilcari.id_ac },
                                    }"
                                >
                                    <font-awesome-icon
                                    :icon="['fas', 'eye']"
                                    class="text-yellow-500"
                                    />
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
                            >edit</span
                            >
                            <div class="bg-gray-700 w-7 h-7 rounded-xl flex items-center justify-center">
                                <NuxtLink :to="{name : 'master-update-updateac-ac', params:{id : hasilcari.id_ac} }">
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
                                <button @click.prevent="deleteData(hasilcari.id_ac)">
                                    <font-awesome-icon :icon="['fas','trash']" class="text-yellow-500"/>
                                </button> 
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
            <tbody v-else class="text-center bg-white bg-opacity-40 divide-y divide-gray-300"><tr class="text-sm" v-for="(ac,index) in acs" :key="index">
                    <td>{{index+1}}</td>
                    <td class="py-3 w-32">{{ac.merek}}</td>
                    <td class="w-32">{{ac.model}}</td>
                    <td class="w-32">{{ac.sumber_daya_listrik}}</td>
                    <td class="w-32">{{ac.dimensi}}</td>
                    <td class="w-32">{{ac.kapasitas_pendingin}}</td>
                    <td class="w-28">{{$moment(ac.garansi).format("DD-MM-YYYY")}}</td>
                    <td class="py-3 flex justify-around w-full">
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
                                mt-7 -ml-5
                            "
                            >detail</span
                            >
                            <div class="bg-gray-700 w-7 h-7 rounded-xl flex items-center justify-center">
                                <NuxtLink
                                    :to="{
                                    name: 'master-detail-detailac-detailac',
                                    params: { id: ac.id_ac},
                                    }"
                                >
                                    <font-awesome-icon
                                    :icon="['fas', 'eye']"
                                    class="text-yellow-500"
                                    />
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
                            >edit</span
                            >
                            <div class="bg-gray-700 w-7 h-7 rounded-xl flex items-center justify-center">
                                <NuxtLink :to="{name : 'master-update-updateac-ac', params:{id : ac.id_ac} }">
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
                                <button @click.prevent="deleteData(ac.id_ac)">
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
            cariac:[],
            acs:[],
            master:{
                nama: "inputAc",
            },
            deletemsg:"",
        }
    },
    async fetch(){
        if(this.caribarang !== ""){
            await this.caribarangac()
        return
        }
    },
    methods:{
    async deleteData(id){
        let indexOfArrayItem = this.acs.findIndex(i => i.id_ac === id)

        const lokasi = this.$auth.user.lokasi
        const resp = await axios.delete(`/server/master/deleteac/${id}/${lokasi}`)
        if(resp){
            this.acs.splice(indexOfArrayItem, 1);
            this.$router.push('/master/ac')
            swal('data dihapus',{icon:'success'})
        }
        if(resp.data.errmsg){
            this.$router.push('/master/ac')
            swal("error", resp.data.errmsg,{icon:'error'})
        }
    },
    async caribarangac(){
        this.cariac = []
        const res = await axios.get(`http://localhost:3000/server/cariac?cari=${this.caribarang}`)
        res.data.forEach(val =>{
            this.cariac.push(val)
        })
    },
    },
    async mounted(){
        try{
            const lokasi = this.$auth.user.lokasi
            const resp = await axios.get(`http://localhost:3000/server/masterac?lokasi=${lokasi}`)
            resp.data.forEach(ac => {
                this.acs.push(ac)
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