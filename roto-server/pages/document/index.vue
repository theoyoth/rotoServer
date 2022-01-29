<template>
  <div
    class="bg-gray-300 min-h-screen w-widthContent ml-auto overflow-x-hidden"
  >
    <section
      class="bg-gray-100 min-h-screen w-widthContentField m-auto mt-7 p-4"
    >
    <!-- <div v-show="user.role === 'PA' || user.role === 'EDP'" class="bg-gray-700 w-12 py-2 rounded-lg text-center ml-auto mb-4">
      <font-awesome-icon :icon="['fas','folder-plus']" class="text-gray-200 text-lg"/>
    </div> -->
      <div class="bg-gray-400 p-4" v-show="user.role === 'PA' || user.role === 'EDP'">
        <h1 class="text-center text-xl font-semibold mb-2">Upload file</h1>
        <form @submit.prevent="onSubmit" enctype="multipart/form-data">
          <div class="w-full mt-6">
            <div class="relative mx-auto text-center dropbox">
                <input
                  type="file"
                  ref="file"
                  id="file"
                  name="filetoupload"
                  required
                  accept=".pdf"
                  class="input-file border border-black"
                  @change="onSelect" 
                />
                <p class="text-center mt-6">
                  Drag your file here <br> or click to browse
                </p>
                <font-awesome-icon :icon="['fas','upload']" class="text-blue-500"/>
            </div>
            <div v-if="file" class="text-center mt-5">{{file.name}}</div>
            <div v-if="message" class="mt-4">
              <p class="text-red-600 text-center">{{ message }}</p>
            </div>
          </div>
          <p v-if="uploading">
            <progress max="100" :value:prop="uploadPercentage" class="w-full"></progress>
          </p>
          <div class="w-28 mx-auto mt-1">
            <button
              class="w-full mt-4 bg-gray-800 py-2 text-gray-300 rounded transition duration-200 hover:bg-gray-600" type="submit" >
              Submit
            </button>
          </div>
        </form>
      </div>
      <div class="grid grid-cols-4 mt-5 gap-y-6 py-4 place-items-center relative">
        <div v-for="(fil, index) in allfiles" :key="index" class="w-48 h-44 bg-gray-400 rounded-lg relative">
          <div class="w-24 mx-auto transform translate-y-4">
            <img src="~/assets/img/pdf.png" alt="pdf-icon">
          </div>
          <div class="p-2 bg-gray-300 absolute bottom-0 w-full text-center rounded-b-lg">
            <div class="w-full"><p class="text-xs text-center break-words">{{ fil.name }}</p></div>
            
            <div class="flex">
              <NuxtLink :to="{name: 'document-viewpdf-viewpdf',params:{id:fil.name}}" class="cursor-pointer w-6">
                <font-awesome-icon :icon="['fas','eye']" class="text-gray-700"/>
              </NuxtLink>
              <div class="cursor-pointer w-6" @click="deleteFile(fil.name)" v-show="user.role === 'PA' || user.role === 'EDP'" >
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
import { ValidationObserver, ValidationProvider } from "vee-validate"

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
      uploadedFiles:[],
      uploading:false,
      uploadPercentage: 0,
      directory:"",
      lokasi:this.$auth.user.lokasi,
    }
  },
  computed:{
    user(){
      return this.$auth.user
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
      const lokasi = this.$auth.user.lokasi
      let formData = new FormData()
      formData.append('file', this.file)
      try {
        this.uploading = true
        const resp = await this.$axios.post(`/document/${lokasi}`, formData,{
          onUploadProgress:(e)=>{
            this.uploadPercentage = parseInt(Math.round(e.loaded*100/e.total))
          }
        })
        swal('berhasil di upload', { icon: 'success' })
        this.uploading = false
      } catch (err) {
        this.uploading = false
      }
    },
    deleteFile(filename){
      swal({
              title: 'anda yakin?',
              text: 'sekali dihapus, file tidak akan bisa kembali',
              icon: 'warning',
              buttons: true,
              dangerMode: true
            }).then(suc=>{
                if(suc){
                    let indexOfArrayItem = this.allfiles.findIndex(i => i.name === filename)

                    this.$axios.delete(`/document/list/${filename}/${this.lokasi}`)
                    .then(resp=>{
                        if(resp){
                            this.allfiles.splice(indexOfArrayItem, 1);
                            this.$router.push('/document')
                            swal('data dihapus',{icon:'success'})
                        }
                    }).catch(err=>{
                          this.$router.push('/document')
                          swal('Error', 'data tidak terhapus',{icon:'error'})
                    })
                }
                else{
                    swal('Error','gagal menghapus',{icon:'error'})
                }
            }).catch(err=>{
                swal('Error','ada yang salah',{icon:'error'})
            })
    }
  },
  async mounted() {
    try {
      const resp = await this.$axios.get(`/document/list/${this.lokasi}`)
      if (resp.data) {
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
    if(this.lokasi === 'rotogravure 1'){
      require.context('~/static/uploads/roto1', false, /\.pdf$/)
    }
    else if(this.lokasi === 'rotogravure 2'){
      require.context('~/static/uploads/roto2', false, /\.pdf$/)
    } 
    else if(this.lokasi === 'rotogravure 3'){
      require.context('~/static/uploads/roto3', false, /\.pdf$/)
    } 
    else if(this.lokasi === 'rotogravure tinta'){
      require.context('~/static/uploads/rototinta', false, /\.pdf$/)
    }


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
