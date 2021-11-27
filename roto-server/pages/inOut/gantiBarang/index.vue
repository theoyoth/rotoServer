<template>
<div class="bg-gray-300 min-h-screen w-widthContent ml-auto overflow-x-hidden">
    <!-- <HeaderListItem gantibarang="gantibarang"/> -->
    <Navbar/>
     <section class="bg-gray-100 min-h-screen w-widthContentField m-auto mt-7 p-4">
        <p class="text-center text-lg text-gray-700 font-semibold">Halaman ganti barang</p>
        <div class="flex justify-between mt-8">
            <div class="flex">
                <input
                    type="text"
                    placeholder="cari"
                    name="cari"
                    v-model.lazy="caribarang"
                    class="rounded-l-lg p-2 w-52 outline-none bg-gray-200" @keyup.enter="$fetch"
                />
                <button
                    class="
                    p-2
                    rounded-r-lg
                    bg-gray-700
                    flex
                    items-center
                    justify-center
                    w-12
                    "
                    @click="$fetch"
                >
                    <font-awesome-icon :icon="['fas', 'search']" class="text-yellow-500" />
                </button>
            </div>
            <!-- <select id="date" class="rounded-lg p-2 outline-none ml-8">
                <option value="hari">hari</option>
                <option value="bulan">bulan</option>
                <option value="tahun">tahun</option>
            </select> -->
            <NuxtLink to="/inout/gantibarang/inputgantibarang"
            class="flex items-center justify-between rounded-md px-3 w-20 bg-gray-700 hover:shadow-lg transition duraiton-300">
            <p class="font-medium text-sm text-gray-200">input</p>
            <div>
                <font-awesome-icon :icon="['fas', 'plus']" class="text-gray-200" />
            </div>
            </NuxtLink>
        </div>
        <table class="table space-y-6 container mx-auto table-auto border-collapse mt-7" id="listitem">
            <thead class="bg-gray-700 text-sm has-tooltip">
                <span
                class="
                tooltip
                rounded
                shadow-lg
                p-1
                bg-gray-700
                text-white
                -mt-10
                absolute
                left-2/4
                transform
                -translate-x-2/4
                "
                >semua detail barang</span
            >
                <tr class="text-xs text-gray-200"> 
                    <th class="font-semibold py-3 px-2 w-4">no.</th>
                    <th class="font-semibold py-3 w-32">tanggal</th>
                    <th class="font-semibold" >nama pengganti</th>
                    <th class="font-semibold" >nama barang baru</th>
                    <th class="font-semibold" >nama barang lama</th>
                    <th class="font-semibold w-44">penanggung jawab</th>
                    <th class="font-semibold w-32">aksi</th>
                </tr>
            </thead>
            <tbody v-if="caribarang !== ''" class="text-center bg-white bg-opacity-40">
                <tr class="text-sm uppercase" v-for="(hasilcari,index) in caridatabarang" :key="index">
                    <td>{{index+1}}</td>
                    <td>{{$moment(hasilcari.tanggal).format('DD-MM-YYYY')}}</td>
                    <td>{{hasilcari.nama_pengganti}}</td>
                    <td>{{hasilcari.nama_barang_baru}}</td>
                    <td>{{hasilcari.nama_barang_lama}}</td>
                    <td>{{hasilcari.penanggung_jawab}}</td>
                    <td class="py-3 flex justify-between w-full lowercase">
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
                        >print</span
                        >
                            <div class="bg-gray-700 w-7 h-7 rounded-xl flex items-center justify-center">
                                <NuxtLink :to="{name:'inout-gantibarang-print-printform',params:{id:hasilcari.id_ganti_barang}}">
                                    <font-awesome-icon :icon="['fas','print']" class="text-yellow-500"/>
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
                                mt-7 -ml-5
                            "
                            >detail</span
                            >
                            <div class="bg-gray-700 w-7 h-7 rounded-xl flex items-center justify-center">
                                <NuxtLink
                                    :to="{
                                    name: 'inout-gantibarang-detail-detailgantibarang',
                                    params: { id: hasilcari.id_ganti_barang },
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
                                <NuxtLink :to="{name : 'inout-gantibarang-update-updategantibarang', params:{id :hasilcari.id_ganti_barang } }">
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
                                <button @click.prevent="deleteData(hasilcari.id_ganti_barang)">
                                    <font-awesome-icon :icon="['fas','trash']" class="text-yellow-500"/>
                                </button> 
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody> 
            <tbody v-else class="text-center bg-white bg-opacity-40">
                <tr class="text-sm uppercase" v-for="(barang,index) in barangs" :key="index">
                    <td>{{index+1}}</td>
                    <td>{{$moment(barang.tanggal).format('DD-MM-YYYY')}}</td>
                    <td>{{barang.nama_pengganti}}</td>
                    <td>{{barang.nama_barang_baru}}</td>
                    <td>{{barang.nama_barang_lama}}</td>
                    <td>{{barang.penanggung_jawab}}</td>
                    <td class="py-3 flex justify-between w-full lowercase">
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
                        >print</span
                        >
                            <div class="bg-gray-700 w-7 h-7 rounded-xl flex items-center justify-center">
                                <NuxtLink :to="{name:'inout-gantibarang-print-printform',params:{id:barang.id_ganti_barang}}">
                                    <font-awesome-icon :icon="['fas','print']" class="text-yellow-500"/>
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
                                mt-7 -ml-5
                            "
                            >detail</span
                            >
                            <div class="bg-gray-700 w-7 h-7 rounded-xl flex items-center justify-center">
                                <NuxtLink
                                    :to="{
                                    name: 'inout-gantibarang-detail-detailgantibarang',
                                    params: { id: barang.id_ganti_barang },
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
                                <NuxtLink :to="{name : 'inout-gantibarang-update-updategantibarang', params:{id :barang.id_ganti_barang } }">
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
                                <button @click.prevent="deleteData(barang.id_ganti_barang)">
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
            caribarang:'',
            barangs:[],
            caridatabarang:[],
        }
    },
    async fetch(){
        if(this.caribarang !== ""){
            await this.caridatagantibarang();
        return
        }
    },
    async mounted(){
        try{
            const lokasi = this.$auth.user.lokasi
            const idlogin = this.$auth.user.id
            const resp = await axios.get(`http://localhost:3000/server/inout/gantibarang/${lokasi}/${idlogin}`)
            resp.data.forEach(barang => {
            this.barangs.push(barang)
            })
        }
        catch(err){
            console.error(err);
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
                    let indexOfArrayItem = this.barangs.findIndex(i => i.id_ganti_barang === id)

                    const lokasi = this.$auth.user.lokasi
                    axios.delete(`/server/inout/gantibarang/delete/${id}/${lokasi}`)
                    .then(resp=>{
                        if(resp){
                            this.barangs.splice(indexOfArrayItem, 1);
                            this.$router.push('/inout/gantibarang')
                            swal('data dihapus',{icon:'success'})
                        }
                    }).catch(err=>{
                        if(err.data.errmsg){
                            this.$router.push('/inout/gantibarang')
                            swal('Error', err.data.errmsg,{icon:'error'})
                        }
                    })
                }else{
                    swal('Error','gagal menghapus',{icon:'error'})
                }
            }).catch(err=>{
                swal('Error','ada yang salah',{icon:'error'})
            })
        },
        async caridatagantibarang(){
            this.caridatabarang = []
            const res = await axios.get(`http://localhost:3000/server/inout/gantibarang/caribarang/${this.caribarang}/${this.$auth.user.lokasi}/${this.$auth.user.id}`)
            res.data.forEach(val =>{
                this.caridatabarang.push(val)
            })
        },
    }
}
</script>

<style>

</style>