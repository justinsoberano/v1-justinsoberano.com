import * as THREE from './node_modules/three/build/three.module.js';
import {OrbitControls} from './node_modules/three/examples/jsm/controls/OrbitControls.js';
let scene, camera, renderer, controller;

// creates the renderer for the scene
renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// creates the scene
scene = new THREE.Scene();

// creates the camera
camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
controller = new OrbitControls(camera, renderer.domElement);
camera.position.set(1, 2, 3);
controller.addEventListener( 'change', ()=>{renderer.render(scene, camera)} );
controller.update();

// creates the axis that helps with positioning
const axis = new THREE.AxesHelper(5);
scene.add(axis);

// creates the yellow plane 
const planeMesh = new THREE.PlaneGeometry(10, 10);
const planeMaterial = new THREE.MeshBasicMaterial({color: 0xffff00, side: THREE.DoubleSide});
const plane = new THREE.Mesh(planeMesh, planeMaterial);
plane.rotation.x = Math.PI / 2;
plane.position.y = -3;
scene.add(plane);

const mesh = new THREE.SphereGeometry(1, 16, 16);
const material = new THREE.MeshBasicMaterial({color: 0x00ff00});
const sphere = new THREE.Mesh(mesh, material);

scene.add(sphere);

const mesh2 = new THREE.BoxGeometry(1, 1, 1);
const material2 = new THREE.MeshBasicMaterial({color: 0x0000ff});
const cube = new THREE.Mesh(mesh2, material2);
cube.position.set(1, 1, 1);
scene.add(cube);

const light = new THREE.AmbientLight(0x404040); // soft white light
light.position.set(1, 1, 1);
scene.add(light);

function animation() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    cube.rotation.z += 0.01;
    renderer.render(scene, camera);
}
// renders the scene

renderer.setAnimationLoop(animation);