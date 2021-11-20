<template>
  <div class="min-h-screen bg-gray-300 w-widthContent ml-auto">
    <!-- <InputHeader item="AC"/> -->
    <Navbar/>

    <section class="bg-gray-100 min-h-screen w-widthContentField m-auto mt-7 p-4">
         <NuxtLink to="/infouser"
          class="flex items-center justify-between rounded-md w-28 px-4 py-2 bg-gray-700">
          <div>
            <font-awesome-icon :icon="['fas', 'arrow-left']" class="text-gray-200" />
          </div>
          <p class="font-medium text-sm text-gray-200">kembali</p>
        </NuxtLink> 
    <form @submit.prevent="updateDataUser" class="mt-4 min-w-min bg-gray-300 w-1/2 h-1/2 mx-auto rounded-xl py-8">
        <div class="w-3/4 mx-auto rounded-lg">
        <h1 class="text-center font-semibold text-xl mb-5">Update user</h1>
            <div class="flex flex-col">
                <div class="mb-4">
                    <label for="merek" class="block mb-2 text-sm">nama</label>
                    <input type="text" v-model="updateUser.nama" name="nama" id="nama" class="p-2 w-full rounded-lg outline-none bg-gray-200">
                </div>
                <div class="mb-4">
                    <label for="role" class="block mb-2 text-sm">role</label>
                    <div class="flex flex-col">
                          <select name="role" class="p-2 w-full rounded-lg" v-model="updateUser.role" >
                              <option value="EDP">EDP</option>
                              <option value="PA">PA</option>
                              <option value="Admin teknisi">admin teknisi</option>
                              <option value="Teknisi listrik">teknisi listrik</option>
                              <option value="Teknisi ac">teknisi AC</option>
                              <option value="Security">security</option>
                          </select> 
                    </div>
                </div>
                 <div class="mb-4">
                    <label for="sandi" class="block mb-2 text-sm">sandi</label>
                    <input type="text" v-model="updateUser.sandi" name="sandi" id="sandi" class="p-2 w-full rounded-lg outline-none bg-gray-200">
                </div>
            </div>
        <button class="bg-gray-700 text-gray-200 mt-5 rounded-lg w-full h-10" type="submit">ubah</button>
        </div>
    </form>
</section>
</div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'

export default {
  middleware:"isAuthenticated",
  data(){
        return{
            updateUser:{
               nama:"",
               role:"",
               sandi:"",
            }
        }
    },
    async mounted(){
        const id = this.$route.params.id

        const resp = await axios.get(`http://localhost:3000/server/user/${id}`)
        if(resp){
            resp.data.forEach(user=>{
                this.updateUser.nama = user.nama
                this.updateUser.role = user.role
                this.updateUser.sandi = user.sandi
            })
        }
    },
    methods:{
        async updateDataUser(){
            const resp = await axios.post('http://localhost:3000/server/user/update',{
            iduser:this.$route.params.id,
            nama:this.updateUser.nama,
            role:this.updateUser.role,
            sandi:this.updateUser.sandi,

          })
          if(resp){
                this.$router.push('/infouser')
                swal('data di update',{icon:'success'})
            }
            else{
                swal('Error',resp.data.errmsg,{icon:'error'})
                this.$router.push('/infouser')
            }
        }
    }
}
</script>

<style>

</style>