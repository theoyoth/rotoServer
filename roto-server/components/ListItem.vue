<template>
<div>
    <HeaderListItem :server="server.nama" v-if="server"/>
    <HeaderListItem :rak="rak.nama" v-if="rak"/>
    <HeaderListItem :ups="ups.nama" v-if="ups"/>
    <HeaderListItem :baterai="baterai.nama" v-if="baterai"/>
    <HeaderListItem :ac="ac.nama" v-if="ac"/>
    <HeaderListItem :cctv="cctv.nama" v-if="cctv"/>
    <HeaderListItem :network="network.nama" v-if="network"/>
    <HeaderListItem :apar="apar.nama" v-if="apar"/>
    <HeaderListItem :monitor="monitor.nama" v-if="monitor"/>
    <HeaderListItem :keyboard="keyboard.nama" v-if="keyboard"/>
    <HeaderListItem :mouse="mouse.nama" v-if="mouse"/>
    <HeaderListItem :nas="nas.nama" v-if="nas"/>
    <HeaderListItem :genset="genset.nama" v-if="genset"/>
    <!-- <div class="container mx-auto flex mt-8">
        <div class="flex">
            <input type="text" placeholder="cari" name="cari" v-model.lazy="caribarang" @keyup.enter="$fetch" class="rounded-l-lg p-2 outline-none">
            <button class="p-2 rounded-r-lg bg-gray-400 flex items-center justify-center" @click="clearSearch">
                <font-awesome-icon :icon="['fas','search']" class="text-black-500"/>
                <p>hapus</p>
            </button>
        </div>
        <select id="date" class="rounded-lg p-2 outline-none ml-8 cursor-pointer">
            <option value="hari">hari</option>
            <option value="bulan">bulan</option>
            <option value="tahun">tahun</option>
        </select>
    </div> -->
    <!-- <table class="table space-y-6 container mx-auto table-auto border-collapse border border-white mt-7">
        <thead class="bg-white text-sm has-tooltip">
            <span class="tooltip rounded shadow-lg p-1 bg-gray-700 text-white -mt-10 absolute left-2/4 transform -translate-x-2/4">semua detail barang</span> -->
            <!-- <tr class="text-xs"> 
                <th class="font-semibold py-3" v-show="server">Produk</th>
                <th class="font-semibold py-3" v-show="!rak && !ups && !baterai">Merek</th>
                <th class="font-semibold py-3" v-show="!rak && !baterai">Model</th>
                <th class="font-semibold" v-show="server||nas">Processor</th>
                <th class="font-semibold" v-show="server">memori</th>
                <th class="font-semibold" v-show="server">internal storage</th>
                <th class="font-semibold" v-show="server">network controller</th>
                <th class="font-semibold" v-show="server||nas">storage</th>
                <th class="font-semibold" v-show="ac || server">sumber daya listrik</th>    
                <th class="font-semibold" v-show="monitor||keyboard||mouse||genset||nas||network||apar">tipe</th>    
                <th class="font-semibold py-3" v-show="rak">tipe rak</th>
                <th class="font-semibold" v-show="rak">tipe pintu</th>
                <th class="font-semibold" v-show="rak">nama produk</th>
                <th class="font-semibold" v-show="rak || ac">dimensi</th>
                <th class="font-semibold" v-show="rak">berat</th>      
                <th class="font-semibold" v-show="ups">UPS critical load</th>
                <th class="font-semibold" v-show="ups">UPS critical temperature</th>
                <th class="font-semibold" v-show="ups">UPS critical capacity</th>
                <th class="font-semibold" v-show="ups">nomor serial</th>
                <th class="font-semibold" v-show="ups">nama sistem</th>
                <th class="font-semibold" v-show="ups">manufaktur</th>
                <th class="font-semibold" v-show="ups">voltage rating</th>
                <th class="font-semibold" v-show="ups">frequency rating</th>
                <th class="font-semibold" v-show="ups">battery voltage rating</th>
                <th class="font-semibold py-3" v-show="baterai">accu</th>
                <th class="font-semibold" v-show="baterai||network">kuantitas</th>
                <th class="font-semibold" v-show="baterai">voltage</th>
                <th class="font-semibold" v-show="ac">konsumsi daya</th>
                <th class="font-semibold" v-show="ac">kapasitas pendingin</th>
                <th class="font-semibold" v-show="network">kanal</th>
                <th class="font-semibold" v-show="nas">CPU</th>
                <th class="font-semibold" v-show="nas">RAID</th>
                <th class="font-semibold" v-show="!cctv">tahun</th>
                <th class="font-semibold" v-show="!rak">garansi</th>
                <th class="font-semibold">aksi</th>
            </tr> -->
        <!-- </thead>
        <tbody v-if="caribarang !== ''" class="text-center bg-white bg-opacity-40">
            <tr v-show="server" class="text-sm" v-for="(value,index) in cariserver" :key="index">
                <td>{{value.produk}}</td>
                <td>{{value.merek}}</td>
                <td>{{value.model}}</td>
                <td>{{value.processor}}</td>
                <td>{{value.memori}}</td>
                <td>{{value.internal_storage}}</td>
                <td>{{value.network_controller}}</td>
                <td>{{value.storage}}</td>
                <td>{{value.sumber_daya_listrik}}</td>
                <td>{{value.tahun}}</td>
                <td>{{value.garansi}}</td>
                <td class="py-3 flex w-3">
                    <NuxtLink :to="{name : 'master-update-updateid', params:{id : server.id} }">
                        <font-awesome-icon :icon="['fas','pencil-alt']" class="text-blue-500"/>
                    </NuxtLink>
                    <form @click="deleteData(value.id,nama.server)" class="ml-2">
                    <button type="submit">
                        <font-awesome-icon :icon="['fas','trash']" class="text-red-500"/>
                    </button> 
                    </form>
                </td>
            </tr>
             <tr v-show="rak" class="text-sm" v-for="(rak,index) in carirak" :key="index">
                <td class="py-3">{{rak.tipe_rak}}</td>
                <td>{{rak.tipe_pintu}}</td>
                <td>{{rak.nama_produk}}</td>
                <td>{{rak.dimensi}}</td>
                <td>{{rak.berat}}</td>
                <td>{{rak.tahun}}</td>
                <td class="py-3 flex w-3">
                    <a href="#">
                        <font-awesome-icon :icon="['fas','pencil-alt']" class="text-blue-500"/>
                    </a>
                    <form @click="deleteData(rak.id,nama.rak)" class="ml-4">
                    <button type="submit">
                        <font-awesome-icon :icon="['fas','trash']" class="text-red-500"/>
                    </button> 
                    </form>
                </td>
            </tr>
            <tr v-show="ups" class="text-sm" v-for="(value,index) in cariups" :key="index">
                <td>{{value.model}}</td>
                <td>{{value.ups_critical_load}}</td>
                <td>{{value.ups_critical_temperature}}</td>
                <td>{{value.ups_critical_capacity}}</td>
                <td>{{value.nomor_serial}}</td>
                <td>{{value.nama_sistem}}</td>
                <td>{{value.manufaktur}}</td>
                <td>{{value.peringkat_tegangan}}</td>
                <td>{{value.peringkat_frekuensi}}</td>
                <td>{{value.peringkat_tegangan_baterai}}</td>
                <td>{{value.tahun}}</td>
                <td>{{value.garansi}}</td>
                <td class="py-3 flex justify-evenly w-full">
                    <a href="#">
                        <font-awesome-icon :icon="['fas','pencil-alt']" class="text-blue-500"/>
                    </a>
                    <form @click="deleteData(value.id,nama.ups)" class="ml-4">
                    <button type="submit">
                        <font-awesome-icon :icon="['fas','trash']" class="text-red-500"/>
                    </button> 
                    </form>
                </td>
            </tr>
            <tr v-show="baterai" class="text-sm" v-for="(baterai,index) in caribaterai" :key="index">
                <td class="py-3">{{baterai.accu}}</td>
                <td>{{baterai.kuantitas}}</td>
                <td>{{baterai.voltage}}</td>
                <td>{{baterai.tahun}}</td>
                <td>{{baterai.garansi}}</td>
                <td class="py-3 flex justify-evenly">
                    <a href="#">
                        <font-awesome-icon :icon="['fas','pencil-alt']" class="text-blue-500"/>
                    </a>
                     <form @click="deleteData(baterai.id,nama.baterai)" class="ml-4">
                    <button type="submit">
                        <font-awesome-icon :icon="['fas','trash']" class="text-red-500"/>
                    </button> 
                    </form>
                </td>
            </tr>
             <tr v-show="ac" class="text-sm" v-for="(ac,index) in cariac" :key="index">
                <td class="py-3">{{ac.merek}}</td>
                <td>{{ac.model}}</td>
                <td>{{ac.sumber_daya_listrik}}</td>
                <td>{{ac.dimensi}}</td>
                <td>{{ac.konsumsi_daya}}</td>
                <td>{{ac.kapasitas_pendingin}}</td>
                <td>{{ac.tahun}}</td>
                <td>{{ac.garansi}}</td>
                <td class="py-3">
                    <a href="#">
                        <font-awesome-icon :icon="['fas','pencil-alt']" class="text-blue-500"/>
                    </a>
                    <form @click="deleteData(ac.id,nama.ac)" class="ml-4">
                    <button type="submit">
                        <font-awesome-icon :icon="['fas','trash']" class="text-red-500"/>
                    </button> 
                    </form>
                </td>
            </tr>
            <tr v-show="cctv" class="text-sm" v-for="(cctv,index) in caricctv" :key="index">
                <td>{{cctv.merek}}</td>
                <td>{{cctv.model}}</td>
                <td>{{cctv.garansi}}</td>
                <td class="py-3 flex">
                    <a href="#">
                        <font-awesome-icon :icon="['fas','pencil-alt']" class="text-blue-500"/>
                    </a>
                    <form @click="deleteData(cctv.id,nama.cctv)" class="ml-4">
                    <button type="submit">
                        <font-awesome-icon :icon="['fas','trash']" class="text-red-500"/>
                    </button> 
                    </form>
                </td>
            </tr>
            <tr v-show="network" class="text-sm" v-for="(network,index) in carinetwork" :key="index">
                <td>{{network.merek}}</td>
                <td>{{network.model}}</td>
                <td>{{network.tipe}}</td>
                <td>{{network.kuantitas}}</td>
                <td>{{network.kanal}}</td>
                <td>{{network.tahun}}</td>
                <td>{{network.garansi}}</td>
                <td class="py-3">
                    <a href="#">
                        <font-awesome-icon :icon="['fas','pencil-alt']" class="text-blue-500"/>
                    </a>
                    <form @click="deleteData(network.id,nama.network)" class="ml-4">
                    <button type="submit">
                        <font-awesome-icon :icon="['fas','trash']" class="text-red-500"/>
                    </button> 
                    </form>
                </td>
            </tr>
        </tbody> -->



        <!-- <tbody v-else class="text-center bg-white bg-opacity-40"> -->
            <!-- <tr v-show="server" class="text-sm" v-for="(server,index) in servers" :key="index">
                <td>{{server.produk}}</td>
                <td>{{server.merek}}</td>
                <td>{{server.model}}</td>
                <td>{{server.processor}}</td>
                <td>{{server.memori}}</td>
                <td>{{server.internal_storage}}</td>
                <td>{{server.network_controller}}</td>
                <td>{{server.storage}}</td>
                <td>{{server.sumber_daya_listrik}}</td>
                <td>{{server.tahun}}</td>
                <td>{{server.garansi}}</td>
                <td class="py-3 flex w-3">
                    <NuxtLink :to="{name : 'master-update-updateid', params:{id : server.id} }">
                        <font-awesome-icon :icon="['fas','pencil-alt']" class="text-blue-500"/>
                    </NuxtLink>
                    <form @click="deleteData(server.id,nama.server)" class="ml-2">
                    <button type="submit">
                        <font-awesome-icon :icon="['fas','trash']" class="text-red-500"/>
                    </button> 
                    </form>
                </td>
            </tr> -->
            <!-- <tr v-show="rak" class="text-sm" v-for="(rak,index) in raks" :key="index">
                <td class="py-3">{{rak.tipe_rak}}</td>
                <td>{{rak.tipe_pintu}}</td>
                <td>{{rak.nama_produk}}</td>
                <td>{{rak.dimensi}}</td>
                <td>{{rak.berat}}</td>
                <td>{{rak.tahun}}</td>
                <td class="py-3 flex justify-evenly w-full">
                    <a href="#">
                        <font-awesome-icon :icon="['fas','pencil-alt']" class="text-blue-500"/>
                    </a>
                    <form @click="deleteData(rak.id,nama.rak)" class="ml-4">
                    <button type="submit">
                        <font-awesome-icon :icon="['fas','trash']" class="text-red-500"/>
                    </button> 
                    </form>
                </td>
            </tr>
            <tr v-show="ups" class="text-sm" v-for="(ups,index) in upss" :key="index">
                <td>{{ups.model}}</td>
                <td>{{ups.ups_critical_load}}</td>
                <td>{{ups.ups_critical_temperature}}</td>
                <td>{{ups.ups_critical_capacity}}</td>
                <td>{{ups.nomor_serial}}</td>
                <td>{{ups.nama_sistem}}</td>
                <td>{{ups.manufaktur}}</td>
                <td>{{ups.peringkat_tegangan}}</td>
                <td>{{ups.peringkat_frekuensi}}</td>
                <td>{{ups.peringkat_tegangan_baterai}}</td>
                <td>{{ups.tahun}}</td>
                <td>{{ups.garansi}}</td>
                <td class="py-3 flex justify-evenly w-full">
                    <a href="#">
                        <font-awesome-icon :icon="['fas','pencil-alt']" class="text-blue-500"/>
                    </a>
                    <form @click="deleteData(ups.id,nama.ups)" class="ml-4">
                    <button type="submit">
                        <font-awesome-icon :icon="['fas','trash']" class="text-red-500"/>
                    </button> 
                    </form>
                </td>
            </tr>
            <tr v-show="baterai" class="text-sm" v-for="(baterai,index) in baterais" :key="index">
                <td class="py-3">{{baterai.accu}}</td>
                <td>{{baterai.kuantitas}}</td>
                <td>{{baterai.voltage}}</td>
                <td>{{baterai.tahun}}</td>
                <td>{{baterai.garansi}}</td>
                <td class="py-3 flex justify-evenly">
                    <a href="#">
                        <font-awesome-icon :icon="['fas','pencil-alt']" class="text-blue-500"/>
                    </a>
                     <form @click="deleteData(baterai.id,nama.baterai)" class="ml-4">
                    <button type="submit">
                        <font-awesome-icon :icon="['fas','trash']" class="text-red-500"/>
                    </button> 
                    </form>
                </td>
            </tr>
            <tr v-show="ac" class="text-sm" v-for="(ac,index) in acs" :key="index">
                <td class="py-3">{{ac.merek}}</td>
                <td>{{ac.model}}</td>
                <td>{{ac.sumber_daya_listrik}}</td>
                <td>{{ac.dimensi}}</td>
                <td>{{ac.konsumsi_daya}}</td>
                <td>{{ac.kapasitas_pendingin}}</td>
                <td>{{ac.tahun}}</td>
                <td>{{ac.garansi}}</td>
                <td class="py-3">
                    <a href="#">
                        <font-awesome-icon :icon="['fas','pencil-alt']" class="text-blue-500"/>
                    </a>
                    <form @click="deleteData(ac.id,nama.ac)" class="ml-4">
                    <button type="submit">
                        <font-awesome-icon :icon="['fas','trash']" class="text-red-500"/>
                    </button> 
                    </form>
                </td>
            </tr>
            <tr v-show="cctv" class="text-sm" v-for="(cctv,index) in cctvs" :key="index">
                <td>{{cctv.merek}}</td>
                <td>{{cctv.model}}</td>
                <td>{{cctv.garansi}}</td>
                <td class="py-3">
                    <a href="#">
                        <font-awesome-icon :icon="['fas','pencil-alt']" class="text-blue-500"/>
                    </a>
                    <form @click="deleteData(cctv.id,nama.cctv)" class="ml-4">
                    <button type="submit">
                        <font-awesome-icon :icon="['fas','trash']" class="text-red-500"/>
                    </button> 
                    </form>
                </td>
            </tr>
            <tr v-show="network" class="text-sm" v-for="(network,index) in networks" :key="index">
                <td>{{network.merek}}</td>
                <td>{{network.model}}</td>
                <td>{{network.tipe}}</td>
                <td>{{network.kuantitas}}</td>
                <td>{{network.kanal}}</td>
                <td>{{network.tahun}}</td>
                <td>{{network.garansi}}</td>
                <td class="py-3">
                    <a href="#">
                        <font-awesome-icon :icon="['fas','pencil-alt']" class="text-blue-500"/>
                    </a>
                    <form @click="deleteData(network.id,nama.network)" class="ml-4">
                    <button type="submit">
                        <font-awesome-icon :icon="['fas','trash']" class="text-red-500"/>
                    </button> 
                    </form>
                </td>
            </tr>
            <tr v-show="nas" class="text-sm" v-for="(nas,index) in nass" :key="index">
                <td>{{nas.merek}}</td>
                <td>{{nas.model}}</td>
                <td>{{nas.processor}}</td>
                <td>{{nas.storage}}</td>
                <td>{{nas.tipe}}</td>
                <td>{{nas.cpu}}</td>
                <td>{{nas.raid}}</td>
                <td>{{nas.tahun}}</td>
                <td>{{nas.garansi}}</td>
                <td class="py-3">
                    <a href="#">
                        <font-awesome-icon :icon="['fas','pencil-alt']" class="text-blue-500"/>
                    </a>
                    <form @click="deleteData(nas.id,nama.nas)" class="ml-4">
                    <button type="submit">
                        <font-awesome-icon :icon="['fas','trash']" class="text-red-500"/>
                    </button> 
                    </form>
                </td>
            </tr>
            <tr v-show="apar" class="text-sm" v-for="(apar,index) in apars" :key="index">
                <td class="py-3">{{apar.merek}}</td>
                <td>{{apar.model}}</td>
                <td>{{apar.tipe}}</td>
                <td>{{apar.tahun}}</td>
                <td>{{apar.garansi}}</td>
                <td class="py-3">
                    <a href="#">
                        <font-awesome-icon :icon="['fas','pencil-alt']" class="text-blue-500"/>
                    </a>
                     <form @click="deleteData(apar.id,nama.apar)" class="ml-4">
                    <button type="submit">
                        <font-awesome-icon :icon="['fas','trash']" class="text-red-500"/>
                    </button> 
                    </form>
                </td>
            </tr>
            <tr v-show="monitor" class="text-sm" v-for="(monitor,index) in monitors" :key="index">
                <td class="py-3">{{monitor.merek}}</td>
                <td>{{monitor.model}}</td>
                <td>{{monitor.tipe}}</td>
                <td>{{monitor.tahun}}</td>
                <td>{{monitor.garansi}}</td>
                <td class="py-3">
                    <a href="#">
                        <font-awesome-icon :icon="['fas','pencil-alt']" class="text-blue-500"/>
                    </a>
                     <form @click="deleteData(monitor.id,nama.monitor)" class="ml-4">
                    <button type="submit">
                        <font-awesome-icon :icon="['fas','trash']" class="text-red-500"/>
                    </button> 
                    </form>
                </td>
            </tr>
            <tr v-show="keyboard" class="text-sm" v-for="(keyboard,index) in keyboards" :key="index">
                <td class="py-3">{{keyboard.merek}}</td>
                <td>{{keyboard.model}}</td>
                <td>{{keyboard.tipe}}</td>
                <td>{{keyboard.tahun}}</td>
                <td>{{keyboard.garansi}}</td>
                <td class="py-3">
                    <a href="#">
                        <font-awesome-icon :icon="['fas','pencil-alt']" class="text-blue-500"/>
                    </a>
                     <form @click="deleteData(keyboard.id,nama.keyboard)" class="ml-4">
                    <button type="submit">
                        <font-awesome-icon :icon="['fas','trash']" class="text-red-500"/>
                    </button> 
                    </form>
                </td>
            </tr>
            <tr v-show="mouse" class="text-sm" v-for="(mouse,index) in mouses" :key="index">
                <td class="py-3">{{mouse.merek}}</td>
                <td>{{mouse.model}}</td>
                <td>{{mouse.tipe}}</td>
                <td>{{mouse.tahun}}</td>
                <td>{{mouse.garansi}}</td>
                <td class="py-3">
                    <a href="#">
                        <font-awesome-icon :icon="['fas','pencil-alt']" class="text-blue-500"/>
                    </a>
                     <form @click="deleteData(mouse.id,nama.mouse)" class="ml-4">
                    <button type="submit">
                        <font-awesome-icon :icon="['fas','trash']" class="text-red-500"/>
                    </button> 
                    </form>
                </td>
            </tr>
            <tr v-show="genset" class="text-sm" v-for="(genset,index) in gensets" :key="index">
                <td class="py-3">{{genset.merek}}</td>
                <td>{{genset.model}}</td>
                <td>{{genset.tipe}}</td>
                <td>{{genset.tahun}}</td>
                <td>{{genset.garansi}}</td>
                <td class="py-3">
                    <a href="#">
                        <font-awesome-icon :icon="['fas','pencil-alt']" class="text-blue-500"/>
                    </a>
                     <form @click="deleteData(genset.id,nama.genset)" class="ml-4">
                    <button type="submit">
                        <font-awesome-icon :icon="['fas','trash']" class="text-red-500"/>
                    </button> 
                    </form>
                </td>
            </tr>
        </tbody>   

        
    </table> -->
