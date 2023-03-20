import * as THREE from '/node_modules/three/build/three.module.js';

let scene, camera, renderer;

// Creates the renderer with antialiasing enabled
renderer = new THREE.WebGLRenderer({
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

// Resize the renderer when the window resizes, also updates the camera aspect ratio
window.addEventListener('resize', function() {
    var width = window.innerWidth;
    var height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix(); 
});

// Creates the scene!!!!! :D
scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera(120, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(-10, 2.5, -10);

// These are the default camera rotation values
camera.rotation.set(-0.32 , 0.76, -1.2);

export {scene, camera, renderer}; //exportation station 
