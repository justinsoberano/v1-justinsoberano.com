import * as THREE from '../build/three.module.js';
import {FontLoader} from '../post/font/FontLoader.js';
import {TextGeometry} from '../post/font/TextGeometry.js';
import {scene} from '../renderer/render.js';

export let f, l, c;

const loader = new FontLoader();
loader.load('src/post/font/helvetiker_regular.typeface.json', function(font) {
    
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

    f = new THREE.Mesh(firstName, textMaterial);
    f.position.set(-4.8, 1.5, -6);
    f.rotation.set(-0.4, 0.8, 0.6);

    l = new THREE.Mesh(lastName, textMaterial);
    l.position.set(-4, -0.7, -6);
    l.rotation.set(-0.4, 0.8, 0.612);

    c = new THREE.Mesh(comText, textMaterial);
    c.position.set(1, 1.3, -17);
    c.rotation.set(-0.4, 0.8, 0.612);

    scene.add(l);
    scene.add(f);
    scene.add(c);

});
