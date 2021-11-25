<template>
  <div class="min-h-screen w-full mx-auto">
    <div class="print-container container-form container">
      <div class="print-form formulir" id="printform" >
        <h1 class="title">Data Barang</h1>
        <table class="thisborder table-form">
          <thead>
            <th class="thisborder">Tanggal</th>
            <th class="thisborder">Nama Barang</th>
            <th class="thisborder">Kuantitas</th>
          </thead>
          <tbody>
            <tr class="textform">
              <td class="thisborder textform">{{dataPrint.tanggal}}</td>
              <td class="thisborder textform">{{dataPrint.namaBarang}}</td>
              <td class="thisborder textform">{{dataPrint.kuantitas}}</td>
            </tr>
          </tbody>
        </table>
        <div class="print-people flex justify-between w-full mt-6 table-form">
          <div class="h-24 flex flex-col justify-between text-center">
            <p>Nama pemambah</p>
            <p>{{dataPrint.namaPenambah}}</p>
          </div>
          <div class="h-24 flex flex-col justify-between text-center">
            <p>Penanggung jawab</p>
            <p>{{dataPrint.penanggungJawab}}</p>
          </div>
        </div>
      </div>
      <button class="px-8 py-2 rounded-lg bg-gray-700 text-gray-200 mt-6 btnmr" @click="printtheform">Print</button>
    </div>
    
  </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'

export default {  
  middleware:"isAuthenticated",
   head: {
    title: 'my website title',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'my website description'
      }
    ],
    link: { rel: 'stylesheet', type: 'text/css', media:'print' }
  },
  data(){
    return{
      dataPrint:{
        namaPenambah:"",
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

    const resp = await axios.get(`http://localhost:3000/server/inout/tambahbarang/update/${id}/${lokasi}`)
    if(resp){
        resp.data.forEach(barang=>{
            this.dataPrint.tanggal = moment(barang.tanggal).format('DD-MM-YYYY')
            this.dataPrint.namaPenambah = barang.nama_penambah
            this.dataPrint.namaBarang = barang.nama_barang
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

<style  type="text/css">
@media screen{
  .thisborder{
    border:1px solid black;
  }
  .container-form{
    width: 100%;
    height: 100vh;
  }
  .formulir{
    width:700px;
    margin:auto;
  }
  .table-form{
    width:100%;
  }
  .title{
    text-align:center;
    font-size: 1.5rem;
  }
  .text-form{
    text-align: center;
    padding: 1rem;
  }
  .people{
    margin-bottom:30px;
  }
  .btnmr{
    transform:translate(300px,100px);
  }

}
  @media print {
  .formulir {
    width: 100%
  }
  .thisborder{
    border:1px solid black;
  }
  .container-form{
    width: 100%;
    height: 100vh;
    border:1px solid black;
  }
  .formulir{
    width:700px;
    margin:auto;
    border:1px solid black;
  }
  .table-form{
    width:100%;
    padding:8px;
  }
  .title{
    text-align:center;
    font-size: 1.5rem;
  }
  .text-form{
    text-align: center;
  }
  .people{
    margin-bottom:30px;
  }
  /* table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
} */

}
</style>