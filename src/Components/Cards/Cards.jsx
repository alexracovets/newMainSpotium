// import Card from './Card/Card';
// import s from './Cards.module.scss';
import { FlapDisplay, Presets } from "react-split-flap-effect";
import { useEffect, useState } from 'react';

// const MAX_LENGTH = 11;
// const initialArray = new Array(MAX_LENGTH).fill('');

// export default function Cards() {
//     return (
//         <span className={s.cards}>
//             {initialArray.map((_, i) => <Card key={i} index={i} />)}
//             {initialArray.map((_, i) => <Card key={i + MAX_LENGTH} index={i + MAX_LENGTH} />)}
//         </span>
//     )
// }
const sentences = [
    'software   development',
    'asdasd asdas asdasdsa',
];
export default function Cards() {
    const [activeSentences, setActiveSentences] = useState(0);
    const animation = () => {
        setInterval(() => {
            setActiveSentences((prev) => (prev + 1) % sentences.length);
        }, 5000);
    }
    useEffect(() => {
        animation();
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