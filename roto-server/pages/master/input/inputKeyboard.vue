<template>
<div class="bg-gray-200 min-h-screen w-widthContent ml-auto">
    <!-- <InputHeader item="Keyboard"/> -->
    <Navbar/>
    <section class="bg-white min-h-screen w-widthContentField m-auto mt-7 p-4">
        <NuxtLink to="/master/keyboard"
          class="flex items-center justify-between rounded-md w-28 px-4 py-2 bg-gray-700">
          <div>
            <font-awesome-icon :icon="['fas', 'arrow-left']" class="text-gray-200" />
          </div>
          <p class="font-medium text-sm text-gray-200">kembali</p>
        </NuxtLink> 
        <p class="text-center text-xl text-gray-700 font-semibold">Input data baru Keyboard</p>
    
    <div class="grid grid-cols-3 w-11/12 mt-6">
        <div v-for="(err,index) in errors" :key="index" class="bg-white w-10/12 rounded-lg mb-1 bg-opacity-90">
            <li class="text-red-400 text-xs p-2">{{err.msg}}</li>
        </div>
    </div>

    <form class="min-w-min mt-6" @submit.prevent="postInputKeyboard">
        <div >
            <div class="grid grid-cols-2">
                <div class="mb-4 has-tooltip">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan nama merek</span>

                    <label for="merek" class="block mb-2 text-sm">merek</label>
                    <input type="text" v-model="inputKeyboard.merek" name="merek" id="merek" class="p-2 w-72 rounded-lg focus:ring-blue-500 bg-gray-200">
                </div>
                <div class="mb-4 has-tooltip">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan nama model</span>

                    <label for="model" class="block mb-2 text-sm">model</label>
                    <input type="text" v-model="inputKeyboard.model" name="model" id="model" class="p-2 w-72 rounded-lg focus:ring-blue-500 bg-gray-200">
                </div>
                <div class="mb-4 has-tooltip">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan tipe keyboard</span>

                    <label for="tipe" class="block mb-2 text-sm">tipe</label>
                    <input type="text" v-model="inputKeyboard.tipe" name="tipe" id="tipe" class="p-2 w-72 rounded-lg focus:ring-blue-500 bg-gray-200">
                </div>
                <div class="mb-4 has-tooltip">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan tahun masuk barang</span>

                    <label for="tahun" class="block mb-2 text-sm">tahun</label>
                    <input type="date" v-model="inputKeyboard.tahun" name="tahun" id="tahun" class="p-2 w-72 rounded-lg focus:ring-blue-500 bg-gray-200">
                </div>
                <div class="mb-4 has-tooltip">
                     <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan batas garansi</span>

                    <label for="garansi" class="block mb-2 text-sm">garansi</label>
                    <input type="date" v-model="inputKeyboard.garansi" name="garansi" id="garansi" class="p-2 w-72 rounded-lg focus:ring-blue-500 bg-gray-200">
                </div>
            </div>
        </div>
        <button class="bg-gray-700 text-gray-200 shadow-md rounded-lg w-28 h-10 mt-8" type="submit">kirim</button>
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
            inputKeyboard:{
                merek : "",
                model : "",
                tipe : "",
                tahun : "",
                garansi : "",
            },
            errors:"",
            
        }
    },
    methods:{
        async postInputKeyboard(){
            const res = await axios.post('http://localhost:3000/server/master/inputkeyboard',{model:this.inputKeyboard.model,merek:this.inputKeyboard.merek,tipe:this.inputKeyboard.tipe,tahun:this.inputKeyboard.tahun, garansi:this.inputKeyboard.garansi})

            if(res.data.errors){
                this.errors=res.data.errors
                console.log(this.errors)
                this.$router.push('/master/input/inputKeyboard')
            }
            else{
                swal('data berhasil ditambahkan',{icon:'success'})
                this.$router.push('/master/keyboard')
            }
        }
    },
    mounted(){
        this.inputKeyboard.tahun = moment().format('YYYY-MM-DD')
    }

}
</script>

<style>

</style>