import { Canvas } from "@react-three/fiber";
import MilkyWay from "../MilkyWay/MilkyWay";
import Lights from "../Lights/Lights";


import s from './MeCanvas.module.scss';
import HtmlContent from "../HtmlContent/HtmlContent";
import { useEffect, useState } from "react";
import getMilkyWayPoints from "../../utils/getMilkyWayPoints";
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
        >
            <Lights />
            <MilkyWay count={count} points={points} />
            <HtmlContent />
        </Canvas>
    )
}
