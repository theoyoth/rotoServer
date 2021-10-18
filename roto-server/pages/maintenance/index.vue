<template>
<div class="bg-hero h-screen">
    <HeaderListItem maintenance="maintenance" />
    <div class="container mx-auto flex mt-8 ">
        <form class="flex" method="post" ref="formcari" id="formcari">
            <input type="search" placeholder="cari" name="cari" v-model="cari" class="rounded-l-lg p-2 outline-none">
            <button class="p-2 rounded-r-lg bg-white flex items-center justify-center">
                <font-awesome-icon :icon="['fas','search']" class="text-black-500"/>
            </button>
        </form>
        <select id="date" ref="date" class="rounded-lg p-2 outline-none ml-8 cursor-pointer">
            <option value="hari">hari</option>
            <option value="bulan">bulan</option>
            <option value="tahun">tahun</option>
        </select>
    </div>
    <table class="table space-y-6 container mx-auto table-auto border-collapse border border-white mt-7" ref="listitem" id="listitem">
        <thead class="bg-white text-sm">
            <tr class="text-xs"> 
                <th class="font-semibold py-3">nama</th>
                <th class="font-semibold py-3">tanggal</th>
                <th class="font-semibold" >suhu</th>
                <th class="font-semibold" >kelembapan</th>
                <th class="font-semibold" >AC</th>
                <th class="font-semibold" >UPS</th>
                <th class="font-semibold" >baterai</th>
                <th class="font-semibold" >network</th>
                <th class="font-semibold" >server</th>
                <th class="font-semibold" >keterangan</th>
                <th class="font-semibold" >aksi</th>
            </tr>
        </thead>
        <tbody class="text-center bg-white bg-opacity-40">
            <tr class="text-sm" v-for="(main,index) in hasilMaintenance" :key="index">
                <td class="py-3">{{main.nama}}</td>
                <td>{{$moment(main.tanggal).format("DD-MM-YYYY")}}</td>
                <td>{{main.suhu}}</td>
                <td>{{main.kelembapan}}</td>
                <td>{{main.ac}}</td>
                <td>{{main.ups}}</td>
                <td>{{main.baterai}}</td>
                <td>{{main.network}}</td>
                <td>{{main.server}}</td>
                <td>{{main.keterangan}}</td>
                <td class="py-3 flex w-4">
                    <a href="#">
                        <font-awesome-icon :icon="['fas','pencil-alt']" class="text-blue-500"/>
                    </a>
                    <a href="#" class="ml-4">
                        <font-awesome-icon :icon="['fas','trash']" class="text-red-500"/>
                    </a>
                </td>
            </tr>
        </tbody>   
    </table>
</div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'

export default {
    data(){
        return{
            cari:"",
            hasilMaintenance:[],
        }
    },
    props:['monitor','server','ups','baterai','rak','ac','cctv','network','apar','monitor','keyboard','mouse','nas','genset'],
    mounted(){
        axios.get('http://localhost:3000/server/inputmaintenance')
            .then(resp => {
              resp.data.forEach(maintenance => {
                //   console.log(maintenance.nama)
                  this.hasilMaintenance.push(maintenance)
              })
            })
            .catch(err => {
                console.error(err);
            });
    }
}
</script>

<style>

</style>