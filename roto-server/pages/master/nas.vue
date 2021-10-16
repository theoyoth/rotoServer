<template>
<div class="bg-hero min-h-screen">
    <ListItem :nas="master"/>
    <!-- <HeaderListItem/>
    <div class="container mx-auto flex mt-8 ">
        <form class="flex" method="post">
            <input type="search" placeholder="cari" name="cari" v-model="cari" class="rounded-l-lg p-2 outline-none">
            <button class="p-2 rounded-r-lg bg-white flex items-center justify-center">
                <font-awesome-icon :icon="['fas','search']" class="text-black-500"/>
            </button>
        </form>
        <select id="date" class="rounded-lg p-2 outline-none ml-8">
            <option value="hari">hari</option>
            <option value="bulan">bulan</option>
            <option value="tahun">tahun</option>
        </select>
    </div>
    <table class="table space-y-6 container mx-auto table-auto border-collapse border border-white mt-7">
        <thead class="bg-white text-sm">
            <tr class=""> 
                <th class="font-semibold py-3">model</th>
                <th class="font-semibold" >merek</th>
                <th class="font-semibold" >tipe</th>
                <th class="font-semibold" >storage</th>
                <th class="font-semibold" >processor</th>
                <th class="font-semibold" >CPU</th>
                <th class="font-semibold" >RAID</th>
                <th class="font-semibold">tahun</th>
                <th class="font-semibold">garansi</th> 
                <th class="font-semibold">aksi</th> 
                
            </tr>
        </thead>
        <tbody class="text-center bg-white bg-opacity-40">
            <tr>
                <td>Intro to CSS</td>
                <td>Adam</td>
                <td>858</td>
                <td>858</td>
                <td>858</td>
                <td>858</td>
                <td>858</td>
                <td>858</td>
                <td>858</td>
                <td class="py-3 flex justify-around">
                    <form action="" method="post">
                    <a href="#">
                        <font-awesome-icon :icon="['fas','pencil-alt']" class="text-blue-500"/>
                    </a>
                    </form>
                    <form action="" method="post">
                    <a href="#" class="ml-4">
                        <font-awesome-icon :icon="['fas','trash']" class="text-red-500"/>
                    </a>
                    </form>
                </td>
            </tr>
        </tbody>   
    </table> -->
</div>
</template>
<script>
export default {
    data(){
        return{
            cari:"",
            master:{
                nama : "inputNas",
                merek : "merek",
                model : "model",
                tipe : "tipe",
                storage : "storage",
                processor : "processor",
                cpu : "CPU",
                raid : "RAID",
                tahun : "tahun",
                garansi : "garansi",
            }
        }
    }

}
</script>

<style>

</style>