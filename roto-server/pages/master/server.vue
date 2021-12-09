<template>
  <div class="bg-gray-300 min-h-screen w-widthContent ml-auto overflow-x-hidden">
    <!-- <HeaderListItem :server="master.nama" /> -->
    <Navbar />
    <section class="bg-gray-100 min-h-screen w-widthContentField m-auto mt-7 p-4">
      <p class="text-center text-lg text-gray-700 font-semibold">Halaman master server</p>

      <div class="flex justify-between mt-8">
        <div class="flex">
          <input
            type="text"
            placeholder="cari"
            name="cari"
            v-model="caribarang"
            class="transition-all duration-200 ease-in-out rounded-l-lg p-2 outline-none bg-gray-200 outline-none w-40 w-52 focus:ring-2 focus:ring-gray-700"
          />
          <button
            class="
              p-2
              rounded-r-lg
              bg-gray-700
              flex
              cursor-default
              items-center
              justify-center
              w-12
            "
          >
            <font-awesome-icon :icon="['fas', 'search']" class="text-yellow-500" />
          </button>
        </div>
        <NuxtLink to="/master/input/inputserver"
          class="flex items-center justify-between rounded-md px-3 w-20 bg-gray-700 hover:shadow-lg hover:bg-gray-600 transition duraiton-200">
          <p class="font-medium text-sm text-gray-200">input</p>
          <div>
            <font-awesome-icon :icon="['fas', 'plus']" class="text-gray-200" />
          </div>
        </NuxtLink>
      </div>

      <table
        class="
          table
          space-y-6
          container
          mx-auto
          table-auto
          border-collapse
          mt-7 divide-y divide-gray-300
        "
      >
        <thead class="bg-gray-700 text-sm has-tooltip">
          <span
            class="
              tooltip
              rounded
              shadow-lg
              p-1
              bg-gray-700
              text-white
              -mt-10
              absolute
              left-2/4
              transform
              -translate-x-2/4
            "
            >semua detail barang</span
          >
          <tr class="text-xs text-gray-200">
            <th class="font-semibold py-3 px-2 w-4">no.</th>
            <th class="font-semibold py-3 w-24">Tanggal input</th>
            <th class="font-semibold py-3 w-44">Merek</th>
            <th class="font-semibold py-3 w-44">Model</th>
            <th class="font-semibold w-44">Processor</th>
            <th class="font-semibold">memori</th>
            <th class="font-semibold w-32">garansi</th>
            <th class="font-semibold w-24">aksi</th>
          </tr>
        </thead>
        <tbody
          v-if="caribarang !== ''"
          class="text-center bg-white bg-opacity-40 divide-y divide-gray-300">
          <tr class="text-sm uppercase" v-for="(hasilcari, index) in filteredList" :key="index">
            <td>{{index+1}}</td>
            <td>{{ $moment().format('DD-MM-YYYY') }}</td>
            <td>{{ hasilcari.merek }}</td>
            <td>{{ hasilcari.model }}</td>
            <td>{{ hasilcari.processor }}</td>
            <td>{{ hasilcari.memori }}</td>
            <td class="text-xs">
              {{ $moment(hasilcari.garansi).format('DD-MM-YYYY') }}
            </td>
            <td class="py-3 flex justify-between w-full lowercase">
              <div class="has-tooltip">
                <span
                  class="
                    tooltip
                    rounded
                    text-xs
                    shadow-lg
                    p-1
                    bg-gray-700
                    text-white
                    mt-7 -ml-5
                  "
                  >detail</span
                >
                <div class="bg-gray-700 w-7 h-7 rounded-xl flex items-center justify-center">
                  <NuxtLink
                    :to="{
                      name: 'master-detail-detailserver-detailserver',
                      params: { id: hasilcari.id_server },
                    }"
                  >
                    <font-awesome-icon
                      :icon="['fas', 'eye']"
                      class="text-yellow-500"
                    />
                  </NuxtLink>
                </div>
              </div>
              <div class="has-tooltip">
                <span
                  class="
                    tooltip
                    rounded
                    text-xs
                    shadow-lg
                    p-1
                    bg-gray-700
                    text-white
                    mt-7 -ml-4
                  "
                  >edit</span
                >
                <div class="bg-gray-700 w-7 h-7 rounded-xl flex items-center justify-center">
                  <NuxtLink
                    :to="{
                      name: 'master-update-updateserver-server',
                      params: { id: hasilcari.id_server },
                    }"
                  >
                    <font-awesome-icon
                      :icon="['fas', 'pencil-alt']"
                      class="text-yellow-500"
                    />
                  </NuxtLink>
                </div>
              </div>
              <div class="has-tooltip">
                <span
                  class="
                    tooltip
                    rounded
                    text-xs
                    shadow-lg
                    p-1
                    bg-gray-700
                    text-white
                    mt-7 -ml-4
                  "
                  >hapus</span
                >
                <div class="bg-gray-700 w-7 h-7 rounded-xl flex items-center justify-center">
                  <button @click="deleteData(hasilcari.id_server)">
                    <font-awesome-icon
                      :icon="['fas', 'trash']"
                      class="text-yellow-500"
                    />
                  </button>
                </div>
              </div>
            </td>
          </tr>
        </tbody>

        <tbody v-else class="text-center bg-white bg-opacity-40 divide-y divide-gray-300">
          <tr class="text-sm uppercase" v-for="(server, index) in servers" :key="index">
            <td>{{index+1}}</td>
            <td>{{ $moment().format('DD-MM-YYYY') }}</td>
            <td>{{ server.merek }}</td>
            <td>{{ server.model }}</td>
            <td>{{ server.processor }}</td>
            <td>{{ server.memori }}</td>
            <td class="text-xs">
              {{ $moment(server.garansi).format('DD-MM-YYYY') }}
            </td>
            <td class="py-3 flex justify-between w-full lowercase">
              <div class="has-tooltip">
                 <span
                  class="
                    tooltip
                    rounded
                    text-xs
                    shadow-lg
                    p-1
                    bg-gray-700
                    text-white
                    mt-7 -ml-5
                  "
                  >detail</span
                >
                <div class="bg-gray-700 w-7 h-7 rounded-xl flex items-center justify-center">
                  <NuxtLink
                    :to="{
                      name: 'master-detail-detailserver-detailserver',
                      params: { id: server.id_server },
                    }"
                  >
                    <font-awesome-icon
                      :icon="['fas', 'eye']"
                      class="text-yellow-500"
                    />
                  </NuxtLink>
                </div>
              </div>
              <div class="has-tooltip">
                <span
                  class="
                    tooltip
                    rounded
                    text-xs
                    shadow-lg
                    p-1
                    bg-gray-700
                    text-white
                    mt-7 -ml-4
                  "
                  >edit</span
                >
                <div class="bg-gray-700 w-7 h-7 rounded-xl flex items-center justify-center">
                  <NuxtLink
                    :to="{
                      name: 'master-update-updateserver-server',
                      params: { id: server.id_server },
                    }"
                  >
                    <font-awesome-icon
                      :icon="['fas', 'pencil-alt']"
                      class="text-yellow-500"
                    />
                  </NuxtLink>
                </div>
              </div>
              <div class="has-tooltip">
              <span
                  class="
                    tooltip
                    rounded
                    text-xs
                    shadow-lg
                    p-1
                    bg-gray-700
                    text-white
                    mt-7 -ml-4
                  "
                  >hapus</span
                >
                <div class="bg-gray-700 w-7 h-7 rounded-xl flex items-center justify-center">
                  <button @click.prevent="deleteData(server.id_server)">
                      <font-awesome-icon
                        :icon="['fas', 'trash']"
                        class="text-yellow-500"
                      />
                  </button>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script>
