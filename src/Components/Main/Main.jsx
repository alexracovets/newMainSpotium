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
                            Reliable partner in
                        </h1>
                        <Cards />
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
