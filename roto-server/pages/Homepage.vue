<template>
  <div class="bg-gray-300 min-h-screen w-widthContent ml-auto overflow-x-hidden">
    <section class="bg-gray-100 min-h-screen w-widthContentField m-auto p-4 mt-7">
      <div class="container mx-auto h-full py-5">
        <div class="flex">
          <h1 class="text-3xl text-gray-700 font-semibold">Welcome, <span>{{user.nama}}</span></h1>
          <!-- <p class="text-2xl">{{user.nama}}</p> -->
        </div>
        <hr class="mt-4">
        <div class="mt-6">
          <div class="flex justify-evenly items-center">
              <div class="has-tooltip">
                <div
                  class="
                    temperature
                    h-28
                    w-52
                    rounded-xl
                    bg-blue-200
                    py-1
                    px-5
                    flex
                    flex-col
                    justify-around
                    transform
                    hover:scale-95 hover:shadow-lg
                    transition
                    ease-in
                    duration-200
                    relative
                  "
                >
                  <span
                    class="
                      tooltip
                      text-xs
                      rounded
                      shadow-lg
                      p-1
                      bg-gray-700
                      text-white
                      absolute -top-7 left-12
                    "
                    >hasil maintenance suhu</span
                  >
                  <div class="bg-gray-700 w-8 h-8 rounded-xl flex items-center justify-center">
                    <font-awesome-icon
                        :icon="['fas', 'temperature-high']"
                        class="text-gray-200 text-lg z-10"
                    />
                  </div>
                  <h1 class="text-xl font-semibold">{{hasilMaintenanceSecurity.suhu}}°c</h1>
                  <p class="text-xs">Suhu</p>
                </div>
              </div>
              <div class="has-tooltip">
                <div
                  class="
                    humidity
                    h-28
                    w-52
                    rounded-xl
                    bg-red-200
                    py-1
                    px-5
                    flex
                    flex-col
                    justify-around
                    transform
                    hover:scale-95 hover:shadow-lg
                    transition
                    ease-in
                    duration-200
                    relative
                  "
                >
                  <span
                    class="
                      tooltip
                      text-xs
                      rounded
                      shadow-lg
                      p-1
                      bg-gray-700
                      w-52
                      text-white
                      absolute -top-7 left-0
                    "
                    >hasil maintenance kelembapan</span
                  >
                  <div class="bg-gray-700 w-8 h-8 rounded-xl flex items-center justify-center">
                    <font-awesome-icon
                        :icon="['fas', 'wind']"
                        class="text-gray-200 text-lg z-10"
                    />
                  </div>
                  <h1 class="text-xl font-semibold">{{hasilMaintenanceSecurity.kelembapan}}%</h1>
                  <p class="text-xs">Kelembapan</p>
                </div>
              </div>
              <div class="has-tooltip">
                <div
                  class="
                    humidity
                    h-28
                    w-52
                    rounded-xl
                    bg-green-200
                    py-1
                    px-5
                    flex
                    flex-col
                    justify-around
                    transform
                    hover:scale-95 hover:shadow-lg
                    transition
                    ease-in
                    duration-200
                    relative
                  "
                >
                  <span
                    class="
                      tooltip
                      text-xs
                      rounded
                      shadow-lg
                      p-1
                      bg-gray-700
                      w-40
                      text-white
                      absolute -top-7 left-10
                    "
                    >hasil maintenance UPS</span
                  >
                  <div class="bg-gray-700 w-8 h-8 rounded-xl flex items-center justify-center">
                    <font-awesome-icon
                        :icon="['fas', 'battery-three-quarters']"
                        class="text-gray-200 text-lg z-10"
                    />
                  </div>
                  <h1 class="text-xl font-semibold">{{hasilMaintenanceSecurity.ups}}</h1>
                  <p class="text-xs">UPS</p>
                </div>
              </div>
          </div>
          <!-- <div v-for="(ma,index) in allDataMaintenance" :key="index">
            <p>{{ma.tanggal}}</p>
          </div> -->
          <hr class="mt-8">
          <h1 class="text-3xl mt-4 text-gray-700 font-semibold">Graphic</h1>
          <div class="w-full mt-10">
            <div class="relative">
              <BarChartsuhu :chartData="chartData" :options="options"/>
              <button @click="prevData(-9,9)" class="bg-gray-700 text-gray-100 px-2 rounded mt-4 mr-2">Previous</button>
              <button @click="nextData(9,9)" class="bg-gray-700 text-gray-100 px-2 rounded">Next</button>
            </div>
            <div class="mt-10">
              <BarChartkelembapan :chart-data="kelembapans" :options="optionKelem"/>
              <button @click="prevDataKelembapan(-9,9)" class="bg-gray-700 text-gray-100 px-2 rounded mt-4 mr-2">Previous</button>
              <button @click="nextDataKelembapan(9,9)" class="bg-gray-700 text-gray-100 px-2 rounded">Next</button>
            </div>
            <!-- <div>
              <BarChartdata :labels="Labelsuhuline" :chartData="Datasuhuline"/>
            </div> -->
          </div>
        </div>       
      </div>
    </section>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  middleware: ['isAuthenticated','auth'],
  name:"Homepage",
  data() {
    return {
      message: '',
      errors: null,
      labels:[],
      suhus:[],
      kelembapans:{},
      chartData:{},
      options:{},
      optionKelem:{},
      barcharlabel: null,
      barchardata: null,
      kelembapalabel: null,
      kelembapandata: null,
    }
  },
  computed: {
    loggedIn() {
      return this.$auth.loggedIn
    },
    user() {
      return this.$auth.user
    },
    isEdp() {
      return this.$store.getters.isEdp
    },
    isPa() {
      return this.$store.getters.isPa
    },
    isSecurity() {
      return this.$store.getters.isSecurity
    },
    isadminTeknisi() {
      return this.$store.getters.isadminTeknisi
    },
    isTeknisilistrik() {
      return this.$store.getters.isTeknisilistrik
    },
    isTeknisiac() {
      return this.$store.getters.isTeknisiac
    },
    hasilMaintenanceSecurity() {
      return this.$store.state.maintenanceSecurity.hasilMaintenanceSecurity
    },
    // allDataMaintenance() {
    //   return this.$store.state.maintenanceSecurity.allDataMaintenance
    // }
  },
  methods: {
    async fillDataSuhu(){
      const lokasi = this.$auth.user.lokasi
      try {
        const resp = await this.$axios.get(
          `/maintenance/security/alldata/${lokasi}`
        )
        if (resp.data) {
          const daftarLabel = resp.data.map(list => moment(list.tanggal).format('YYYY-MM-DD'))
          const daftarSuhu = resp.data.map(list => list.suhu)
          this.barcharlabel = daftarLabel
          this.barchardata = daftarSuhu
          
          // this.Datasuhuline = daftarSuhu
          // this.Optionsuhuline = daftarLabel

          this.chartData = {
            labels: this.barcharlabel,
            datasets: [
              {
                label: "suhu",
                backgroundColor: 'rgb(147, 197, 254)',
                borderColor: "rgb(100,200,225)",
                pointBackgroundColor:"rgb(100,100,100)",
                data: this.barchardata,
                fill: true
              }
            ]
          },
           this.options = {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              yAxes: [{
                display: true,
                title: {
                  display: true,
                  text: 'Suhu',
                  color: '#911',
                },
                ticks: {
                  beginAtZero: true,
                  max:50,
                  color: "#E8EAF6",
                },
                grid: {
                  color: "rgb(232, 234, 246)"
                },
              }],
              xAxes:[{
                ticks: {
                  color: "#E8EAF6",
                  min:this.barcharlabel[this.barcharlabel.length-9],
                  max:this.barcharlabel[this.barcharlabel.length-1],
                },
                grid: {
                  color: "rgb(232, 234, 246)",
                },
              }],
            },
          }
        } 
      } catch (err) {
        console.log(err)
      }
    },
    async fillDataKelembapan(){
      const lokasi = this.$auth.user.lokasi
      try {
        const resp = await this.$axios.get(
          `/maintenance/security/alldata/${lokasi}`
        )
        if (resp.data) {
          const daftarLabel = resp.data.map(list => moment(list.tanggal).format('YYYY-MM-DD'))
          const daftarKelembapan = resp.data.map(list => list.kelembapan)
          this.kelembapanlabel = daftarLabel
          this.kelembapandata = daftarKelembapan

          this.kelembapans = {
            labels: this.kelembapanlabel,
            datasets: [
              {
                label: "kelembapan",
                backgroundColor: 'rgb(252, 165, 165)',
                borderColor: "rgb(225,150,140)",
                pointBackgroundColor:"rgb(100,100,100)",
                data: this.kelembapandata,
                fill: true
              }
            ]
          },
           this.optionKelem = {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              yAxes: [{
                beginAtZero: true,
                display: true,
                title: {
                  display: true,
                  text: 'Day',
                  color: '#333',
                },
                ticks: {
                  min:0,
                  max:80,
                  color: "#E8EAF6",
                },
                grid: {
                  color: "rgb(232, 234, 246)"
                },
              }],
              xAxes: [{
                title: {
                  display: true,
                  text: 'Day',
                  color: '#333',
                },
                ticks: {
                  color: "#E8EAF6",
                  min:this.kelembapanlabel[this.kelembapanlabel.length-9],
                  max:this.kelembapanlabel[this.kelembapanlabel.length-1],
                },
                grid: {
                  color: "rgb(232, 234, 246)"
                },
              }],
            }
          }
        } 
      } catch (err) {
        console.log(err)
      }
    },

    nextData(start,end){
      const d = new Date(this.options.scales.xAxes[0].ticks.min)
      d.setDate(d.getDate()+start)
      var nd = new Date(d)
      var nd2 = this.$moment(nd).format('YYYY-MM-DD')
      console.log(nd2)

      const a = new Date(this.options.scales.xAxes[0].ticks.max)
      a.setDate(a.getDate()+end)
      var dn = new Date(a)
      var dn2 = this.$moment(dn).format('YYYY-MM-DD')
      console.log(dn2)

      const startScale = nd2
      const endScale = dn2
      const s = this.barcharlabel.indexOf(startScale)
      const t = this.barcharlabel.indexOf(endScale)

      this.options.scales.xAxes[0].ticks.min = this.barcharlabel[s]
      this.options.scales.xAxes[0].ticks.max = this.barcharlabel[t]
      
      if(endScale > this.barcharlabel[this.barcharlabel.length-1]){
        this.options.scales.xAxes[0].ticks.min = this.barcharlabel[this.barcharlabel.length-9];
        this.options.scales.xAxes[0].ticks.max = this.barcharlabel[this.barcharlabel.length-1];
      }
    },
    prevData(start,end){
      const d = new Date(this.options.scales.xAxes[0].ticks.min)
      d.setDate(d.getDate()+start)
      var nd = new Date(d)
      var nd2 = this.$moment(nd).format('YYYY-MM-DD')
      console.log(nd2)

      const a = new Date(this.options.scales.xAxes[0].ticks.max)
      a.setDate(a.getDate()-end)
      var dn = new Date(a)
      var dn2 = this.$moment(dn).format('YYYY-MM-DD')
      console.log(dn2)

      const startScale = nd2
      const endScale = dn2
      const s = this.barcharlabel.indexOf(startScale)
      const t = this.barcharlabel.indexOf(endScale)

      this.options.scales.xAxes[0].ticks.min = this.barcharlabel[s]
      this.options.scales.xAxes[0].ticks.max = this.barcharlabel[t]

      if(startScale < this.barcharlabel[0]){
        this.options.scales.xAxes[0].ticks.min = this.barcharlabel[0];
        this.options.scales.xAxes[0].ticks.max = this.barcharlabel[9];
      }
    },

    nextDataKelembapan(start,end){
      // menambah tanggal di optionKelem, ditambah dengan 9 hari
      const d = new Date(this.optionKelem.scales.xAxes[0].ticks.min)
      d.setDate(d.getDate()+start)
      var nd = new Date(d)
      var nd2 = this.$moment(nd).format('YYYY-MM-DD')
      console.log(nd2)

      const a = new Date(this.optionKelem.scales.xAxes[0].ticks.max)
      a.setDate(a.getDate()+end)
      var dn = new Date(a)
      var dn2 = this.$moment(dn).format('YYYY-MM-DD')
      console.log(dn2)

      const startScale = nd2
      const endScale = dn2
      const s = this.kelembapanlabel.indexOf(startScale)
      const t = this.kelembapanlabel.indexOf(endScale)

      this.optionKelem.scales.xAxes[0].ticks.min = this.kelembapanlabel[s]
      this.optionKelem.scales.xAxes[0].ticks.max = this.kelembapanlabel[t]
      
      // jika next sudah di tanggal terakhir, maka tetap di data terakhir
      if(endScale > this.kelembapanlabel[this.kelembapanlabel.length-1]){
        this.optionKelem.scales.xAxes[0].ticks.min = this.kelembapanlabel[this.kelembapanlabel.length-9];
        this.optionKelem.scales.xAxes[0].ticks.max = this.kelembapanlabel[this.kelembapanlabel.length-1];
      }
    },
    prevDataKelembapan(start,end){
      const d = new Date(this.optionKelem.scales.xAxes[0].ticks.min)
      d.setDate(d.getDate()+start)
      var nd = new Date(d)
      var nd2 = this.$moment(nd).format('YYYY-MM-DD')
      console.log(nd2)

      const a = new Date(this.optionKelem.scales.xAxes[0].ticks.max)
      a.setDate(a.getDate()-end)
      var dn = new Date(a)
      var dn2 = this.$moment(dn).format('YYYY-MM-DD')
      console.log(dn2)

      const startScale = nd2
      const endScale = dn2
      const s = this.kelembapanlabel.indexOf(startScale)
      const t = this.kelembapanlabel.indexOf(endScale)

      this.optionKelem.scales.xAxes[0].ticks.min = this.kelembapanlabel[s]
      this.optionKelem.scales.xAxes[0].ticks.max = this.kelembapanlabel[t]

      if(startScale < this.kelembapanlabel[0]){
        this.optionKelem.scales.xAxes[0].ticks.min = this.kelembapanlabel[0];
        this.optionKelem.scales.xAxes[0].ticks.max = this.kelembapanlabel[9];
      }
    }

  },
  mounted(){
    this.fillDataSuhu(),
    this.fillDataKelembapan()
    
    const data = {
      lokasi : this.$auth.user.lokasi
    }
    this.$store.dispatch('maintenanceSecurity/getSecurity',data)
    this.$store.dispatch('maintenanceSecurity/getAllMaintenanceSecurity',data)
  },
}
</script>

<style>
</style>