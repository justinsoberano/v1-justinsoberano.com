import * as THREE from '../build/three.module.js';
import {cube, cube2, dodecahedron, tetrahedron, spinTop, 
       octahedronMesh, octahedronMesh2, octahedronMesh3, 
       plane} from '../geometries/geometry.js';
import {scene, camera, renderer} from '../renderer/render.js';
import {TWEEN} from '../post/anim/tween.module.min.js';
import {RenderPass} from '../renderer/RenderPass/RenderPass.js';
import {EffectComposer} from '../shaders/composer/EffectComposer.js';
import {UnrealBloomPass} from '../shaders/pass/UnrealBloomPass.js';
import {FilmPass} from '../shaders/pass/FilmPass.js';
import {GlitchPass} from '../shaders/pass/GlitchPass.js';
import {VignetteShader} from '../shaders/VignetteShader.js';
import {ShaderPass} from '../shaders/pass/ShaderPass.js';
import {FilmShader} from '../shaders/FilmShader.js';
import {OutlinePass} from '../shaders/pass/OutlinePass.js';
import {FXAAShader} from '../shaders/FXAAShader.js';
import {l, f, c, manager, generate3D, 
       websiteName, experiencesMat, 
       projectMat, aboutMat, contactMat, otherMat} from './lettering.js';

/* NEEDS MAJOR CLEANUP AND OPTIMIZATION OH MY GOD */

manager.onLoad = () => {
    generate3D();
}

let selectedObjects = [];
let play = true;
var expo;
let textOpacity, expOpacity, projOpacity, aboutOpacity, contactOpacity, otherOpacity;

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

const composer = new EffectComposer(renderer);
const renderScene = new RenderPass(scene, camera);
const clock = new THREE.Clock();
composer.addPass(renderScene);
const outlinePass = new OutlinePass( new THREE.Vector2( window.innerWidth, window.innerHeight ), scene, camera );
composer.addPass(outlinePass);
outlinePass.edgeStrength = 3;
outlinePass.edgeGlow = 1.25;
outlinePass.edgeThickness = 4;
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
const effectFXAA = new ShaderPass( FXAAShader );
effectFXAA.uniforms['resolution'].value.set( 1 / window.innerWidth, 1 / window.innerHeight );
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
    selectedObjects.push(object);
}

