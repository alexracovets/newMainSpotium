import { useEffect, useState } from 'react';
import SplitFlapDisplay from "react-split-flap-display";
import { ALPHA } from "react-split-flap-display/constants";

const sentences = [
    'SOFTWARE   DEVELOPMENT',
    'ASASD DASDSAD SASFFD A',
];

import './fliper.scss';

export default function Fliper() {
    const [activeSentences, setActiveSentences] = useState(0);

    useEffect(() => {
        setInterval(() => setActiveSentences((prev) => (prev + 1) % sentences.length), 10000);
    }, []);

    return (
        <>

            <SplitFlapDisplay
                className="flip"
                characterSet={ALPHA} 
                step={100}
                value={sentences[activeSentences]}
                withSound={false}
            />
        </>
    )
} 