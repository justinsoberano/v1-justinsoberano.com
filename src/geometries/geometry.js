import * as THREE from '/node_modules/three/build/three.module.js';
import {scene} from '/src/renderer/render.js';

// TODO
// condense code down, example below 
// const cube = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({color: 0xff0000}));
// Create functions for shapes, add scene and, positions.
// Grab values of the rotations.

// This is the pink grid mesh. It is not used in the final product.
// const gridMeshBottom = new THREE.GridHelper(1000, 400, 0xff00a2, 0xff00a2);
// gridMeshBottom.position.y = -3;
// scene.add(gridMeshBottom);

// const plane = new THREE.PlaneGeometry(1000, 1000, 40, 40);
// plane.rotateX(-Math.PI / 3);
// const planeMaterial = new THREE.WireframeGeometry(plane);
// export const line = new THREE.LineSegments(planeMaterial, new THREE.LineBasicMaterial({color: 0xff00a2}));

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
const bottomPlaneMesh = new THREE.Mesh(
    new THREE.PlaneGeometry(100, 1000, 10, 10), 
    new THREE.MeshBasicMaterial({color: 0x343535})
);
bottomPlaneMesh.rotateX(-Math.PI / 3);
bottomPlaneMesh.rotateZ(-Math.PI / 4);
bottomPlaneMesh.rotateY(-0.6);
bottomPlaneMesh.position.z = -1;
bottomPlaneMesh.position.x = 3;
bottomPlaneMesh.position.y = -2;

/* Creates the lines for the bottom mesh. Needs to be updated asap looks so ugly. */
const bottomPlaneMesh2 = new THREE.LineSegments(
    new THREE.WireframeGeometry(
        new THREE.PlaneGeometry(100, 1000, 100, 100)
    ), 
    new THREE.LineBasicMaterial(
        { color: 0x000000,
          depthTest: true,
          opacity: 1,
          transparent: true, }
    )
);
bottomPlaneMesh2.rotateX(-Math.PI / 3);
bottomPlaneMesh2.rotateZ(-Math.PI / 4);
bottomPlaneMesh2.rotateY(-0.6);
bottomPlaneMesh2.position.z = -1;
bottomPlaneMesh2.position.x = 3;
bottomPlaneMesh2.position.y = -2;

scene.add(bottomPlaneMesh2);
scene.add(bottomPlaneMesh);

/* Universal Normal Material Mesh */
const norm = new THREE.MeshNormalMaterial();

const cube = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1), 
    norm
);
cube.position.set(0, 10, 5);
scene.add(cube);

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1), 
    norm
);
cube2.position.set(-5, 10, 3);
scene.add(cube2);

// Dodecahedron Mesh
const dodecahedron = new THREE.Mesh(
    new THREE.DodecahedronGeometry(1, 0), 
    norm
);
dodecahedron.position.set(-3, 10, 2);
scene.add(dodecahedron);

const tetrahedron = new THREE.Mesh(
    new THREE.TetrahedronGeometry(1, 0), 
    norm
);
tetrahedron.position.set(-3, 10, -2);
scene.add(tetrahedron);

const spinTop = new THREE.Mesh( 
    new THREE.IcosahedronGeometry(1, 0), 
    norm 
);
spinTop.position.set(1, 10, 3);
scene.add(spinTop);

const octahedronMesh = new THREE.Mesh(
    new THREE.OctahedronGeometry(125, 10), 
    new THREE.MeshPhongMaterial(
        {color: 0x910f00, 
         flatShading: true, 
         shininess: 0, 
         reflectivity:0}
    )
);
octahedronMesh.position.set(-100, -1000, -250);
scene.add(octahedronMesh);

// const octahedron2 = new THREE.OctahedronGeometry(125, 10);
// const octahedronMaterial2 = new THREE.MeshPhongMaterial({color: 0x0f096e, flatShading: true, shininess: 0, reflectivity: 0});
// const octahedronMesh2 = new THREE.Mesh(octahedron2, octahedronMaterial2);
// octahedronMesh2.position.set(-100, 2, -250);
// scene.add(octahedronMesh2);

const light = new THREE.PointLight(0xff0000, 10, 150);
light.position.set( -220, 50, -100 );
scene.add(light);

// const light2 = new THREE.AmbientLight( 0x404040 ); // soft white light
// scene.add(light2);

// const light2 = new THREE.PointLight(0xff0000, 1, 200);
// light2.position.set( -320, 70, -100 );
// scene.add( light );


/* Universal Mesh Creator, reduces duplicate code for creating geometries */
function UniversalMeshCreator(shape, material, x, y, z) {
    const mesh = new THREE.Mesh(shape, material);
    mesh.position.set(x, y, z);
    scene.add(mesh);
    return mesh;
}

function meshes() {

}


export {cube, cube2, dodecahedron, tetrahedron, spinTop, octahedronMesh};