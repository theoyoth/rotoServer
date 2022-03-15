<template>
  <div class="w-72 rounded overflow-hidden shadow-lg bg-gray-100 absolute">
    <div v-for="(item,index) in models" :key="index">
      
    <img class="w-52 z-10 mx-auto" :src="`/img/${item.image}`" :alt="item.name">
    <div class="px-6 py-4">
      <div class="font-bold text-md mb-2">{{item.name}}</div>
      <span class="text-sm text-gray-700">merek : {{item.merek}},</span>
      <span class="text-sm text-gray-700">model : {{item.model}},</span>
      <span class="text-sm text-gray-700" v-show="item.accu">accu : {{item.accu}},</span>
    </div>
    <div v-show="showrakdetail && item.name === 'Rak jaringan'" class="px-6">
      <p class="font-bold text-md mb-2">{{name}}</p>
      <span class="text-sm text-gray-700">merek : {{merek}},</span>
      <span class="text-sm text-gray-700">model : {{model}}</span>
      <span class="text-sm text-gray-700" v-show="name === 'Kabel'">panjang : {{panjang}}</span>
    </div>
    <div class="px-6 pt-4 pb-2" v-show="item.name === 'Rak jaringan'">
      <button class="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-1 mb-2" @click="showDetail">WiFi</button>
      <button class="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-1 mb-2" @click="showKabel">kabel</button>
    </div>
    <div v-show="showserverdetail && item.name === 'Rak server'" class="px-6">
      <p class="font-bold text-md mb-2">{{name}}</p>
      <span class="text-sm text-gray-700">merek : {{item.merek}},</span>
      <span class="text-sm text-gray-700">model : {{item.model}}</span>
    </div>
    <div class="px-6 pt-4 pb-2" v-show="item.name === 'Rak server'">
      <button class="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-1 mb-2" @click="showDetailServer1">server 1</button>
      <button class="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-1 mb-2" @click="showDetailServer2">server 2</button>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['models'],
  data(){
    return {
      name:'',
      merek : '',
      model : '',
      panjang:'',
      showrakdetail:false,
      showserverdetail:false,
    }
  },
  methods:{
    getData(){
      this.merek = 'merek merek sdsadm'
    },
    showDetail(){
      this.name = 'WiFi'
      this.merek = 'indihome'
      this.model = 'router1vps'
      this.showrakdetail = !this.showrakdetail
    },
    showKabel(){
      this.name = 'Kabel'
      this.merek = 'al'
      this.model = 'cbl12m'
      this.panjang = '2 m',
      this.showrakdetail = !this.showrakdetail
    },
    showDetailServer1(){
      this.name = 'Server 1'
      this.showserverdetail = !this.showserverdetail
    },
    showDetailServer2(){
      this.name = 'Server 2'
      this.showserverdetail = !this.showserverdetail
    }
  }
}
</script>
