<template>
<div class="bg-gray-300 min-h-screen w-widthContent ml-auto overflow-x-hidden">
    <section class="bg-gray-100 min-h-screen w-widthContentField m-auto mt-7 p-4">
        <p class="text-center text-lg text-gray-700 font-semibold">Halaman master UPS</p>
        <div class="flex justify-between mt-8">
            <div class="flex">
                <input type="text" placeholder="cari" name="cari" v-model="caribarang" class="transition-all duration-200 ease-in-out rounded-l-lg p-2 bg-gray-200 outline-none w-52 focus:ring-2 focus:ring-gray-700">
                <button class="p-2 cursor-default rounded-r-lg bg-gray-700 flex items-center justify-center w-12">
                    <font-awesome-icon :icon="['fas','search']" class="text-yellow-500"/>
                </button>
            </div>

            <NuxtLink to="/master/input/inputups"
            class="flex items-center justify-between rounded-md px-3 w-20 bg-gray-700 hover:bg-gray-600 transition duration-200">
            <p class="font-medium text-sm text-gray-200">input</p>
            <div>
                <font-awesome-icon :icon="['fas', 'plus']" class="text-gray-200" />
            </div>
            </NuxtLink>
        </div>

        <table class="table space-y-6 container mx-auto table-auto border-collapse mt-7 divide-y divide-gray-300">
            <thead class="bg-gray-700 text-sm has-tooltip">
                <span class="tooltip rounded shadow-lg p-1 bg-gray-700 text-white -mt-10 absolute left-2/4">daftar barang</span>
                <tr class="text-xs text-gray-200"> 
                    <th class="font-semibold py-3 px-2 w-4">no.</th>     
                    <th class="font-semibold py-3 w-44">Model</th>     
                    <th class="font-semibold w-36">UPS critical load</th>
                    <th class="font-semibold w-40">nomor serial</th>
                    <th class="font-semibold w-44">nama sistem</th>
                    <th class="font-semibold">manufaktur</th>
                    <th class="font-semibold w-32">garansi</th>
                    <th class="font-semibold w-24">aksi</th>
                </tr>
            </thead>
            <tbody v-if="caribarang !== ''" class="text-center bg-white bg-opacity-40 divide-y divide-gray-300">
                <tr class="text-sm uppercase" v-for="(hasilcari,index) in filteredList" :key="index">
                    <td>{{index+1}}</td>
                    <td>{{hasilcari.model}}</td>
                    <td>{{hasilcari.ups_critical_load}}</td>
                    <td>{{hasilcari.nomor_serial}}</td>
                    <td>{{hasilcari.nama_sistem}}</td>
                    <td>{{hasilcari.manufaktur}}</td>
                    <td>{{$moment(hasilcari.garansi).format('DD-MM-YYYY')}}</td>
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
                            >edit</span
                            >
                            <div class="bg-gray-700 w-7 h-7 rounded-xl flex items-center justify-center">
                                <NuxtLink 
                                :to="{name:'master-detail-detailups-detailups',
                                    params: { id: hasilcari.id_ups },
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
                                <NuxtLink :to="{name : 'master-update-updateups-ups', params:{id : hasilcari.id_ups} }">
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
                                <button @click.prevent="deleteData(hasilcari.id_ups)">
                                    <font-awesome-icon :icon="['fas','trash']" class="text-yellow-500"/>
                                </button> 
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
            <tbody v-else class="text-center bg-white bg-opacity-40 divide-y divide-gray-300">
                <tr class="text-sm uppercase" v-for="(ups,index) in dataPagination" :key="index">
                    <td>{{ups.nomor+1}}</td>
                    <td>{{ups.model}}</td>
                    <td>{{ups.ups_critical_load}}</td>
                    <td>{{ups.nomor_serial}}</td>
                    <td>{{ups.nama_sistem}}</td>
                    <td>{{ups.manufaktur}}</td>
                    <td>{{$moment(ups.garansi).format('DD-MM-YYYY')}}</td>
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
                                mt-7 -ml-5
                            "
                            >detail</span
                            >
                            <div class="bg-gray-700 w-7 h-7 rounded-xl flex items-center justify-center">
                                <NuxtLink 
                                :to="{name:'master-detail-detailups-detailups',
                                    params: { id: ups.id_ups },
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
                                <NuxtLink :to="{name : 'master-update-updateups-ups', params:{id : ups.id_ups} }">
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
                                <button @click.prevent="deleteData(ups.id_ups)">
                                    <font-awesome-icon :icon="['fas','trash']" class="text-yellow-500"/>
                                </button> 
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <hr>
        <div class="mt-5 flex justify-center" v-if="upss.length > dataPerPage && caribarang === ''">
            <a :href="'?halaman='+ (parseInt(currentPage)-1)" class="bg-gray-700 px-3 py-1 rounded-lg ml-1 mr-1" :class="[!this.$route.query.halaman || this.$route.query.halaman == 1 ? 'decOp' : 'incOp']"><font-awesome-icon :icon="['fas','angle-left']" class="text-yellow-500" /></a>
            
            <div v-for="index in totalPages" :key="index" class="ml-1 mr-1 bg-gray-700 px-3 py-1 rounded-lg">
                <a :href="'?halaman='+index" class="text-yellow-500">{{index}}</a>
            </div>
            <a :href="'?halaman='+ (parseInt(currentPage)+1)" class="bg-gray-700 px-3 py-1 rounded-lg ml-1 mr-1" :class="[this.$route.query.halaman >= totalPages ? 'decOp' : 'incOp']" :disable="this.$route.query.halaman >= totalPages"><font-awesome-icon :icon="['fas','angle-right']" class="text-yellow-500"/></a>
        </div>
    </section>
