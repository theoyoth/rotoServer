<template>
  <div class="bg-gray-300 min-h-screen w-widthContent ml-auto">
    <!-- <InputHeader item="AC"/> -->
    <Navbar/>
    <section class="bg-gray-100 min-h-screen w-widthContentField m-auto mt-7 p-4 ">
        <NuxtLink to="/infouser"
          class="group flex items-center justify-between rounded-md w-28 px-4 py-2 bg-gray-700 ">
          <div class="transform transition ease-in duration-300 group-hover:-translate-x-2">
            <font-awesome-icon :icon="['fas', 'arrow-left']" class="text-gray-200" />
          </div>
          <p class="font-medium text-sm text-gray-200 group-hover:translate-x-2">kembali</p>
        </NuxtLink> 
        <!-- <p class="text-center text-xl text-gray-700 font-semibold">Input User baru</p> -->

    <ValidationObserver v-slot={invalid,valid}>
    <form class="mt-4 min-w-min bg-gray-300 w-1/2 h-1/2 mx-auto rounded-xl py-8" @submit.prevent="inputUserBaru">
        <div class="w-3/4 mx-auto rounded-lg">
        <h1 class="text-center font-semibold text-xl mb-5">Register user</h1>
            <div class="flex flex-col">
                <div class="mb-4 has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan nama user</span>

                    <label for="merek" class="block mb-2 text-sm">nama</label>
                    <div class="flex flex-col">
                      <ValidationProvider rules="required|alpha_spaces" v-slot={errors}>
                            <input type="text" v-model="inputUser.nama" name="merek" id="merek" class="p-2 w-full rounded-lg outline-none bg-gray-200">
                          <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                      </ValidationProvider>
                    </div>
                </div>
                <div class="mb-4 has-tooltip" :class="[inputUser.nama !== '' ? 'incop' : 'decop']">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan role</span>

                    <label for="merek" class="block mb-2 text-sm">role</label>
                    <div class="flex flex-col">
                          <select name="role" id="role" class="p-2 w-full rounded-lg" v-model="inputUser.role">
                              <option value="EDP">EDP</option>
                              <option value="PA">PA</option>
                              <option value="Admin teknisi">admin teknisi</option>
                              <option value="Teknisi listrik">teknisi listrik</option>
                              <option value="Teknisi ac">teknisi AC</option>
                              <option value="Security">security</option>
                          </select> 
                    </div>
                </div>
                <div class="mb-4 has-tooltip" :class="[inputUser.role !== '' ? 'incop' : 'decop']">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan password</span>

                    <label for="model" class="block mb-2 text-sm">sandi</label>
                    <div class="flex flex-col">
                      <div v-if="inputUser.role == 'Admin teknisi' || inputUser.role == 'Teknisi listrik' || inputUser.role == 'Teknisi ac' || inputUser.role == 'Security'">
                        <ValidationProvider rules="required" v-slot={errors} vid="confirm">
                          <div class="flex">
                            <input :type="passwordFieldType" v-model="inputUser.sandi" name="model" id="model" class="p-2 w-full rounded-l-lg outline-none bg-gray-200">
                            <div type="password" class="flex cursor-pointer items-center p-2 bg-gray-200 rounded-r-lg" @click="showpassword();changeicon();">
                             <font-awesome-icon :icon="eyeIcon" class="text-gray-700"/>
                            </div>
                          </div>
                        <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                      </div>
                      <div v-if="inputUser.role == 'PA' || inputUser.role == 'EDP'">
                        <ValidationProvider rules="required|min:8" v-slot={errors} vid="confirm">
                          <div class="flex">
                            <input :type="passwordFieldType" v-model="inputUser.sandi" name="model" id="model" class="p-2 w-full rounded-l-lg outline-none bg-gray-200">
                            <div type="password" class="flex cursor-pointer items-center p-2 bg-gray-200 rounded-r-lg" @click="showpassword();changeicon();">
                             <font-awesome-icon :icon="eyeIcon" class="text-gray-700"/>
                            </div>
                          </div>
                        <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                      </div>
                    </div>
                </div>
                <div class="mb-4 has-tooltip" :class="[inputUser.sandi !== '' ? 'incop' : 'decop']">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">konfirmasi password</span>

                    <label for="model" class="block mb-2 text-sm">konfirmasi sandi</label>
                    <div class="flex flex-col">
                        <ValidationProvider v-slot={errors}  rules="required|confirmed:confirm">
                            <input type="password" v-model="inputUser.confirm" name="model" class="p-2 w-full rounded-lg outline-none bg-gray-200">
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
                
            </div>
        <button class="opacity-10 cursor-default mt-5 m-auto bg-gray-700 text-gray-200 w-full py-2 rounded" type="submit" :class="{activesubmit : valid}" :disabled="invalid">tambah</button>
        </div>
    </form>
    </ValidationObserver>
</section>
</div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
import { ValidationObserver, ValidationProvider } from "vee-validate";
export default {
   middleware:"isAuthenticated",
    components:{
        ValidationObserver,
        ValidationProvider
    },
    data(){
      return{
        checked:"",
        passwordFieldType:"password",
        ruleIcon: 'asc',
        inputUser:{
          nama: "",
          role : "",
          sandi: "",
          confirm : "",
        }
      }
    },
    computed: {
		eyeIcon () {
			return this.ruleIcon === 'asc' ? ['fas', 'eye'] : ['fas', 'eye-slash'];
		  },
      user(){
        return this.$auth.user
      },
	  },
    methods:{
      async inputUserBaru(){
        try{ 
          const resp = await axios.post('http://localhost:3000/server/user/tambah',{
            namauser:this.inputUser.nama,
            roleuser:this.inputUser.role,
            sandi:this.inputUser.sandi,
          })
          if(resp){
            this.$router.push('/infouser')
            swal('user berhasil ditambah',{icon:'success'})
          }
          else{
            this.$router.push('/infouser/inputuser')
            swal('Error',resp.data.errmsg,{icon:'error'})
          }
        }
        catch(err) {
          console.log(err)
        }
      },
      showpassword(){
        this.passwordFieldType = this.passwordFieldType == 'password' ? 'text' : 'password' 
      },
      changeicon () {
			this.ruleIcon = this.ruleIcon === 'asc' ? 'desc' : 'asc';
		  },
      
    }
}
</script>

<style>
.incop{
    opacity:1,
}
.decop{
    opacity: 0.1;
}
.activesubmit {
    background-color: rgb(37, 45, 56);
    color:whitesmoke;
    cursor:pointer;
    width:100%;
    opacity:1;
    padding-top: .5rem;
    padding-bottom: .5rem;
    transition: all 0.5s;
}
</style>