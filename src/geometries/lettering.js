import * as THREE from '/node_modules/three/build/three.module.js';
import {FontLoader} from '/node_modules/three/examples/jsm/loaders/FontLoader.js';
import {TextGeometry} from '/node_modules/three/examples/jsm/geometries/TextGeometry.js';
import {scene} from '/src/renderer/render.js';

const loader = new FontLoader();

loader.load('/node_modules/three/examples/fonts/helvetiker_regular.typeface.json', function(font) {
    
    const firstName = new TextGeometry('justin', {
        font: font,
        size: 2,
        height: 0.8,
    });
    const lastName = new TextGeometry('soberano', {
        font: font,
        size: 2,
        height: 0.8,
    });

    const comText = new TextGeometry('.com', {
        font: font,
        size: 0.7,
        height: 0.4,
    });

    const textMaterial = new THREE.MeshNormalMaterial();
    // const lastNameMaterial = new THREE.MeshBasicMaterial({color: 0x910f00});

    const first = new THREE.Mesh(firstName, textMaterial);
    first.position.set(-4.8, 1.5, -6);
    first.rotation.set(-0.4, 0.8, 0.6);

    const last = new THREE.Mesh(lastName, textMaterial);
    last.position.set(-4, -0.7, -6);
    last.rotation.set(-0.4, 0.8, 0.612);

    const com = new THREE.Mesh(comText, textMaterial);
    com.position.set(1, 1.3, -17);
    com.rotation.set(-0.4, 0.8, 0.612);

    scene.add(last);
    scene.add(first);
    scene.add(com);

    return {first, last};
});
