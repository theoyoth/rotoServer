<template>
  <div class="bg-gray-300 w-widthContent ml-auto">
    <Navbar/>
    <section class="bg-gray-100 min-h-screen w-widthContentField m-auto mt-7 p-4">
      <div class="flex justify-between mt-8 ">
            <div class="flex">
                <input type="text" placeholder="cari" name="cari" v-model.lazy="cariuser" class="rounded-l-lg w-52 p-2 outline-none bg-gray-200" @keyup.enter="getuser">
                <button @click="getuser" class="p-2 rounded-r-lg bg-gray-700 flex items-center justify-center w-12" >
                    <font-awesome-icon :icon="['fas','search']" class="text-yellow-500"/>
                </button>
            </div>
            <!-- <select id="date" ref="date" class="rounded-lg p-2 outline-none ml-8 cursor-pointer">
                <option value="hari">hari</option>
                <option value="bulan">bulan</option>
                <option value="tahun">tahun</option>
            </select> -->
            <NuxtLink to="/infouser/inputuser"
            class="flex items-center justify-between rounded-md px-3 w-20 bg-gray-700">
            <p class="font-medium text-sm text-gray-200">input</p>
            <div>
                <font-awesome-icon :icon="['fas', 'plus']" class="text-gray-200" />
            </div>
            </NuxtLink>
      </div>
        <table class="table space-y-6 container mx-auto table-auto border-collapse w-3/4 mt-10 divide-y divide-gray-300" ref="listitem" id="listitem">
          <thead class="text-sm bg-gray-700">
              <tr class="text-sm text-gray-200"> 
                  <th class="font-semibold py-3 px-2 w-4">no.</th>
                  <th class="font-semibold py-3">nama</th>
                  <th class="font-semibold py-3">role</th>
                  <th class="font-semibold py-3 w-24">aksi</th>

              </tr>
          </thead>
          <tbody v-if="cariuser !== ''" class="text-center bg-white bg-opacity-40 divide-y divide-gray-300">
              <tr class="text-sm" v-for="(hasilcari,index) in hasilcariusers" :key="index">
                  <td>{{index+1}}</td>
                  <td class="py-3">{{hasilcari.nama}}</td>
                  <td>{{hasilcari.role}}</td>
                  <td class="py-3 flex justify-evenly w-full ">
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
                                <NuxtLink :to="{name : 'infouser-update-updateuser', params:{id : hasilcari.id_user} }">
                                    <font-awesome-icon :icon="['fas','pencil-alt']" class="text-yellow-500"/>
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
                                <button @click.prevent="deleteData(hasilcari.id_user)">
                                    <font-awesome-icon :icon="['fas','trash']" class="text-yellow-500"/>
                                </button> 
                            </div>
                        </div>
                    </td>
              </tr>
          </tbody> 
          <tbody v-else class="text-center bg-white bg-opacity-40 divide-y divide-gray-300">
              <tr class="text-sm" v-for="(us,index) in users" :key="index">
                  <td>{{index+1}}</td>
                  <td class="py-3">{{us.nama}}</td>
                  <td>{{us.role}}</td>
                  <td class="py-3 flex justify-evenly w-full ">
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
                                <NuxtLink :to="{name : 'infouser-update-updateuser', params:{id : us.id_user} }">
                                    <font-awesome-icon :icon="['fas','pencil-alt']" class="text-yellow-500"/>
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
                                <button @click.prevent="deleteData(us.id_user)">
                                    <font-awesome-icon :icon="['fas','trash']" class="text-yellow-500"/>
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
import axios from 'axios'

export default {
  middleware:"isAuthenticated",
  data(){
    return {
      users:[],
      hasilcariusers:[],
      cariuser:"",
    }
  },
  methods:{
    async getuser(){
      try{
        const carisiuser = await axios.get(`http://localhost:3000/server/cariuser?cari=${this.cariuser}`)
        if(carisiuser) {
          this.hasilcariusers = carisiuser.data
        }
      }
      catch (err){
        console.log(err)
      }
    },
    async deleteData(id){
            let indexOfArrayItem = this.users.findIndex(i => i.id_user === id)
            
            const resp = await axios.delete(`http://localhost:3000/server/user/delete/${id}`)
            if(resp) {
              this.users.splice(indexOfArrayItem, 1);
              this.$router.push('/infouser')
              swal('data dihapus',{icon:'success'})
            }
            if(resp.data.errmsg){
                this.$router.push('/infouser')
                swal('Error',resp.data.errmsg,{icon:'error'})
            }
        },
  },
  async mounted(){
    try {
      const resp = await axios.get('http://localhost:3000/server/users')
      if (resp.data){
        this.users = resp.data
      }
      
    } catch(err) {
      console.log(err)
    }
  }
}
</script>

<style>

</style>