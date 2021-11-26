<template>
  <div class="bg-gray-300 min-h-screen w-widthContent ml-auto">
    <Navbar/>
    <section class="bg-gray-100 min-h-screen w-widthContentField m-auto mt-7 p-4 ">
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
                      w-44
                      text-white
                      absolute -top-7 left-8
                    "
                    >hasil maintenance baterai</span
                  >
                  <div class="bg-gray-700 w-8 h-8 rounded-xl flex items-center justify-center">
                    <font-awesome-icon
                        :icon="['fas', 'battery-three-quarters']"
                        class="text-gray-200 text-lg z-10"
                    />
                  </div>
                  <h1 class="text-xl font-semibold">{{hasilMaintenanceSecurity.ups}}%</h1>
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
            <div>
              <BarChartsuhu :chart-data="chartData" :options="options"/>
            </div>
              <!-- <BarChartdata :labels="labels" :chartData="suhus"/> -->
            <div class="mt-10">
              <BarChartkelembapan :chart-data="kelembapans" :options="optionKelem"/>
            </div>
          </div>
        </div>       
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'

export default {
  middleware: 'isAuthenticated',
  data() {
    return {
      message: '',
      errors: null,
      labels:[],
      suhus:[],
      kelembapans:null,
      chartData:null,
      options:{},
      optionKelem:{},
    }
  },
  computed: {
    loggedIn() {
      return this.$auth.loggedIn
    },
    user() {
      return this.$auth.user
    },
    // isAuthenticated(){
    //     return this.$auth.getters.isAuthenticated
    // },
    // getUserInfo(){
    //     return this.$auth.getters.getUserInfo
    // }
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
    async logout() {
      await this.$auth.logout()
      localStorage.setItem("app-logout", 'logout' + Math.random())
      return true
    },
    async fillData(){
      const lokasi = this.$auth.user.lokasi
      try {
        const resp = await axios.get(
          `http://localhost:3000/server/maintenance/security/alldata/${lokasi}`
        )
        if (resp.data) {
          const daftarLabel = resp.data.map(list => moment(list.tanggal).format('DD-MM-YYYY'))
          const daftarSuhu = resp.data.map(list => list.suhu)
          // const daftarSuhu = resp.data.map(list => list.suhu)
          this.chartData = {
            labels: daftarLabel,
            datasets: [
              {
                label: "suhu",
                backgroundColor: 'rgb(147, 197, 254)',
                borderColor: "rgb(100,200,225)",
                pointBackgroundColor:"rgb(100,100,100)",
                data: daftarSuhu,
                fill: true
              }
            ]
          },
           this.options = {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              y: {
                // stacked: true,
                beginAtZero: true,
                ticks: {
                  color: "#E8EAF6",
                },
                grid: {
                  color: "rgb(232, 234, 246)"
                },
              },
              x: {
                ticks: {
                  color: "#E8EAF6",
                },
                grid: {
                  color: "rgb(232, 234, 246)"
                }
              }
            }
          }
          // resp.data.forEach(data => {
          //   this.labels.push(data.tanggal.toString());
          //   this.suhus.push(data.suhu.toString())
          //   this.kelembapans.push(data.kelembapan.toString())
          // })
        } 
      } catch (err) {
        console.log(err)
      }
    },
     async fillDataKelembapan(){
      const lokasi = this.$auth.user.lokasi
      try {
        const resp = await axios.get(
          `http://localhost:3000/server/maintenance/security/alldata/${lokasi}`
        )
        if (resp.data) {
          const daftarLabel = resp.data.map(list => moment(list.tanggal).format('DD-MM-YYYY'))
          const daftarKelembapan = resp.data.map(list => list.kelembapan)
          this.kelembapans = {
            labels: daftarLabel,
            datasets: [
              {
                label: "kelembapan",
                backgroundColor: 'rgb(252, 165, 165)',
                borderColor: "rgb(225,150,140)",
                pointBackgroundColor:"rgb(100,100,100)",
                data: daftarKelembapan,
                fill: true
              }
            ]
          },
           this.optionKelem = {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              y: {
                // stacked: true,
                beginAtZero: true,
                ticks: {
                  color: "#E8EAF6",
                },
                grid: {
                  color: "rgb(232, 234, 246)"
                },
              },
              x: {
                ticks: {
                  color: "#E8EAF6",
                },
                grid: {
                  color: "rgb(232, 234, 246)"
                }
              }
            }
          }
        } 
      } catch (err) {
        console.log(err)
      }
    }
  },
  mounted(){
    this.fillData(),
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