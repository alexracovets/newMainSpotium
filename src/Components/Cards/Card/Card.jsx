import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import s from '../Cards.module.scss';
import gsap from "gsap";

const sentences = [
    'software   development',
    'asdasd asdas asdasdsa',
];

export default function Card({ index }) {
    const [activeSentences, setActiveSentences] = useState(0);
    const [isAnimation, setIsAnimation] = useState(false);
    const card = useRef();

    const animation = () => {
        setInterval(() => {
            const random = Math.random() * 0.1;
            const tl = gsap.timeline({
                onStart: () => setIsAnimation(true),
                onComplete: () => {
                    tl.kill();
                },
            });
            tl.to(card.current, {
                delay: random + index * 0.01,
                rotationX: 180,
                duration: 0.3,
                ease: "power2.in",
                onComplete: () => {
                    setActiveSentences((prev) => (prev + 1) % sentences.length);
                },
            }).to(card.current, {
                delay: random + index * 0.01 + 0.3,
                rotationX: 360,
                duration: 0.3,
                ease: "power2.out",
            });
        }, 5000);
    }

    useEffect(() => {
        !isAnimation && animation();
    }, [isAnimation]);

    return (
        <div className={s.card}>
            <div ref={card} className={s.card__inner}>
                <div className={s.inner__front}>
                    {sentences[activeSentences][index]}
                </div>
                <div className={s.inner__back}></div>
            </div>
        </div>
    );
}

Card.propTypes = {
    index: PropTypes.number,
};
