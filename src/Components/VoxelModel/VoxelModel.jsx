import { Instance, Instances } from "@react-three/drei";
import { useEffect, useState } from "react";
import { GLTFLoader, RoundedBoxGeometry } from "three/examples/jsm/Addons.js";
import voxelizeModel from "../../utils/voxelizeModel";

const modelsMe = [
    '/models/logo.glb',
    '/models/about.gltf',
    '/models/services.gltf',
    '/models/industries.gltf'
];

import voxelsData from './voxel.json';

export default function VoxelModel() {
    const COUNT = 5000;
    const [voxels, setVoxels] = useState(null);
    const gridSize = 0.146;
    const sizes = {
        '0': 0.15,
        '1': 0.2267,
        '2': 0.28,
        '3': 0.316
    }
    const loadModels = (models) => {
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
                    const voxels = voxelizeModel(gltf.scene, COUNT, gridSize);
                    wrapper.push(voxels)
                })
                console.log(JSON.stringify(wrapper[0]))
                setVoxels(wrapper[0])
            })
    }
    useEffect(() => {
        setVoxels(voxelsData)
    }, [])

    return (
        <Instances
            limit={COUNT}
            range={COUNT}
            geometry={new RoundedBoxGeometry(gridSize * 0.9, gridSize * 0.9, gridSize * 0.9, 2, gridSize * 0.1)}
            rotation={[0, 0.6, 0]}
            position={[5, -0.40, -4.20]}
        >
            <meshStandardMaterial />
            {voxels && Array(COUNT).fill().map((_, index) => <Instance
                key={index}
                position={[voxels[0][index * 3 + 0], voxels[0][index * 3 + 1], voxels[0][index * 3 + 2]]}
            />)}
        </Instances>
    )
} 