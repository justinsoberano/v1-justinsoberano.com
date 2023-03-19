import * as THREE from '/node_modules/three/build/three.module.js';
import {cube, cube2, dodecahedron, tetrahedron, spinTop, octahedronMesh} from '/src/geometries/geometry.js';
import {scene, camera, renderer} from '/src/renderer/render.js';
import {TWEEN} from '/node_modules/three/examples/jsm/libs/tween.module.min.js';
import {RenderPass} from '/node_modules/three/examples/jsm/postprocessing/RenderPass.js';
import {EffectComposer} from '/node_modules/three/examples/jsm/postprocessing/EffectComposer.js';
import {UnrealBloomPass} from '/node_modules/three/examples/jsm/postprocessing/UnrealBloomPass.js';
import {FilmPass} from '/node_modules/three/examples/jsm/postprocessing/FilmPass.js';
import {GlitchPass} from '/node_modules/three/examples/jsm/postprocessing/GlitchPass.js';
import {VignetteShader} from '/node_modules/three/examples/jsm/shaders/VignetteShader.js';
import {ShaderPass} from '/node_modules/three/examples/jsm/postprocessing/ShaderPass.js';

const composer = new EffectComposer(renderer);
const renderScene = new RenderPass(scene, camera);
const clock = new THREE.Clock();
composer.addPass(renderScene);
const bloomPass = new UnrealBloomPass(new THREE.Vector2(1920, 1080), 0.7, 2.2, 0.2);
composer.addPass(bloomPass);
const filmPass = new FilmPass(0.2, 1, 750, false);
composer.addPass(filmPass);
const glitchPass = new GlitchPass();
composer.addPass(glitchPass);
const shaderPass = new ShaderPass(VignetteShader);
composer.addPass(shaderPass);

new TWEEN.Tween(cube.position)
    .to({y: 1}, 4000)
    .easing(TWEEN.Easing.Back.Out)
    .yoyo(true)
    .start();
;

new TWEEN.Tween(cube.rotation)
    .to({ y: 3 * Math.PI }, 2000)
    .easing(TWEEN.Easing.Quadratic.InOut)
    .yoyo(true)
    .start();
;

new TWEEN.Tween(cube2.position)
    .to({y: 4}, 3000)
    .easing(TWEEN.Easing.Back.Out)
    .yoyo(true)
    .start();
;
new TWEEN.Tween(cube2.rotation)
    .to({ z: 3 * Math.PI }, 3000)
    .easing(TWEEN.Easing.Circular.InOut)
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
    .to({ x: 3 * Math.PI }, 3000)
    .easing(TWEEN.Easing.Quadratic.InOut)
    .yoyo(true)
    .start();
;

new TWEEN.Tween(tetrahedron.position)
    .to({y: -1.5}, 3000)
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
    .to({y: 2}, 2500)
    .easing(TWEEN.Easing.Cubic.Out)
    .yoyo(true)
    .start();
;
new TWEEN.Tween(spinTop.rotation)
    .to({ y: 3 * Math.PI }, 2500)
    .easing(TWEEN.Easing.Circular.InOut)
    .yoyo(true)
    .start();
;

new TWEEN.Tween(camera.rotation)
    .to({z:0.2}, 2000)
    .easing(TWEEN.Easing.Cubic.Out)
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
    .to({y: 2}, 2500)
    .easing(TWEEN.Easing.Cubic.Out)
    .yoyo(true)
    .start();
;

new TWEEN.Tween(octahedronMesh.rotation)
    .to({y: 3 * Math.PI}, 2500)
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
    octahedronMesh.rotation.x += 0.02; octahedronMesh.rotation.y += 0.01; octahedronMesh.rotation.z += 0.02;
    cube.position.y += Math.sin(time) * 0.003;
    cube2.position.y += Math.cos(time) * 0.006;
    dodecahedron.position.y += Math.sin(time) * 0.007;
    tetrahedron.position.y += Math.cos(time) * 0.005;
    spinTop.position.y += Math.cos(time) * 0.004;
    ;
    TWEEN.update();
    composer.render();

}
renderer.setAnimationLoop(animateShapes);