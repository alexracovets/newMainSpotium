import { Instances } from "@react-three/drei";
import { RoundedBoxGeometry } from "three/examples/jsm/Addons.js";
import { useEffect, useMemo, useState } from "react";
import { useLoader } from "@react-three/fiber";
import { BoxGeometry, TextureLoader } from "three";

import voxelsData from './voxel.json';
import Voxel from "./Voxel/Voxel";

const sizes = [0.15, 0.2267, 0.28, 0.316];
const matcap = '/1.png';

export default function VoxelModel() {
    const matcapTexture = useLoader(TextureLoader, matcap);
    const [currentModel, setCurrentModel] = useState(0);
    const [isAnimation, setIsAnimation] = useState(true);
    const COUNT = 5000;

    const geometry = useMemo(() => {
        return new BoxGeometry(.9,.9,.9);
    }, []);

    useEffect(() => {
        setTimeout(() => {
            currentModel < voxelsData.length - 1 ? setCurrentModel(prev => prev + 1) : setCurrentModel(0);
            setIsAnimation(true);
        }, 5000)
    }, [currentModel])
    return (
        <Instances
            limit={COUNT}
            range={COUNT}
            geometry={geometry}
            rotation={[0, 0.6, 0]}
            position={[5, -0.40, -4.20]}
        >
            <meshMatcapMaterial matcap={matcapTexture} />
            {Array(COUNT).fill().map((_, idx) => <Voxel key={idx} index={idx} voxels={voxelsData} model={currentModel} scale={sizes[currentModel]} animate={isAnimation} setIsAnimation={setIsAnimation} />)}
        </Instances>
    )
} 