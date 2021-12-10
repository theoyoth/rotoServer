<template>
  <div class="bg-gray-300 min-h-screen w-widthContent ml-auto">
    <Navbar/>
    <section class="bg-gray-100 min-h-screen w-widthContentField m-auto mt-7 p-4">
      <NuxtLink to="/inout/gantibarang"
          class="flex items-center justify-between rounded-md w-28 px-4 py-2 bg-gray-700 hover:bg-gray-600 transition duration-200">
          <div>
            <font-awesome-icon :icon="['fas', 'arrow-left']" class="text-gray-200" />
          </div>
          <p class="font-medium text-sm text-gray-200">kembali</p>
        </NuxtLink> 
        <div id="printform" class="mt-8">
          <h1 class="text-xl font-semibold" style="text-align: center">Data Barang</h1>
          <table width="100%" border="1" style="border-collapse: collapse;" class="mt-2">
            <thead>
              <th class="border border-black py-2" style="border-width:2px;border-color:black;padding-top:2px;font-weight:bold;">Tanggal input</th>
              <th class="border border-black"  style="border-width:2px;border-color:black;padding-top:2px;font-weight:bold;">Nama Barang Baru</th>
              <th class="border border-black"  style="border-width:2px;border-color:black;padding-top:2px;font-weight:bold;">Nama Barang Lama</th>
              <th class="border border-black"  style="border-width:2px;border-color:black;padding-top:2px;font-weight:bold;">Kuantitas</th>
            </thead>
            <tbody>
              <tr>
                <td class="border border-black py-2" style="border-width:2px;border-color:black;border-collapse:collapse;text-align: center;padding-top:2px;">{{dataPrint.tanggal}}</td>
                <td class="border border-black " style="border-width:2px;border-color:black;border-collapse:collapse;text-align: center;padding-top:2px;">{{dataPrint.namaBarangBaru}}</td>
                <td class="border border-black " style="border-width:2px;border-color:black;border-collapse:collapse;text-align: center;padding-top:2px;">{{dataPrint.namaBarangLama}}</td>
                <td class="border border-black " style="border-width:2px;border-color:black;border-collapse:collapse;text-align: center;padding-top:2px;">{{dataPrint.kuantitas}}</td>
              </tr>
            </tbody>
          </table>
          <div class="flex justify-between w-full" style="display: flex;justify-content:space-around;margin-top:10px;">
            <div class="h-20 flex flex-col justify-between text-center" style="text-align: center;">
              <p>Nama pengganti</p>
              <p style="transform:translateY(20px);">{{dataPrint.namaPengganti}}</p>
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
        namaPengganti:"",
        namaBarangBaru : "",
        namaBarangLama : "",
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

    const resp = await this.$axios.get(`/inout/gantibarang/update/${id}/${lokasi}`)
    if(resp){
        resp.data.forEach(barang=>{
            this.dataPrint.tanggal = moment(barang.tanggal).format('DD-MM-YYYY')
            this.dataPrint.namaPengganti = barang.nama_pengganti
            this.dataPrint.namaBarangBaru = barang.nama_barang_baru
            this.dataPrint.namaBarangLama = barang.nama_barang_lama
            this.dataPrint.kuantitas = barang.kuantitas
            this.dataPrint.kepentingan = barang.kepentingan
            this.dataPrint.penanggungJawab = barang.penanggung_jawab
        })
    } 
  },
  methods:{
    async printtheform(){
      // Pass the element id here
      // const localOptions = {
      //       styles: [
      //         '~/public/printer.css'
      //       ]
      //     };
      this.$htmlToPaper('printform');
      // window.print()
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