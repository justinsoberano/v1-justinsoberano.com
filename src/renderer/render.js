import * as THREE from '../build/three.module.js';

export const renderer = new THREE.WebGLRenderer({
    antialias: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000);
renderer.shadowMap.enabled = true; // may not be needed as it is enabled by default????

// Reduces pixel ratio on high DPI displays for better performance
if (window.devicePixelRatio > 1) {
    renderer.setPixelRatio(window.devicePixelRatio / 2);
} else {
    renderer.setPixelRatio(window.devicePixelRatio);
}
document.body.appendChild(renderer.domElement);
window.addEventListener('resize', function() {
    var width = window.innerWidth;
    var height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix(); 
});
export const scene = new THREE.Scene();
export const camera = new THREE.PerspectiveCamera(120, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(-10, 2.5, -10);
camera.rotation.set(-0.32 , 0.76, -1.2);
