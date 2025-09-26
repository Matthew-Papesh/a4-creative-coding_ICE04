import * as THREE from "https://unpkg.com/three@0.180.0/build/three.module.js";
// Or import specific components

// 1. Scene, Camera, Renderer setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const ambientLight = new THREE.AmbientLight(0xccccff, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 10, 7.5);
scene.add(directionalLight);

const textureLoader = new THREE.TextureLoader();
// 2. Create a 3D object (e.g., a cube)
let texture = textureLoader.load('/assets/egg_skin.png')
texture.repeat.set(1.3, 0.9);
const geometry = new THREE.SphereGeometry(1,32,16)
const material = new THREE.MeshStandardMaterial({ map: texture, flatShading: true}); // green color
const ellipse = new THREE.Mesh(geometry, material);
ellipse.scale.set(1.3,0.9,1)
scene.add(ellipse);

material.needsUpdate = true

// 3. Position the camera
camera.position.z = 5;

// 4. Animation loop
function animate() {
    requestAnimationFrame(animate);

    // Rotate the ellipse
    ellipse.rotation.x += 0.01;
    ellipse.rotation.y += 0.01;

    renderer.render(scene, camera);
}

// 5. Handle window resizing
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

animate();
