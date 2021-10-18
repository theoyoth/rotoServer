<template>
    <div class="container mx-auto py-5">
        <header class="flex justify-between">

            <nuxt-link to="/master" class="flex rounded-md justify-between items-center" v-show="monitor || server || ups || baterai || rak || ac || cctv ||network || apar||monitor||keyboard||mouse||nas||genset">
                <div class="bg-blue-400 w-8 h-8 rounded-full flex items-center justify-center">
                    <font-awesome-icon :icon="['fas','arrow-left']" class="text-white" />
                </div>
                <p class="font-medium text-xl ml-2">Kembali</p>
            </nuxt-link>
        
            <div @click="$router.back()" id="kembali" v-show="maintenance || ambilbarang || gantibarang || tambahbarang || dokumen">
            <nuxt-link to="" class="flex rounded-md justify-between items-center ">
                <div class="bg-blue-400 w-8 h-8 rounded-full flex items-center justify-center">
                    <font-awesome-icon :icon="['fas','arrow-left']" class="text-white" />
                </div>
                <p class="font-medium text-xl ml-2">Kembali</p>
            </nuxt-link>
            </div>
            
            <div @click="showGuide" v-show="maintenance || ambilbarang ||tambahbarang || gantibarang" class="w-8 h-8 bg-white rounded-full flex items-center justify-center transform hover:scale-95 transition ease-in duration-200 cursor-pointer hover:shadow-lg">
                <font-awesome-icon :icon="['fas','question']" class="text-black" />
            </div>
            
            <nuxt-link v-if="server" :to="'/master/input/'+server" class="logout-btn flex rounded-md items-center">
                <p class="font-medium text-xl mr-2">input</p>
                <div class="bg-blue-400 w-8 h-8 rounded-full flex items-center justify-center">
                    <font-awesome-icon :icon="['fas','plus']" class="text-white" />
                </div>
            </nuxt-link>
            <nuxt-link v-if="rak" :to="'/master/input/'+rak" class="logout-btn flex rounded-md items-center">
                <p class="font-medium text-xl mr-2">input</p>
                <div class="bg-blue-400 w-8 h-8 rounded-full flex items-center justify-center">
                    <font-awesome-icon :icon="['fas','plus']" class="text-white" />
                </div>
            </nuxt-link>
            <nuxt-link v-if="ups" :to="'/master/input/'+ups" class="logout-btn flex rounded-md items-center">
                <p class="font-medium text-xl mr-2">input</p>
                <div class="bg-blue-400 w-8 h-8 rounded-full flex items-center justify-center">
                    <font-awesome-icon :icon="['fas','plus']" class="text-white" />
                </div>
            </nuxt-link>
            <nuxt-link v-if="baterai" :to="'/master/input/'+baterai" class="logout-btn flex rounded-md items-center">
                <p class="font-medium text-xl mr-2">input</p>
                <div class="bg-blue-400 w-8 h-8 rounded-full flex items-center justify-center">
                    <font-awesome-icon :icon="['fas','plus']" class="text-white" />
                </div>
            </nuxt-link>
            <nuxt-link v-if="ac" :to="'/master/input/'+ac" class="logout-btn flex rounded-md items-center">
                <p class="font-medium text-xl mr-2">input</p>
                <div class="bg-blue-400 w-8 h-8 rounded-full flex items-center justify-center">
                    <font-awesome-icon :icon="['fas','plus']" class="text-white" />
                </div>
            </nuxt-link>
            <nuxt-link v-if="cctv" :to="'/master/input/'+cctv" class="logout-btn flex rounded-md items-center">
                <p class="font-medium text-xl mr-2">input</p>
                <div class="bg-blue-400 w-8 h-8 rounded-full flex items-center justify-center">
                    <font-awesome-icon :icon="['fas','plus']" class="text-white" />
                </div>
            </nuxt-link>
            <nuxt-link v-if="network" :to="'/master/input/'+network" class="logout-btn flex rounded-md items-center">
                <p class="font-medium text-xl mr-2">input</p>
                <div class="bg-blue-400 w-8 h-8 rounded-full flex items-center justify-center">
                    <font-awesome-icon :icon="['fas','plus']" class="text-white" />
                </div>
            </nuxt-link>
            <nuxt-link v-if="apar" :to="'/master/input/'+apar" class="logout-btn flex rounded-md items-center">
                <p class="font-medium text-xl mr-2">input</p>
                <div class="bg-blue-400 w-8 h-8 rounded-full flex items-center justify-center">
                    <font-awesome-icon :icon="['fas','plus']" class="text-white" />
                </div>
            </nuxt-link>
            <nuxt-link v-if="monitor" :to="'/master/input/'+monitor" class="logout-btn flex rounded-md items-center">
                <p class="font-medium text-xl mr-2">input</p>
                <div class="bg-blue-400 w-8 h-8 rounded-full flex items-center justify-center">
                    <font-awesome-icon :icon="['fas','plus']" class="text-white" />
                </div>
            </nuxt-link>
            <nuxt-link v-if="keyboard" :to="'/master/input/'+keyboard" class="logout-btn flex rounded-md items-center">
                <p class="font-medium text-xl mr-2">input</p>
                <div class="bg-blue-400 w-8 h-8 rounded-full flex items-center justify-center">
                    <font-awesome-icon :icon="['fas','plus']" class="text-white" />
                </div>
            </nuxt-link>
            <nuxt-link v-if="mouse" :to="'/master/input/'+mouse" class="logout-btn flex rounded-md items-center">
                <p class="font-medium text-xl mr-2">input</p>
                <div class="bg-blue-400 w-8 h-8 rounded-full flex items-center justify-center">
                    <font-awesome-icon :icon="['fas','plus']" class="text-white" />
                </div>
            </nuxt-link>
            <nuxt-link v-if="nas" :to="'/master/input/'+nas" class="logout-btn flex rounded-md items-center">
                <p class="font-medium text-xl mr-2">input</p>
                <div class="bg-blue-400 w-8 h-8 rounded-full flex items-center justify-center">
                    <font-awesome-icon :icon="['fas','plus']" class="text-white" />
                </div>
            </nuxt-link>
            <nuxt-link v-if="genset" :to="'/master/input/'+genset" class="logout-btn flex rounded-md items-center">
                <p class="font-medium text-xl mr-2">input</p>
                <div class="bg-blue-400 w-8 h-8 rounded-full flex items-center justify-center">
                    <font-awesome-icon :icon="['fas','plus']" class="text-white" />
                </div>
            </nuxt-link>
            <nuxt-link v-show="maintenance" to="/maintenance/inputmaintenance" class="logout-btn flex rounded-md  items-center" id="inputmaintenance">
                <p class="font-medium text-xl mr-2">input</p>
                <div class="bg-blue-400 w-8 h-8 rounded-full flex items-center justify-center">
                    <font-awesome-icon :icon="['fas','plus']" class="text-white" />
                </div>
            </nuxt-link>
            <nuxt-link v-show="ambilbarang" to="/inout/ambilbarang/inputambilbarang" class="logout-btn flex rounded-md  items-center" id="inputambilbarang">
                <p class="font-medium text-xl mr-2">input</p>
                <div class="bg-blue-400 w-8 h-8 rounded-full flex items-center justify-center">
                    <font-awesome-icon :icon="['fas','plus']" class="text-white" />
                </div>
            </nuxt-link>
            <nuxt-link v-show="gantibarang" to="/inout/gantibarang/inputgantibarang" class="logout-btn flex rounded-md  items-center" id="inputgantibarang">
                <p class="font-medium text-xl mr-2">input</p>
                <div class="bg-blue-400 w-8 h-8 rounded-full flex items-center justify-center">
                    <font-awesome-icon :icon="['fas','plus']" class="text-white" />
                </div>
            </nuxt-link>
            <nuxt-link v-show="tambahbarang" to="/inout/tambahbarang/inputtambahbarang" class="logout-btn flex rounded-md  items-center" id="inputtambahbarang">
                <p class="font-medium text-xl mr-2">input</p>
                <div class="bg-blue-400 w-8 h-8 rounded-full flex items-center justify-center">
                    <font-awesome-icon :icon="['fas','plus']" class="text-white" />
                </div>
            </nuxt-link>
            <nuxt-link v-show="dokumen" to="/document/inputdokumen" class="logout-btn flex rounded-md  items-center">
                <p class="font-medium text-xl mr-2">input</p>
                <div class="bg-blue-400 w-8 h-8 rounded-full flex items-center justify-center">
                    <font-awesome-icon :icon="['fas','plus']" class="text-white" />
                </div>
            </nuxt-link>

        </header>
        <v-tour v-if="maintenance" name="myTour" :steps="stepsmaintenance"></v-tour>
        <v-tour v-if="tambahbarang" name="myTour" :steps="stepstambahbarang"></v-tour>
        <v-tour v-if="ambilbarang" name="myTour" :steps="stepsambilbarang"></v-tour>
        <v-tour v-if="gantibarang" name="myTour" :steps="stepsgantibarang"></v-tour>
    </div>

