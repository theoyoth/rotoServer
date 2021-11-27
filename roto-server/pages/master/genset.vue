<template>
<div class="bg-gray-300 min-h-screen w-widthContent ml-auto">
    <!-- <HeaderListItem :genset="master.nama"/> -->
    <Navbar/>
    <section class="bg-gray-100 min-h-screen w-widthContentField m-auto mt-7 p-4">
        <p class="text-center text-lg text-gray-700 font-semibold">Halaman master Genset</p>
        <div class="flex justify-between mt-8">
            <div class="flex">
                <input type="text" placeholder="cari" name="cari" v-model.lazy="caribarang" @keyup.enter="$fetch" class="rounded-l-lg p-2 w-52 outline-none bg-gray-200">
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

        <table class="table space-y-6 container mx-auto table-auto border-collapse mt-7 divide-y divide-gray-300">
            <thead class="bg-gray-700 text-sm has-tooltip">
                <span class="tooltip rounded shadow-lg p-1 bg-gray-700 text-white -mt-10 absolute left-2/4 transform -translate-x-2/4">semua detail barang</span>
                <tr class="text-xs text-gray-200"> 
                    <th class="font-semibold py-3 px-2 w-4">no.</th>
                    <th class="font-semibold py-3 w-48">Merek</th>
                    <th class="font-semibold py-3 w-56">Model</th>   
                    <th class="font-semibold">tipe</th>    
                    <th class="font-semibold w-32">tahun</th>
                    <th class="font-semibold w-32">garansi</th>
                    <th class="font-semibold w-20">aksi</th>
                </tr>
            </thead>
            <tbody v-if="caribarang !== ''" class="text-center bg-white bg-opacity-40 divide-y divide-gray-300">
                <tr class="text-sm uppercase" v-for="(hasilcari,index) in carigenset" :key="index">
                    <td>{{index+1}}</td>
                    <td class="py-3">{{hasilcari.merek}}</td>
                    <td>{{hasilcari.model}}</td>
                    <td>{{hasilcari.tipe}}</td>
                    <td>{{$moment(hasilcari.tahun).format('DD-MM-YYYY')}}</td>
                    <td>{{$moment(hasilcari.garansi).format('DD-MM-YYYY')}}</td>
                    <td class="py-2 flex justify-around w-full lowercase">
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
                                <NuxtLink :to="{name : 'master-update-updategenset-genset', params:{id : hasilcari.id_genset} }">
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
                                <button @click.prevent="deleteData(hasilcari.id_genset)">
                                    <font-awesome-icon :icon="['fas','trash']" class="text-yellow-500"/>
                                </button>
                            </div>
                        </div> 
                    </td>
                </tr>
            </tbody>
            <tbody v-else class="text-center bg-white bg-opacity-40 divide-y divide-gray-300">
                <tr v-show="genset" class="text-sm uppercase" v-for="(genset,index) in gensets" :key="index">
                    <td>{{index+1}}</td>
                    <td class="py-3">{{genset.merek}}</td>
                    <td>{{genset.model}}</td>
                    <td>{{genset.tipe}}</td>
                    <td>{{$moment(genset.tahun).format('DD-MM-YYYY')}}</td>
                    <td>{{$moment(genset.garansi).format('DD-MM-YYYY')}}</td>
                    <td class="py-2 flex justify-around w-full lowercase">
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
                                <NuxtLink :to="{name : 'master-update-updategenset-genset', params:{id : genset.id_genset} }">
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
                                <button @click.prevent="deleteData(genset.id_genset)">
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
        deleteData(id){
            swal({
                title: 'anda yakin?',
                text: 'sekali dihapus, data tidak akan bisa kembali',
                icon: 'warning',
                buttons: true,
                dangerMode: true
            }).then(suc=>{
                if(suc){
                    let indexOfArrayItem = this.gensets.findIndex(i => i.id_genset === id)

                    const lokasi = this.$auth.user.lokasi
                    axios.delete(`/server/master/genset/delete/${id}/${lokasi}`)
                    .then(resp=>{
                        if(resp){
                            this.gensets.splice(indexOfArrayItem, 1);
                            this.$router.push('/master/genset')
                            swal('data dihapus',{icon:'success'})
                        }
                    }).catch(err=>{
                        if(err.data.errmsg){
                            this.$router.push('/master/genset')
                            swal("Error", err.data.errmsg,{icon:'error'})
                        }
                    })
                }else{
                    swal('Error','gagal menghapus',{icon:'error'})
                }
            }).catch(err=>{
                swal('Error','ada yang salah',{icon:'error'})
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
            const idlogin = this.$auth.user.id
            const resp = await axios.get(`http://localhost:3000/server/mastergenset/${lokasi}/${idlogin}`)
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