import s from './Cards.module.scss';

export default function Cards({ letter }) {

    return (
        <div className={s.card}>
            <div className={s.card__inner}>
                <div className={s.inner__front}>
                    {letter ? letter : null}
                </div>
                <div className={s.inner__back}></div>
            </div>
        </div>
    )
} 
