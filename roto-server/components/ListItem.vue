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
    <div class="container mx-auto flex mt-8 ">
        <form class="flex" method="post">
            <input type="search" placeholder="cari" name="cari" v-model="cari" class="rounded-l-lg p-2 outline-none">
            <button class="p-2 rounded-r-lg bg-white flex items-center justify-center">
                <font-awesome-icon :icon="['fas','search']" class="text-black-500"/>
            </button>
        </form>
        <select id="date" class="rounded-lg p-2 outline-none ml-8 cursor-pointer">
            <option value="hari">hari</option>
            <option value="bulan">bulan</option>
            <option value="tahun">tahun</option>
        </select>
    </div>
    <table class="table space-y-6 container mx-auto table-auto border-collapse border border-white mt-7">
        <thead class="bg-white text-sm">
            <tr class="text-xs"> 
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
            </tr>
        </thead>
        <tbody class="text-center bg-white bg-opacity-40">
            <tr v-show="server" class="text-sm">
                <td>Intro to CSS</td>
                <td>Adam</td>
                <td>858</td>
                <td>858</td>
                <td>858</td>
                <td>858</td>
                <td>858</td>
                <td>858</td>
                <td>858</td>
                <td>858</td>
                <td>858</td>
                <td class="py-3">
                    <a href="#">
                        <font-awesome-icon :icon="['fas','pencil-alt']" class="text-blue-500"/>
                    </a>
                    <a href="#" class="ml-4">
                        <font-awesome-icon :icon="['fas','trash']" class="text-red-500"/>
                    </a>
                </td>
            </tr>
            <tr v-show="rak" class="text-sm">
                <td class="py-3">858</td>
                <td>858</td>
                <td>858</td>
                <td>858</td>
                <td>858</td>
                <td>858</td>
                <td class="py-3">
                    <a href="#">
                        <font-awesome-icon :icon="['fas','pencil-alt']" class="text-blue-500"/>
                    </a>
                    <a href="#" class="ml-4">
                        <font-awesome-icon :icon="['fas','trash']" class="text-red-500"/>
                    </a>
                </td>
            </tr>
            <tr v-show="ups" class="text-sm">
                <td>858</td>
                <td>858</td>
                <td>858</td>
                <td>858</td>
                <td>858</td>
                <td>858</td>
                <td>858</td>
                <td>858</td>
                <td>858</td>
                <td>858</td>
                <td>858</td>
                <td>858</td>
                <td class="py-3">
                    <a href="#">
                        <font-awesome-icon :icon="['fas','pencil-alt']" class="text-blue-500"/>
                    </a>
                    <a href="#" class="ml-4">
                        <font-awesome-icon :icon="['fas','trash']" class="text-red-500"/>
                    </a>
                </td>
            </tr>
            <tr v-show="baterai" class="text-sm">
                <td class="py-3">858</td>
                <td>858</td>
                <td>858</td>
                <td>858</td>
                <td>858</td>
                <td class="py-3">
                    <a href="#">
                        <font-awesome-icon :icon="['fas','pencil-alt']" class="text-blue-500"/>
                    </a>
                    <a href="#" class="ml-4">
                        <font-awesome-icon :icon="['fas','trash']" class="text-red-500"/>
                    </a>
                </td>
            </tr>
            <tr v-show="ac" class="text-sm">
                <td class="py-3">858</td>
                <td>858</td>
                <td>858</td>
                <td>858</td>
                <td>858</td>
                <td>858</td>
                <td>858</td>
                <td>858</td>
                <td class="py-3">
                    <a href="#">
                        <font-awesome-icon :icon="['fas','pencil-alt']" class="text-blue-500"/>
                    </a>
                    <a href="#" class="ml-4">
                        <font-awesome-icon :icon="['fas','trash']" class="text-red-500"/>
                    </a>
                </td>
            </tr>
            <tr v-show="network" class="text-sm">
                <td>858</td>
                <td>858</td>
                <td>858</td>
                <td>858</td>
                <td>858</td>
                <td>858</td>
                <td>858</td>
                <td class="py-3">
                    <a href="#">
                        <font-awesome-icon :icon="['fas','pencil-alt']" class="text-blue-500"/>
                    </a>
                    <a href="#" class="ml-4">
                        <font-awesome-icon :icon="['fas','trash']" class="text-red-500"/>
                    </a>
                </td>
            </tr>
            <tr v-show="nas" class="text-sm">
                <td>858</td>
                <td>858</td>
                <td>858</td>
                <td>858</td>
                <td>858</td>
                <td>858</td>
                <td>858</td>
                <td>858</td>
                <td>858</td>
                <td class="py-3">
                    <a href="#">
                        <font-awesome-icon :icon="['fas','pencil-alt']" class="text-blue-500"/>
                    </a>
                    <a href="#" class="ml-4">
                        <font-awesome-icon :icon="['fas','trash']" class="text-red-500"/>
                    </a>
                </td>
            </tr>
            <tr v-show="apar" class="text-sm">
                <td class="py-3">858</td>
                <td>858</td>
                <td>858</td>
                <td>858</td>
                <td>858</td>
                <td class="py-3">
                    <a href="#">
                        <font-awesome-icon :icon="['fas','pencil-alt']" class="text-blue-500"/>
                    </a>
                    <a href="#" class="ml-4">
                        <font-awesome-icon :icon="['fas','trash']" class="text-red-500"/>
                    </a>
                </td>
            </tr>
            <tr v-show="monitor" class="text-sm">
                <td class="py-3">858</td>
                <td>858</td>
                <td>858</td>
                <td>858</td>
                <td>858</td>
                <td class="py-3">
                    <a href="#">
                        <font-awesome-icon :icon="['fas','pencil-alt']" class="text-blue-500"/>
                    </a>
                    <a href="#" class="ml-4">
                        <font-awesome-icon :icon="['fas','trash']" class="text-red-500"/>
                    </a>
                </td>
            </tr>
            <tr v-show="keyboard" class="text-sm">
                <td class="py-3">858</td>
                <td>858</td>
                <td>858</td>
                <td>858</td>
                <td>858</td>
                <td class="py-3">
                    <a href="#">
                        <font-awesome-icon :icon="['fas','pencil-alt']" class="text-blue-500"/>
                    </a>
                    <a href="#" class="ml-4">
                        <font-awesome-icon :icon="['fas','trash']" class="text-red-500"/>
                    </a>
                </td>
            </tr>
            <tr v-show="mouse" class="text-sm">
                <td class="py-3">858</td>
                <td>858</td>
                <td>858</td>
                <td>858</td>
                <td>858</td>
                <td class="py-3">
                    <a href="#">
                        <font-awesome-icon :icon="['fas','pencil-alt']" class="text-blue-500"/>
                    </a>
                    <a href="#" class="ml-4">
                        <font-awesome-icon :icon="['fas','trash']" class="text-red-500"/>
                    </a>
                </td>
            </tr>
            <tr v-show="genset" class="text-sm">
                <td class="py-3">858</td>
                <td>858</td>
                <td>858</td>
                <td>858</td>
                <td>858</td>
                <td class="py-3">
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
export default {
    props:['monitor','server','ups','baterai','rak','ac','cctv','network','apar','monitor','keyboard','mouse','nas','genset']
}
</script>

<style>

</style>