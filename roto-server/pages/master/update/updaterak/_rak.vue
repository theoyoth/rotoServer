<template>
<div class="bg-gray-300 min-h-screen w-widthContent ml-auto overflow-x-hidden">
    <section class="bg-white min-h-screen w-widthContentField m-auto mt-7 p-4 ">
        <NuxtLink to="/master/rak"
          class="flex items-center justify-between rounded-md w-28 px-4 py-2 bg-gray-700 hover:bg-gray-600 transition duration-200">
          <div>
            <font-awesome-icon :icon="['fas', 'arrow-left']" class="text-gray-200" />
          </div>
          <p class="font-medium text-sm text-gray-200">kembali</p>
        </NuxtLink> 
        <p class="text-center text-xl text-gray-700 font-semibold">update Rak</p>
    
    <ValidationObserver v-slot={invalid,valid}>
    <form @submit.prevent="updateDataRak" class="w-11/12 mt-10">
        <div>
            <input type="hidden" name="id" :value="raks.id">
            <div class="grid grid-cols-3">
                <div class="mb-4 has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan tipe rak</span>

                    <label for="tipeRak" class="block mb-2 text-sm">tipe rak</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|passchar" v-slot={errors}>
                            <input type="text" v-model="updateRak.tipeRak" name="tipeRak" id="tipeRak" class="p-2 w-72 rounded-lg outline-none bg-gray-300 uppercase">
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="mb-4 has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan tipe pintu</span>

                    <label for="tipePintu" class="block mb-2 text-sm">tipe pintu</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|passchar" v-slot={errors}>
                            <input type="text" v-model="updateRak.tipePintu" name="tipePintu" id="tipePintu" class="p-2 w-72 rounded-lg outline-none bg-gray-300 uppercase">
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="mb-4 has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan nama produk</span>
                    
                    <label for="namaProduk" class="block mb-2 text-sm">nama produk</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|passchar" v-slot={errors}>
                            <input type="text" v-model="updateRak.namaProduk" name="namaProduk" id="namaProduk" class="p-2 w-72 rounded-lg outline-none bg-gray-300 uppercase">
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="mb-4 has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan ukuran rak</span>

                    <label for="dimensi" class="block mb-2 text-sm">dimensi</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|passchar" v-slot={errors}>
                            <input type="text" v-model="updateRak.dimensi" name="dimensi" id="dimensi" class="p-2 w-72 rounded-lg outline-none bg-gray-300 uppercase">
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="mb-4 has-tooltip relative">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-36">masukan berat rak</span>

                    <label for="berat" class="block mb-2 text-sm">berat</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required|numeric" v-slot={errors}>
                            <div class="flex">
                                <input type="text" v-model="updateRak.berat" name="berat" id="berat" class="p-2 w-full rounded-l-lg outline-none bg-gray-300 uppercase">
                                <input type="text" readonly value="KG" class="w-16 rounded-r-lg bg-gray-200 p-1 text-center outline-none">
                            </div>
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="mb-4 has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan tahun masuk</span>

                    <label for="tahun" class="block mb-2 text-sm">tahun</label>
                    <div class="flex flex-col w-72">
                        <ValidationProvider rules="required" v-slot={errors}>
                            <input type="date" v-model="updateRak.tahun" name="tahun" id="tahun" class="p-2 w-72 rounded-lg outline-none bg-gray-300">
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
            </div>
        </div>
        <button class="opacity-10 bg-gray-700 text-gray-200 w-28 py-2 rounded mt-6" type="submit" :class="{activesubmit : valid}" :disabled="invalid">ubah</button>
    </form>
    </ValidationObserver>
</section>
</div>
</template>

<script>
import moment from 'moment'
import {ValidationObserver, ValidationProvider} from "vee-validate";

export default {
    middleware:"isAuthenticated",
    components:{
        ValidationObserver,
        ValidationProvider
    },
    data(){
        return{
            raks:'',
            updateRak:{
                tipeRak : "",
                tipePintu : "",
                namaProduk: "",
                dimensi : "",
                berat : "",
                tahun : "",
            }
        }
    },
    methods:{
        async updateDataRak(){
            const resp = await this.$axios.post('/master/rak/update',{
                iduser: this.$auth.user.id,
                lokasiServer: this.$auth.user.lokasi,
                idrak: this.$route.params.id,
                tipeRak:this.updateRak.tipeRak,
                tipePintu:this.updateRak.tipePintu,
                namaProduk:this.updateRak.namaProduk,
                dimensi:this.updateRak.dimensi,
                berat:this.updateRak.berat,
                tahun: this.updateRak.tahun,
            })
            if(resp){
                this.$router.push('/master/rak')
                swal('data di update',{icon:'success'})
            }
            else{
                swal('Error',resp.data.msg,{icon:'error'})
                this.$router.push('/master/updaterak')
            }
        },
        async getAllDataRak(){
             try{
                const lokasi = this.$auth.user.lokasi
                const id = this.$route.params.id
                const resp = await this.$axios.get(`/master/rak/update/${id}/${lokasi}`)
                if(resp){
                    resp.data.forEach(rak=>{
                        this.updateRak.tipeRak = rak.tipe_rak
                        this.updateRak.tipePintu = rak.tipe_pintu
                        this.updateRak.namaProduk = rak.nama_produk
                        this.updateRak.dimensi = rak.dimensi
                        this.updateRak.berat = rak.berat
                        this.updateRak.tahun = moment(rak.tahun).format('YYYY-MM-DD')
                    })
                }
            }catch(err) {
                console.log(err)
            }
        }
    },
    mounted(){
        this.getAllDataRak()
    }
}
</script>

<style>
.activesubmit {
    background-color: rgb(55, 65, 81);
    color:whitesmoke;
    width:7rem;
    cursor:pointer;
    opacity:1;
    padding-top: .5rem;
    padding-bottom: .5rem;
    transition: all 0.5s;
    transform:translateY(-2px);
}
</style>