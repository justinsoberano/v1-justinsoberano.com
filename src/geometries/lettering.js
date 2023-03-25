import * as THREE from '../build/three.module.js';
import {FontLoader} from '../post/font/FontLoader.js';
import {TextGeometry} from '../post/font/TextGeometry.js';
import {scene} from '../renderer/render.js';
import {TWEEN} from '../post/anim/tween.module.min.js';

export let f, l, c;
export let helvetica;

export let manager = new THREE.LoadingManager();
export const loader = new FontLoader(manager);
export const experiencesMat = new THREE.MeshNormalMaterial();
export const websiteName = new THREE.MeshNormalMaterial();
export const projectMat = new THREE.MeshNormalMaterial();
export const aboutMat = new THREE.MeshNormalMaterial();
export const contactMat = new THREE.MeshNormalMaterial();
export const otherMat = new THREE.MeshNormalMaterial();
experiencesMat.transparent = true;
experiencesMat.opacity = 0;
projectMat.transparent = true;
projectMat.opacity = 0;
websiteName.transparent = true;
aboutMat.transparent = true;
aboutMat.opacity = 0;
contactMat.transparent = true;
contactMat.opacity = 0;
otherMat.transparent = true;
otherMat.opacity = 0;
experiencesMat.depthWrite = false;
projectMat.depthWrite = false;
aboutMat.depthWrite = false;
contactMat.depthWrite = false;
otherMat.depthWrite = false;

loader.load('src/post/font/helvetiker_regular.typeface.json', function(font) {
    helvetica = font;
});

export let generate3D = () => {
    if(helvetica === undefined) {
        console.log('nope');
        return;
    }
    const firstName = new TextGeometry('justin', {
        font: helvetica,
        size: 2,
        height: 0.8,
    });
    const lastName = new TextGeometry('soberano', {
        font: helvetica,
        size: 2,
        height: 0.8,
    });

    const comText = new TextGeometry('.com', {
        font: helvetica,
        size: 0.7,
        height: 0.4,
    });

    const experiencesText = new TextGeometry('experiences', {
        font: helvetica,
        size: 2,
        height: 0.4,
    });

    const projectText = new TextGeometry('projects', {
        font: helvetica,
        size: 2,
        height: 0.4,
    });

    const aboutText = new TextGeometry('about me', {
        font: helvetica,
        size: 2,
        height: 0.4,
    });

    const contactText = new TextGeometry('contact', {
        font: helvetica,
        size: 2,
        height: 0.4,
    });

    const other = new TextGeometry('2D website', {
        font: helvetica,
        size: 2,
        height: 0.4,
    });



    f = new THREE.Mesh(firstName, websiteName);
    f.position.set(-4.8, 1.5, -6);
    f.rotation.set(-0.4, 0.8, 0.6);

    l = new THREE.Mesh(lastName, websiteName);
    l.position.set(-4, -0.7, -6);
    l.rotation.set(-0.4, 0.8, 0.612);

    c = new THREE.Mesh(comText, websiteName);
    c.position.set(1, 1.3, -17);
    c.rotation.set(-0.4, 0.8, 0.612);

    const e = new THREE.Mesh(experiencesText, experiencesMat);
    e.position.set(-4.8, .5, -6);
    e.rotation.set(-0.4, 0.8, 0.6);

    const p = new THREE.Mesh(projectText, projectMat);
    p.position.set(-4.79, .5, -6);
    p.rotation.set(-0.4, 0.8, 0.6);

    const a = new THREE.Mesh(aboutText, aboutMat);
    a.position.set(-4.78, .5, -6);
    a.rotation.set(-0.4, 0.8, 0.6);

    const o = new THREE.Mesh(other, otherMat);
    o.position.set(-4.77, .5, -6);
    o.rotation.set(-0.4, 0.8, 0.6);

    const t = new THREE.Mesh(contactText, contactMat);
    t.position.set(-4.76, .5, -6);
    t.rotation.set(-0.4, 0.8, 0.6);

    scene.add(p);
    scene.add(l);
    scene.add(f);
    scene.add(c);
    scene.add(e);
    scene.add(a);
    scene.add(t);
    scene.add(o);

}