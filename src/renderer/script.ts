import * as THREE from './node_modules/three/build/three.module.js';
import {OrbitControls} from './node_modules/three/examples/jsm/controls/OrbitControls.js';
import {TextGeometry} from './node_modules/three/examples/jsm/geometries/TextGeometry.js';


let scene, camera, renderer, controller;

// creates the renderer for the scene and antialiasing
renderer = new THREE.WebGLRenderer({
    antialias: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000);
// Makes everythiing crisp :P
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);

// resizes the scene when the window is resized
window.addEventListener('resize', function() {
    var width = window.innerWidth;
    var height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix(); 
});

// creates the scene
scene = new THREE.Scene();

// creates the camera
camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
controller = new OrbitControls(camera, renderer.domElement);
camera.position.set(5, 3, 5);
controller.addEventListener( 'change', ()=>{renderer.render(scene, camera)} );
controller.update();

// creates the axis that helps with positioning
const axis = new THREE.AxesHelper(5);
scene.add(axis);

// Grid
const gridMeshBottom = new THREE.GridHelper(1000, 200, 0xff00a2, 0xff00a2);
gridMeshBottom.position.y = -3;
scene.add(gridMeshBottom);

const gridMeshTop = new THREE.GridHelper(1000, 200, 0xff7b00, 0xff7b00);
gridMeshTop.position.y = 10;
scene.add(gridMeshTop);

// Universal Cube Mesh for the Cubes
const cubeMesh = new THREE.BoxGeometry(1, 1, 1);

// Material and Constructor for Cube1
// const material2 = new THREE.MeshBasicMaterial({color: 0x493DD1});
const material2 = new THREE.MeshNormalMaterial();
const cube = new THREE.Mesh(cubeMesh, material2);
cube.position.set(1, 1, 1);
scene.add(cube);

// Material and Constructor for Cube2
// const material3 = new THREE.MeshBasicMaterial({color: 0x78AA51});
const material3 = new THREE.MeshNormalMaterial();
const cube2 = new THREE.Mesh(cubeMesh, material3);
cube2.position.set(-5, 1, 3);
scene.add(cube2);

// Dodecahedron Mesh
const shapeMesh = new THREE.DodecahedronGeometry(1, 0);
// const shapeMaterial = new THREE.MeshBasicMaterial({color: 0xAE14CB});
const shapeMaterial = new THREE.MeshNormalMaterial();
const dodecahedron = new THREE.Mesh(shapeMesh, shapeMaterial);
dodecahedron.position.set(-1, -2, 2);
scene.add(dodecahedron);

// Tetahedron Mesh
const shapeMesh2 = new THREE.TetrahedronGeometry(1, 0);
// const shapeMaterial2 = new THREE.MeshBasicMaterial({color: 0x00FF00});
const shapeMaterial2 = new THREE.MeshNormalMaterial();
const tetrahedron = new THREE.Mesh(shapeMesh2, shapeMaterial2);
tetrahedron.position.set(3, -1.5, -2);
scene.add(tetrahedron);

// SpinTop mesh
const geometry = new THREE.SphereGeometry( 1, 64, 2);
// const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
const material = new THREE.MeshNormalMaterial();
const spinTop = new THREE.Mesh( geometry, material );
spinTop.position.set(1, 3, -4);
scene.add(spinTop);

function animateShapes() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.02;
    cube.rotation.z += 0.02;
    cube2.rotation.x += 0.01;
    cube2.rotation.y += 0.01;
    cube2.rotation.z += 0.03;
    dodecahedron.rotation.x += 0.01;
    dodecahedron.rotation.y += 0.01;
    dodecahedron.rotation.z += 0.01;
    tetrahedron.rotation.x += 0.04;
    tetrahedron.rotation.y += 0.007;
    tetrahedron.rotation.z += 0.01;
    spinTop.rotation.x += 0.02;
    spinTop.rotation.y += 0.01;
    spinTop.rotation.z += 0.02;
    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animateShapes);