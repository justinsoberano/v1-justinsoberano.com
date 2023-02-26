import * as THREE from '/justinsoberano.com/node_modules/three/build/three.module.js';
import {FontLoader} from '/justinsoberano.com/node_modules/three/examples/jsm/loaders/FontLoader.js';
import {TextGeometry} from '/justinsoberano.com/node_modules/three/examples/jsm/geometries/TextGeometry.js';
import {scene, camera, renderer, controller} from '/justinsoberano.com/src/renderer/render.js';

const loader = new FontLoader();

loader.load('/justinsoberano.com/node_modules/three/examples/fonts/helvetiker_regular.typeface.json', function(font) {
    const textGeometry = new TextGeometry('justinsoberano.com', {
        font: font,
        size: 6,
        height: 2,
    });
    const textMaterial = new THREE.MeshNormalMaterial();
    const text = new THREE.Mesh(textGeometry, textMaterial);
    text.position.set(-100, 3, -50);
    text.rotation.set(0, 0.8, 0);

    scene.add(text);
});
