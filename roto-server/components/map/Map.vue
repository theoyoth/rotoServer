<template>
  <div id="container"></div>
</template>

<script type="module">
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.cjs';
import {
  CSS2DRenderer,
  CSS2DObject,
} from 'three/examples/jsm/renderers/CSS2DRenderer.cjs';
import texturewall from '~/assets/textures/Marble_White_007_basecolor.jpg';
import texturefloor from '~/assets/textures/Wood_Floor_011_height.png'
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.cjs'
// import tokyo from '~/assets/model/LittlestTokyo.glb'

export default {
    data() {
      return {
        camera: null,
        scene: null,
        renderer: null,
        mesh: null,
        controls: null,
        controls2: null,
        controls3: null,
        raycaster: null,
        mouse: null,
        lightsource:null,
        isShiftDown:false,
        cubeGeo: null,
        cubeMaterial: null,
        rollOverGeo: null,
        rollOverMaterial: null,
        rollOverMesh: null,
        object:[],
        label:null,
        labelDiv:null,
        labelRenderer: null,
        ackanan: null,
        ackiri: null,
        cctv:null,
        baterai: null,
        listrik: null,
        moveForward : false,
        moveBackward : false,
        moveRight : false,
        moveLeft : false,
        canJump : false,
        valocity: null,
        direction: null,
        vertex: null,
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
        let geometry = new THREE.BoxGeometry(1.2, 0.5, 0.5);
        let material = new THREE.MeshBasicMaterial({color: 0x333333});
        this.mesh = new THREE.Mesh(geometry, material);
        this.mesh.position.y = 0.27;
        this.mesh.position.x = -0.2;
        this.scene.add(this.mesh);

        // set labels
        this.labelRenderer = new CSS2DRenderer();
        this.labelRenderer.setSize(container.innerWidth, container.innerHeight);
        this.labelRenderer.domElement.style.position = 'absolute';
        this.labelRenderer.domElement.style.top = '20px';
        this.labelRenderer.domElement.style.pointerEvents = 'none';
        document.body.appendChild(this.labelRenderer.domElement);

        this.labelDiv = document.createElement('div');
        this.labelDiv.className = 'label';
        this.labelDiv.style.marginTop = '10px';
        this.label = new CSS2DObject(this.labelDiv);
        this.label.visible = false;
        this.scene.add(this.label);

        // rak 2
        let geometryrak2 = new THREE.BoxGeometry(1.2, 0.5, 0.5);
        let materialrak2 = new THREE.MeshBasicMaterial({color: 0x333333});
        this.mesh = new THREE.Mesh(geometryrak2, materialrak2);
        this.mesh.position.x = -0.2;
        this.mesh.position.y = 0.27;
        this.mesh.position.z = 0.7;
        this.scene.add(this.mesh);
        
        // UPS
        let geometryups = new THREE.BoxGeometry(0.5, 0.3, 0.24);
        let materialups = new THREE.MeshBasicMaterial({color: 0x2442aa});
        this.mesh = new THREE.Mesh(geometryups, materialups);
        this.mesh.position.x = -0.3;
        this.mesh.position.y = 0.151;
        this.mesh.position.z = -0.42;
        this.scene.add(this.mesh);
        // rak jaringan
        let geometryrakjaringan = new THREE.BoxGeometry(0.7, 0.7, 0.4);
        let materialrakjaringan = new THREE.MeshBasicMaterial({color: 0x444477});
        this.mesh = new THREE.Mesh(geometryrakjaringan, materialrakjaringan);
        this.mesh.position.x = -0.3;
        this.mesh.position.y = 0.36;
        this.mesh.position.z = -0.8;
        this.scene.add(this.mesh);
        // door 1
        let geometrypintu1 = new THREE.BoxGeometry(0.04, 0.6, 0.3);
        let materialpintu1 = new THREE.MeshBasicMaterial({color: 0x666666});
        this.mesh = new THREE.Mesh(geometrypintu1, materialpintu1);
        this.mesh.position.x = 1.25;
        this.mesh.position.y = 0.31;
        this.mesh.position.z = 1.2;
        this.scene.add(this.mesh);
        // door 2
        let geometrypintu2 = new THREE.BoxGeometry(0.04, 0.6, 0.3);
        let materialpintu2 = new THREE.MeshBasicMaterial({color: 0x666666});
        this.mesh = new THREE.Mesh(geometrypintu2, materialpintu2);
        this.mesh.position.x = -1.25;
        this.mesh.position.y = 0.31;
        this.mesh.position.z = 1.2;
        this.scene.add(this.mesh);
        // door
        let boxdoor = new THREE.PlaneGeometry(0.2,0.2);
        let materialboxdoor = new THREE.MeshBasicMaterial({
          color: 0xaaaaaa,
          side : THREE.DoubleSide,
        });
        this.mesh = new THREE.Mesh(boxdoor, materialboxdoor);
        this.mesh.rotation.y = Math.PI / 2;
        this.mesh.position.x = 1.22;
        this.mesh.position.y = 0.4;
        this.mesh.position.z = 1.2;
        this.scene.add(this.mesh);
        // door
        let boxdoor2 = new THREE.PlaneGeometry(0.2,0.2);
        let materialboxdoor2 = new THREE.MeshBasicMaterial({
          color: 0xaaaaaa,
          side : THREE.DoubleSide,
        });
        this.mesh = new THREE.Mesh(boxdoor2, materialboxdoor2);
        this.mesh.rotation.y = Math.PI / 2;
        this.mesh.position.x = -1.22;
        this.mesh.position.y = 0.4;
        this.mesh.position.z = 1.2;
        this.scene.add(this.mesh);
        
        // AC kanan
        this.ackanan = new THREE.BoxGeometry(0.2, 0.2, 0.6);
        let materialackanan = new THREE.MeshBasicMaterial({color: 0xdddddd});
        this.ackanan = new THREE.Mesh(this.ackanan, materialackanan);
        this.ackanan.position.x = 1.14;
        this.ackanan.position.y = 0.7;
        this.ackanan.position.z = 0.7;
        this.scene.add(this.ackanan);

        // AC kiri
        this.ackiri = new THREE.BoxGeometry(0.2, 0.2, 0.6);
        let materialackiri = new THREE.MeshBasicMaterial({color: 0xdddddd});
        this.ackiri = new THREE.Mesh(this.ackiri, materialackiri);
        this.ackiri.position.x = 1.14;
        this.ackiri.position.y = 0.7;
        this.ackiri.position.z = -0.2;
        this.scene.add(this.ackiri);

        // label
        const earthDiv = document.createElement( 'div' );
        earthDiv.className = 'label';
        earthDiv.textContent = 'AC kanan';
        const earthLabel = new CSS2DObject( earthDiv );
        earthLabel.position.set( 0, 0.5, 0 );
        this.ackanan.add( earthLabel );

        const labelAckiri = document.createElement( 'div' );
        labelAckiri.className = 'label';
        labelAckiri.textContent = 'AC kiri';
        const AckiriLabel = new CSS2DObject( labelAckiri );
        AckiriLabel.position.set( 0, 0.5, 0 );
        this.ackiri.add( AckiriLabel );

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
        this.listrik = new THREE.Mesh(geometrylistrik, materiallistrik);
        this.listrik.position.x = 0.9;
        this.listrik.position.y = 0.6;
        this.listrik.position.z = -1.76;
        this.scene.add(this.listrik);
        
        // baterai
        let geometrybaterai = new THREE.BoxGeometry(0.8, 0.4, 0.5);
        let materialbaterai = new THREE.MeshBasicMaterial({color: 0x323232});
        this.baterai = new THREE.Mesh(geometrybaterai, materialbaterai);
        this.baterai.position.x = -0.18;
        this.baterai.position.y = 0.21;
        this.baterai.position.z = -1.5;
        this.scene.add(this.baterai);
        
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
        const wall2Gometry = new THREE.BoxGeometry( 0.05,1,3.35 );
				const wall2Material = new THREE.MeshBasicMaterial( {
          map:wallcolor, 
          color:0xdddddd,
          side: THREE.DoubleSide
        } );
				const wall2 = new THREE.Mesh( wall2Gometry, wall2Material );
        wall2.position.x = -1.27;
        wall2.position.y = 0.5;
        wall2.position.z = -0.19;
				this.scene.add( wall2 );

        // wall 
        const wall3Gometry = new THREE.BoxGeometry( 0.05,1,3.35 );
				const wall3Material = new THREE.MeshBasicMaterial( {
          map:wallcolor,
          color:0xdddddd,
          side:THREE.DoubleSide
        } );
				const wall3 = new THREE.Mesh( wall3Gometry, wall3Material );
        wall3.position.x = 1.27;
        wall3.position.y = 0.5;
        wall3.position.z = -0.19;
				this.scene.add( wall3 );

        this.rollOverGeo = new THREE.BoxGeometry( 50, 50, 50 );
				this.rollOverMaterial = new THREE.MeshBasicMaterial( { color: 0xff0000, opacity: 0.5, transparent: true } );
				this.rollOverMesh = new THREE.Mesh( this.rollOverGeo, this.rollOverMaterial );
				this.scene.add( this.rollOverMesh );

				this.cubeGeo = new THREE.BoxGeometry( 50, 50, 50 );
				this.cubeMaterial = new THREE.MeshLambertMaterial( { color: 0xfeb74c})

        this.raycaster = new THREE.Raycaster(new THREE.Vector3(), new THREE.Vector3( 0, - 1, 0 ), 0, 10);
				this.mouse = new THREE.Vector2();

        this.renderer = new THREE.WebGLRenderer({antialias: true});
        this.renderer.setSize(container.clientWidth, container.clientHeight);
        // this.controls = new OrbitControls( this.camera, this.renderer.domElement);
        
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
        

        container.addEventListener('mousemove', ({ clientX, clientY }) => {
          const { innerWidth, innerHeight } = window;

          this.mouse.x = (clientX / innerWidth) * 2 - 1;
          this.mouse.y = -(clientY / innerHeight) * 2 + 1;
        });

        // keyboard controls AWSD
        window.addEventListener('keydown',(event)=>{
            switch ( event.code ) {

              case 'ArrowUp':
              case 'KeyW':
                this.camera.position.z -= 0.1
                break;

              case 'ArrowLeft':
              case 'KeyA':
                this.camera.position.x -= 0.1
                break;

              case 'ArrowDown':
              case 'KeyS':
              this.camera.position.z += 0.1
                break;

              case 'ArrowRight':
              case 'KeyD':
                this.camera.position.x += 0.1
                break;

              case 'Space':
                if ( this.canJump === true ) this.velocity.y += 300;
                this.canJump = false;
                break;w
            }
        })
        window.addEventListener('keyup',(event)=>{
          switch ( event.code ) {

            case 'KeyW':
              this.camera.position.z -= 0
              break;

            case 'KeyA':
              this.camera.position.x -= 0
              break;

            case 'KeyS':
              this.camera.position.z += 0
              break;

            case 'KeyD':
              this.camera.position.x += 0
              break;

          }

        })
      },

      animate(){
        // this.controls2.update();
        
        this.raycaster.setFromCamera(this.mouse,this.camera);
        requestAnimationFrame(this.animate);
        this.renderer.render(this.scene, this.camera);
        this.labelRenderer.render(this.scene, this.camera);
      },

  },
  mounted() {
    this.init();
    this.animate();
  }

}
</script>

<style>
#container{
  width:100%;
  height:100vh;
  overflow:hidden;
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

</style>