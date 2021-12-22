<template>
  <div id="container"><div id="startmouse">let's go</div></div>
</template>

<script>
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js';

import texturewall from '/static/texture/wall-orange.jpg';
import texturefloor from '~/assets/textures/Wood_Floor_011_height.png'

export default {
  data(){
    return{
      loader: null,
      camera: null,
      renderer: null,
      scene: null,
      controls: null,
      controls2: null,
      light: null,
      keyboard: [],
      mouse: null,
      raycaster: null,
    }
  },
  methods:{
    init(){
      let container = document.getElementById('container');

      this.camera = new THREE.PerspectiveCamera(60, container.clientWidth/container.clientHeight, 0.01, 90);
      
      this.camera.position.z = 8.2;
      this.camera.position.y = 0;
      this.camera.lookAt(0,0,0);

      this.scene = new THREE.Scene();
      this.scene.background = new THREE.Color(0x222222);


      // this.light = new THREE.AmbientLight( 0xffffee );
      this.light = new THREE.HemisphereLight(0xffffee,0x080820,4);
      this.scene.add(this.light);
      // this.loadModel();

      // texture wall
        const textureLoader = new THREE.TextureLoader();
        const wallcolor = textureLoader.load(texturewall);
        wallcolor.wrapS = wallcolor.wrapT = THREE.MirroredRepeatWrapping;
        wallcolor.repeat.set(6,6);
        const floorcolor = textureLoader.load(texturefloor);
      // floor
        const floorGometry = new THREE.BoxGeometry( 16,20,0.04 );
				const floorMaterial = new THREE.MeshBasicMaterial( {
          map:floorcolor,
          color:0xdddddd,
          side: THREE.DoubleSide
        } );
				const floor = new THREE.Mesh( floorGometry, floorMaterial );
				floor.rotation.x = - Math.PI / 2;
				floor.position.z = -0.1;
				floor.position.y = -1;
				this.scene.add( floor );
        // roof
        const roofGometry = new THREE.BoxGeometry( 16,20,0.04 );
				const roofMaterial = new THREE.MeshBasicMaterial( {
          map:floorcolor,
          color:0xdddddd,
          side: THREE.DoubleSide
        } );
				const roof = new THREE.Mesh( roofGometry, roofMaterial );
				roof.rotation.x = - Math.PI / 2;
				roof.position.z = -0.1;
				roof.position.y = 2;
				this.scene.add( roof );

        // wall belakang
        const wallGometry = new THREE.BoxGeometry( 16,3,0.1 );
				const wallMaterial = new THREE.MeshBasicMaterial( {
          map:wallcolor, 
          side: THREE.DoubleSide
        } );
				const wall = new THREE.Mesh( wallGometry, wallMaterial );
        wall.position.z = -10;
        wall.position.y = 0.5;
				this.scene.add( wall );
        // wall depan
        const wallGometrydepan = new THREE.BoxGeometry( 16,3,0.1 );
				const wallMaterialdepan = new THREE.MeshBasicMaterial( {
          map:wallcolor, 
          side: THREE.DoubleSide
        } );
				const walldepan = new THREE.Mesh( wallGometrydepan, wallMaterialdepan );
        walldepan.position.z = 9.9;
        walldepan.position.y = 0.5;
				this.scene.add( walldepan );
        // wall 2
        const wall2Gometry = new THREE.BoxGeometry( 0.05,3,20 );
				const wall2Material = new THREE.MeshBasicMaterial( {
          map:wallcolor, 
          side: THREE.DoubleSide
        } );
				const wall2 = new THREE.Mesh( wall2Gometry, wall2Material );
        wall2.position.x = -8;
        wall2.position.y = 0.5;
        wall2.position.z = -0.1;
				this.scene.add( wall2 );

        // wall 
        const wall3Gometry = new THREE.BoxGeometry( 0.05,3,20 );
				const wall3Material = new THREE.MeshBasicMaterial( {
          map:wallcolor,
          side:THREE.DoubleSide
        } );
				const wall3 = new THREE.Mesh( wall3Gometry, wall3Material );
        wall3.position.x = 8;
        wall3.position.y = 0.5;
        wall3.position.z = -0.1;
				this.scene.add( wall3 );

      this.renderer = new THREE.WebGLRenderer({ antialias: true });
      this.renderer.setSize(container.clientWidth, container.clientHeight);
      this.renderer.setPixelRatio(window.devicePixelRatio);


      container.appendChild(this.renderer.domElement);

      this.controls2 = new OrbitControls( this.camera, this.renderer.domElement );
      this.controls2.minDistance = 0;
      this.controls2.maxDistance = 50;

      this.controls = new PointerLockControls(this.camera,this.renderer.domElement);
      this.clock = new THREE.Clock();

      let btn1 = document.getElementById("startmouse");
      btn1.addEventListener("click",()=>{
        this.controls.lock();
      })

      this.raycaster = new THREE.Raycaster();
      this.mouse = {}

      // keyboard controls AWSD
      addEventListener('keydown',(event)=>{
        this.keyboard[event.key] = true;
      })
      addEventListener('keyup',(event)=>{
        this.keyboard[event.key] = false;
      })
    },
    processKeyboard(delta){
      let speed = 5;
      let actualSpeed = speed * delta;
      if(this.keyboard['w']){
        this.controls.moveForward(actualSpeed);
      }
      if(this.keyboard['s']){
        this.controls.moveForward(-actualSpeed);
      }
      if(this.keyboard['d']){
        this.controls.moveRight(actualSpeed);
      }
      if(this.keyboard['a']){
        this.controls.moveRight(-actualSpeed);
      }
      if(this.keyboard['W']){
        this.controls.moveForward(actualSpeed);
      }
      if(this.keyboard['S']){
        this.controls.moveForward(-actualSpeed);
      }
      if(this.keyboard['D']){
        this.controls.moveRight(actualSpeed);
      }
      if(this.keyboard['A']){
        this.controls.moveRight(-actualSpeed);
      }
    },
    // loadModel(callback) {
    //     this.loader = new GLTFLoader();

    //     this.loader.load('model/ac.glb', (gltf) => {
    //         if (typeof callback === 'function') {
    //             callback(gltf.scene);
    //         }

    //         this.scene.add(gltf.scene);
    //         gltf.scene.scale.set(0.5,0.5,0.5);
    //     });
    // },
    animate(){
      let delta = this.clock.getDelta();
      this.processKeyboard(delta);
      requestAnimationFrame(this.animate);
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