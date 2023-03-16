import * as THREE from '/node_modules/three/build/three.module.js';
import {cube, cube2, dodecahedron, tetrahedron, spinTop} from '/src/geometries/geometry.js';
import {scene, camera, renderer} from '/src/renderer/render.js';
import {TWEEN} from '/node_modules/three/examples/jsm/libs/tween.module.min.js';
import {RenderPass} from '/node_modules/three/examples/jsm/postprocessing/RenderPass.js';
import {EffectComposer} from '/node_modules/three/examples/jsm/postprocessing/EffectComposer.js';
import {UnrealBloomPass} from '/node_modules/three/examples/jsm/postprocessing/UnrealBloomPass.js';

const composer = new EffectComposer(renderer);
const renderScene = new RenderPass(scene, camera);
composer.addPass(renderScene);
const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1, 2.2, 0.1);
composer.addPass(bloomPass);

new TWEEN.Tween(cube.position)
    .to({y: 1}, 2000)
    .easing(TWEEN.Easing.Cubic.Out)
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
    .to({y: 1}, 3000)
    .easing(TWEEN.Easing.Cubic.Out)
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
    .to({y: 3}, 2500)
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
    .to({z:0.1}, 2000)
    .easing(TWEEN.Easing.Cubic.Out)
    .yoyo(true)
    .start();
;

new TWEEN.Tween(camera.position)
    .to({x: 6}, 3000)
    .easing(TWEEN.Easing.Cubic.Out)
    .yoyo(true)
    .start();
;

new TWEEN.Tween(camera.position)
    .to({z: 6}, 3000)
    .easing(TWEEN.Easing.Cubic.Out)
    .yoyo(true)
    .start();
;

function animateShapes() {
    cube.rotation.x += 0.01; cube.rotation.y += 0.02; cube.rotation.z += 0.02;
    cube2.rotation.x += 0.01; cube2.rotation.y += 0.01; cube2.rotation.z += 0.03;
    dodecahedron.rotation.x += 0.01; dodecahedron.rotation.y += 0.01; dodecahedron.rotation.z += 0.01;
    tetrahedron.rotation.x += 0.04; tetrahedron.rotation.y += 0.007; tetrahedron.rotation.z += 0.01;
    spinTop.rotation.x += 0.02; spinTop.rotation.y += 0.01; spinTop.rotation.z += 0.02;

    TWEEN.update();
    composer.render();

}
renderer.setAnimationLoop(animateShapes);