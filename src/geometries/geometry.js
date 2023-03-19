import * as THREE from '/node_modules/three/build/three.module.js';
import {scene} from '/src/renderer/render.js';


// condense code down, example 
// const cube = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({color: 0xff0000}));

// Bottom grid
const gridMeshBottom = new THREE.GridHelper(1000, 400, 0xff00a2, 0xff00a2);
gridMeshBottom.position.y = -3;
// scene.add(gridMeshBottom);

// const plane = new THREE.PlaneGeometry(1000, 1000, 100, 100);
// plane.rotateX(-Math.PI / 2);
// const planeMaterial = new THREE.WireframeGeometry(plane);
// const line = new THREE.LineSegments(planeMaterial, new THREE.LineBasicMaterial({color: 0xff00a2}));
// line.material.depthTest = true;
// line.material.opacity = 0.5;
// line.material.transparent = true;
// line.position.y = -3;

// scene.add(line);

// const line = new THREE.Mesh(plane, meshPhone);
// scene.add(line)

// const {array} = line.geometry.attributes.position;
// for(let i = 0; i < array.length; i+=3) {
//     array[i + 1] += Math.random() * -45;
// }

// console.log(gridMeshBottom)

const bottomPlane = new THREE.PlaneGeometry(100, 1000, 10, 10);
const planeMat = new THREE.MeshBasicMaterial({color: 0x343535});
const bottomPlaneMesh = new THREE.Mesh(bottomPlane, planeMat);
bottomPlaneMesh.rotateX(-Math.PI / 3);
bottomPlaneMesh.rotateZ(-Math.PI / 4);
bottomPlaneMesh.rotateY(-0.6);
bottomPlaneMesh.position.z = -1;
bottomPlaneMesh.position.x = 3;
bottomPlaneMesh.position.y = -2;

const newPlane = new THREE.PlaneGeometry(100, 1000, 100, 100);
const bottomPlane2 = new THREE.WireframeGeometry(newPlane);
const bottomPlaneMesh2 = new THREE.LineSegments(bottomPlane2, new THREE.LineBasicMaterial({color: 0x000000}));
bottomPlaneMesh2.material.depthTest = true;
bottomPlaneMesh2.material.opacity = 1;
bottomPlaneMesh2.material.transparent = true;
bottomPlaneMesh2.rotateX(-Math.PI / 3);
bottomPlaneMesh2.rotateZ(-Math.PI / 4);
bottomPlaneMesh2.rotateY(-0.6);
bottomPlaneMesh2.position.z = -1;
bottomPlaneMesh2.position.x = 3;
bottomPlaneMesh2.position.y = -2;

scene.add(bottomPlaneMesh2);
scene.add(bottomPlaneMesh);

// Top grid
// const gridMeshTop = new THREE.GridHelper(1000, 200, 0xff7b00, 0xff7b00);
// gridMeshTop.position.y = 10;
// scene.add(gridMeshTop);

// Universal Cube Mesh for the Cubes
const cubeMesh = new THREE.BoxGeometry(1, 1, 1);

const material2 = new THREE.MeshNormalMaterial();

const cube = new THREE.Mesh(cubeMesh, material2);
cube.position.set(0, 10, 5);
scene.add(cube);

const material3 = new THREE.MeshNormalMaterial();
const cube2 = new THREE.Mesh(cubeMesh, material3);
cube2.position.set(-5, 10, 3);
scene.add(cube2);

// Dodecahedron Mesh
const shapeMesh = new THREE.DodecahedronGeometry(1, 0);
const shapeMaterial = new THREE.MeshNormalMaterial();
const dodecahedron = new THREE.Mesh(shapeMesh, shapeMaterial);
dodecahedron.position.set(-3, 10, 2);
scene.add(dodecahedron);

// Tetahedron Mesh
const shapeMesh2 = new THREE.TetrahedronGeometry(1, 0);
const shapeMaterial2 = new THREE.MeshNormalMaterial();
const tetrahedron = new THREE.Mesh(shapeMesh2, shapeMaterial2);
tetrahedron.position.set(-3, 10, -2);
scene.add(tetrahedron);

// SpinTop mesh
const geometry = new THREE.IcosahedronGeometry(1, 0);
const material = new THREE.MeshNormalMaterial();
const spinTop = new THREE.Mesh( geometry, material );
spinTop.position.set(1, 10, 3);
scene.add(spinTop);

const octahedron = new THREE.OctahedronGeometry(125, 3);
const octahedronMaterial = new THREE.MeshPhongMaterial({color: 0x910f00});
const octahedronMesh = new THREE.Mesh(octahedron, octahedronMaterial);
octahedronMesh.position.set(-100, -100, -250);
scene.add(octahedronMesh);

const light = new THREE.PointLight(0xff0000, 4, 75);
light.position.set( -100, 50, -100 );
scene.add( light );

// const light2 = new THREE.AmbientLight( 0x404040 ); // soft white light
// scene.add(light2);


export {cube, cube2, dodecahedron, tetrahedron, spinTop, octahedronMesh};