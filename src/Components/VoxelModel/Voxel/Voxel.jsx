import { Instance } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Vector3 } from "three";
import PropTypes from 'prop-types';

export default function Voxel({ index, voxels, model, scale }) {
    const instanceRef = useRef();



    useFrame(() => {
        if (instanceRef.current) {
            const current = instanceRef.current.position;
            const newPosition = new Vector3(
                voxels[model][index * 3 + 0],
                voxels[model][index * 3 + 1],
                voxels[model][index * 3 + 2]
            );
            // Якщо model змінено, анімуємо до нової позиції
            if (current !== newPosition) {
                instanceRef.current.position.lerp(newPosition, 0.1);
            } else {
                // Випадковий рух, якщо модель не змінювалась
                const randomDirection = new Vector3(
                    instanceRef.current.position.x + (Math.random() - 0.5) * 0.1,
                    instanceRef.current.position.y + (Math.random() - 0.5) * 0.1,
                    instanceRef.current.position.z + (Math.random() - 0.5) * 0.1
                );
                instanceRef.current.position.lerp(randomDirection, 0.1);
            }
        }
    });

    return (
        <Instance
            ref={instanceRef}
            position={[0, 0, 0]}
            scale={scale}
        />
    )
}

Voxel.propTypes = {
    index: PropTypes.number,
    voxels: PropTypes.array,
    model: PropTypes.number,
    scale: PropTypes.number
}
