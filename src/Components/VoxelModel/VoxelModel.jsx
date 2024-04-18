import { Instances } from "@react-three/drei";
import { useEffect, useMemo, useState } from "react";
import { useLoader } from "@react-three/fiber";
import { BoxGeometry, TextureLoader } from "three";
import voxelsData from './voxel.json';
import Voxel from "./Voxel/Voxel";

const sizes = [0.15, 0.2267, 0.28, 0.316];
const matcap = '/3.png';
const COUNT = 5000;
export default function VoxelModel() {
    const matcapTexture = useLoader(TextureLoader, matcap);
    const [currentModel, setCurrentModel] = useState(0);
    const [isAnimation, setIsAnimation] = useState(true);

    const geometry = useMemo(() => new BoxGeometry(1, 1, 1), []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentModel(prev => prev < voxelsData.length - 1 ? prev + 1 : 0);
        }, 5000); 
        return () => clearTimeout(timer); 
    }, [currentModel]);
    
    return (
        <Instances
            limit={COUNT}
            range={COUNT}
            geometry={geometry}
            rotation={[0, 0.6, 0]}
            position={[5, -0.40, -4.20]}
        >
            <meshMatcapMaterial matcap={matcapTexture} />
            {Array(COUNT).fill().map((_, idx) => <Voxel key={idx} index={idx} voxels={voxelsData} model={currentModel} sizes={sizes} animate={isAnimation} setIsAnimation={setIsAnimation} />)}
        </Instances>
    )
} 