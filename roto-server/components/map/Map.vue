<template>
  <div id="container">
    <button id="startmouse">click this to navigate</button>
    <div id="child"></div>
  </div>
</template>

<script type="module">
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js';
import {
  CSS2DRenderer,
  CSS2DObject,
} from 'three/examples/jsm/renderers/CSS2DRenderer.js';
import texturewall from '~/assets/textures/Marble_White_007_basecolor.jpg';
import texturefloor from '~/assets/textures/Wood_Floor_011_height.png'
// import { EventDispatcher } from 'three/src/core/EventDispatcher.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import {OBJLoader} from 'three/examples/jsm/loaders/OBJLoader';

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
      }
    },
    methods: {
      init() {
        let container = document.getElementById('container');

        this.camera = new THREE.PerspectiveCamera(80, container.clientWidth/container.clientHeight, 0.01, 100);
        
        this.camera.position.z = 2;
        this.camera.position.y = 0.5;
        this.camera.lookAt(0,0,0);

        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x222222);

        // texture wall
        const textureLoader = new THREE.TextureLoader();
        const wallcolor = textureLoader.load(texturewall);
        wallcolor.wrapS = wallcolor.wrapT = THREE.MirroredRepeatWrapping;
        wallcolor.repeat.set(5,5);
        const floorcolor = textureLoader.load(texturefloor);
        // rak 1
        let box_rak_1 = new THREE.BoxGeometry(1.2, 0.5, 0.5);
        let material_rak_1 = new THREE.MeshBasicMaterial({color: 0x333333});
        this.meshrak1 = new THREE.Mesh(box_rak_1, material_rak_1);
        this.meshrak1.position.y = 0.27;
        this.meshrak1.position.x = -0.2;
        this.meshrak1.name = 'rak 1'
        this.scene.add(this.meshrak1);

        // set labels
        // this.labelRenderer = new CSS2DRenderer();
        // this.labelRenderer.setSize(container.innerWidth, container.innerHeight);
        // this.labelRenderer.domElement.style.position = 'absolute';
        // this.labelRenderer.domElement.style.top = '20px';
        // this.labelRenderer.domElement.style.pointerEvents = 'none';
        // document.body.appendChild(this.labelRenderer.domElement);

        // this.labelDiv = document.createElement('div');
        // this.labelDiv.className = 'label';
        // this.labelDiv.style.marginTop = '10px';
        // this.label = new CSS2DObject(this.labelDiv);
        // this.label.visible = false;
        // this.scene.add(this.label);

        // rak 2
        let box_rak_2 = new THREE.BoxGeometry(1.2, 0.5, 0.5);
        let material_rak_2 = new THREE.MeshBasicMaterial({color: 0x333333});
        this.meshrak2 = new THREE.Mesh(box_rak_2, material_rak_2);
        this.meshrak2.position.x = -0.2;
        this.meshrak2.position.y = 0.27;
        this.meshrak2.position.z = 0.7;
        this.meshrak2.name = 'rak 2';
        this.scene.add(this.meshrak2);
        
        // UPS
        let geometryups = new THREE.BoxGeometry(0.5, 0.3, 0.24);
        let materialups = new THREE.MeshBasicMaterial({color: 0x2442aa});
        this.meshups = new THREE.Mesh(geometryups, materialups);
        this.meshups.position.x = -0.3;
        this.meshups.position.y = 0.151;
        this.meshups.position.z = -0.42;
        this.meshups.name = 'UPS';
        this.scene.add(this.meshups);
        // rak jaringan
        let rak_jaringan = new THREE.BoxGeometry(0.7, 0.7, 0.4);
        let material_rak_jaringan = new THREE.MeshBasicMaterial({color: 0x444477});
        this.meshrakjaringan = new THREE.Mesh(rak_jaringan, material_rak_jaringan);
        this.meshrakjaringan.position.x = -0.3;
        this.meshrakjaringan.position.y = 0.36;
        this.meshrakjaringan.position.z = -0.8;
        this.meshrakjaringan.name = "Rak jaringan";
        this.scene.add(this.meshrakjaringan);
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
        let ackanan = new THREE.BoxGeometry(0.2, 0.2, 0.6);
        let materialackanan = new THREE.MeshBasicMaterial({color: 0xdddddd});
        this.meshackanan = new THREE.Mesh(ackanan, materialackanan);
        this.meshackanan.position.x = 1.14;
        this.meshackanan.position.y = 0.7;
        this.meshackanan.position.z = 0.7;
        this.meshackanan.name = "AC kanan";
        this.scene.add(this.meshackanan);

        // AC kiri
        let ackiri = new THREE.BoxGeometry(0.2, 0.2, 0.6);
        let materialackiri = new THREE.MeshBasicMaterial({color: 0xdddddd});
        this.meshackiri = new THREE.Mesh(ackiri, materialackiri);
        this.meshackiri.position.x = 1.14;
        this.meshackiri.position.y = 0.7;
        this.meshackiri.position.z = -0.2;
        this.meshackiri.name = "AC kiri";
        this.scene.add(this.meshackiri);

        // label
        // const labelAckiri = document.createElement( 'div' );
        // labelAckiri.className = 'label';
        // labelAckiri.textContent = 'AC kiri';
        // const AckiriLabel = new CSS2DObject( labelAckiri );
        // AckiriLabel.position.set( 0, 0.5, 0 );
        // this.ackiri.add( AckiriLabel );

        // CCTV
        this.cctv = new THREE.BoxGeometry(0.1, 0.1, 0.1);
        let materialcctv = new THREE.MeshBasicMaterial({color: 0xdddddd});
        this.cctv = new THREE.Mesh(this.cctv, materialcctv);
        this.cctv.position.x = 1.18;
        this.cctv.position.y = 0.93;
        this.cctv.position.z = -1.42;
        this.scene.add(this.cctv);
        
        // daya listrik
        let geometrylistrik = new THREE.BoxGeometry(0.2, 0.25, 0.1);
        let materiallistrik = new THREE.MeshBasicMaterial({color: 0xdddddd});
        this.meshlistrik = new THREE.Mesh(geometrylistrik, materiallistrik);
        this.meshlistrik.position.x = 0.9;
        this.meshlistrik.position.y = 0.6;
        this.meshlistrik.position.z = -1.76;
        this.meshlistrik.name = "Listrik";
        this.scene.add(this.meshlistrik);
        
        // baterai
        let geometrybaterai = new THREE.BoxGeometry(0.8, 0.4, 0.5);
        let materialbaterai = new THREE.MeshBasicMaterial({color: 0x323232});
        this.meshbaterai = new THREE.Mesh(geometrybaterai, materialbaterai);
        this.meshbaterai.position.x = -0.18;
        this.meshbaterai.position.y = 0.21;
        this.meshbaterai.position.z = -1.5;
        this.meshbaterai.name = "Baterai";
        this.scene.add(this.meshbaterai);
        
        // floor
        const floorGometry = new THREE.PlaneGeometry( 2.6,3.35 );
				const floorMaterial = new THREE.MeshBasicMaterial( {
          map:floorcolor,
          color:0xdddddd,
          side: THREE.DoubleSide
        } );
				const floor = new THREE.Mesh( floorGometry, floorMaterial );
				floor.rotation.x = - Math.PI / 2;
				floor.position.z = -0.19;
				this.scene.add( floor );

        // wall 1
        const wallGometry = new THREE.BoxGeometry( 2.5,1,0.1 );
				const wallMaterial = new THREE.MeshBasicMaterial( {
          map:wallcolor,
          color: 0xcccccc, 
          side: THREE.DoubleSide
        } );
				const wall = new THREE.Mesh( wallGometry, wallMaterial );
        wall.position.z = -1.89;
        wall.position.y = 0.5;
				this.scene.add( wall );
        // wall 2
        const wall2Gometry = new THREE.BoxGeometry( 0.05,1,3.42 );
				const wall2Material = new THREE.MeshBasicMaterial( {
          map:wallcolor, 
          color:0xdddddd,
          side: THREE.DoubleSide
        } );
				const wall2 = new THREE.Mesh( wall2Gometry, wall2Material );
        wall2.position.x = -1.27;
        wall2.position.y = 0.5;
        wall2.position.z = -0.22;
				this.scene.add( wall2 );

        // wall 
        const wall3Gometry = new THREE.BoxGeometry( 0.05,1,3.42 );
				const wall3Material = new THREE.MeshBasicMaterial( {
          map:wallcolor,
          color:0xdddddd,
          side:THREE.DoubleSide
        } );
				const wall3 = new THREE.Mesh( wall3Gometry, wall3Material );
        wall3.position.x = 1.27;
        wall3.position.y = 0.5;
        wall3.position.z = -0.22;
				this.scene.add( wall3 );
        
        this.rollOverGeo = new THREE.BoxGeometry( 50, 50, 50 );
				this.rollOverMaterial = new THREE.MeshBasicMaterial( { color: 0xff0000, opacity: 0.5, transparent: true } );
				this.rollOverMesh = new THREE.Mesh( this.rollOverGeo, this.rollOverMaterial );
				this.scene.add( this.rollOverMesh );

				this.cubeGeo = new THREE.BoxGeometry( 50, 50, 50 );
				this.cubeMaterial = new THREE.MeshLambertMaterial( { color: 0xfeb74c})

        // var loader = new GLTFLoader();
        // var model = "ac.glb";
        // loader.load(model, function ( data ) {
        //     this.scene.add( data.scene );
        // });

        this.renderer = new THREE.WebGLRenderer({antialias: true});
        this.renderer.setSize(container.clientWidth, container.clientHeight);
        // this.controls = new OrbitControls( this.camera, this.renderer.domElement);
        // var domEvents	= new THREEx.DomEvents(this.camera, this.renderer.domElement)
        // domEvents.addEventListener(this.meshackanan,'click',()=>{
        //   console.log('clicked');
        // })
    
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
          this.mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
          this.mouse.y = (e.clientY / window.innerHeight) * -2 + 1;

          this.raycaster.setFromCamera(this.mouse,this.camera);
          let items = this.raycaster.intersectObjects(this.scene.children);

          const child = document.getElementById('child');
          items.forEach(i => {
            
            if(i.object.name != ''){
              this.selected = i.object;
              child.innerHTML = `<p>${i.object.name}</p>
                                <p>isi : </br>server</p>`;
              if(i.object.name === 'UPS'){
                child.innerHTML = `<p>${i.object.name}</p>`;
              }
              if(i.object.name === 'Rak jaringan'){
                child.innerHTML = `<p>${i.object.name}</p>
                                  <p>isi : </br>kabel</p>`;
              }
              if(i.object.name === 'AC kanan'){
                child.innerHTML = `<p>${i.object.name}</p>
                                  <p>dingin</p>`;
              }
              if(i.object.name === 'AC kiri'){
                child.innerHTML = `<p>${i.object.name}</p>
                                  <p>dingin</p>`;
              }
              if(i.object.name === 'Baterai'){
                child.innerHTML = `<p>${i.object.name}</p>
                                  <p>500 watt</p>`;
              }
            }
          })
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

      animate(){
        // this.controls2.update();
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