import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import UI_Button from '../../Components/UI_Button/UI_Button';
import Fliper from '../../Components/Fliper/Fliper';

import s from './MainPage.module.scss';
export default function MainPage() {
    const navigate = useNavigate();
    const accumulatedDeltaY = useRef(0);
    const timeoutRef = useRef(null);

    useEffect(() => {
        const handleWheel = event => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
            accumulatedDeltaY.current += event.deltaY;
            timeoutRef.current = setTimeout(() => {
                accumulatedDeltaY.current = 0;
            }, 500);

            if (Math.abs(accumulatedDeltaY.current) > 300) {
                if (accumulatedDeltaY.current > 0) {
                    window.removeEventListener('wheel', handleWheel);
                    navigate('/about');
                }
                accumulatedDeltaY.current = 0;
                clearTimeout(timeoutRef.current);
            }
        };

        window.addEventListener('wheel', handleWheel);
        return () => {
            window.removeEventListener('wheel', handleWheel);
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [navigate]);
    return (
        <div className={s.wrapper}>
            <section>
                <div className={s.content}>
                    <h1>Reliable partner in</h1>
                    <Fliper />
                    <div className={s.btn}>
                        <UI_Button text={'DISCOVER US'} arrow />
                    </div>
                </div>
            </section>
        </div>
    )
}