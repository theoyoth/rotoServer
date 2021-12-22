<template>
<div class="home">
  <div id="container">
    <div id="child"></div>
    <button id="startmouse">click this to navigate</button>
  </div>
</div>
</template>

<script type="module">
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js';
import {
  CSS2DRenderer,
} from 'three/examples/jsm/renderers/CSS2DRenderer.js';
import texturewall from '/static/texture/wall.jpg';
import texturefloor from '~/assets/textures/Wood_Floor_011_height.png'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';


export default {
    data() {
      return {
        camera: null,
        scene: null,
        renderer: null,
        meshrak1: null,
        meshrak2: null,
        meshups: null,
        meshrakjaringan: null,
        meshpintu1: null,
        meshpintu2: null,
        mesh7: null,
        mesh8: null,
        control: null,
        controls: null,
        raycaster: null,
        mouse: null,
        keyboard:[],
        clock:null,
        lightsource:null,
        cubeGeo: null,
        cubeMaterial: null,
        rollOverGeo: null,
        rollOverMaterial: null,
        rollOverMesh: null,
        object:[],
        label:null,
        labelDiv:null,
        labelRenderer: null,
        meshackanan: null,
        meshackiri: null,
        cctv:null,
        meshbaterai: null,
        meshlistrik: null,
        selected:null,
        loader:null,
        light:null,
        spotLight: null,
      }
    },
    methods: {
      init() {
        let container = document.getElementById('container');

        this.camera = new THREE.PerspectiveCamera(80, container.clientWidth/container.clientHeight, 0.01, 100);
        
        this.camera.position.z = 2;
        this.camera.position.y = 0.4;
        this.camera.lookAt(0,0,0);

        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x222222);

        // this.light = new THREE.AmbientLight(0xdddddd, 1)
        // this.scene.add(this.light)
        // this.light = new THREE.PointLight( 0xFFFFFF );
        // this.light.position.set( -15, 5, 15 );
        // this.scene.add( this.light );
        this.light = new THREE.HemisphereLight(0xffffee,0x101010,5);
        this.scene.add(this.light);

        // this.spotLight = new THREE.SpotLight(0xffa95c,4);
        // this.spotLight.castShadow = true;
        // this.scene.add(this.spotLight);

        // texture wall
        const textureLoader = new THREE.TextureLoader();
        const wallcolor = textureLoader.load(texturewall);
        wallcolor.wrapS = wallcolor.wrapT = THREE.MirroredRepeatWrapping;
        wallcolor.repeat.set(5,5);
        const floorcolor = textureLoader.load(texturefloor);
        // rak 1
        this.loadRak1();
        // rak 2
        this.loadRak2();
        
        // UPS
        this.loadUps();
        // rak jaringan
        this.loadRakjaringan();
        // door 1
        let geometrypintu1 = new THREE.BoxGeometry(0.04, 0.6, 0.3);
        let materialpintu1 = new THREE.MeshBasicMaterial({color: 0x666666});
        this.meshpintu1 = new THREE.Mesh(geometrypintu1, materialpintu1);
        this.meshpintu1.position.x = 1.25;
        this.meshpintu1.position.y = 0.31;
        this.meshpintu1.position.z = 1.2;
        this.scene.add(this.meshpintu1);
        // door 2
        let geometrypintu2 = new THREE.BoxGeometry(0.04, 0.6, 0.3);
        let materialpintu2 = new THREE.MeshBasicMaterial({color: 0x666666});
        this.meshpintu2 = new THREE.Mesh(geometrypintu2, materialpintu2);
        this.meshpintu2.position.x = -1.25;
        this.meshpintu2.position.y = 0.31;
        this.meshpintu2.position.z = 1.2;
        this.scene.add(this.meshpintu2);
        
        // AC kanan
        this.loadModelACkanan();
        // AC kiri
        this.loadModelACkiri();

        // label
        // const labelAckiri = document.createElement( 'div' );
        // labelAckiri.className = 'label';
        // labelAckiri.textContent = 'AC kiri';
        // const AckiriLabel = new CSS2DObject( labelAckiri );
        // AckiriLabel.position.set( 0, 0.5, 0 );
        // this.ackiri.add( AckiriLabel );

        // CCTV
        
        // daya listrik
        
        // baterai
        this.loadRakbaterai();
        // floor
        const floorGometry = new THREE.BoxGeometry( 2.6,5,0.04 );
				const floorMaterial = new THREE.MeshBasicMaterial( {
          map:floorcolor,
          color:0xdddddd,
          side: THREE.DoubleSide
        } );
				const floor = new THREE.Mesh( floorGometry, floorMaterial );
				floor.rotation.x = - Math.PI / 2;
				floor.position.z = -0.1;
				floor.position.y = -0.02;
				this.scene.add( floor );
        // roof
        const roofGometry = new THREE.BoxGeometry( 2.6,5,0.04 );
				const roofMaterial = new THREE.MeshBasicMaterial( {
          map:floorcolor,
          color:0xdddddd,
          side: THREE.DoubleSide
        } );
				const roof = new THREE.Mesh( roofGometry, roofMaterial );
				roof.rotation.x = - Math.PI / 2;
				roof.position.z = -0.1;
				roof.position.y = 1.2;
				this.scene.add( roof );

        // wall belakang
        const wallGometry = new THREE.BoxGeometry( 2.5,1.4,0.1 );
				const wallMaterial = new THREE.MeshBasicMaterial( {
          map:wallcolor, 
          side: THREE.DoubleSide
        } );
				const wall = new THREE.Mesh( wallGometry, wallMaterial );
        wall.position.z = -1.89;
        wall.position.y = 0.5;
				this.scene.add( wall );
        // wall depan
        const wallGometrydepan = new THREE.BoxGeometry( 2.5,1.4,0.1 );
				const wallMaterialdepan = new THREE.MeshBasicMaterial( {
          map:wallcolor, 
          side: THREE.DoubleSide
        } );
				const walldepan = new THREE.Mesh( wallGometrydepan, wallMaterialdepan );
        walldepan.position.z = 2.2;
        walldepan.position.y = 0.5;
				this.scene.add( walldepan );
        // wall 2
        const wall2Gometry = new THREE.BoxGeometry( 0.05,1.4,5 );
				const wall2Material = new THREE.MeshBasicMaterial( {
          map:wallcolor, 
          side: THREE.DoubleSide
        } );
				const wall2 = new THREE.Mesh( wall2Gometry, wall2Material );
        wall2.position.x = -1.27;
        wall2.position.y = 0.5;
        wall2.position.z = -0.1;
				this.scene.add( wall2 );

        // wall 
        const wall3Gometry = new THREE.BoxGeometry( 0.05,1.4,5 );
				const wall3Material = new THREE.MeshBasicMaterial( {
          map:wallcolor,
          side:THREE.DoubleSide
        } );
				const wall3 = new THREE.Mesh( wall3Gometry, wall3Material );
        wall3.position.x = 1.27;
        wall3.position.y = 0.5;
        wall3.position.z = -0.1;
				this.scene.add( wall3 );

        this.renderer = new THREE.WebGLRenderer({antialias: true});
        this.renderer.setSize(container.clientWidth, container.clientHeight);
        this.renderer.toneMapping = THREE.ReinhardToneMapping;
        this.renderer.toneMappingExposure = 2.3;
        this.renderer.shadowMap.enabled = true;

        container.appendChild(this.renderer.domElement);

        this.labelRenderer = new CSS2DRenderer();
        this.labelRenderer.setSize( window.innerWidth, window.innerHeight );
        this.labelRenderer.domElement.style.position = 'absolute';
        this.labelRenderer.domElement.style.top = '150px';
        this.labelRenderer.domElement.style.left = '-100px';
        container.appendChild( this.labelRenderer.domElement );

        this.controls2 = new OrbitControls( this.camera, this.labelRenderer.domElement );
        this.controls2.minDistance = 0;
        this.controls2.maxDistance = 50;

        this.control = new PointerLockControls(this.camera,this.renderer.domElement);
        this.clock = new THREE.Clock();

        let btn1 = document.getElementById('startmouse');
        btn1.addEventListener('click',()=>{
          this.control.lock();
        });

        this.raycaster = new THREE.Raycaster();
        this.mouse = {}

        addEventListener("mousedown",(e)=>{
          e.preventDefault();
          this.mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
          this.mouse.y = (e.clientY / window.innerHeight) * -2 + 1;

          this.raycaster.setFromCamera(this.mouse,this.camera);
          let items = this.raycaster.intersectObjects(this.scene.children);

          const child = document.getElementById('child');
          // items.forEach(i => {
            
          //   if(i.object.name != ''){
          //     // this.selected = i.object;
          //     child.innerHTML = `<p>${i.object.name}</p>
          //                       <p>isi : </br>server</p>`;
          //   }
          //     if(i.object.name === 'UPS'){
          //       child.innerHTML = `<p>${i.object.name}</p>`;
          //     }
          //     if(i.object.name === 'Rak jaringan'){
          //       child.innerHTML = `<p>${i.object.name}</p>
          //                         <p>isi : </br>kabel</p>`;
          //     }
          //     if(i.object.name === 'AC kanan'){
          //       child.innerHTML = `<p>${i.object.name}</p>
          //                         <p>dingin</p>`;
          //     }
          //     if(i.object.name === 'AC kiri'){
          //       child.innerHTML = `<p>${i.object.name}</p>
          //                         <p>dingin</p>`;
          //     }
          //     if(i.object.name === 'Baterai'){
          //       child.innerHTML = `<p>${i.object.name}</p>
          //                         <p>500 watt</p>`;
          //     }
          // })
        })
        // keyboard controls AWSD
        addEventListener('keydown',(event)=>{
          this.keyboard[event.key] = true;
        })
        addEventListener('keyup',(event)=>{
          this.keyboard[event.key] = false;
        })
      },

      processKeyboard(delta){
        let speed = 3;
        let actualSpeed = speed * delta;
        if(this.keyboard['w']){
          this.control.moveForward(actualSpeed);
        }
        if(this.keyboard['s']){
          this.control.moveForward(-actualSpeed);
        }
        if(this.keyboard['d']){
          this.control.moveRight(actualSpeed);
        }
        if(this.keyboard['a']){
          this.control.moveRight(-actualSpeed);
        }
        if(this.keyboard['W']){
          this.control.moveForward(actualSpeed);
        }
        if(this.keyboard['S']){
          this.control.moveForward(-actualSpeed);
        }
        if(this.keyboard['D']){
          this.control.moveRight(actualSpeed);
        }
        if(this.keyboard['A']){
          this.control.moveRight(-actualSpeed);
        }
      },
      loadModelACkanan(callback) {
        this.loader = new GLTFLoader();

        this.loader.load('model/ac.glb', (ackanan) => {
            if (typeof callback === 'function') {
                callback(ackanan.scene);
            }

            ackanan.scene.scale.set(0.1,0.08,0.1);
            ackanan.scene.position.set(1.2,0.8,0.6);
            ackanan.scene.name = "AC kanan";
            ackanan.scene.rotation.y = - Math.PI / 2;
            ackanan.scene.traverse(n => {
              if(n.isMesh){
                n.castShadow = true;
                n.receiveShadow = true;
              }
            })
            this.scene.add(ackanan.scene);
        });
      },  
      loadModelACkiri(callback) {
        this.loader = new GLTFLoader();

        this.loader.load('model/ac.glb', (ackiri) => {
            if (typeof callback === 'function') {
                callback(ackiri.scene);
            }

            ackiri.scene.scale.set(0.1,0.08,0.1);
            ackiri.scene.position.set(1.2,0.8,-0.2);
            ackiri.scene.name = "AC kiri";
            ackiri.scene.rotation.y = - Math.PI / 2;
            this.scene.add(ackiri.scene);
            console.log(ackiri.scene);
        });
      },  
      loadRak1(callback) {
        this.loader = new GLTFLoader();

        this.loader.load('model/Rakserver.glb', (rakserver1) => {
            if (typeof callback === 'function') {
                callback(rakserver1.scene);
            }

            this.scene.add(rakserver1.scene);
            rakserver1.scene.scale.set(0.4,0.4,0.4);
            rakserver1.scene.position.set(-0.2,0.13,0.8);
            // gltf.scene.rotation.y = -Math.PI / 2;
        });
      },  
      loadRak2(callback) {
        this.loader = new GLTFLoader();

        this.loader.load('model/Rakserver.glb', (rakserver2) => {
            if (typeof callback === 'function') {
                callback(rakserver2.scene);
            }

            this.scene.add(rakserver2.scene);
            rakserver2.scene.scale.set(0.4,0.4,0.4);
            rakserver2.scene.position.set(-0.2,0.13,0.2);
            rakserver2.scene.name = "Rak server";
            // gltf.scene.rotation.y = -Math.PI / 2;
        });
      },  
      loadRakjaringan(callback) {
        this.loader = new GLTFLoader();

        this.loader.load('model/rakjaringan.glb', (rakjaringan) => {
            if (typeof callback === 'function') {
                callback(rakjaringan.scene);
            }

            this.scene.add(rakjaringan.scene);
            rakjaringan.scene.scale.set(0.14,0.12,0.2);
            rakjaringan.scene.position.set(-0.2,0.42,-0.7);
            rakjaringan.scene.name = "Rak jaringan";
            rakjaringan.scene.rotation.y = Math.PI / 2;
        });
      },  
      loadUps(callback) {
        this.loader = new GLTFLoader();

        this.loader.load('model/ups.glb', (ups) => {
            if (typeof callback === 'function') {
                callback(ups.scene);
            }

            this.scene.add(ups.scene);
            ups.scene.scale.set(0.2,0.2,0.2);
            ups.scene.position.set(-0.2,0.13,-0.2);
            ups.scene.name="UPS"
            ups.scene.rotation.y = Math.PI;
        });
      },  
      loadRakbaterai(callback) {
        this.loader = new GLTFLoader();

        this.loader.load('model/rakbaterai.glb', (rakbaterai) => {
            if (typeof callback === 'function') {
                callback(rakbaterai.scene);
            }

            this.scene.add(rakbaterai.scene);
            rakbaterai.scene.scale.set(0.26,0.3,0.28);
            rakbaterai.scene.position.set(-0.2,0.22,-1.5);
            rakbaterai.scene.name = "Rak baterai";
            rakbaterai.scene.rotation.y = -Math.PI/2;
        });
      },  

      animate(){
        // this.controls2.update();
        // this.spotLight.position.set(
        //   this.camera.position.x + 10,
        //   this.camera.position.y + 10,
        //   this.camera.position.z + 10
        // )

        let delta = this.clock.getDelta();
        this.processKeyboard(delta);
        requestAnimationFrame(this.animate);
        this.renderer.render(this.scene, this.camera);
        this.labelRenderer.render(this.scene, this.camera);
      },

  },
  mounted() {
    this.init();
    this.animate();
  },

}
</script>

<style>
#container{
  width:100%;
  height:100vh;
  overflow:hidden;
  position:relative;
}
.label {
  color: #ffe;
  padding: 2px;
  background: rgba(62, 49, 49, 0.863);
  position:fixed;
  /* top:50%;
  left:50%;
  transform:translateX(-50%); */
}
#child{
  position:absolute;
  top:0;
  left:0;
  background-color:whitesmoke;
  padding-left : 10px;
  padding-right : 10px;
  padding-top:5px;
}
#startmouse{
  background-color:whitesmoke;
  position:absolute;
  top:0;
  left:50%;
  transform:translateX(-50%);
}
</style>