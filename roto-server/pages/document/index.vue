<template>
<div class="bg-hero h-screen">
    <HeaderListItem dokumen="dokumen"/>
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
    <table class="table space-y-6 w-1/2 container mx-auto table-auto border-collapse border border-white mt-7">
        <thead class="bg-white text-sm">
            <tr class="text-sm"> 
                <th class="font-semibold py-3">dokumen</th>
                <th class="font-semibold" >aksi</th>
            </tr>
        </thead>
        <tbody class="text-center bg-white bg-opacity-40">
            <tr class="text-sm">
                <td>SOP</td>
                <td class="py-3">
                    <a href="#">
                        <font-awesome-icon :icon="['fas','eye']" class="text-blue-500"/>
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
}
</script>

<style>

</style>