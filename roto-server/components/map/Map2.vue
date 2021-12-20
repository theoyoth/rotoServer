<template>
  <div id="container"></div>
</template>

<script>
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import ac from '~/assets/model/ac.glb'

export default {
  data(){
    return{
      loader: null,
      camera: null,
      renderer: null,
      scene: null,
    }
  },
  methods:{
    init(){
      let container = document.getElementById('container');

      this.camera = new THREE.PerspectiveCamera(80, container.clientWidth/container.clientHeight, 0.01, 100);
      
      this.camera.position.z = 2;
      this.camera.position.y = 0.5;
      this.camera.lookAt(0,0,0);

      this.scene = new THREE.Scene();
      this.scene.background = new THREE.Color(0xeeeeee);

      this.loader = new GLTFLoader();
      this.loader.load('./assets/model/ac.glb',function(gltf){
          let AC = gltf.scene;
          AC.scale.set(10, 10, 10);
          this.scene.add(AC);
        },
        (xhr) => {
          console.log(`${(xhr.loaded / xhr.total) * 100}% loaded`);
        },
        (error) => {
          console.error('An error happened', error);
        }
      );

      this.renderer = new THREE.WebGLRenderer({ antialias: true });
      this.renderer.setSize(container.clientWidth, container.clientHeight);
      this.renderer.setPixelRatio(window.devicePixelRatio);

      container.appendChild(this.renderer.domElement);
    },
    animate(){
      this.renderer.render(this.scene, this.camera);
    }
  },
  mounted(){
    this.init();
    this.animate();
  }

}
</script>

<style>

</style>