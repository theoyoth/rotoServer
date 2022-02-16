<template>
<div class="px-4 h-screen w-screen relative">
  <div class="background absolute top-0 left-0 bg-gray-800 w-full h-screen"></div>
  <div class="flex content-center items-center justify-center h-full">
      <div class="w-full lg:w-4/12 px-4">
        <div
          class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-200"
        >
        <div class="flex-auto items-center justify-center px-4 lg:px-10 py-10">
          <div class="text-gray-800 text-center mb-5 font-bold">
            <h1 class="text-xl">Reset Password</h1>
          </div>
          <ValidationObserver v-slot={invalid,valid}>
          <form @submit.prevent="userResetPassword">
            <div class="mb-4 has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">masukan sandi baru</span>
                    <label for="model" class="block mb-2 text-sm">sandi baru</label>
                    <div class="flex flex-col">
                      <div>
                        <ValidationProvider rules="required|min:8" v-slot={errors} vid="confirm">
                          <div class="flex">
                            <input :type="passwordFieldType" v-model="resetPas.sandibaru" name="model" id="model" class="p-2 w-full rounded-l-lg outline-none bg-gray-300">
                            <div type="password" class="flex cursor-pointer items-center p-2 bg-gray-300 rounded-r-lg" @click="showpassword();changeicon();">
                             <font-awesome-icon :icon="eyeIcon" class="text-gray-700"/>
                            </div>
                          </div>
                        <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                      </div>
                    </div>
                </div>
                <div class="mb-4 has-tooltip">
                    <span class="tooltip text-xs rounded shadow-lg p-1 bg-gray-700 text-white ml-32">konfirmasi sandi</span>

                    <label for="model" class="block mb-2 text-sm">konfirmasi sandi</label>
                    <div class="flex flex-col">
                        <ValidationProvider v-slot={errors}  rules="required|confirmed:confirm">
                            <input type="password" v-model="resetPas.konfirmasisandibaru" name="model" class="p-2 w-full rounded-lg outline-none bg-gray-300">
                            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                </div>
            <div class="text-center mt-6">
              <button
                class="opacity-10 px-6 bg-gray-700 text-gray-200 py-2 rounded cursor-default mt-2 w-full"
                type="submit" :class="{activesubmit : valid}" :disabled="invalid"
              >
                ubah sandi
              </button>
            </div>
          </form>
          </ValidationObserver>
        </div>
        </div>
      </div>
    </div>
</div>
</template>

<script>
import { ValidationObserver, ValidationProvider} from "vee-validate";

export default {
  auth:"guest",
  props:['tokenuser'],
  data(){
    return{
      resetPas:{
        sandibaru:"",
        konfirmasisandibaru:"",
      },
      passwordFieldType:"password",
      ruleIcon: 'asc',
    }
  },
  components:{
    ValidationObserver,
    ValidationProvider,
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
    async userResetPassword(){
      const resp = await this.$axios.post(`/resetpassword`,{
        sandibaru:this.resetPas.sandibaru,
        token:this.tokenuser,
      })
      if(resp.data){
        swal('sandi berhasil di ubah',{ icon: 'success'})
        this.$router.push('/')
      }
      else{ 
        swal('Error','sandi gagal di ubah',{ icon: 'error'})
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

<style lang="scss">
 .background{
    background-image: url('~assets/img/auth.png');
    background-size: cover;
  }
  .activesubmit {
        background-color: rgb(55, 65, 81);
        color:whitesmoke;
        cursor:pointer;
        opacity:1;
        padding-top: .5rem;
        padding-bottom: .5rem;
        transition: all 0.5s;
        transform:translateY(4px);
    }
</style>