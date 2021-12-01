<template>
<div class="bg-gray-200 min-h-screen w-widthContent ml-auto">
    <!-- <HeaderListItem :nas="master.nama"/> -->
    <Navbar/>
    <section class="bg-gray-100 min-h-screen w-widthContentField m-auto mt-7 p-4">
        <p class="text-center text-lg text-gray-700 font-semibold">Halaman master NAS</p>
        <div class="flex justify-between mt-8">
            <div class="flex">
                <input type="text" placeholder="cari" name="cari" v-model="caribarang" class="transition-all duration-200 ease-in-out rounded-l-lg p-2 bg-gray-200 outline-none w-52 focus:ring-2 focus:ring-gray-700">
                <button class="p-2 rounded-r-lg bg-gray-700 flex items-center justify-center w-12">
                    <font-awesome-icon :icon="['fas','search']" class="text-yellow-500"/>
                </button>
            </div>
            <!-- <select id="date" class="rounded-lg p-2 outline-none ml-8 cursor-pointer">
                <option value="hari">hari</option>
                <option value="bulan">bulan</option>
                <option value="tahun">tahun</option>
            </select> -->
            <NuxtLink to="/master/input/inputnas"
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
                    <th class="font-semibold py-3 w-52">Merek</th>
                    <th class="font-semibold w-56">Processor</th>
                    <th class="font-semibold w-28">storage</th>   
                    <th class="font-semibold">CPU</th>
                    <th class="font-semibold w-28">garansi</th>
                    <th class="font-semibold w-28">aksi</th>
                </tr>
            </thead>
            <tbody v-if="caribarang !== ''" class="text-center bg-white bg-opacity-40 divide-y divide-gray-300">
                <tr class="text-sm uppercase" v-for="(hasilcari,index) in filteredList" :key="index">
                    <td>{{index+1}}</td>
                    <td>{{hasilcari.merek}}</td>
                    <td>{{hasilcari.processor}}</td>
                    <td>{{hasilcari.storage}}</td>
                    <td>{{hasilcari.cpu}}</td>
                    <td>{{$moment(hasilcari.garansi).format('DD-MM-YYYY')}}</td>
                    <td class="py-3 flex justify-around w-full lowercase">
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
                                :to="{name:'master-detail-detailnas-detailnas',
                                    params: { id: hasilcari.id_nas },
                                }">
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
                                <NuxtLink :to="{name : 'master-update-updatenas-nas',params:{id : hasilcari.id_nas} }">
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
                                <button @click.prevent="deleteData(hasilcari.id_nas)">
                                    <font-awesome-icon :icon="['fas','trash']" class="text-yellow-500"/>
                                </button> 
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
            <tbody v-else class="text-center bg-white bg-opacity-40 divide-y divide-gray-300">
                <tr class="text-sm uppercase" v-for="(nas,index) in nass" :key="index">
                    <td>{{index+1}}</td>
                    <td>{{nas.merek}}</td>
                    <td>{{nas.processor}}</td>
                    <td>{{nas.storage}}</td>
                    <td>{{nas.cpu}}</td>
                    <td>{{$moment(nas.garansi).format('DD-MM-YYYY')}}</td>
                    <td class="py-3 flex justify-around w-full lowercase">
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
                                :to="{name:'master-detail-detailnas-detailnas',
                                    params: { id: nas.id_nas },
                                }">
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
                                <NuxtLink :to="{name : 'master-update-updatenas-nas', params:{id : nas.id_nas} }">
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
                                <button @click.prevent="deleteData(nas.id_nas)">
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
            carinas:[],
            nass:[],
            master:{
                nama : "inputNas",
            },
            deletemsg:"",
        }
    },
    computed:{
        filteredList() {
            return this.nass.filter(hasil =>{
                if(hasil.merek.toLowerCase().includes(this.caribarang.toLowerCase()) || hasil.processor.toLowerCase().includes(this.caribarang.toLowerCase()) || hasil.storage.toLowerCase().includes(this.caribarang.toLowerCase()) || hasil.cpu.toLowerCase().includes(this.caribarang.toLowerCase()) ){
                    return hasil
                }
            })
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
                    let indexOfArrayItem = this.nass.findIndex(i => i.id_nas === id)

                    const lokasi = this.$auth.user.lokasi
                    axios.delete(`/server/master/nas/delete/${id}/${lokasi}`)
                    .then(resp=>{
                        if(resp){
                            this.nass.splice(indexOfArrayItem, 1);
                            this.$router.push('/master/nas')
                            swal('data dihapus',{icon:'success'})
                        }
                    }).catch(err=>{
                        if(err.data.errmsg){
                            this.$router.push('/master/nas')
                            swal('Error', err.data.msg,{icon:'error'})
                        }
                    })
                } else{
                    swal('Error','gagal menghapus',{icon:'error'})
                }
            }).catch(err=>{
                swal('Error','ada yang salah',{icon:'error'})
            })
        },
    },
    async mounted(){
        try{
            const lokasi = this.$auth.user.lokasi
            const idlogin = this.$auth.user.id
            const resp = await axios.get(`http://localhost:3000/server/masternas/${lokasi}/${idlogin}`)
            resp.data.forEach(nas => {
                this.nass.push(nas)
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