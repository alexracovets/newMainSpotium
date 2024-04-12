import Card from './Card/Card';

import s from './Cards.module.scss';

const MAX_LENGTH = 11;
const initialArray = new Array(MAX_LENGTH).fill('');

export default function Cards() {
    return (
        <span className={s.cards}>
            {initialArray.map((_, i) => <Card key={i} index={i} />)}
            {initialArray.map((_, i) => <Card key={i + MAX_LENGTH} index={i + MAX_LENGTH} />)}
        </span>
    )
} 
