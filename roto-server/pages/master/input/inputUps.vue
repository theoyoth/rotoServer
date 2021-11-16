<template>
<div class="bg-gray-200 min-h-screen w-widthContent ml-auto">
    <!-- <InputHeader item="ups"/> -->
    <Navbar/>
    <section class="bg-white min-h-screen w-widthContentField m-auto mt-7 p-4 ">
         <NuxtLink to="/master/ups"
          class="flex items-center justify-between rounded-md w-28 px-4 py-2 bg-gray-700">
          <div>
            <font-awesome-icon :icon="['fas', 'arrow-left']" class="text-gray-200" />
          </div>
          <p class="font-medium text-sm text-gray-200">kembali</p>
        </NuxtLink> 
        <p class="text-center text-xl text-gray-700 font-semibold">Input data baru</p>

        <div class="grid grid-cols-3 w-11/12 mt-6">
            <div v-for="(err,index) in errors" :key="index" class="bg-white rounded-lg w-4/5 mb-1 bg-opacity-90">
                <li class="text-red-400 text-xs p-2">{{err.msg}}</li>
            </div>
        </div>

    <form class="mt-8 min-w-min" @submit.prevent="postInputUps">
        <div>
            <div class="grid grid-cols-3">
                <div class="mb-4 has-tooltip">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan beban kritis ups-nya</span>

                    <label for="upsCriticalLoad" class="block mb-2 text-sm">ups critical load</label>
                    <input type="text" v-model="inputUps.upsCriticalLoad" name="upsCriticalLoad" id="upsCriticalLoad" class="p-2 w-72 rounded-lg focus:ring-blue-500 bg-gray-200">
                </div>
                <div class="mb-4 has-tooltip">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan suhu kritis-nya</span>

                    <label for="upsCriticalTemperature" class="block mb-2 text-sm">ups critical temperature</label>
                    <input type="text" v-model="inputUps.upsCriticalTemperature" name="upsCriticalTemperature" id="upsCriticalTemperature" class="p-2 w-72 rounded-lg focus:ring-blue-500 bg-gray-200">
                </div>
                <div class="mb-4 has-tooltip">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan kapasitas kritis</span>

                    <label for="upsCriticalCapacity" class="block mb-2 text-sm">ups critical capacity</label>
                    <input type="text" v-model="inputUps.upsCriticalCapacity" name="upsCriticalCapacity" id="upsCriticalCapacity" class="p-2 w-72 rounded-lg focus:ring-blue-500 bg-gray-200">
                </div>
                <div class="mb-4 has-tooltip">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan nomor serial ups-nya</span>

                    <label for="nomorSerial" class="block mb-2 text-sm">nomor serial</label>
                    <input type="text" v-model="inputUps.nomorSerial" name="nomorSerial" id="nomorSerial" class="p-2 w-72 rounded-lg focus:ring-blue-500 bg-gray-200">
                </div>
                <div class="mb-4 has-tooltip">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan nama sistem ups-nya</span>

                    <label for="namaSistem" class="block mb-2 text-sm">nama sistem</label>
                    <input type="text" v-model="inputUps.namaSistem" name="namaSistem" id="namaSistem" class="p-2 w-72 rounded-lg focus:ring-blue-500 bg-gray-200">
                </div>
                <div class="mb-4 has-tooltip">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan model ups</span>

                    <label for="model" class="block mb-2 text-sm">model</label>
                    <input type="text" v-model="inputUps.model" name="model" id="model" class="p-2 w-72 rounded-lg focus:ring-blue-500 bg-gray-200">
                </div>
                <div class="mb-4 has-tooltip">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan manufaktur ups</span>

                    <label for="manufaktur" class="block mb-2 text-sm">manufaktur</label>
                    <input type="text" v-model="inputUps.manufaktur" name="manufaktur" id="manufaktur" class="p-2 w-72 rounded-lg focus:ring-blue-500 bg-gray-200">
                </div>
                <div class="mb-4 has-tooltip">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan peringkat tegangan atau voltage rating</span>

                    <label for="peringkatTegangan" class="block mb-2 text-sm">peringkat tegangan</label>
                    <input type="text" v-model="inputUps.peringkatTegangan" name="peringkatTegangan" id="peringkatTegangan" class="p-2 w-72 rounded-lg focus:ring-blue-500 bg-gray-200">
                </div>
                <div class="mb-4 has-tooltip">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan peringkat frekuensi atau rating frequency</span>

                    <label for="peringkatFrekuensi" class="block mb-2 text-sm">peringkat frekuensi</label>
                    <input type="text" v-model="inputUps.peringkatFrekuensi" name="peringkatFrekuensi" id="peringkatFrekuensi" class="p-2 w-72 rounded-lg focus:ring-blue-500 bg-gray-200">
                </div>
                <div class="mb-4 has-tooltip">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan peringkat tegangan baterai atau voltage rating battery</span>

                    <label for="peringkatTeganganBaterai" class="block mb-2 text-sm">peringkat tegangan baterai</label>
                    <input type="text" v-model="inputUps.peringkatTeganganBaterai" name="peringkatTeganganBaterai" id="peringkatTeganganBaterai" class="p-2 w-72 rounded-lg focus:ring-blue-500 bg-gray-200">
                </div>
                <div class="mb-4 has-tooltip">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan tahun masuk barang</span>

                    <label for="tahun" class="block mb-2 text-sm">tahun</label>
                    <input type="date" v-model="inputUps.tahun" name="tahun" id="tahun" class="p-2 w-72 rounded-lg focus:ring-blue-500 bg-gray-200">
                </div>
                <div class="mb-4 has-tooltip">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan batas garansi</span>

                    <label for="garansi" class="block mb-2 text-sm">garansi</label>
                    <input type="date" v-model="inputUps.garansi" name="garansi" id="garansi" class="p-2 w-72 rounded-lg focus:ring-blue-500 bg-gray-200">
                </div>
                
            </div>
        </div>
        <button class="bg-gray-700 text-gray-200 shadow-md rounded-lg w-28 h-10 mt-8">kirim</button>
    </form>
