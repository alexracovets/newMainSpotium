import { GLTFLoader } from "three/examples/jsm/Addons.js";
import voxelizeModel from "./voxelizeModel";

const models = [
    '/models/logo.glb',
    '/models/about.gltf',
    '/models/services.gltf',
    '/models/industries.gltf'
];

const loadModels = (count, gridSize) => {
    const loader = new GLTFLoader();
    const promises = models.map((model) => {
        return new Promise((resolve, reject) => {
            loader.load(model, resolve, undefined, reject)
        });
    });
    Promise.all(promises)
        .then(scenes => {
            const wrapper = [];
            scenes.forEach((gltf) => {
                const voxels = voxelizeModel(gltf.scene, count, gridSize);
                wrapper.push(voxels)
            })
            console.log(JSON.stringify(wrapper))
        })
}

export default loadModels