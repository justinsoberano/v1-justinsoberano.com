import * as THREE from '/node_modules/three/build/three.module.js';
import {cube, cube2, dodecahedron, tetrahedron, spinTop, 
       octahedronMesh, octahedronMesh2, octahedronMesh3, 
       plane} from '/src/geometries/geometry.js';
import {scene, camera, renderer} from '/src/renderer/render.js';
import {TWEEN} from '/node_modules/three/examples/jsm/libs/tween.module.min.js';
import {RenderPass} from '/node_modules/three/examples/jsm/postprocessing/RenderPass.js';
import {EffectComposer} from '/node_modules/three/examples/jsm/postprocessing/EffectComposer.js';
import {UnrealBloomPass} from '/node_modules/three/examples/jsm/postprocessing/UnrealBloomPass.js';
import {FilmPass} from '/node_modules/three/examples/jsm/postprocessing/FilmPass.js';
import {GlitchPass} from '/node_modules/three/examples/jsm/postprocessing/GlitchPass.js';
import {VignetteShader} from '/node_modules/three/examples/jsm/shaders/VignetteShader.js';
import {ShaderPass} from '/node_modules/three/examples/jsm/postprocessing/ShaderPass.js';
import {FilmShader} from '/node_modules/three/examples/jsm/shaders/FilmShader.js';
import {OutlinePass} from '/node_modules/three/examples/jsm/postprocessing/OutlinePass.js';
import {FXAAShader} from '/node_modules/three/examples/jsm/shaders/FXAAShader.js';

let selectedObjects = [];

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

const obj3d = new THREE.Object3D();
const group = new THREE.Group();


const composer = new EffectComposer(renderer);
const renderScene = new RenderPass(scene, camera);
const clock = new THREE.Clock();
composer.addPass(renderScene);
const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innetHeight), 0.7, 2.2, 0.2);
composer.addPass(bloomPass);
const filmPass = new FilmPass(0.2, 1, 10, false);
composer.addPass(filmPass);
const glitchPass = new GlitchPass();
composer.addPass(glitchPass);
const shaderPass = new ShaderPass(VignetteShader);
composer.addPass(shaderPass);
const shaderPass2 = new ShaderPass(FilmShader);
composer.addPass(shaderPass2);
const outlinePass = new OutlinePass( new THREE.Vector2( window.innerWidth, window.innerHeight ), scene, camera );
composer.addPass(outlinePass);
outlinePass.edgeStrength = 3;
outlinePass.edgeGlow = 1;
outlinePass.edgeThickness = 4;
const effectFXAA = new ShaderPass( FXAAShader );
effectFXAA.uniforms[ 'resolution' ].value.set( 1 / window.innerWidth, 1 / window.innerHeight );
composer.addPass(effectFXAA);

renderer.domElement.style.touchAction = 'none';
renderer.domElement.addEventListener('pointermove', onPointerMove);

function onPointerMove(event) {
    if (event.isPrimary === false ) return;
    mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
    checkIntersection();
}

function addSelectedObject( object ) {
    selectedObjects = [];
    selectedObjects.push( object );
}

function checkIntersection() {
    raycaster.setFromCamera( mouse, camera );
    const intersects = raycaster.intersectObject( scene, true );
    if (intersects.length > 0 ) {
        const selectedObject = intersects[ 0 ].object;
        addSelectedObject( selectedObject );
        outlinePass.selectedObjects = selectedObjects;
    } else {
        // outlinePass.selectedObjects = [];
    }
}

new TWEEN.Tween(cube.position)
    .to({y: 1}, 6000)
    .easing(TWEEN.Easing.Back.Out)
    .yoyo(true)
    .start();
;

new TWEEN.Tween(cube.rotation)
    .to({ x: 3 * Math.PI }, 3000)
    .easing(TWEEN.Easing.Quadratic.InOut)
    .yoyo(true)
    .start();
;

new TWEEN.Tween(cube2.position)
    .to({y: 4}, 6000)
    .easing(TWEEN.Easing.Back.Out)
    .yoyo(true)
    .start();
;
new TWEEN.Tween(cube2.rotation)
    .to({ z: 6 * Math.PI }, 3000)
    .easing(TWEEN.Easing.Quadratic.InOut)
    .yoyo(true)
    .start();
