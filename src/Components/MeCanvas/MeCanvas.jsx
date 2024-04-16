import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";

import getMilkyWayPoints from "../../utils/getMilkyWayPoints";
import HtmlContent from "../HtmlContent/HtmlContent";
import MilkyWay from "../MilkyWay/MilkyWay";
import Lights from "./Lights/Lights";

import s from './MeCanvas.module.scss';
import VoxelModel from "../VoxelModel/VoxelModel";
import { OrbitControls } from "@react-three/drei";

export default function MeCanvas() {
    const [points, setPoints] = useState(null);
    const [colors, setColors] = useState(null);
    const count = 10000;

    useEffect(() => {
        const float = getMilkyWayPoints(count);
        setPoints(float.points);
        setColors(float.colors)
    }, [])
    return (
        <Canvas dpr={window.devicePixelRatio} className={s.canvas}>
            <Lights />
            <MilkyWay count={count} points={points} colors={colors} />
            <VoxelModel />
            <HtmlContent />
            {/* <OrbitControls/> */}
        </Canvas>
    )
}
