import Cards from '../Cards/Cards';
import { useLocation } from "react-router-dom";
import arrow from '/image/arrow_btn.svg';

import s from './Main.module.scss';
import { useEffect, useState } from 'react';

export default function Main() {
    const location = useLocation();
    const [isMain, setIsMain] = useState(false);
    const [showCards, setShowCards] = useState(false);

    useEffect(() => {
        const isCurrent = location.pathname === "/";
        if (isCurrent) {
            setShowCards(true)
            setTimeout(() => {
                setIsMain(true)
            }, 300)
        } else {
            setIsMain(false)
            setTimeout(() => {
                setShowCards(false)
            }, 600)
        }
    }, [location])
    return (
        <main>

            {showCards &&
                <div className={isMain ? s.wrapper + ' ' + s.active : s.wrapper} style={{ transform: isMain ? 'translateX(0%)' : 'translateX(-100%)' }}>
                    <div className={isMain ? s.main + ' ' + s.active : s.main} >
                        <div className={s.main_left}>
                            <h1>Reliable partner in</h1>
                            <Cards />
                            <button>
                                <span> DISCOVER US</span>
                                <img src={arrow} alt="arrow" className={s.arrow} />
                            </button>
                        </div>
                    </div>
                </div>
            }
        </main >
    )
} 
