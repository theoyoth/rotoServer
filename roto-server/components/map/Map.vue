<template>
  <div id="container"></div>
</template>

<script>
import * as THREE from 'three';
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// import {TubePainter} from 'three/examples/jsm/misc/TubePainter'

export default {
    data() {
      return {
        camera: null,
        scene: null,
        renderer: null,
        mesh: null,
        // controls: null,
        // controller1: null,
        // controller2: null,
        // cursor:new Three.Vector3(),
      }
    },
    methods: {
      init() {
        // let container = document.getElementById('container');

        // this.camera = new THREE.PerspectiveCamera(80, container.clientWidth/container.clientHeight, 0.01, 100);

        // const controls = new OrbitControls( this.camera, container );
        
        // this.camera.position.z = 2;
        // controls.update();

        // this.scene = new THREE.Scene();
        // this.scene.background = new THREE.Color(0x222222);

        // let geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
        // let material = new THREE.MeshNormalMaterial();

        // this.mesh = new THREE.Mesh(geometry, material);
        // this.mesh.matrix.setPosition(1,1.2,1);
        // this.scene.add(this.mesh);

        // const floorGometry = new THREE.PlaneGeometry( 3,3 );
				// const floorMaterial = new THREE.MeshBasicMaterial( {
        //   color: 0xaaaaaa, 
        //   side: THREE.DoubleSide
        // } );
				// const floor = new THREE.Mesh( floorGometry, floorMaterial );
				// floor.rotation.x = - Math.PI / 2;
				// this.scene.add( floor );

        // this.renderer = new THREE.WebGLRenderer({antialias: true});
        // this.renderer.setSize(container.clientWidth, container.clientHeight);
        // container.appendChild(this.renderer.domElement);
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