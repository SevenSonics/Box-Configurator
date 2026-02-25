import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.158/build/three.module.js";
import { OrbitControls } from "https://cdn.jsdelivr.net/npm/three@0.158/examples/jsm/controls/OrbitControls.js";

const container = document.getElementById("box-configurator");

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xf5f5f5);

const camera = new THREE.PerspectiveCamera(50, container.clientWidth / 500, 0.1, 5000);
camera.position.set(400, 300, 400);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(container.clientWidth, 500);
container.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

const light1 = new THREE.DirectionalLight(0xffffff, 1);
light1.position.set(300, 300, 300);
scene.add(light1);

const light2 = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(light2);

const material = new THREE.MeshStandardMaterial({
  color: 0xcaa472
});

let box;

function createBox(L, W, H) {
  if (box) scene.remove(box);

  const geometry = new THREE.BoxGeometry(L, H, W);
  box = new THREE.Mesh(geometry, material);
  scene.add(box);
}

createBox(300, 200, 80);

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

animate();
