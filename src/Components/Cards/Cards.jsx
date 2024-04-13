import { FlapDisplay, Presets } from "react-split-flap-effect";
import { useEffect, useState } from 'react';

import './Cards.scss';
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
            className='flip'
            chars={Presets.ALPHANUM + ",!"}
            length={22}
            timing={0}
            value={sentences[activeSentences]}
        />
    )
} 