<template>
  <div class="bg-gray-300 min-h-screen w-widthContent ml-auto">
    <section class="bg-gray-100 min-h-screen w-widthContentField m-auto mt-7 p-4">
      <NuxtLink to="/inout/ambilbarang"
          class="flex items-center justify-between rounded-md w-28 px-4 py-2 bg-gray-700 hover:bg-gray-600 transition duration-200">
          <div>
            <font-awesome-icon :icon="['fas', 'arrow-left']" class="text-gray-200" />
          </div>
          <p class="font-medium text-sm text-gray-200">kembali</p>
        </NuxtLink> 
        <div id="printform" class="mt-8">
          <h1 class="text-xl font-semibold" style="text-align: center">Data Barang</h1>
          <table width="100%" border="1" style="border-collapse: collapse;" class="mt-2 border-collapse">
            <thead>
              <th class="border border-black py-2" style="border-width:2px;border-color:black;border-collapse:collapse;padding-top:2px;font-weight:bold;">Tanggal input</th>
              <th class="border border-black"  style="border-width:2px;border-color:black;border-collapse:collapse;padding-top:2px;font-weight:bold;">Nama Barang</th>
              <th class="border border-black"  style="border-width:2px;border-color:black;border-collapse:collapse;padding-top:2px;font-weight:bold;">Kuantitas</th>
            </thead>
            <tbody>
              <tr>
                <td class="border border-black py-2" style="border-width:2px;border-color:black;border-collapse:collapse;text-align: center;padding-top:2px;">{{dataPrint.tanggal}}</td>
                <td class="border border-black " style="border-width:2px;border-color:black;border-collapse:collapse;text-align: center;padding-top:2px;">{{dataPrint.namaBarang}}</td>
                <td class="border border-black " style="border-width:2px;border-color:black;border-collapse:collapse;text-align: center;padding-top:2px;">{{dataPrint.kuantitas}}</td>
              </tr>
            </tbody>
          </table>
          <div class="flex justify-between w-full" style="display: flex;justify-content:space-around;margin-top:10px;">
            <div class="h-20 flex flex-col justify-between text-center" style="text-align: center;">
              <p>Nama pengambil</p>
              <p style="transform:translateY(20px);">{{dataPrint.namaPengambil}}</p>
            </div>
            <div class="h-20 flex flex-col justify-between text-center" style="text-align:center;">
              <p>Penanggung jawab</p>
              <p style="transform:translateY(20px);">{{dataPrint.penanggungJawab}}</p>
            </div>
          </div>
        </div>

        <button class="px-8 py-2 rounded-lg bg-gray-700 text-gray-200 mt-16" @click="printtheform">Print</button>
      
    </section>
    
  </div>
</template>

<script>
import moment from 'moment'

export default {  
  middleware:"isAuthenticated",
  data(){
    return{
      dataPrint:{
        namaPengambil:"",
        namaBarang : "",
        penanggungJawab : "",
        tanggal: "",
        kepentingan : "",
        kuantitas : "",
      },
    }
  },
  async mounted(){
    const lokasi = this.$auth.user.lokasi
    const id = this.$route.params.id

    const resp = await this.$axios.get(`/inout/ambilbarang/update/${id}/${lokasi}`)
    if(resp){
        resp.data.forEach(barang=>{
            this.dataPrint.tanggal = moment(barang.tanggal).format('DD-MM-YYYY')
            this.dataPrint.namaPengambil = barang.nama_pengambil
            this.dataPrint.namaBarang = barang.nama_barang
            this.dataPrint.kuantitas = barang.kuantitas
            this.dataPrint.kepentingan = barang.kepentingan
            this.dataPrint.penanggungJawab = barang.penanggung_jawab
        })
    } 
  },
  methods:{
    async printtheform(){
      this.$htmlToPaper('printform');
    }
  }
}
</script>

<style>
@media print {
  table{
    border:1px solid black;
  }
  thead{
    border:1px solid black;
  }
  tbody{
    border: 1px solid black;
  }
}
</style>