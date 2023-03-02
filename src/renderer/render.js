import * as THREE from '/node_modules/three/build/three.module.js';
import {OrbitControls} from '/node_modules/three/examples/jsm/controls/OrbitControls.js';

let scene, camera, renderer, controller;

// creates the renderer for the scene and antialiasing
renderer = new THREE.WebGLRenderer({antialias: true,});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000);
renderer.shadowMap.enabled = true;

// Makes everything crisp :P
renderer.setPixelRatio(window.devicePixelRatio / 1.5);
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
camera.position.set(6, 2, 6);
controller.addEventListener( 'change', ()=>{renderer.render(scene, camera)} );
controller.update();

const renderPass = new THREE.RenderPass(scene, camera);
const badTVPass = new THREE.ShaderPass(THREE.BadTVShader);
const rgbPass = new THREE.ShaderPass(THREE.RGBShiftShader);
const filmPass = new THREE.ShaderPass(THREE.FilmShader);
const staticPass = new THREE.ShaderPass(THREE.StaticShader);
const copyPass = new THREE.ShaderPass(THREE.CopyShader);

// creates the axis that helps with positioning
// const axis = new THREE.AxesHelper(5);
// scene.add(axis);

export {scene, camera, renderer, controller};
