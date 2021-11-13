<template>
  <div class="bg-hero min-h-screen">
    <HeaderListItem :server="master.nama" />
    <p class="text-center text-lg">Halaman master server</p>

    <div class="container mx-auto flex mt-8">
      <div class="flex">
        <input
          type="text"
          placeholder="cari"
          name="cari"
          v-model.lazy="caribarang"
          class="rounded-l-lg p-2 outline-none" @keyup.enter="caribarangserver"
        />
        <button
          class="
            p-2
            rounded-r-lg
            bg-gray-400
            flex
            items-center
            justify-center
            w-12
          "
          @click="caribarangserver"
        >
          <font-awesome-icon :icon="['fas', 'search']" class="text-white" />
        </button>
      </div>
      <!-- <select id="date" class="rounded-lg p-2 outline-none ml-8 cursor-pointer">
            <option value="hari">hari</option>
            <option value="bulan">bulan</option>
            <option value="tahun">tahun</option>
        </select> -->
    </div>

    <div v-if="deletemsg" class="relative mt-5 w-1/4 text-center m-auto">
      <p class="text-white bg-blue-500 font-semibold p-2 rounded-lg">{{ deletemsg }}</p>
    </div>

    <table
      class="
        table
        space-y-6
        container
        mx-auto
        table-auto
        border-collapse border border-white
        mt-7
      "
    >
      <thead class="bg-white text-sm has-tooltip">
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
        <tr class="text-xs">
          <th class="font-semibold py-3 w-12 border border-gray-600">Tgl input</th>
          <th class="font-semibold py-3 w-12 border border-gray-600">Produk</th>
          <th class="font-semibold py-3 border border-gray-600">Merek</th>
          <th class="font-semibold py-3 border border-gray-600">Model</th>
          <th class="font-semibold border border-gray-600" >Processor</th>
          <th class="font-semibold border border-gray-600">memori</th>
          <th class="font-semibold border border-gray-600">internal storage</th>
          <th class="font-semibold border border-gray-600">network controller</th>
          <th class="font-semibold border border-gray-600">storage</th>
          <th class="font-semibold border border-gray-600">sumber daya listrik</th>
          <th class="font-semibold border border-gray-600">tahun</th>
          <th class="font-semibold border border-gray-600">garansi</th>
          <th class="font-semibold border border-gray-600">aksi</th>
        </tr>
      </thead>
      <tbody
        v-if="caribarang !== ''"
        class="text-center bg-white bg-opacity-40">
        <tr class="text-sm" v-for="(hasilcari, index) in hasilcariserver" :key="index">
          <td>{{ $moment().format('YYYY-MM-DD') }}</td>
          <td>{{ hasilcari.produk }}</td>
          <td>{{ hasilcari.merek }}</td>
          <td>{{ hasilcari.model }}</td>
          <td>{{ hasilcari.processor }}</td>
          <td>{{ hasilcari.memori }}</td>
          <td>{{ hasilcari.internal_storage }}</td>
          <td>{{ hasilcari.network_controller }}</td>
          <td>{{ hasilcari.storage }}</td>
          <td>{{ hasilcari.sumber_daya_listrik }}</td>
          <td class="text-xs">
            {{ $moment(hasilcari.tahun).format('DD-MM-YYYY') }}
          </td>
          <td class="text-xs">
            {{ $moment(hasilcari.garansi).format('DD-MM-YYYY') }}
          </td>
          <td class="py-3 flex w-3">
            <NuxtLink
              :to="{
                name: 'master-update-updateserver-server',
                params: { id: hasilcari.id },
              }"
            >
              <font-awesome-icon
                :icon="['fas', 'pencil-alt']"
                class="text-blue-500"
              />
            </NuxtLink>
            <form
              @click="deleteData(hasilcari.id)"
              class="ml-2"
            >
              <button type="submit">
                <font-awesome-icon
                  :icon="['fas', 'trash']"
                  class="text-red-500"
                />
              </button>
            </form>
          </td>
        </tr>
      </tbody>

      <tbody v-else class="text-center bg-white bg-opacity-40">
        <tr class="text-sm" v-for="(server, index) in servers" :key="index">
          <td class="w-20 border border-gray-600">{{ $moment().format('YYYY-MM-DD') }}</td>
          <td class="w-32 border border-gray-600">{{ server.produk }}</td>
          <td class="w-32 border border-gray-600">{{ server.merek }}</td>
          <td class="w-32 border border-gray-600">{{ server.model }}</td>
          <td class="w-20 border border-gray-600">{{ server.processor }}</td>
          <td class="w-20 border border-gray-600">{{ server.memori }}</td>
          <td class="w-24 border border-gray-600">{{ server.internal_storage }}</td>
          <td class="w-24 border border-gray-600">{{ server.network_controller }}</td>
          <td class="w-20 border border-gray-600">{{ server.storage }}</td>
          <td class="w-32 border border-gray-600">{{ server.sumber_daya_listrik }}</td>
          <td class="text-xs w-24 border border-gray-600">
            {{ $moment(server.tahun).format('DD-MM-YYYY') }}
          </td>
          <td class="text-xs w-24 border border-gray-600">
            {{ $moment(server.garansi).format('DD-MM-YYYY') }}
          </td>
          <td class="py-3 flex justify-around w-full border border-gray-600">
            <NuxtLink
              :to="{
                name: 'master-update-updateserver-server',
                params: { id: server.id_server },
              }"
            >
              <font-awesome-icon
                :icon="['fas', 'pencil-alt']"
                class="text-blue-500"
              />
            </NuxtLink>
            <button @click="deleteData(server.id_server)">
                <font-awesome-icon
                  :icon="['fas', 'trash']"
                  class="text-red-500"
                />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
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
            master:{
                nama : "inputServer",
            },
            deletemsg:"",
        }
    },
    computed: {
        servers() {
            return this.$store.state.masterbarang.servers
        },
        hasilcariserver(){
            return this.$store.state.masterbarang.cariserver
        },
        databerhasil(){
            return this.$store.state.inputmasterbarang.inputData
        }
    },
    methods:{
        async deleteData(id){
          const lokasi = this.$auth.user.lokasi
            const resp = await axios.post(`http://localhost:3000/server/master/server/delete/${id}/${lokasi}`)
            this.$router.push('/master/server')
            swal('data dihapus',{icon:'success'})
            if(resp.data.msg){
              swal('Error','gagal dihapus',{icon:'error'})
              this.deletemsg = resp.data.msg
            }
        },
      caribarangserver(){
            if(this.caribarang !== ""){
                this.$store.dispatch('masterbarang/caribarangserver',this.caribarang)
            return
            }
        }
    },
    mounted(){
        const data = {
          lokasiserver : this.$auth.user.lokasi,
          idlogin : this.$auth.user.id
        }
        this.$store.dispatch('masterbarang/getServersData',data)
    }
}
</script>

<style lang=scss>
</style>