</template>

<script>
export default {
    props:['monitor','server','ups','baterai','rak','ac','cctv','network','apar','monitor','keyboard','mouse','nas','genset','maintenance','ambilbarang','gantibarang','tambahbarang','dokumen'],
    
    data(){
        return{
            stepsmaintenance:[
                {
                    target : '#inputmaintenance',
                    header:{
                        title:'input maintenance',
                    },
                    content: 'input maintenance baru',
                    params:{
                        placement: 'bottom'
                    }
                },
                {
                    target : '#formcari',
                    header:{
                        title:'cari',
                    },
                    content: 'temukan yang di cari'
                },
                {
                    target : '#date',
                    header:{
                        title:'filter',
                    },
                    content: 'pilih filter berdasarkan waktu'
                },
                {
                    target : '#listitem',
                    header:{
                        title:'daftar maintenance',
                    },
                    content: 'semua daftar hasil maintenance',
                    params:{
                        placement:'bottom',
                    }
                },
            ]  ,
            stepstambahbarang:[
                {
                    target : '#formcari',
                    header:{
                        title:'cari',
                    },
                    content: 'temukan yang di cari'
                },
                {
                    target : '#date',
                    header:{
                        title:'filter',
                    },
                    content: 'pilih filter berdasarkan waktu'
                },
                {
                    target : '#listitem',
                    header:{
                        title:'daftar tambah barang',
                    },
                content: 'semua daftar hasil tambah barang',
                    params:{
                        placement:'bottom',
                    }
                },
                {
                    target : '#inputtambahbarang',
                    header:{
                        title:'input tambah barang',
                    },
                    content: 'input tambah barang baru',
                    params:{
                        placement:'bottom',
                    }
                },
            ], 
            stepsambilbarang:[
                {
                    target : '#formcari',
                    header:{
                        title:'cari',
                    },
                    content: 'temukan yang di cari'
                },
                {
                    target : '#date',
                    header:{
                        title:'filter',
                    },
                    content: 'pilih filter berdasarkan waktu'
                },
                {
                    target : '#listitem',
                    header:{
                        title:'daftar ambil barang',
                    },
                    content: 'semua daftar hasil ambil barang',
                    params:{
                        placement:'bottom',
                    }
                },
                {
                    target : '#inputambilbarang',
                    header:{
                        title:'input ambil barang',
                    },
                    content: 'input ambil barang baru',
                    params:{
                        placement:'bottom',
                    }
                },
            ], 
            stepsgantibarang:[
                {
                    target : '#formcari',
                    header:{
                        title:'cari',
                    },
                    content: 'temukan yang di cari'
                },
                {
                    target : '#date',
                    header:{
                        title:'filter',
                    },
                    content: 'pilih filter berdasarkan waktu'
                },
                {
                    target : '#listitem',
                    header:{
                        title:'daftar ganti barang',
                    },
                    content: 'semua daftar hasil ganti barang',
                    params:{
                        placement:'bottom',
                    }
                },
                {
                    target : '#inputgantibarang',
                    header:{
                        title:'input ganti barang',
                    },
                    content: 'input ganti barang baru',
                    params:{
                        placement:'bottom',
                    }
                },
            ], 
        }
    },
    methods:{
        showGuide(){
                this.$tours['myTour'].start()
        }
    },
}
</script>

<style>

</style>