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
          <form @submit.prevent="userForgotPassword">
            <label for="resetpassword"  class="block text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">Email</label>
            <ValidationProvider rules="required|email" v-slot={errors}>
            <input type="email" id="resetpassword" name="resetpassword" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" v-model="email">
            <p class="text-xs text-right mt-1 text-red-500">{{errors[0]}}</p>
            </ValidationProvider>
            <div class="text-center mt-6">
              <button
                class="opacity-10 px-6 bg-gray-700 text-gray-200 py-2 rounded cursor-default mt-2 w-full"
                type="submit" :class="{activesubmit : valid}" :disabled="invalid"
              >
                Kirim ke email
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
  data(){
    return{
      email:"",
    }
  },
  components:{
    ValidationObserver,
    ValidationProvider,
  },
  methods:{
    async userForgotPassword(){
      const resp = await this.$axios.post('/forgot',{
        email:this.email,
      })
      console.log(resp)
    }
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