function checkIntersection() {
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObject(scene, true);
    if (intersects.length > 0 && intersects[0].object === cube || 
        intersects[0].object === cube2 || intersects[0].object === dodecahedron || 
        intersects[0].object === tetrahedron || intersects[0].object === spinTop) {
        const selectedObject = intersects[0].object;
        addSelectedObject(selectedObject);
        outlinePass.selectedObjects = selectedObjects;
        
        let playSound = () => {let audio = new Audio('../../sounds/hover.m4a').play();}
        if(play == true) {
            playSound();
            play = false;
        }

        if(intersects[0].object === cube2) {
            console.log("CUBE2")
            var highestTimeoutId = setTimeout(";");
            for (var i = 0 ; i < highestTimeoutId ; i++) {
                clearTimeout(i); 
            }
            experiencesMat.depthWrite = false;
            projectMat.depthWrite = false;
            websiteName.depthWrite = false;
            otherMat.depthWrite = false;
            aboutMat.depthWrite = true;
            contactMat.depthWrite = false;
            textOpacity = new TWEEN.Tween(websiteName)
                .to({opacity: 0}, 30)
                .easing(TWEEN.Easing.Quadratic.InOut)
                .yoyo(true)
                .start();
            expOpacity = new TWEEN.Tween(experiencesMat)
                .to({opacity: 0}, 20)
                .easing(TWEEN.Easing.Quadratic.InOut)
                .yoyo(true)
                .start();
            projOpacity = new TWEEN.Tween(projectMat)
                .to({opacity: 0}, 20)
                .easing(TWEEN.Easing.Quadratic.InOut)
                .yoyo(true)
                .start();
            otherOpacity = new TWEEN.Tween(otherMat)
                .to({opacity: 0}, 20)
                .easing(TWEEN.Easing.Quadratic.InOut)
                .yoyo(true)
                .start();
            aboutOpacity = new TWEEN.Tween(aboutMat)
                .to({opacity: 1}, 30)
                .easing(TWEEN.Easing.Quadratic.InOut)
                .yoyo(true)
                .start();
            contactOpacity = new TWEEN.Tween(contactMat)
                .to({opacity: 0}, 20)
                .easing(TWEEN.Easing.Quadratic.InOut)
                .yoyo(true)
                .start();
        }
        if(intersects[0].object === cube) {
            console.log("CUBE")
            var highestTimeoutId = setTimeout(";");
            for (var i = 0 ; i < highestTimeoutId ; i++) {
                clearTimeout(i); 
            }
            experiencesMat.depthWrite = false;
            projectMat.depthWrite = true;
            websiteName.depthWrite = false;
            textOpacity = new TWEEN.Tween(websiteName)
                .to({opacity: 0}, 30)
                .easing(TWEEN.Easing.Quadratic.InOut)
                .yoyo(true)
                .start();
            projOpacity = new TWEEN.Tween(projectMat)
                .to({opacity: 1}, 30)
                .easing(TWEEN.Easing.Quadratic.InOut)
                .yoyo(true)
                .start();
            expOpacity = new TWEEN.Tween(experiencesMat)
                .to({opacity: 0}, 20)
                .easing(TWEEN.Easing.Quadratic.InOut)
                .yoyo(true)
                .start();
            otherOpacity = new TWEEN.Tween(otherMat)
                .to({opacity: 0}, 20)
                .easing(TWEEN.Easing.Quadratic.InOut)
                .yoyo(true)
                .start();
            aboutOpacity = new TWEEN.Tween(aboutMat)
                .to({opacity: 0}, 20)
                .easing(TWEEN.Easing.Quadratic.InOut)
                .yoyo(true)
                .start();
            contactOpacity = new TWEEN.Tween(contactMat)
                .to({opacity: 0}, 20)
                .easing(TWEEN.Easing.Quadratic.InOut)
                .yoyo(true)
                .start();
        }
        if(intersects[0].object === dodecahedron) {
            console.log("DODECAHEDRON")
            var highestTimeoutId = setTimeout(";");
            for (var i = 0 ; i < highestTimeoutId ; i++) {
                clearTimeout(i); 
            }
            experiencesMat.depthWrite = false;
            projectMat.depthWrite = false;
            websiteName.depthWrite = false;
            otherMat.depthWrite = false;
            aboutMat.depthWrite = false;
            contactMat.depthWrite = true;
            textOpacity = new TWEEN.Tween(websiteName)
                .to({opacity: 0}, 30)
                .easing(TWEEN.Easing.Quadratic.InOut)
                .yoyo(true)
                .start();
            expOpacity = new TWEEN.Tween(experiencesMat)
                .to({opacity: 0}, 20)
                .easing(TWEEN.Easing.Quadratic.InOut)
                .yoyo(true)
                .start();
            projOpacity = new TWEEN.Tween(projectMat)
                .to({opacity: 0}, 20)
                .easing(TWEEN.Easing.Quadratic.InOut)
                .yoyo(true)
                .start();
            otherOpacity = new TWEEN.Tween(otherMat)
                .to({opacity: 0}, 20)
                .easing(TWEEN.Easing.Quadratic.InOut)
                .yoyo(true)
                .start();
            aboutOpacity = new TWEEN.Tween(aboutMat)
                .to({opacity: 0}, 20)
                .easing(TWEEN.Easing.Quadratic.InOut)
                .yoyo(true)
                .start();
            contactOpacity = new TWEEN.Tween(contactMat)
                .to({opacity: 1}, 30)
                .easing(TWEEN.Easing.Quadratic.InOut)
                .yoyo(true)
                .start();
        }
        if(intersects[0].object === tetrahedron) {
            console.log("TETRAHEDRON")
            var highestTimeoutId = setTimeout(";");
            for (var i = 0 ; i < highestTimeoutId ; i++) {
                clearTimeout(i); 
            }
            experiencesMat.depthWrite = false;
            projectMat.depthWrite = false;
            websiteName.depthWrite = false;
            otherMat.depthWrite = true;
            aboutMat.depthWrite = false;
            contactMat.depthWrite = false;
            textOpacity = new TWEEN.Tween(websiteName)
                .to({opacity: 0}, 30)
                .easing(TWEEN.Easing.Quadratic.InOut)
                .yoyo(true)
                .start();
            expOpacity = new TWEEN.Tween(experiencesMat)
                .to({opacity: 0}, 20)
                .easing(TWEEN.Easing.Quadratic.InOut)
                .yoyo(true)
                .start();
            projOpacity = new TWEEN.Tween(projectMat)
                .to({opacity: 0}, 20)
                .easing(TWEEN.Easing.Quadratic.InOut)
                .yoyo(true)
                .start();
            otherOpacity = new TWEEN.Tween(otherMat)
                .to({opacity: 1}, 50)
                .easing(TWEEN.Easing.Quadratic.InOut)
                .yoyo(true)
                .start();
            aboutOpacity = new TWEEN.Tween(aboutMat)
                .to({opacity: 0}, 20)
                .easing(TWEEN.Easing.Quadratic.InOut)
                .yoyo(true)
                .start();
            contactOpacity = new TWEEN.Tween(contactMat)
                .to({opacity: 0}, 20)
                .easing(TWEEN.Easing.Quadratic.InOut)
                .yoyo(true)
                .start();
        }
        if(intersects[0].object === spinTop) {
            console.log("SPINTOP")
            var highestTimeoutId = setTimeout(";");
            for (var i = 0 ; i < highestTimeoutId ; i++) {
                clearTimeout(i); 
            }
            experiencesMat.depthWrite = true;
            projectMat.depthWrite = false;
            websiteName.depthWrite = false;
            otherMat.depthWrite = false;
            aboutMat.depthWrite = false;
            contactMat.depthWrite = false;
            textOpacity = new TWEEN.Tween(websiteName)
                .to({opacity: 0}, 30)
                .easing(TWEEN.Easing.Quadratic.InOut)
                .yoyo(true)
                .start();
            expOpacity = new TWEEN.Tween(experiencesMat)
                .to({opacity: 1}, 50)
                .easing(TWEEN.Easing.Quadratic.InOut)
                .yoyo(true)
                .start();
            projOpacity = new TWEEN.Tween(projectMat)
                .to({opacity: 0}, 20)
                .easing(TWEEN.Easing.Quadratic.InOut)
                .yoyo(true)
                .start();
            otherOpacity = new TWEEN.Tween(otherMat)
                .to({opacity: 0}, 20)
                .easing(TWEEN.Easing.Quadratic.InOut)
                .yoyo(true)
                .start();
            aboutOpacity = new TWEEN.Tween(aboutMat)
                .to({opacity: 0}, 20)
                .easing(TWEEN.Easing.Quadratic.InOut)
                .yoyo(true)
                .start();
            contactOpacity = new TWEEN.Tween(contactMat)
                .to({opacity: 0}, 20)
                .easing(TWEEN.Easing.Quadratic.InOut)
                .yoyo(true)
                .start();
        }

    } else {
        outlinePass.selectedObjects = [];
        play = true;
        console.log("RESET")
        expo = setTimeout(() => {
            experiencesMat.depthWrite = false;
            projectMat.depthWrite = false;
            websiteName.depthWrite = true;
            otherMat.depthWrite = false;
            aboutMat.depthWrite = false;
            contactMat.depthWrite = false;
            textOpacity = new TWEEN.Tween(websiteName)
                .to({opacity: 1}, 1500)
                .easing(TWEEN.Easing.Quadratic.InOut)
                .yoyo(true)
                .start();
             expOpacity = new TWEEN.Tween(experiencesMat)
                .to({opacity: 0}, 500)
                .easing(TWEEN.Easing.Quadratic.InOut)
                .yoyo(true)
                .start();
            projOpacity = new TWEEN.Tween(projectMat)
                .to({opacity: 0}, 500)
                .easing(TWEEN.Easing.Quadratic.InOut)
                .yoyo(true)
                .start();
                otherOpacity = new TWEEN.Tween(otherMat)
                .to({opacity: 0}, 500)
                .easing(TWEEN.Easing.Quadratic.InOut)
                .yoyo(true)
                .start();
            aboutOpacity = new TWEEN.Tween(aboutMat)
                .to({opacity: 0}, 500)
                .easing(TWEEN.Easing.Quadratic.InOut)
                .yoyo(true)
                .start();
            contactOpacity = new TWEEN.Tween(contactMat)
                .to({opacity: 0}, 500)
                .easing(TWEEN.Easing.Quadratic.InOut)
                .yoyo(true)
                .start();
            console.log('set');
        }, 2500);
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