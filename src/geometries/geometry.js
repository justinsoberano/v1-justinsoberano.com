import * as THREE from '/node_modules/three/build/three.module.js';
import {scene} from '/src/renderer/render.js';

// This is the pink grid mesh. Not used in the final product.
// const gridMeshBottom = new THREE.GridHelper(1000, 200, 0x000000, 0xffffff);
// gridMeshBottom.rotateX(4.047);
// gridMeshBottom.rotateY(0.6);
// gridMeshBottom.rotateZ(0.78539);
// gridMeshBottom.position.z = -1;
// gridMeshBottom.position.x = 3;
// gridMeshBottom.position.y = -1.99;
// console.log(gridMeshBottom);
// scene.add(gridMeshBottom);
// const plane = new THREE.PlaneGeometry(1000, 1000, 40, 40);
// plane.rotateX(-Math.PI / 3);
// const planeMaterial = new THREE.WireframeGeometry(plane);
// export const line = new THREE.LineSegments(planeMaterial, new THREE.LineBasicMaterial({color: 0xff00a2}))
// line.material.depthTest = true;
// line.material.opacity = 0.5;
// line.material.transparent = true;
// line.position.y = -3;
// scene.add(line);
// const line = new THREE.Mesh(plane, meshPhone);
// scene.add(line)
// line.position.y = 100;
// const {array} = line.geometry.attributes.position;
// for(let i = 0; i < array.length; i+=3) {
//     array[i + 1] += Math.random() * -45;
// }

/* Creates the bottom plane mesh, color is a dark gray but somehow turns bright gray 
   Most likely due to the lighting in the scene and UnrealBloomPass's bloom effect */
export const plane = planeCreator(
    new THREE.PlaneGeometry(100, 1000, 10, 10),
    new THREE.MeshBasicMaterial({color: 0x343535}),
    -Math.PI / 3, -Math.PI / 4, -0.6,
    -1, 3, -1.8
);

/* Creates the lines for the bottom plane mesh */
planeLineCreator();

/* Used for the placement of the planets in the background, normally commented out. */
// const light2 = new THREE.AmbientLight( 0x404040 ); // soft white light
// scene.add(light2);

const light3 = new THREE.PointLight(0x0000ff, 15, 100);
light3.position.set( -370, 100, -200 );
scene.add(light3);

const light = new THREE.PointLight(0xff0000, 10, 150);
light.position.set( -220, 50, -100 );
scene.add(light);

const light1 = new THREE.PointLight(0xFFA400, 10, 120);
light1.position.set(-160, 55, -40 );
scene.add(light1);

export const octahedronMesh = UniversalMeshCreator(
    new THREE.OctahedronGeometry(125, 10), 
    new THREE.MeshPhongMaterial({
        color: 0x910f00, 
        flatShading: true, 
        shininess: 0, 
        reflectivity:0}),
     -100, -1000, -250
);

export const octahedronMesh2 = UniversalMeshCreator(
    new THREE.OctahedronGeometry(125, 7),
    new THREE.MeshPhongMaterial({
        color: 0x0f096e,
        flatShading: true,
        shininess: 0,
        reflectivity: 0
    }),
    -300, -1010, -350
);

export const octahedronMesh3 = UniversalMeshCreator(
    new THREE.OctahedronGeometry(125, 4),
    new THREE.MeshPhongMaterial({
        color: 0xFFA500,
        flatShading: true,
        shininess: 0,
        reflectivity: 0
    }),
    -160, -200, 75
);
/* Global material for all meshes */ 
const norm = new THREE.MeshNormalMaterial({flatShading: true});

/* All the geometry meshes */
export const spinTop = UniversalMeshCreator(
    new THREE.IcosahedronGeometry(1, 0), 
    norm,
    1, 10, 3
);

export const tetrahedron = UniversalMeshCreator(
    new THREE.TetrahedronGeometry(1.4, 0), 
    norm,
    -3, 10, -2
);
export const dodecahedron = UniversalMeshCreator(
    new THREE.DodecahedronGeometry(1, 0), 
    norm,
    -3, 10, 2
);
export const cube = UniversalMeshCreator(
    new THREE.BoxGeometry(1, 1, 1), 
    norm,
    0, 10, 5
);
export const cube2 = UniversalMeshCreator(
    new THREE.BoxGeometry(1, 1, 1), 
    norm,
    -5, 10, 3
);

/* Universal Mesh Creator, reduces duplicate code for creating geometries */
function UniversalMeshCreator(shape, material, x, y, z) {
    const mesh = new THREE.Mesh(shape, material);
    mesh.position.set(x, y, z);
    scene.add(mesh);
    return mesh;
}

/* Plane Creator */
function planeCreator(shape, material, rx, rz, ry, pz, px, py) {
    const mesh = new THREE.Mesh(shape, material);
    mesh.rotateX(rx); mesh.rotateZ(rz); mesh.rotateY(ry); 
    mesh.position.set(px, py, pz);
    scene.add(mesh);
    return mesh;
}

/* Line Plane Creator, called by planeLineCreator(...) */
function linePlaneCreator(shape, material, rx, rz, ry, pz, px, py) {
    const mesh = new THREE.LineSegments(shape, material);
    mesh.rotateX(rx); mesh.rotateZ(rz); mesh.rotateY(ry); 
    mesh.position.set(px, py, pz);
    scene.add(mesh);
}

/* Plane Line Creator, creates the plane with lines */
function planeLineCreator() {
    const planeLinesMaterial = new THREE.LineBasicMaterial({
        color: 0x000000,
        depthTest: true,
        opacity: 1,
    });
    let pz = -1; let px = 3; let py = -2;
    /* The loop value can be adjusted depending on how thick
       the lines should be, the higher the value the thicker the lines */
    for(let i = 0; i < 20; i++) {
        linePlaneCreator(
            new THREE.WireframeGeometry(
                new THREE.PlaneGeometry(100, 200, 10, 20)
            ),
            planeLinesMaterial,
            -Math.PI / 3, -Math.PI / 4, -0.6,
            pz, px, py
        );
        pz -= 0.005; px -= 0.005; py += 0.005;
    }
}