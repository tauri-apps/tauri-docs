import * as THREE from 'three'
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';

export let delta, renderer, scene, camera, loader, clock;

let cube;

// Any initial setup needed
export function init() {

    const canvas = document.querySelector('#c');
    canvas.style.position = 'fixed';
    canvas.style.top = '0px';
    canvas.style.left = '0px';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '-1';

    renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: false });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    renderer.setClearColor(0x000000, 0);

    clock = new THREE.Clock();

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 2;

    loader = new OBJLoader();

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    cube = new THREE.Mesh(geometry, material);
    cube.position.y = -6;
    scene.add(cube);

    cube = new THREE.Mesh(geometry, material);
    cube.position.y = -4;
    scene.add(cube);

    cube = new THREE.Mesh(geometry, material);
    cube.position.y = -2;
    scene.add(cube);

    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(1, 0, 0);
    scene.add(light);
}

// The update loop
export function update(dt) {

    requestAnimationFrame(update);
    delta = clock.getDelta();

    // Offset camera position from scroll
    camera.position.y = window.scrollY * -0.002;

    cube.rotation.x += 1 * delta;
    cube.rotation.y += 1 * delta;

    renderer.render(scene, camera);

}