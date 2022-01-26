<template>
<div class="bg-gray-300 w-widthContent ml-auto min-h-screen overflow-x-hidden">
    <section class="bg-gray-100 min-h-screen w-widthContentField m-auto mt-7 p-4">
        <p class="text-center text-lg text-gray-700 font-semibold">Maintenance teknisi listrik</p>
        <div class="flex justify-between mt-8 ">
            <div class="flex">
                <input type="text" placeholder="cari" name="cari" v-model="carimaintenance" class="rounded-l-lg w-52 p-2 outline-none bg-gray-200">
                <button class="p-2 rounded-r-lg bg-gray-700 flex items-center justify-center w-12">
                    <font-awesome-icon :icon="['fas','search']" class="text-yellow-500"/>
                </button>
            </div>
            <!-- <select id="date" ref="date" class="rounded-lg p-2 outline-none ml-8 cursor-pointer">
                <option value="hari">hari</option>
                <option value="bulan">bulan</option>
                <option value="tahun">tahun</option>
            </select> -->
        </div>

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
                </tr>
            </tbody> 
            <tbody v-else class="text-center bg-white bg-opacity-40 divide-y divide-gray-300">
                <tr class="text-sm" v-for="(main,index) in hasilMaintenancelistrik" :key="index">
                    <td>{{index+1}}</td>
                    <td class="py-3">{{main.nama_pemeriksa}}</td>
                    <td>{{$moment(main.tanggal).format("DD-MM-YYYY")}}</td>
                    <td>{{main.suhu}}</td>
                    <td>{{main.kelembapan}}</td>
                    <td>{{main.ac}}</td>
                    <td>{{main.ups}}</td>
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
            hasilMaintenancelistrik:[],
        }
    },   
    computed:{ 
        filteredList() {
            return this.hasilMaintenancelistrik.filter(hasil=>{
                if(hasil.suhu.toString().includes(this.carimaintenance.toString()) || hasil.kelembapan.toString().includes(this.carimaintenance.toString()) || hasil.ac.toLowerCase().includes(this.carimaintenance.toLowerCase()) || hasil.ups.toLowerCase().includes(this.carimaintenance.toLowerCase())){
                    return hasil
                }
            })        
        }
    },
    async mounted(){
          const lokasi = this.$auth.user.lokasi
        try{
            const resp = await this.$axios.get(`/maintenance/teknisilistrik/${lokasi}`)
            if(resp.data){
                resp.data.reverse()
                resp.data.forEach(maintenance => {
                    this.hasilMaintenancelistrik.push(maintenance)
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