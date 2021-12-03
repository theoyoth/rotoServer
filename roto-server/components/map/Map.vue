<template>
  <div id="container"></div>
</template>

<script type="module">
import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export default {
    data() {
      return {
        camera: null,
        scene: null,
        renderer: null,
        mesh: null,
        controls: null,
        raycaster: false,
        pointer: false,
        isShiftDown:false,
        cubeGeo: null,
        cubeMaterial: null,
        rollOverGeo: null,
        rollOverMaterial: null,
        rollOverMesh: null,
        object:[],
      }
    },
    methods: {
      init() {
        let container = document.getElementById('container');

        this.camera = new THREE.PerspectiveCamera(80, container.clientWidth/container.clientHeight, 0.01, 100);

        
        this.camera.position.z = 2.8;
        this.camera.position.y = 0.5;

        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x222222);

        // box 1
        let geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
        let material = new THREE.MeshBasicMaterial({color: 0x2442aa});
        this.mesh = new THREE.Mesh(geometry, material);
        this.mesh.position.y = 0.1;
        this.scene.add(this.mesh);

        // box 2
        let geometrybox2 = new THREE.BoxGeometry(0.2, 0.2, 0.5);
        let materialbox2 = new THREE.MeshBasicMaterial({color: 0xbb9922});
        this.mesh = new THREE.Mesh(geometrybox2, materialbox2);
        this.mesh.position.x = -1.3;
        this.mesh.position.y = 0.1;
        this.mesh.position.z = 0.6;
        this.scene.add(this.mesh);
        // box 3
        let geometrybox3 = new THREE.BoxGeometry(0.2, 0.2, 0.5);
        let materialbox3 = new THREE.MeshBasicMaterial({color: 0x2442aa});
        this.mesh = new THREE.Mesh(geometrybox3, materialbox3);
        this.mesh.position.x = -1.3;
        this.mesh.position.y = 0.1;
        this.scene.add(this.mesh);
        // box 4
        let geometrybox4 = new THREE.BoxGeometry(0.2, 0.6, 0.5);
        let materialbox4 = new THREE.MeshBasicMaterial({color: 0xaa4244});
        this.mesh = new THREE.Mesh(geometrybox4, materialbox4);
        this.mesh.position.x = 1.3;
        this.mesh.position.y = 0.3;
        this.scene.add(this.mesh);

        const floorGometry = new THREE.PlaneGeometry( 3,3 );
				const floorMaterial = new THREE.MeshBasicMaterial( {
          color: 0x666666, 
          side: THREE.DoubleSide
        } );
				const floor = new THREE.Mesh( floorGometry, floorMaterial );
				floor.rotation.x = - Math.PI / 2;
				this.scene.add( floor );

        this.rollOverGeo = new THREE.BoxGeometry( 50, 50, 50 );
				this.rollOverMaterial = new THREE.MeshBasicMaterial( { color: 0xff0000, opacity: 0.5, transparent: true } );
				this.rollOverMesh = new THREE.Mesh( this.rollOverGeo, this.rollOverMaterial );
				this.scene.add( this.rollOverMesh );

				// cubes
				this.cubeGeo = new THREE.BoxGeometry( 50, 50, 50 );
				this.cubeMaterial = new THREE.MeshLambertMaterial( { color: 0xfeb74c})
        
        const gridHelper = new THREE.GridHelper( 5, 10 );
				this.scene.add( gridHelper );

        this.raycaster = new THREE.Raycaster();
				this.pointer = new THREE.Vector2();

        this.renderer = new THREE.WebGLRenderer({antialias: true});
        this.renderer.setSize(container.clientWidth, container.clientHeight);
        // this.controls = new OrbitControls( this.camera, container );
        // this.controls.update();
        container.appendChild(this.renderer.domElement);
      },

      animate(){
        requestAnimationFrame(this.animate);
        this.renderer.render(this.scene, this.camera);
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
}
</style>