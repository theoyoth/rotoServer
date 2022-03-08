<template>
  <div class="bg-gray-300 w-widthContent ml-auto overflow-x-hidden">
    <section class="bg-gray-100 min-h-screen w-widthContentField m-auto mt-7 p-4">
        <NuxtLink to="/inout/gantibarang"
          class="flex items-center justify-between rounded-md w-28 px-4 py-2 bg-gray-700 hover:bg-gray-600 transition duration-200">
          <div>
            <font-awesome-icon :icon="['fas', 'arrow-left']" class="text-gray-200" />
          </div>
          <p class="font-medium text-sm text-gray-200">kembali</p>
        </NuxtLink> 

        <p class="text-center text-lg text-gray-700 font-semibold">Daftar ganti barang</p>

        <div class="mt-5">
          <label for="dataprint">Data awal :</label>
          <select name="dataprint" id="dataprint" class="p-2 w-52 rounded-lg bg-gray-200" v-model="printForm.dataAwal">
            <option disabled value="">Data Awal</option>
            <option v-for="(tgl,index) in dataTanggal" :key="index">
              <option :value="tgl">{{tgl}}</option>
            </option>
          </select>
        </div>
        <div class="mt-5">
          <label for="dataprint">Data akhir :</label>
          <select name="dataprint" id="dataprint" class="p-2 w-52 rounded-lg bg-gray-200" v-model="printForm.dataAkhir" :disabled="printForm.dataAwal === ''" :class="[printForm.dataAwal !== '' ? 'incOpac' : 'recOpac']">
            <option disabled value="">Data Akhir</option>
            <option v-for="(tgl,index) in dataTanggal" :key="index">
              <option :value="tgl">{{tgl}}</option>
            </option>
          </select>
        </div>
        <div class="mt-5">
          <div>
            <label for="penanggungJawab">Penanggung jawab :</label>
            <select name="penanggungJawab" id="penanggungJawab" class="p-2 w-64 rounded-lg bg-gray-200" v-model="printSign.penanggungJawab" :disabled="printForm.dataAkhir === ''" :class="[printForm.dataAkhir !== '' ? 'incOpac' : 'decOpac']">
                <option disabled value="">Penanggung jawab</option>
                <option v-for="(pa,index) in userpa" :key="index">
                    <option :value="pa.nama">{{pa.nama}}</option>
                </option>
            </select> 
          </div>
        </div>

        <div class="w-28 flex justify-between mt-6">
          <button class="w-full py-2 rounded-lg bg-gray-700 text-gray-200 flex justify-evenly items-center hover:bg-gray-600" @click="printtheform" :disabled="printSign.penanggungJawab === ''" :class="[printSign.penanggungJawab !== '' ? 'incOpac' : 'decOpac']">
            <p class="font-medium text-sm text-gray-200">print</p>
            <div>
                <font-awesome-icon :icon="['fas', 'print']" class="text-yellow-500" />
            </div>
          </button>
        </div>

        <!-- data choose -->
        <div id="printform" v-if="printForm.dataAwal !== '' && printForm.dataAkhir !== ''" class="mt-4 mb-5">
          <h1 class="text-center text-black font-bold" style="font-size:20px;text-align:center;">Daftar ganti barang</h1>
          <table width="100%" border="1" style="border-collapse: collapse;" class="mt-2">
              <thead>
                  <tr class="text-xs text-gray-200"> 
                      <th class="border border-black py-2" style="border-width:1px;border-color:black;padding-top:2px;font-weight:bold;color:black;">tanggal input</th>
                      <th class="border border-black py-2" style="border-width:1px;border-color:black;padding-top:2px;font-weight:bold;color:black;">nama pengganti</th>
                      <th class="border border-black py-2" style="border-width:1px;border-color:black;padding-top:2px;font-weight:bold;color:black;">nama barang baru</th>
                      <th class="border border-black py-2" style="border-width:1px;border-color:black;padding-top:2px;font-weight:bold;color:black;">nama barang lama</th>
                      <th class="border border-black py-2" style="border-width:1px;border-color:black;padding-top:2px;font-weight:bold;color:black;">kuantitas</th>
                      <th class="border border-black py-2" style="border-width:1px;border-color:black;padding-top:2px;font-weight:bold;color:black;">kepentingan</th>
                      <th class="border border-black py-2" style="border-width:1px;border-color:black;padding-top:2px;font-weight:bold;color:black;">keterangan</th>
                  </tr>
              </thead>
              <tbody>
                  <tr v-for="(main,index) in filterData" :key="index">
                      <td class="border border-black py-2" style="border-width:1px;border-color:black;border-collapse:collapse;text-align: center;padding-top:2px;">{{$moment(main.tanggal).format("DD-MM-YYYY")}}</td>
                      <td class="border border-black py-2" style="border-width:1px;border-color:black;border-collapse:collapse;text-align: center;padding-top:2px;">{{main.nama_pengganti}}</td>
                      <td class="border border-black py-2" style="border-width:1px;border-color:black;border-collapse:collapse;text-align: center;padding-top:2px;">{{main.nama_barang_baru}}</td>
                      <td class="border border-black py-2" style="border-width:1px;border-color:black;border-collapse:collapse;text-align: center;padding-top:2px;">{{main.nama_barang_lama}}</td>
                      <td class="border border-black py-2" style="border-width:1px;border-color:black;border-collapse:collapse;text-align: center;padding-top:2px;">{{main.kuantitas}}</td>
                      <td class="border border-black py-2" style="border-width:1px;border-color:black;border-collapse:collapse;text-align: center;padding-top:2px;">{{main.kepentingan}}</td>
                      <td class="border border-black py-2" style="border-width:1px;border-color:black;border-collapse:collapse;text-align: center;padding-top:2px;">{{main.keterangan}}</td>
                  </tr>
              </tbody>   
          </table>
          <div class="flex justify-between w-full" style="display: flex;justify-content:space-around;margin-top:10px;">
            <div class="h-20 flex flex-col justify-between text-center" style="text-align: center;">
              <p>Nama pengganti</p>
              <p style="transform:translateY(20px);">{{printSign.pengganti}}</p>
            </div>
            <div class="h-20 flex flex-col justify-between text-center" style="text-align:center;">
              <p>Penanggung jawab</p>
              <p style="transform:translateY(20px);">{{printSign.penanggungJawab}}</p>
            </div>
          </div>
        </div>

        <!-- all datas -->
        <table v-else class="table space-y-6 container mx-auto table-auto border-collapse mt-7 divide-y divide-gray-300 border-collapse" ref="listitem" id="listitem">
            <thead class="bg-white text-sm bg-gray-700">
                <tr class="text-xs text-gray-200"> 
                    <th class="font-semibold py-3 w-32">tanggal input</th>
                    <th classp="font-semibold py-3 w-44">nama</th>
                    <th classp="font-semibold py-3 w-36">nama barang baru</th>
                    <th classp="font-semibold py-3 w-36">nama barang lama</th>
                    <th classp="font-semibold py-3 w-20">kuantitas</th>
                    <th class="font-semibold w-48">kepentingan</th>
                    <th class="font-semibold w-48">keterangan</th>
                </tr>
            </thead>
            <tbody class="text-center bg-white bg-opacity-40 divide-y divide-gray-300">
                <tr class="text-sm uppercase" v-for="(main,index) in alldataGantibarang" :key="index">
                    <td>{{$moment(main.tanggal).format("DD-MM-YYYY")}}</td>
                    <td class="py-3">{{main.nama_pengganti}}</td>
                    <td class="py-3">{{main.nama_barang_baru}}</td>
                    <td class="py-3">{{main.nama_barang_lama}}</td>
                    <td>{{main.kuantitas}}</td>
                    <td>{{main.kepentingan}}</td>
                    <td>{{main.keterangan}}</td>
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
    return {
      printForm:{
        dataAwal:"",
        dataAkhir:"",
      },
      alldataGantibarang:[],
      allGantibarang:[],
      dataTanggal:[],
      printSign:{
        penanggungJawab:"",
        pengganti:this.$auth.user.nama,
      },
      lokasi: this.$auth.user.lokasi,
    }
  },
  computed:{
    filterData(){
        return this.allGantibarang.filter((item,index) => index <= this.allGantibarang.findIndex(dat => dat.tanggal == this.printForm.dataAwal) && index >= this.allGantibarang.findIndex(dat => dat.tanggal == this.printForm.dataAkhir))
    },
    userpa(){
      return this.$store.state.getUser.alluserpa
    }
  },
  methods:{
    async getAllDataGantibarang(){
      const idlogin = this.$auth.user.id
        try{
            const resp = await this.$axios.get(`/inout/gantibarang/${this.lokasi}/${idlogin}`)
            if(resp){
                resp.data.forEach(gantibarang => {
                    this.alldataGantibarang.push(gantibarang)
                })
                this.allGantibarang = this.alldataGantibarang.map(item => {
                  return {...item,tanggal:this.$moment(item.tanggal).format("YYYY-MM-DD HH:mm:ss")}
                })
                this.allGantibarang.map(date => {
                    this.dataTanggal.push(date.tanggal)
                })
            } else{
                console.log('error')
            }
        }catch(err){
          console.log(err)
        }
    },
    async printtheform(){
      this.$htmlToPaper('printform');
    }
  },
  mounted(){
    this.getAllDataGantibarang()
    this.$store.dispatch('getUser/getallUserPa',this.lokasi)
  }

}
</script>

<style>
.decOpac{
  opacity:0.1;
  cursor:default;
}
.incOpac{
  opacity: 1;
  cursor:pointer;
}

</style>