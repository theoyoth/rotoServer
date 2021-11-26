<template>
  <div
    class="bg-gray-300 min-h-screen w-widthContent ml-auto overflow-x-hidden"
  >
    <Navbar />
    <section
      class="bg-gray-100 min-h-screen w-widthContentField m-auto mt-7 p-4"
    >
      <div class="bg-gray-400 p-4">
        <h1 class="text-center text-xl font-semibold mb-2">Upload file</h1>
        <form @submit.prevent="onSubmit" enctype="multipart/form-data">
          <div class="w-full mt-6">
            <div class="relative w-56 mx-auto">
              <label for="file" class="labelinput px-12 py-3 bg-blue-600 rounded-lg cursor-pointer text-gray-100">upload file...
                <input
                  type="file"
                  ref="file"
                  id="file"
                  class="hidden"
                  @change="onSelect" required
                />
                <font-awesome-icon :icon="['fas','upload']" class="text-gray-200"/>
              </label>
            </div>
            <div v-if="file" class="text-center mt-5">{{file.name}}</div>
            <div v-if="message" class="mt-4">
              <p class="text-red-600 text-center">{{ message }}</p>
            </div>
          </div>
          <div class="w-28 mx-auto mt-1">
            <button
              class="w-full mt-4 bg-gray-800 py-2 text-gray-300 rounded" type="submit" >
              Submit
            </button>
          </div>
        </form>
      </div>
      <div class="grid grid-cols-4 mt-5 gap-y-6 place-items-center relative">
        <div v-for="(fil, index) in allfiles" :key="index" class="w-48 h-44 bg-gray-400 rounded-lg relative">
          <div class="w-24 mx-auto transform translate-y-4">
            <img src="~/assets/img/pdf.png" alt="pdf-icon">
          </div>
          <div class="p-2 bg-gray-300 absolute bottom-0 w-full text-center rounded-b-lg">
            <div class="w-full"><p class="text-xs text-center break-words">{{ fil.name }}</p></div>
            <div class="flex">
              <a :href="fil.name" target="_blank">
                <div class="cursor-pointer w-6">
                  <font-awesome-icon :icon="['fas','eye']" class="text-gray-700"/>
                </div>
              </a>

              <div class="cursor-pointer w-6" @click="downloadFile(fil.name)">
                <font-awesome-icon :icon="['fas','download']" class="text-gray-700"/>
              </div>
              <div class="cursor-pointer w-6" @click="deleteFile(fil.name)">
                <font-awesome-icon :icon="['fas','trash']" class="text-gray-700"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <iframe
        src="../../uploads/672018139_1637655401673.pdf"
        frameBorder="0"
        scrolling="auto"
        height="100%"
        width="100%"
    ></iframe> -->
      <!-- <embed src="672018139_1637655401673.pdf" width="800px" height="2100px" /> -->
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import { ValidationObserver, ValidationProvider } from "vee-validate";
// import pdf from 'vue-pdf'
// import VuePdfApp from "vue-pdf-app";
export default {
  middleware: 'isAuthenticated',
  components:{
    ValidationObserver,
    ValidationProvider
  },
  data() {
    return {
      file: "",
      message: "",
      allfiles: "",
    }
  },
  methods: {
    onSelect() {
      const file = this.$refs.file.files[0]
        this.file = file
      const allowedTypes = ["pdf"]
      if(allowedTypes.includes(file.type.split('/')[1])){
        this.message = ""
      }
      else{
        this.message = "hanya menerima dokumen dengan ekstensi .pdf"
      }
    },
    async onSubmit() {
      let formData = new FormData()
      formData.append('file', this.file)
      try {
        const resp = await axios.post('http://localhost:3000/server/document', formData)
        if (resp) {
          swal(resp.data.msg, { icon: 'success' })
        } else {
          swal(resp.data.errmsg, { icon: 'error' })
        }
      } catch (err) {
        console.error(err)
      }
    },
    downloadFile(filename) {
          axios.get(`http://localhost:3000/server/document/list/${filename}`)
          .then((response) => {
            swal(response.data.msg,{icon:'success'})
          }).catch(err=>{
            swal(err.data.errmsg,{icon:'error'})
          })
    },
    deleteFile(filename){
      axios.delete(`http://localhost:3000/server/document/list/${filename}`)
      .then(resp=>{
        swal(resp.data.msg,{icon:'success'})
      }).catch(err=>{
        swal(err.data.errmsg,{icon:'error'})
      })
    }
  },
  async mounted() {
    try {
      const resp = await axios.get('http://localhost:3000/server/document/list')
      if (resp) {
        this.allfiles = resp.data
      }
    } catch (err) {
      console.log(err)
    }
    // require.context(
    //   '~/uploads/',
    //   true,
    //   /^.*\.pdf$/
    // )

    // require.context('~/uploads/', true, /\.pdf$/)
  },
}
</script>

<style>
</style>
