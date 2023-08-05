import * as THREE from 'three'
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';
import { MTLLoader } from 'three/addons/loaders/MTLLoader.js';

export let delta, renderer, scene, camera, loader, mtlLoader, clock;

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

    //renderer.setClearColor(0x000000, 0);

    clock = new THREE.Clock();

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 2;

    loader = new OBJLoader();
    mtlLoader = new MTLLoader();

    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(1, 0, 0);
    scene.add(light);

    mtlLoader.load(
        'fxassets/apptest.mtl',
        (materials) => {
            materials.preload()

            for (const material of Object.values(materials.materials)) {
                if (material.name.includes('[EM]')) {
                    material.emissiveMap = material.map
                    material.emissive = new THREE.Color(0xffffff)
                }
            }

            const objLoader = new OBJLoader()
            objLoader.setMaterials(materials)
            objLoader.load(
                'fxassets/apptest.obj',
                (object) => {
                    scene.add(object)
                    object.position.z = 0;
                    object.position.y = -3;
                },
                (xhr) => { },
                (error) => { }
            )
        },
        (xhr) => { },
        (error) => { }
    )
}

// The update loop
export function update(dt) {

    requestAnimationFrame(update);
    delta = clock.getDelta();

    // Offset camera position from scroll
    camera.position.y = window.scrollY * -0.002;

    renderer.render(scene, camera);

}