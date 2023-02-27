import * as THREE from '/node_modules/three/build/three.module.js';
import {scene} from '/src/renderer/render.js'

// Bottom grid
const gridMeshBottom = new THREE.GridHelper(1000, 400, 0xff00a2, 0xff00a2);
gridMeshBottom.position.y = -3;
scene.add(gridMeshBottom);

// Top grid
// const gridMeshTop = new THREE.GridHelper(1000, 200, 0xff7b00, 0xff7b00);
// gridMeshTop.position.y = 10;
// scene.add(gridMeshTop);

// Universal Cube Mesh for the Cubes
const cubeMesh = new THREE.BoxGeometry(1, 1, 1);

const material2 = new THREE.MeshNormalMaterial();
const cube = new THREE.Mesh(cubeMesh, material2);
cube.position.set(1, -6, 1);
scene.add(cube);

const material3 = new THREE.MeshNormalMaterial();
const cube2 = new THREE.Mesh(cubeMesh, material3);
cube2.position.set(-5, -6, 3);
scene.add(cube2);

// Dodecahedron Mesh
const shapeMesh = new THREE.DodecahedronGeometry(1, 0);
const shapeMaterial = new THREE.MeshNormalMaterial();
const dodecahedron = new THREE.Mesh(shapeMesh, shapeMaterial);
dodecahedron.position.set(-1, -9, 2);
scene.add(dodecahedron);

// Tetahedron Mesh
const shapeMesh2 = new THREE.TetrahedronGeometry(1, 0);
const shapeMaterial2 = new THREE.MeshNormalMaterial();
const tetrahedron = new THREE.Mesh(shapeMesh2, shapeMaterial2);
tetrahedron.position.set(3, -8.5, -2);
scene.add(tetrahedron);

// SpinTop mesh
const geometry = new THREE.SphereGeometry( 1, 64, 2);
const material = new THREE.MeshNormalMaterial();
const spinTop = new THREE.Mesh( geometry, material );
spinTop.position.set(1, -10, -4);
scene.add(spinTop);

export {cube, cube2, dodecahedron, tetrahedron, spinTop, gridMeshBottom};