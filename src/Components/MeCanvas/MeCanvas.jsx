import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";

import getMilkyWayPoints from "../../utils/getMilkyWayPoints";
import HtmlContent from "../HtmlContent/HtmlContent";
import MilkyWay from "../MilkyWay/MilkyWay";
import Lights from "../Lights/Lights";

import s from './MeCanvas.module.scss';

export default function MeCanvas() {
    const [points, setPoints] = useState(null);
    const count = 10000;

    useEffect(() => {
        setPoints(getMilkyWayPoints(count))
    }, [])
    return (
        <Canvas
            dpr={window.devicePixelRatio}
            className={s.canvas}
            style={{ pointerEvents: 'none' }}
        >
            <Lights />
            <MilkyWay count={count} points={points} />
            <HtmlContent />
        </Canvas>
    )
}