</div>
</template>

<script>
export default {
    middleware:"isAuthenticated",
    data(){
        return{
            caribarang:"",
            cariups:[],
            upss:[],
            totalPages:1,
            totalRecords:0,
            dataPerPage:10,
            page:1,
            currentPage:1,
            firstData :0,
            dataPagination:[],
            newUpss:[],
        }
    },
    computed:{ 
        filteredList() {
            return this.dataPagination.filter(hasil=>{
                if(hasil.model.toLowerCase().includes(this.caribarang.toLowerCase()) || hasil.nomor_serial.toLowerCase().includes(this.caribarang.toLowerCase()) || hasil.nama_sistem.toLowerCase().includes(this.caribarang.toLowerCase()) || hasil.manufaktur.toLowerCase().includes(this.caribarang.toLowerCase()) || hasil.ups_critical_load.toLowerCase().includes(this.caribarang.toLowerCase()) ){
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
                    let indexOfArrayItem = this.dataPagination.findIndex(i => i.id_ups === id)

                    const lokasi = this.$auth.user.lokasi
                    this.$axios.delete(`/master/deleteups/${id}/${lokasi}`)
                    .then(resp=>{
                        if(resp){
                            this.dataPagination.splice(indexOfArrayItem, 1);
                            this.$router.push('/master/ups')
                            swal('data dihapus',{icon:'success'})
                        }
                    }).catch(err=>{
                        this.$router.push('/master/ups')
                    })
                } else{
                    this.$router.push('/master/ups')
                }
            }).catch(err=>{
                swal('ada yang salah',{icon:'error'})
            })
        },
        async getAllDataUps(){
            try{
                const lokasi = this.$auth.user.lokasi
                const idlogin = this.$auth.user.id
                const resp = await this.$axios.get(`/masterups/${lokasi}/${idlogin}`)
                resp.data.reverse()
                resp.data.forEach(ups =>{
                    this.upss.push(ups)            
                })

                this.totalPages = Math.ceil(this.upss.length / this.dataPerPage) 
                if(this.$route.query.halaman){
                    this.currentPage = this.$route.query.halaman
                } else {
                    this.currentPage = 1
                }

                // menambahkan nomor tiap data
                for(var i = 0; i < this.upss.length; i++){
                    this.newUpss.push({...this.upss[i], nomor:i})
                }

                this.firstData = (this.dataPerPage * this.currentPage) - this.dataPerPage
                this.dataPagination = this.newUpss.slice(this.firstData,this.firstData+this.dataPerPage)
            }
            catch(err) {
                console.error(err);
            };
        }
    },
    mounted(){
        this.getAllDataUps()
    }
}
</script>

<style>
.incOp{
    opacity: 1;
    cursor:pointer;
    display: block;
}
.decOp{
    opacity: 0;
    cursor:default;
    display:none;
}
</style>