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
            <div class="relative mx-auto text-center dropbox">
                <input
                  type="file"
                  ref="file"
                  id="file"
                  required
                  accept=".pdf"
                  class="input-file border border-black"
                  @change="onSelect" 
                />
                <p class="text-center mt-6">
                  Drag your file here to begin<br> or click to browse
                </p>
                <font-awesome-icon :icon="['fas','upload']" class="text-blue-500"/>
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
      <div class="grid grid-cols-4 mt-5 gap-y-6 py-4 place-items-center relative border border-gray-500">
        <div v-for="(fil, index) in allfiles" :key="index" class="w-48 h-44 bg-gray-400 rounded-lg relative">
          <div class="w-24 mx-auto transform translate-y-4">
            <img src="~/assets/img/pdf.png" alt="pdf-icon">
          </div>
          <div class="p-2 bg-gray-300 absolute bottom-0 w-full text-center rounded-b-lg">
            <div class="w-full"><p class="text-xs text-center break-words">{{ fil.name }}</p></div>
            
            <div class="flex">
              <a href="../../uploads/indihome_1638517468303.pdf" target="_blank">
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
    </section>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";

export default {
  middleware: 'isAuthenticated',
  components:{
    ValidationObserver,
    ValidationProvider,
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
        const resp = await this.$axios.post('/document', formData)
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
          this.$axios.get(`/document/list/${filename}`)
          .then((response) => {
            swal(response.data.msg,{icon:'success'})
          }).catch(err=>{
            swal(err.data.errmsg,{icon:'error'})
          })
    },
    deleteFile(filename){
      this.$axios.delete(`/document/list/${filename}`)
      .then(resp=>{
        swal(resp.data.msg,{icon:'success'})
      }).catch(err=>{
        swal(err.data.errmsg,{icon:'error'})
      })
    }
  },
  async mounted() {
    try {
      const resp = await this.$axios.get('/document/list')
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

    require.context('~/uploads/', false, /\.pdf$/)
  },
}
</script>

<style>
.dropbox {
  outline: 2px dashed grey; 
  outline-offset: -10px;
  background: rgb(236, 255, 255);
  color: dimgray;
  padding: 10px 10px;
  height: 150px; 
  position: relative;
  transition: .4s;
  cursor: pointer;
}
.dropbox:hover{
  background: lightblue;
}
.input-file {
  opacity: 0; 
  width: 100%;
  height: 100%;
  position: absolute;
  top:0;
  left:0;
  cursor: pointer;
}
  
</style>
