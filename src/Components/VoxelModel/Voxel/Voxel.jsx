import { Instance } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import PropTypes from 'prop-types';
import gsap from "gsap";
import { useFrame } from "@react-three/fiber";

export default function Voxel({ index, voxels, model, scale, animate, setIsAnimation }) {
    const instanceRef = useRef();
    const [isStatic, setIsStatic] = useState(false);

    useEffect(() => {
      
    }, [animate, model, scale, index, voxels, setIsAnimation, isStatic])

    useFrame(() => {
        if (instanceRef.current && animate) {
            const tl = gsap.timeline({
                ease: "power3.inOut",
                onStart: () => setIsAnimation(false),
                onUpdate: () => setIsStatic(false),
                onComplete: () => {
                    setIsAnimation(false);
                    setIsStatic(true);
                }
            })
            tl.to(instanceRef.current.position, {
                x: (Math.random() - 0.5) * 5,
                y: (Math.random() - 0.5) * 5,
                z: (Math.random() - 0.5) * 5,
                duration: .5,
            });
            tl.to(instanceRef.current.scale, {
                x: .1,
                y: .1,
                z: .1,
                duration: .5,
            }, "<");
            tl.to(instanceRef.current.position, {
                x: voxels[model][index * 3 + 0],
                y: voxels[model][index * 3 + 1],
                z: voxels[model][index * 3 + 2],
                duration: .5,
                delay: .3,
            }, "<")
            tl.to(instanceRef.current.scale, {
                x: scale,
                y: scale,
                z: scale,
                duration: .5,
                delay: .3,
            }, "<");
        } else if (instanceRef.current && isStatic && !animate) {
            const tl = gsap.timeline({
                ease: "power3.inOut",
                onStart: () => setIsStatic(false),
                onComplete: () => setIsStatic(true),
                onUpdate: () => {
                    animate && tl.kill()
                }
            })

            tl.to(instanceRef.current.position, {
                x: Math.random() < 0.1 ? voxels[model][index * 3 + 0] - 0.1 : voxels[model][index * 3 + 0],
                y: Math.random() < 0.1 ? voxels[model][index * 3 + 1] - 0.1 : voxels[model][index * 3 + 1],
                z: Math.random() < 0.1 ? voxels[model][index * 3 + 2] - 0.1 : voxels[model][index * 3 + 2],
                duration: 0.5,
            });
            tl.to(instanceRef.current.position, {
                delay: 0.5,
                x: voxels[model][index * 3 + 0],
                y: voxels[model][index * 3 + 1],
                z: voxels[model][index * 3 + 2],
                duration: 1,
            }, "<");
        }
    })

    return (
        <Instance
            ref={instanceRef}
            position={[0, 0, 0]}
            scale={[0, 0, 0]}
        />
    )
}

Voxel.propTypes = {
    index: PropTypes.number,
    voxels: PropTypes.array,
    model: PropTypes.number,
    scale: PropTypes.number,
    animate: PropTypes.bool,
    setIsAnimation: PropTypes.func,
}
