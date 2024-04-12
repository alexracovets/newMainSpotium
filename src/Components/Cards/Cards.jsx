import { useEffect, useState } from 'react';
import s from './Cards.module.scss';

const sentances = [
    'software   development',
    'asdasd asdas asdasdsa '
]
const initialArray = new Array(22).fill('');
const MAX_LENGTH = 11;

export default function Cards() {
    const [newWords, setNewWords] = useState(initialArray);
    const [activeSentance, setActiveSentance] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setNewWords([...sentances[activeSentance]]);
            const isLast = activeSentance + 1 === sentances.length;
            isLast ? setActiveSentance(0) : setActiveSentance(activeSentance + 1);
        }, 1000)
    }, [activeSentance]);
    return (
        <span className={s.cards}>
            {newWords.map((item, i) => (
                <div className={s.card} key={i}>
                    <div className={s.card__inner}>
                        <div className={s.inner__front}>
                            {item}
                        </div>
                        <div className={s.inner__back}></div>
                    </div>
                </div>
            ))}
        </span>
    )
} 
