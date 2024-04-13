import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Cards from '../../Components/Cards/Cards';
import UI_Button from '../../Components/UI_Button/UI_Button';

import s from './MainPage.module.scss';
export default function MainPage({ location }) {
    const [isMain, setIsMain] = useState(false);

    useEffect(() => {
        const isCurrent = location === "/";
        setIsMain(isCurrent);
    }, [location])
    return (
        <>
            {
                isMain &&
                <div className={s.wrapper}>
                    <section>
                        <div className={s.content}>
                            <h1>Reliable partner in</h1>
                            <Cards />
                            <div className={s.btn}>
                                <UI_Button text={'DISCOVER US'} arrow />
                            </div>
                        </div>
                    </section>
                </div>
            }
        </>
    )
}

MainPage.propTypes = {
    location: PropTypes.string
}