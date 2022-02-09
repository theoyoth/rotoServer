<template>
<div class="bg-gray-300 w-widthContent ml-auto overflow-x-hidden">
    <section class="bg-gray-100 min-h-screen w-widthContentField m-auto mt-7 p-4">
        <p class="text-center text-lg text-gray-700 font-semibold">Halaman maintenance</p>
        <div class="flex justify-between mt-8 ">
            <div class="flex">
                <input type="text" placeholder="cari" name="cari" v-model="carimaintenance" class="transition-all duration-200 ease-in-out rounded-l-lg p-2 bg-gray-200 outline-none w-52 focus:ring-2 focus:ring-gray-700" >
                <button class="p-2 cursor-default rounded-r-lg bg-gray-700 flex items-center justify-center w-12" >
                    <font-awesome-icon :icon="['fas','search']" class="text-yellow-500"/>
                </button>
            </div>
            <NuxtLink to="/maintenance/inputmaintenance"
            class="flex items-center justify-between rounded-md px-3 w-20 bg-gray-700 hover:bg-gray-600 transition duration-200">
                <p class="font-medium text-sm text-gray-200">input</p>
                <div>
                    <font-awesome-icon :icon="['fas', 'plus']" class="text-gray-200" />
                </div>
            </NuxtLink>
        </div>

        <table class="table space-y-6 container mx-auto table-auto border-collapse mt-7 divide-y divide-gray-300" ref="listitem" id="listitem">
            <thead class="bg-white text-sm bg-gray-700">
                <tr class="text-xs text-gray-200"> 
                    <th class="font-semibold py-3 px-2 w-4">no.</th>
                    <th classp="font-semibold py-3 w-52">nama</th>
                    <th class="font-semibold py-3 w-32">tanggal input</th>
                    <th class="font-semibold w-32">suhu</th>
                    <th class="font-semibold w-32">kelembapan</th>
                    <th class="font-semibold w-32">AC</th>
                    <th class="font-semibold w-32">UPS</th>
                    <th class="font-semibold w-28">aksi</th>
                </tr>
            </thead>
            <tbody v-if="carimaintenance !== ''" class="text-center bg-white bg-opacity-40 divide-y divide-gray-300">
                <tr class="text-sm" v-for="(hasilcari,index) in filteredList" :key="index">
                    <td>{{index+1}}</td>
                    <td class="py-3">{{hasilcari.nama_pemeriksa}}</td>
                    <td>{{$moment(hasilcari.tanggal).format("DD-MM-YYYY")}}</td>
                    <td>{{hasilcari.suhu}}</td>
                    <td>{{hasilcari.kelembapan}}</td>
                    <td>{{hasilcari.ac}}</td>
                    <td>{{hasilcari.ups}}</td>
                    <td class="py-2 flex justify-around w-full">
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
                                    name: 'maintenance-detailmaintenance-detail',
                                    params: { id: hasilcari.id_maintenance },
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
                                <NuxtLink :to="{name : 'maintenance-updatemaintenance-maintenance', params:{id : hasilcari.id_maintenance} }">
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
                                <button @click.prevent="deleteData(hasilcari.id_maintenance)">
                                    <font-awesome-icon :icon="['fas','trash']" class="text-yellow-500"/>
                                </button> 
                            </div>
                        </div>
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
                    <td class="py-2 flex justify-around w-full">
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
                                    name: 'maintenance-detailmaintenance-detail',
                                    params: { id: main.id_maintenance },
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
                                <NuxtLink :to="{name : 'maintenance-updatemaintenance-maintenance', params:{id : main.id_maintenance} }">
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
                                <button @click.prevent="deleteData(main.id_maintenance)">
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
    computed:{ 
        filteredList() {
            return this.hasilMaintenance.filter(hasil=>{
                if(hasil.suhu.toString().includes(this.carimaintenance.toString()) || hasil.kelembapan.toString().includes(this.carimaintenance.toString()) || hasil.ac.toLowerCase().includes(this.carimaintenance.toLowerCase()) || hasil.ups.toLowerCase().includes(this.carimaintenance.toLowerCase())){
                    return hasil
                }
            })        
        }
    },
    methods:{
        deleteData(id){
            swal({
                title: 'anda yakin?',
                text: 'setelah dihapus, data tidak akan bisa kembali',
                icon: 'warning',
                buttons: true,
                dangerMode: true
            }).then(suc=>{
                if(suc){
                    let indexOfArrayItem = this.hasilMaintenance.findIndex(i => i.id_maintenance === id)
                    const lokasi = this.$auth.user.lokasi
                    this.$axios.delete(`/maintenance/delete/${id}/${lokasi}`)
                    .then(resp=>{
                        if(resp){
                            this.hasilMaintenance.splice(indexOfArrayItem, 1);
                            swal('data dihapus',{icon:'success'})
                            this.$router.push('/maintenance')
                        }
                    }).catch(err=>{
                        swal('Error','data tidak terhapus',{icon:'error'})
                        this.$router.push('/maintenance')
                    })
                }
                else{
                    swal('Error','gagal menghapus',{icon:'error'})
                }
            }).catch(err=>{
                swal('Error','gagal menghapus',{icon:'error'})
            })
        },
        async getAllDataMaintenances(){
            const lokasi = this.$auth.user.lokasi
            const idlogin = this.$auth.user.id
            try{
                const resp = await this.$axios.get(`/inputmaintenance/${lokasi}/${idlogin}`)
                if(resp){
                    resp.data.reverse()
                    resp.data.forEach(maintenance => {
                        this.hasilMaintenance.push(maintenance)
                    })
                } else{
                    console.log('error')
                }
            }catch(err){
                console.log(err)
            }
        }
    },
    async mounted(){
        this.getAllDataMaintenances()
    },
}
</script>

<style>
</style>