</div>
</template>

<script>
import axios from 'axios'
export default {
    props:['monitor','server','ups','baterai','rak','ac','cctv','network','apar','monitor','keyboard','mouse','nas','genset','servers','raks','upss','baterais','acs','cctvs','networks','apars','monitors','mouses','keyboards','nass','gensets'],

    data(){
        return{
            caribarang:"",
            cariserver:[],
            carirak:[],
            cariups:[],
            caribaterai: [],
            cariac: [],
            caricctv: [],
            carinetwork: [],
            cariapar: [],
            carimonitor: [],
            carikeyboard: [],
            carimouse: [],
            carinas: [],
            carigenset: [],
            nama:{
                server : 'master_server',
                rak : 'master_rak',
                ups : 'master_ups',
                ac : 'master_ac',
                baterai : 'master_baterai',
                cctv : 'master_cctv',
                network : 'master_network',
                nas : 'master_nas',
                apar : 'master_apar',
                monitor : 'master_monitor',
                mouse : 'master_mouse',
                keyboard : 'master_keyboard',
                genset : 'master_genset',
            },
        }
    },
    // mounted(){
    //     const res = axios.get('http://localhost:3000/server/cari')
    //     res.forEach(value =>{
    //         this.values.push(value)
    //     })
    // },

    async fetch(){
        if(this.caribarang !== ''){
            await this.caribarangserver()
            await this.caribarangrak()
            await this.caribarangups()
            await this.caribarangbaterai()
            await this.caribarangac()
            await this.caribarangcctv()
            await this.caribarangnetwork()
            await this.caribarangapar()
            await this.caribarangmonitor()
            await this.caribarangkeyboard()
            await this.caribarangmouse()
            await this.caribarangnas()
            await this.caribaranggenset()
        return
        }
    },
    methods:{
        deleteData(id,nama){
            axios.post(`/server/master/delete/${id}/${nama}`)
        },
        async caribarangserver(){
            const res = await axios.get(`http://localhost:3000/server/cariserver?cari=${this.caribarang}`)
            res.data.forEach(val =>{
                this.cariserver.push(val)
            })
        },
        clearSearch(){
            this.caribarang = ''
            this.values = []
        },
        async caribarangrak(){
            const res = await axios.get(`http://localhost:3000/server/carirak?cari=${this.caribarang}`)
            res.data.forEach(val =>{
                this.carirak.push(val)
            })
        },
        async caribarangups(){
            const res = await axios.get(`http://localhost:3000/server/cariups?cari=${this.caribarang}`)
            res.data.forEach(val =>{
                this.cariups.push(val)
            })
        },
        async caribarangbaterai(){
            const res = await axios.get(`http://localhost:3000/server/caribaterai?cari=${this.caribarang}`)
            res.data.forEach(val =>{
                this.caribaterai.push(val)
            })
        },
        async caribarangcctv(){
            const res = await axios.get(`http://localhost:3000/server/cariac?cari=${this.caribarang}`)
            res.data.forEach(val =>{
                this.caricctv.push(val)
            })
        },
        async caribarangac(){
            const res = await axios.get(`http://localhost:3000/server/cariac?cari=${this.caribarang}`)
            res.data.forEach(val =>{
                this.cariac.push(val)
            })
        },
        async caribarangnetwork(){
            const res = await axios.get(`http://localhost:3000/server/carinetwork?cari=${this.caribarang}`)
            res.data.forEach(val =>{
                this.carinetwork.push(val)
            })
        },
        async caribarangapar(){
            const res = await axios.get(`http://localhost:3000/server/cariapar?cari=${this.caribarang}`)
            res.data.forEach(val =>{
                this.cariapar.push(val)
            })
        },
        async caribarangmonitor(){
            const res = await axios.get(`http://localhost:3000/server/carimonitor?cari=${this.caribarang}`)
            res.data.forEach(val =>{
                this.carimonitor.push(val)
            })
        },
        async caribarangkeyboard(){
            const res = await axios.get(`http://localhost:3000/server/carikeyboard?cari=${this.caribarang}`)
            res.data.forEach(val =>{
                this.carikeyboard.push(val)
            })
        },
        async caribarangmouse(){
            const res = await axios.get(`http://localhost:3000/server/carimouse?cari=${this.caribarang}`)
            res.data.forEach(val =>{
                this.carimouse.push(val)
            })
        },
        async caribarangnas(){
            const res = await axios.get(`http://localhost:3000/server/carinas?cari=${this.caribarang}`)
            res.data.forEach(val =>{
                this.carinas.push(val)
            })
        },
        async caribaranggenset(){
            const res = await axios.get(`http://localhost:3000/server/carigenset?cari=${this.caribarang}`)
            res.data.forEach(val =>{
                this.carigenset.push(val)
            })
        },
    },
}
</script>
