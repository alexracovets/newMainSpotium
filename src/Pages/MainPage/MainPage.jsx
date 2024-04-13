
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Cards from '../../Components/Cards/Cards';
import UI_Button from '../../Components/UI_Button/UI_Button';


import s from './MainPage.module.scss';
export default function MainPage({ location }) {
    const [isMain, setIsMain] = useState(false);
    const [showCards, setShowCards] = useState(false);

    useEffect(() => {
        const isCurrent = location === "/";
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
        <>
            {
                showCards &&
                <div className={isMain ? s.wrapper + ' ' + s.active : s.wrapper} style={{ transform: isMain ? 'translateX(0%)' : 'translateX(-100%)' }}>
                    <div className={s.main} >
                        <div className={s.main_left}>
                            <h1>Reliable partner in</h1>
                            <Cards />
                            <div className={s.btn}>
                                <UI_Button text={'DISCOVER US'} arrow />
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

MainPage.propTypes = {
    location: PropTypes.string
}