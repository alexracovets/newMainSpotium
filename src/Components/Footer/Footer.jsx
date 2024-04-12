import eng from '/image/en.svg';
import ua from '/image/ua_gray.svg';
import s from './Footer.module.scss';
import { useState } from 'react';

export default function Footer() {
    const [isEng, setIsEng] = useState(true);

    return (
        <footer>
            <div className="wrapper">
                <div className={s.footer}>
                    <div className={s.lang_switcher}>
                        <button className={isEng ? s.active : null} onClick={() => setIsEng(true)}>
                            <span>EN</span>
                            <img src={eng} alt='eng' />
                        </button>
                        <button className={!isEng ? s.active : null} onClick={() => setIsEng(false)}>
                            <span>UA</span>
                            <img src={ua} alt='ua' />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    )
} 
