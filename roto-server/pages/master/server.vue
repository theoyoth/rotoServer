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
            v-model.lazy="caribarang"
            class="rounded-l-lg p-2 w-52 outline-none bg-gray-200" @keyup.enter="$fetch"
          />
          <button
            class="
              p-2
              rounded-r-lg
              bg-gray-700
              flex
              items-center
              justify-center
              w-12
            "
            @click="$fetch"
          >
            <font-awesome-icon :icon="['fas', 'search']" class="text-yellow-500" />
          </button>
        </div>
        <!-- <select id="date" class="rounded-lg p-2 outline-none ml-8 cursor-pointer">
              <option value="hari">hari</option>
              <option value="bulan">bulan</option>
              <option value="tahun">tahun</option>
          </select> -->
        <NuxtLink to="/master/input/inputserver"
          class="flex items-center justify-between rounded-md px-3 w-20 bg-gray-700 hover:shadow-lg transition duraiton-300">
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
            <th class="font-semibold py-3">Merek</th>
            <th class="font-semibold py-3">Model</th>
            <th class="font-semibold" >Processor</th>
            <th class="font-semibold">memori</th>
            <th class="font-semibold">garansi</th>
            <th class="font-semibold w-20">aksi</th>
          </tr>
        </thead>
        <tbody
          v-if="caribarang !== ''"
          class="text-center bg-white bg-opacity-40 divide-y divide-gray-300">
          <tr class="text-sm" v-for="(hasilcari, index) in hasilcariserver" :key="index">
            <td>{{index+1}}</td>
            <td>{{ $moment().format('YYYY-MM-DD') }}</td>
            <td class="w-32">{{ hasilcari.merek }}</td>
            <td class="w-32">{{ hasilcari.model }}</td>
            <td class="w-20">{{ hasilcari.processor }}</td>
            <td class="w-20">{{ hasilcari.memori }}</td>
            <td class="text-xs w-24">
              {{ $moment(hasilcari.garansi).format('DD-MM-YYYY') }}
            </td>
            <td class="py-3 flex justify-around w-full bg-gray-700">
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
          <tr class="text-sm" v-for="(server, index) in servers" :key="index">
            <td>{{index+1}}</td>
            <td>{{ $moment().format('YYYY-MM-DD') }}</td>
            <td class="w-32">{{ server.merek }}</td>
            <td class="w-32">{{ server.model }}</td>
            <td class="w-20">{{ server.processor }}</td>
            <td class="w-20">{{ server.memori }}</td>
            <td class="text-xs w-24">
              {{ $moment(server.garansi).format('DD-MM-YYYY') }}
            </td>
            <td class="py-3 flex justify-around w-full">
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
            cariserver:[],
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
        }
    },
    async fetch(){
        if(this.caribarang !== ""){
            await this.caribarangserver()
        return
        }
    },
    methods:{
        async deleteData(id){
          console.log(this.servers)
           let indexOfArrayItem = this.servers.findIndex(i => i.id_server === id)

          const lokasi = this.$auth.user.lokasi
            const resp = await axios.delete(`http://localhost:3000/server/master/server/delete/${id}/${lokasi}`)
            if(resp) {
              this.servers.splice(indexOfArrayItem, 1);
              this.$router.push('/master/server')
              swal('data dihapus',{icon:'success'})
            }
            
            if(resp.data.errmsg){
              swal('Error','gagal dihapus',{icon:'error'})
              this.deletemsg = resp.data.errmsg
            }
        },
        async caribarangserver(){
          this.cariserver = []
            const res = await axios.get(`http://localhost:3000/server/cariserver/${this.caribarang}/${this.$auth.user.lokasi}`)
            res.data.forEach(val =>{
                this.cariserver.push(val)
          })
        }
    },
    async mounted(){
        const lokasiserver = this.$auth.user.lokasi
        const idlogin = this.$auth.user.id
        try{
            const lokasi = this.$auth.user.lokasi
            const resp = await axios.get(`http://localhost:3000/server/masterserver/${lokasiserver}/${idlogin}`)
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