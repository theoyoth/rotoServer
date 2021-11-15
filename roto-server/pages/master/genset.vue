<template>
<div class="bg-gray-200 min-h-screen w-widthContent ml-auto">
    <!-- <HeaderListItem :genset="master.nama"/> -->
    <Navbar/>
    <section class="bg-white min-h-screen w-widthContentField m-auto mt-7 p-4">
        <p class="text-center text-lg text-gray-700 font-semibold">Halaman master Genset</p>
        <div class="flex justify-between mt-8">
            <div class="flex">
                <input type="text" placeholder="cari" name="cari" v-model.lazy="caribarang" @keyup.enter="$fetch" class="rounded-l-lg p-2 outline-none bg-gray-200">
                <button class="p-2 rounded-r-lg bg-gray-700 flex items-center justify-center" @click="$fetch">
                    <font-awesome-icon :icon="['fas','search']" class="text-yellow-500"/>
                </button>
            </div>
            <!-- <select id="date" class="rounded-lg p-2 outline-none ml-8 cursor-pointer">
                <option value="hari">hari</option>
                <option value="bulan">bulan</option>
                <option value="tahun">tahun</option>
            </select> -->
            <NuxtLink to="/master/input/inputgenset"
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
                    <th class="font-semibold py-3">Merek</th>
                    <th class="font-semibold py-3">Model</th>   
                    <th class="font-semibold">tipe</th>    
                    <th class="font-semibold">tahun</th>
                    <th class="font-semibold">garansi</th>
                    <th class="font-semibold w-20">aksi</th>
                </tr>
            </thead>
            <tbody v-if="caribarang !== ''" class="text-center bg-white bg-opacity-40 divide-y divide-gray-300">
                <tr class="text-sm" v-for="(hasilcari,index) in carigenset" :key="index">
                    <td class="py-3">{{hasilcari.merek}}</td>
                    <td>{{hasilcari.model}}</td>
                    <td>{{hasilcari.tipe}}</td>
                    <td class="w-32">{{$moment(hasilcari.tahun).format('DD-MM-YYYY')}}</td>
                    <td class="w-32">{{$moment(hasilcari.garansi).format('DD-MM-YYYY')}}</td>
                    <td class="py-3 flex justify-around w-full bg-gray-700">
                        <NuxtLink :to="{name : 'master-update-updategenset-genset', params:{id : hasilcari.id} }">
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
                <tr v-show="genset" class="text-sm" v-for="(genset,index) in gensets" :key="index">
                    <td class="py-3">{{genset.merek}}</td>
                    <td>{{genset.model}}</td>
                    <td>{{genset.tipe}}</td>
                    <td class="w-32">{{$moment(genset.tahun).format('DD-MM-YYYY')}}</td>
                    <td class="w-32">{{$moment(genset.garansi).format('DD-MM-YYYY')}}</td>
                    <td class="py-3 flex justify-around w-full bg-gray-700">
                        <NuxtLink :to="{name : 'master-update-updategenset-genset', params:{id : genset.id} }">
                            <font-awesome-icon :icon="['fas','pencil-alt']" class="text-yellow-500"/>
                        </NuxtLink>
                        <button @click="deleteData(genset.id,user.lokasi)">
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
            gensets:[],
            carigenset:[],
            master:{
                nama : "inputGenset",
            },
            deletemsg:"",
        }
    },
    computed:{
        user(){
            return this.$auth.user
        }
    },
    async fetch(){
        if(this.caribarang !== ""){
            await this.caribaranggenset();
        return
        }
    },
    methods:{
        deleteData(id,lokasi){
            // try{
            // const confirm = await swal({
            //     title: 'Are you sure?',
            //     text: 'Once deleted, you will not be able to recover this Music!',
            //     icon: 'warning',
            //     buttons: true,
            //     dangerMode: true
            // })
            
            //     if(confirm){
            //         const resp = await axios.delete(`/server/master/deletegenset/${lokasi}/${id}`)
            //         this.$router.push('/master/genset')
            //         swal('data dihapus', {
            //             icon: 'success'
            //         })
            //         if(resp.data.err){
            //             swal('Error',resp.data.err , 'error')
            //         }
            //     }
                
            // }catch(err){
            //     swal('data tidak dihapus')
            // }

            swal({
                title: 'Are you sure?',
                text: 'Once deleted, you will not be able to recover this Music!',
                icon: 'warning',
                buttons: true,
                dangerMode: true
            }).then(willDelete => {
            if (willDelete) {
                this.$axios
                .$post(`/server/master/deletegenset/${lokasi}/${id}`)
                .then(response => {
                    swal('Poof! Your Music file has been deleted!', {
                    icon: 'success'
                    })
                    this.$router.push('/master/genset')
                })
                .catch(err => {
                    swal('Error', 'Somethimg went wrong', 'error')
                })
            } else {
                swal('Your Music file is safe!')
            }
            })
                
    },
        async caribaranggenset(){
            this.carigenset = []
            const res = await axios.get(`http://localhost:3000/server/carigenset?cari=${this.caribarang}`)
            res.data.forEach(val =>{
                this.carigenset.push(val)
            })
        },
    },
    async mounted(){
        try{
            const lokasi = this.$auth.user.lokasi
            const resp = await axios.get(`http://localhost:3000/server/mastergenset?lokasi=${lokasi}`)
            resp.data.forEach(genset => {
                this.gensets.push(genset)
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