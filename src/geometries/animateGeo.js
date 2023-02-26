import * as THREE from '/justinsoberano.com/node_modules/three/build/three.module.js';
import {cube, cube2, dodecahedron, tetrahedron, spinTop, gridMeshBottom} from '/justinsoberano.com/src/geometries/geometry.js';
import {scene, camera, renderer, controller} from '/justinsoberano.com/src/renderer/render.js';

function animateShapes() {
    cube.rotation.x += 0.01; cube.rotation.y += 0.02; cube.rotation.z += 0.02;
    cube2.rotation.x += 0.01; cube2.rotation.y += 0.01; cube2.rotation.z += 0.03;
    dodecahedron.rotation.x += 0.01; dodecahedron.rotation.y += 0.01; dodecahedron.rotation.z += 0.01;
    tetrahedron.rotation.x += 0.04; tetrahedron.rotation.y += 0.007; tetrahedron.rotation.z += 0.01;
    spinTop.rotation.x += 0.02; spinTop.rotation.y += 0.01; spinTop.rotation.z += 0.02;
    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animateShapes);