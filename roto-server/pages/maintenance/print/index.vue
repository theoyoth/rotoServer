<template>
  <div class="bg-gray-300 w-widthContent ml-auto overflow-x-hidden">
    <section class="bg-gray-100 min-h-screen w-widthContentField m-auto mt-7 p-4">
        <NuxtLink to="/maintenance"
          class="flex items-center justify-between rounded-md w-28 px-4 py-2 bg-gray-700 hover:bg-gray-600 transition duration-200">
          <div>
            <font-awesome-icon :icon="['fas', 'arrow-left']" class="text-gray-200" />
          </div>
          <p class="font-medium text-sm text-gray-200">kembali</p>
        </NuxtLink> 

        <p class="text-center text-lg text-gray-700 font-semibold">Print daftar maintenance</p>

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
          <h1 class="text-center text-black font-bold" style="font-size:20px;text-align:center;">Daftar maintenance</h1>
          <table width="100%" border="1" style="border-collapse: collapse;" class="mt-2">
              <thead>
                  <tr class="text-xs text-gray-200"> 
                      <th class="border border-black py-2" style="border-width:1px;border-color:black;padding-top:2px;font-weight:bold;color:black;">no.</th>
                      <th class="border border-black py-2" style="border-width:1px;border-color:black;padding-top:2px;font-weight:bold;color:black;">nama</th>
                      <th class="border border-black py-2" style="border-width:1px;border-color:black;padding-top:2px;font-weight:bold;color:black;">tanggal input</th>
                      <th class="border border-black py-2" style="border-width:1px;border-color:black;padding-top:2px;font-weight:bold;color:black;">suhu</th>
                      <th class="border border-black py-2" style="border-width:1px;border-color:black;padding-top:2px;font-weight:bold;color:black;">kelembapan</th>
                      <th class="border border-black py-2" style="border-width:1px;border-color:black;padding-top:2px;font-weight:bold;color:black;">AC</th>
                      <th class="border border-black py-2" style="border-width:1px;border-color:black;padding-top:2px;font-weight:bold;color:black;">UPS</th>
                      <th class="border border-black py-2" style="border-width:1px;border-color:black;padding-top:2px;font-weight:bold;color:black;">baterai</th>
                      <th class="border border-black py-2" style="border-width:1px;border-color:black;padding-top:2px;font-weight:bold;color:black;">server</th>
                      <th class="border border-black py-2" style="border-width:1px;border-color:black;padding-top:2px;font-weight:bold;color:black;">jaringan</th>
                  </tr>
              </thead>
              <tbody>
                  <tr v-for="(main,index) in filterData" :key="index">
                      <td class="border border-black py-2" style="border-width:1px;border-color:black;border-collapse:collapse;text-align: center;padding-top:2px;">{{index+1}}</td>
                      <td class="border border-black py-2" style="border-width:1px;border-color:black;border-collapse:collapse;text-align: center;padding-top:2px;">{{main.nama_pemeriksa}}</td>
                      <td class="border border-black py-2" style="border-width:1px;border-color:black;border-collapse:collapse;text-align: center;padding-top:2px;">{{$moment(main.tanggal).format("DD-MM-YYYY")}}</td>
                      <td class="border border-black py-2" style="border-width:1px;border-color:black;border-collapse:collapse;text-align: center;padding-top:2px;">{{main.suhu}}</td>
                      <td class="border border-black py-2" style="border-width:1px;border-color:black;border-collapse:collapse;text-align: center;padding-top:2px;">{{main.kelembapan}}</td>
                      <td class="border border-black py-2" style="border-width:1px;border-color:black;border-collapse:collapse;text-align: center;padding-top:2px;">{{main.ac}}</td>
                      <td class="border border-black py-2" style="border-width:1px;border-color:black;border-collapse:collapse;text-align: center;padding-top:2px;">{{main.ups}}</td>
                      <td class="border border-black py-2" style="border-width:1px;border-color:black;border-collapse:collapse;text-align: center;padding-top:2px;">{{main.baterai}}</td>
                      <td class="border border-black py-2" style="border-width:1px;border-color:black;border-collapse:collapse;text-align: center;padding-top:2px;">{{main.server}}</td>
                      <td class="border border-black py-2" style="border-width:1px;border-color:black;border-collapse:collapse;text-align: center;padding-top:2px;">{{main.jaringan}}</td>
                  </tr>
              </tbody>   
          </table>
          <div class="flex justify-between w-full" style="display: flex;justify-content:space-around;margin-top:10px;">
            <div class="h-20 flex flex-col justify-between text-center" style="text-align: center;">
              <p>Nama pemeriksa</p>
              <p style="transform:translateY(20px);">{{printSign.pemeriksa}}</p>
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
                    <th class="font-semibold py-3 px-2 w-4">no.</th>
                    <th classp="font-semibold py-3 w-48">nama</th>
                    <th class="font-semibold py-3 w-32">tanggal input</th>
                    <th class="font-semibold w-24">suhu</th>
                    <th class="font-semibold w-24">kelembapan</th>
                    <th class="font-semibold w-24">AC</th>
                    <th class="font-semibold w-24">UPS</th>
                    <th class="font-semibold w-24">baterai</th>
                    <th class="font-semibold w-24">server</th>
                    <th class="font-semibold w-24">jaringan</th>
                </tr>
            </thead>
            <tbody class="text-center bg-white bg-opacity-40 divide-y divide-gray-300">
                <tr class="text-sm uppercase" v-for="(main,index) in alldataMaintenances" :key="index">
                    <td>{{index+1}}</td>
                    <td class="py-3">{{main.nama_pemeriksa}}</td>
                    <td>{{$moment(main.tanggal).format("DD-MM-YYYY")}}</td>
                    <td>{{main.suhu}}</td>
                    <td>{{main.kelembapan}}</td>
                    <td>{{main.ac}}</td>
                    <td>{{main.ups}}</td>
                    <td>{{main.baterai}}</td>
                    <td>{{main.server}}</td>
                    <td>{{main.jaringan}}</td>
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
      alldataMaintenances:[],
      allMaintenances:[],
      dataTanggal:[],
      printSign:{
        penanggungJawab:"",
        pemeriksa:this.$auth.user.nama,
      },
      lokasi: this.$auth.user.lokasi,
    }
  },
  computed:{
    filterData(){
        return this.allMaintenances.filter((item,index) => index <= this.allMaintenances.findIndex(dat => dat.tanggal == this.printForm.dataAwal) && index >= this.allMaintenances.findIndex(dat => dat.tanggal == this.printForm.dataAkhir))
    },
    userpa(){
      return this.$store.state.getUser.alluserpa
    }
  },
  methods:{
    async getAllDataMaintenances(){
      const lokasi = this.$auth.user.lokasi
      const idlogin = this.$auth.user.id
        try{
            const resp = await this.$axios.get(`/inputmaintenance/${lokasi}/${idlogin}`)
            if(resp){
                resp.data.reverse()
                resp.data.forEach(maintenance => {
                    this.alldataMaintenances.push(maintenance)
                })
                this.allMaintenances = this.alldataMaintenances.map(item => {
                  return {...item,tanggal:this.$moment(item.tanggal).format("YYYY-MM-DD HH:mm:ss")}
                })
                this.allMaintenances.map(date => {
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
    this.getAllDataMaintenances()
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