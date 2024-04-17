import { FlapDisplay, Presets } from "react-split-flap-effect";
import { useEffect, useState } from 'react';

const sentences = [
    'software   development',
    'asdasd asdas asdasdsa',
];

import s from './Fliper.module.scss';
export default function Fliper() {
    const [activeSentences, setActiveSentences] = useState(0);

    useEffect(() => {
        setInterval(() => setActiveSentences((prev) => (prev + 1) % sentences.length), 5000);
    }, []);

    return (
        <>
            <FlapDisplay
                className={s.flip}
                chars={Presets.ALPHANUM + ",!"}
                length={22}
                timing={0}
                value={sentences[activeSentences]}
            />
        </>
    )
} 