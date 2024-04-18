import { Instance } from "@react-three/drei";
import { memo, useCallback, useEffect, useRef, useState } from "react";
import PropTypes from 'prop-types';
import gsap from "gsap";
import { useFrame } from "@react-three/fiber";

const Voxel = memo(({ index, voxels, model, sizes, animate, setIsAnimation }) => {
    const instanceRef = useRef();
    const [isStatic, setIsStatic] = useState(false);
    const [currentInstance, setCurrentInstance] = useState({
        x: 0,
        y: 0,
        z: 0,
        scale: 0
    });

    useEffect(() => {
        setCurrentInstance({
            x: voxels[model][index * 3 + 0],
            y: voxels[model][index * 3 + 1],
            z: voxels[model][index * 3 + 2],
            scale: sizes[model],
        })
    }, [model, index, sizes, voxels])

    const anim = useCallback((instance, currentInstance) => {
        const tl = gsap.timeline({
            ease: "power3.inOut",
            onStart: () => setIsAnimation(false),
            onUpdate: () => setIsStatic(false),
            onComplete: () => {
                setIsAnimation(false);
                setIsStatic(true);
                tl.kill()
            }
        })
        tl.to(instance.position, {
            x: (Math.random() - 0.5) * 5,
            y: (Math.random() - 0.5) * 5,
            z: (Math.random() - 0.5) * 5,
            duration: .5,
        });
        tl.to(instance.scale, {
            x: 0,
            y: 0,
            z: 0,
            duration: .5,
        });
        tl.to(instance.position, {
            x: currentInstance.x,
            y: currentInstance.y,
            z: currentInstance.z,
            duration: .5,
            delay: .5,
        }, "<")
        tl.to(instance.scale, {
            x: currentInstance.scale,
            y: currentInstance.scale,
            z: currentInstance.scale,
            duration: .5,
            delay: .5,
        }, "<");
        return () => tl.kill();
    }, [setIsAnimation, setIsStatic]);

    const animStatic = useCallback((instance, currentInstance) => {
        const tl = gsap.timeline({
            ease: "power3.inOut",
            onStart: () => setIsStatic(false),
            onComplete: () => {
                setIsStatic(true);
                tl.kill()
            },
            onUpdate: () => {
                animate && tl.kill()
            }
        })
        tl.to(instance.position, {
            x: Math.random() < 0.1 ? currentInstance.x - 0.1 : currentInstance.x,
            y: Math.random() < 0.1 ? currentInstance.y - 0.1 : currentInstance.y,
            z: Math.random() < 0.1 ? currentInstance.z - 0.1 : currentInstance.z,
            duration: Math.random() * 2,
        });
        tl.to(instance.position, {
            delay: 1,
            x: currentInstance.x,
            y: currentInstance.y,
            z: currentInstance.z,
            duration: Math.random(),
        }, "<");
        return () => tl.kill();
    }, [animate, setIsStatic]);

    useEffect(() => {
        if (!instanceRef.current) return;
        const instance = instanceRef.current;
        if (animate && !isStatic) {
            anim(instance, currentInstance);
        } else if (!animate && isStatic) {
            animStatic(instance, currentInstance);
        }
    }, [animate, isStatic, currentInstance, anim, animStatic])

    useFrame(() => {

    });

    return (
        <>
            <Instance
                ref={instanceRef}
                position={[currentInstance.x, currentInstance.y, currentInstance.z]}
                scale={[currentInstance.scale, currentInstance.scale, currentInstance.scale]}
            />
        </>
    )
})

Voxel.displayName = 'MyComponent';
export default Voxel

Voxel.propTypes = {
    index: PropTypes.number,
    voxels: PropTypes.array,
    model: PropTypes.number,
    sizes: PropTypes.array,
    animate: PropTypes.bool,
    setIsAnimation: PropTypes.func,
}
