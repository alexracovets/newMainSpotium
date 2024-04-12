import Cards from '../Cards/Cards';
import arrow from '/image/arrow_btn.svg';

import s from './Main.module.scss';

export default function Main() {

    return (
        <main>
            <div className="wrapper">
                <div className={s.main}>
                    <div className={s.main_left}>
                        <h1>
                            <span className={s.normal}>Reliable partner in</span>
                            <Cards />
                        </h1>
                        <button>
                            <span> DISCOVER US</span>
                            <img src={arrow} alt="arrow" className={s.arrow} />
                        </button>
                    </div>
                </div>
            </div>
        </main>
    )
} 