</section>
</div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
export default {
    data(){
        return{
            inputUps:{
                model : "",
                upsCriticalLoad : "",
                upsCriticalTemperature : "",
                upsCriticalCapacity : "",
                peringkatTegangan : "",
                peringkatFrekuensi : "",
                peringkatTeganganBaterai : "",
                manufaktur : "",
                nomorSerial : "",
                namaSistem : "",
                tahun : "",
                garansi : "",
            },
            errors:"",
        }
    },
    methods:{
        async postInputUps(){
                const res = await axios.post('http://localhost:3000/server/master/inputups',{
                    iduser:this.$auth.user.id,
                    lokasiServer:this.$auth.user.lokasi,
                    model : this.inputUps.model,
                    upsCriticalLoad : this.inputUps.upsCriticalLoad,
                    upsCriticalTemperature : this.inputUps.upsCriticalTemperature,
                    upsCriticalCapacity : this.inputUps.upsCriticalCapacity,
                    peringkatTegangan : this.inputUps.peringkatTegangan,
                    peringkatFrekuensi : this.inputUps.peringkatFrekuensi,
                    peringkatTeganganBaterai : this.inputUps.peringkatTeganganBaterai,
                    manufaktur : this.inputUps.manufaktur,
                    nomorSerial : this.inputUps.nomorSerial,
                    namaSistem : this.inputUps.namaSistem,
                    tahun: this.inputUps.tahun,
                    garansi : this.inputUps.garansi,
                })
               
                if(res.data.errors){
                    this.errors=res.data.errors
                    this.$router.push('/master/input/inputUps')
                }
                else{
                    swal('data berhasil ditambahkan',{icon:'success'})
                    this.$router.push('/master/ups')
                }
        }
    },
    mounted(){
        this.inputUps.tahun = moment().format('YYYY-MM-DD')
    }

}
</script>

<style>

</style>