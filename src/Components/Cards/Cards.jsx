import { FlapDisplay, Presets } from "react-split-flap-effect";
import { useEffect, useState } from 'react';

import s from './Cards.module.scss';
const sentences = [
    'software   development',
    'asdasd asdas asdasdsa',
];

export default function Cards() {
    const [activeSentences, setActiveSentences] = useState(0);

    useEffect(() => {
        setInterval(() => setActiveSentences((prev) => (prev + 1) % sentences.length), 5000);
    }, []);

    return (
        <FlapDisplay
            className={s.flip}
            chars={Presets.ALPHANUM + ",!"}
            length={22} 
            value={sentences[activeSentences]}
        />
    )
} 