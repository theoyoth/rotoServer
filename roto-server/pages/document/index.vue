<template>
<div class="bg-gray-300 min-h-screen w-widthContent ml-auto overflow-x-hidden">
    <!-- <HeaderListItem dokumen="dokumen"/> -->
    <Navbar/>
    <section class="bg-gray-100 min-h-screen w-widthContentField m-auto mt-7 p-4">
        <p class="text-center text-lg text-gray-700 font-semibold">Halaman dokumen</p>
        <div class="flex justify-between mt-8 ">
            <div class="flex">
                <input
                    type="text"
                    placeholder="cari"
                    name="cari"
                    v-model.lazy="caribarang"
                    class="rounded-l-lg p-2 w-52 outline-none bg-gray-200" @keyup.enter="caribarangserver"
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
                    @click="caribarangserver"
                >
                    <font-awesome-icon :icon="['fas', 'search']" class="text-yellow-500" />
                </button>
            </div>
            <!-- <select id="date" class="rounded-lg p-2 outline-none ml-8">
                <option value="hari">hari</option>
                <option value="bulan">bulan</option>
                <option value="tahun">tahun</option>
            </select> -->
            <NuxtLink to="/dokumen"
            class="flex items-center justify-between rounded-md px-3 w-20 bg-gray-700 hover:shadow-lg transition duraiton-300">
            <p class="font-medium text-sm text-gray-200">input</p>
            <div>
                <font-awesome-icon :icon="['fas', 'plus']" class="text-gray-200" />
            </div>
            </NuxtLink>
        </div>
        <table class="table space-y-6 w-1/2 container mx-auto table-auto border-collapse mt-7">
            <thead class="bg-gray-700 text-gray-200 text-sm">
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
    </section>
</div>
</template>

<script>
export default {
}
</script>

<style>

</style>