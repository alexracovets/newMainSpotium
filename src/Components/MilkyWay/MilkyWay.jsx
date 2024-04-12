
import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { AdditiveBlending, TextureLoader } from "three";
import PropTypes from 'prop-types';

MilkyWay.propTypes = {
    count: PropTypes.number,
    points: PropTypes.object
}
// export default function MilkyWay({ count, points }) {

//     const texture = useLoader(TextureLoader, '/texture/ball/ball.png');
//     const milkyWayRef = useRef();

//     useFrame(({ clock }) => {
//         milkyWayRef.current.rotation.z = clock.getElapsedTime() * 0.02;
//     })

//     return (
//         <points ref={milkyWayRef} rotation={[Math.PI / 2, Math.PI / 8, 0]} >
//             <bufferGeometry attach="geometry">
//                 <bufferAttribute
//                     attach="attributes-position"
//                     count={count}
//                     array={points}
//                     itemSize={3}
//                 />
//             </bufferGeometry>
//             <pointsMaterial
//                 attach="material"
//                 size={0.09}
//                 map={texture}
//                 transparent
//                 depthWrite={false}
//                 alphaTest={0.01}
//                 blending={AdditiveBlending}
//                 color={"white"}
//             />
//         </points>
//     )
// }

export default function MilkyWay({ count, points, colors }) {
    const texture = useLoader(TextureLoader, '/texture/ball/ball.png');
    const milkyWayRef = useRef();

    useFrame(({ clock }) => {
        milkyWayRef.current.rotation.z = clock.getElapsedTime() * 0.02;
    })

    return (
        <points ref={milkyWayRef} rotation={[Math.PI / 2, Math.PI / 8, 0]}>
            <bufferGeometry attach="geometry">
                <bufferAttribute
                    attach="attributes-position"
                    count={count}
                    array={points}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="attributes-color"
                    count={count}
                    array={colors}
                    itemSize={3} // Змінено з 1 на 3, оскільки кольори в RGB
                    vertexColors={true}
                />
            </bufferGeometry>
            <pointsMaterial
                attach="material"
                size={0.09}
                map={texture}
                transparent
                depthWrite={false}
                alphaTest={0.01}
                blending={AdditiveBlending}
                vertexColors={true}
            />
        </points>
    )
} 