;

new TWEEN.Tween(dodecahedron.position)
    .to({y: -2}, 3000)
    .easing(TWEEN.Easing.Cubic.Out)
    .yoyo(true)
    .start();
;
new TWEEN.Tween(dodecahedron.rotation)
    .to({ x: 6 * Math.PI }, 3000)
    .easing(TWEEN.Easing.Quadratic.InOut)
    .yoyo(true)
    .start();
;

new TWEEN.Tween(tetrahedron.position)
    .to({y: -1.5}, 9000)
    .easing(TWEEN.Easing.Back.Out)
    .yoyo(true)
    .start();
;
new TWEEN.Tween(tetrahedron.rotation)
    .to({ z: 3.2 * Math.PI }, 2000)
    .easing(TWEEN.Easing.Quadratic.InOut)
    .yoyo(true)
    .start();
;

new TWEEN.Tween(spinTop.position)
    .to({y: 2.5}, 5000)
    .easing(TWEEN.Easing.Back.Out)
    .yoyo(true)
    .start();
;
new TWEEN.Tween(spinTop.rotation)
    .to({ z: 3 * Math.PI }, 3300)
    .easing(TWEEN.Easing.Circular.InOut)
    .yoyo(true)
    .start();
;

new TWEEN.Tween(camera.rotation)
    .to({z:0.2}, 4000)
    .easing(TWEEN.Easing.Exponential.Out)
    .yoyo(true)
    .start();
;

new TWEEN.Tween(camera.position)
    .to({x: 6}, 2500)
    .easing(TWEEN.Easing.Cubic.Out)
    .yoyo(true)
    .start();
;

new TWEEN.Tween(camera.position)
    .to({z: 6}, 2500)
    .easing(TWEEN.Easing.Cubic.Out)
    .yoyo(true)
    .start();
;

new TWEEN.Tween(octahedronMesh.position)
    .to({y: 2}, 5500)
    .easing(TWEEN.Easing.Cubic.Out)
    .yoyo(true)
    .start();
;

new TWEEN.Tween(camera)
    .to({fov: 75}, 4500)
    .easing(TWEEN.Easing.Cubic.Out)
    .yoyo(true)
    .start();
;

new TWEEN.Tween(octahedronMesh2.position)
    .to({y: 50}, 7000)
    .easing(TWEEN.Easing.Cubic.Out)
    .yoyo(true)
    .start();
;

new TWEEN.Tween(octahedronMesh3.position)
    .to({y: -110}, 10000)
    .easing(TWEEN.Easing.Cubic.Out)
    .yoyo(true)
    .start();
;

new TWEEN.Tween(plane.position)
    .to({y: -2}, 10000)
    .easing(TWEEN.Easing.Cubic.Out)
    .yoyo(true)
    .start();
;

function animateShapes() {

    const time = clock.getElapsedTime();
    cube.rotation.x += 0.01; cube.rotation.y += 0.02; cube.rotation.z += 0.02;
    cube2.rotation.x += 0.01; cube2.rotation.y += 0.01; cube2.rotation.z += 0.03;
    dodecahedron.rotation.x += 0.01; dodecahedron.rotation.y += 0.01; dodecahedron.rotation.z += 0.01;
    tetrahedron.rotation.x += 0.04; tetrahedron.rotation.y += 0.007; tetrahedron.rotation.z += 0.01;
    spinTop.rotation.x += 0.02; spinTop.rotation.y += 0.01; spinTop.rotation.z += 0.02;
    octahedronMesh.rotation.x += 0.001; octahedronMesh2.rotation.x +=  0.001; octahedronMesh3.rotation.x += 0.001;
    cube.position.y += Math.cos(time) * 0.001;
    cube2.position.y += Math.cos(time) * 0.001;
    dodecahedron.position.y += Math.sin(time) * 0.001;
    tetrahedron.position.y += Math.cos(time) * 0.002;
    spinTop.position.y += Math.sin(time) * 0.003;
    ;
    TWEEN.update();
    composer.render();
    camera.updateProjectionMatrix();
}
renderer.setAnimationLoop(animateShapes);