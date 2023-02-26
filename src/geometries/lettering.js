import * as THREE from '/justinsoberano.com/node_modules/three/build/three.module.js';
import {FontLoader} from '/justinsoberano.com/node_modules/three/examples/jsm/loaders/FontLoader.js';
import {TextGeometry} from '/justinsoberano.com/node_modules/three/examples/jsm/geometries/TextGeometry.js';
import {scene} from '/justinsoberano.com/src/renderer/render.js';

const loader = new FontLoader();

loader.load('/justinsoberano.com/node_modules/three/examples/fonts/helvetiker_regular.typeface.json', function(font) {
    const textGeometry = new TextGeometry('justinsoberano.com', {
        font: font,
        size: 1,
        height: 0.8,
    });
    const textMaterial = new THREE.MeshNormalMaterial();
    const text = new THREE.Mesh(textGeometry, textMaterial);
    text.position.set(-8.5, 4, 0);
    text.rotation.set(0, 0.8, 0);

    scene.add(text);

    // new TWEEN.Tween(text.position)
    //     .to({y: 4.5}, 2000)
    //     .easing(TWEEN.Easing.Cubic.Out)
    //     .yoyo(true)
    //     .start();
    // ;

    // new TWEEN.Tween(text.rotation)
    //     .to({ y: 1.6 }, 2000)
    //     .easing(TWEEN.Easing.Quadratic.InOut)
    //     .yoyo(true)
    //     .start();
    // ;   

});