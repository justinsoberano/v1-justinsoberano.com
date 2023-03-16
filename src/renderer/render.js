import * as THREE from '/node_modules/three/build/three.module.js';
import {OrbitControls} from '/node_modules/three/examples/jsm/controls/OrbitControls.js';

let scene, camera, renderer, controller;

renderer = new THREE.WebGLRenderer({antialias: true,});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000);
renderer.shadowMap.enabled = true;

renderer.setPixelRatio(window.devicePixelRatio / 1.5);
document.body.appendChild(renderer.domElement);

window.addEventListener('resize', function() {
    var width = window.innerWidth;
    var height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix(); 
});
scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
controller = new OrbitControls(camera, renderer.domElement);
camera.position.set(6, 2, 6);
controller.addEventListener( 'change', ()=>{renderer.render(scene, camera)} );
controller.update();

export {scene, camera, renderer, controller};