import axios from "axios"
import moment from "moment"
export default {
  middleware:"isAuthenticated",
    data(){
        return{
            caribarang:"",
            hasilcariserver:[],
            servers:[],
            master:{
                nama : "inputServer",
            },
            deletemsg:"",
        }
    },
    computed: {
        user(){
          return this.$auth.user
        },
        filteredList() {
          return this.servers.filter(hasil=>{
            if(hasil.merek.toLowerCase().includes(this.caribarang.toLowerCase()) || hasil.model.toLowerCase().includes(this.caribarang.toLowerCase()) || hasil.processor.toLowerCase().includes(this.caribarang.toLowerCase()) || hasil.memori.toString().includes(this.caribarang.toString())){
              return hasil
            }
          })
        }
    },
    methods:{
        deleteData(id){
          swal({
                title: 'anda yakin?',
                text: 'sekali dihapus, data tidak akan bisa kembali',
                icon: 'warning',
                buttons: true,
                dangerMode: true
            }).then(suc=>{
              if(suc){
                let indexOfArrayItem = this.servers.findIndex(i => i.id_server === id)

                const lokasi = this.$auth.user.lokasi
                  this.$axios.delete(`/master/server/delete/${id}/${lokasi}`)
                  .then(resp=>{
                    if(resp) {
                      this.servers.splice(indexOfArrayItem, 1);
                      this.$router.push('/master/server')
                      swal('data dihapus',{icon:'success'})
                    }
                  }).catch(err=>{
                    if(err.data.errmsg){
                      swal('Error','gagal dihapus',{icon:'error'})
                      this.deletemsg = err.data.errmsg
                    }
                  })
              } else{
                    swal('Error','gagal menghapus',{icon:'error'})
                }
            }).catch(err=>{
                swal('Error','ada yang salah',{icon:'error'})
            })
        },
    },
    async mounted(){
        const lokasiserver = this.$auth.user.lokasi
        const idlogin = this.$auth.user.id
        try{
            const resp = await this.$axios.get(`/masterserver/${lokasiserver}/${idlogin}`)
            resp.data.reverse()
            resp.data.forEach(server => {
                this.servers.push(server)
            })
        }
        catch(err){
            console.error(err);
        };
    },

}
</script>

<style lang=scss>
</style>