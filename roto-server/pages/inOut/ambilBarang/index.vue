<template>
<div class="bg-gray-300 min-h-screen w-widthContent ml-auto overflow-x-hidden">
    <!-- <HeaderListItem ambilbarang="ambilbarang"/> -->
    <Navbar/>
    <section class="bg-gray-100 min-h-screen w-widthContentField m-auto mt-7 p-4">
        <p class="text-center text-lg text-gray-700 font-semibold">Halaman ambil barang</p>
        <div class="flex justify-between mt-8">
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
            <NuxtLink to="/inout/ambilbarang"
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
                    <th class="font-semibold py-3">tanggal</th>
                    <th class="font-semibold" >nama</th>
                    <th class="font-semibold" >nama barang</th>
                    <th class="font-semibold" >kuantitas</th>
                    <th class="font-semibold" >kepentingan</th>
                    <th class="font-semibold" >penanggung jawab</th>
                    <th class="font-semibold w-20" >aksi</th>
                </tr>
            </thead>
            <tbody class="text-center bg-white bg-opacity-40">
                <tr class="text-sm">
                    <td>Intro to CSS</td>
                    <td>Adam</td>
                    <td>858</td>
                    <td>858</td>
                    <td>858</td>
                    <td>858</td>
                    <td class="py-3 flex justify-evenly w-full bg-gray-700">
                        <a href="#">
                            <font-awesome-icon :icon="['fas','pencil-alt']" class="text-yellow-500"/>
                        </a>
                        <a href="#" class="ml-4">
                            <font-awesome-icon :icon="['fas','trash']" class="text-yellow-500"/>
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
    middleware:"isAuthenticated",
    data(){
        return{
            caribarang:'',
        }
    }
}
</script>

<style>

</style>