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
const planeMesh = new THREE.PlaneGeometry(1000, 1000);
const planeMaterial = new THREE.MeshBasicMaterial({color: 0x4D4D4D, side: THREE.DoubleSide});
const plane = new THREE.Mesh(planeMesh, planeMaterial);
plane.rotation.x = Math.PI / 2;
plane.position.y = -3;
scene.add(plane);

// const mesh = new THREE.SphereGeometry(1, 16, 16);
// const material = new THREE.MeshBasicMaterial({color: 0x00ff00});
// const sphere = new THREE.Mesh(mesh, material);

// scene.add(sphere);

// Universal Cube Mesh for the Cubes
const cubeMesh = new THREE.BoxGeometry(1, 1, 1);

// Material and Constructor for Cube1
const material2 = new THREE.MeshBasicMaterial({color: 0x493DD1});
const cube = new THREE.Mesh(cubeMesh, material2);
cube.position.set(1, 1, 1);
scene.add(cube);

// Material and Constructor for Cube2
const material3 = new THREE.MeshBasicMaterial({color: 0x78AA51});
const cube2 = new THREE.Mesh(cubeMesh, material3);
cube2.position.set(-5, 1, 3);
scene.add(cube2);

// Dodecahedron Mesh
const shapeMesh = new THREE.DodecahedronGeometry(1, 0);
const shapeMaterial = new THREE.MeshBasicMaterial({color: 0xAE14CB});
const dodecahedron = new THREE.Mesh(shapeMesh, shapeMaterial);
dodecahedron.position.set(-1, -2, 2);
scene.add(dodecahedron);

// doesnt work? needs shaders probably
const light = new THREE.AmbientLight(0x404040); // soft white light
light.position.set(1, 1, 1);
scene.add(light);

function animateCubes() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.02;
    cube.rotation.z += 0.02;
    cube2.rotation.x += 0.01;
    cube2.rotation.y += 0.01;
    cube2.rotation.z += 0.03;
    dodecahedron.rotation.x += 0.01;
    dodecahedron.rotation.y += 0.01;
    dodecahedron.rotation.z += 0.01;
    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animateCubes);