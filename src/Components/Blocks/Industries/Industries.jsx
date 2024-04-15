import { Scrollbar } from 'react-scrollbars-custom';

import plus from '/image/svg/plus.svg';
import s from './Industries.module.scss';
export default function Industries() {

    return (
        <Scrollbar className={'scroll'}>
            <ul className={s.industries}>
                <li>
                    <img src={plus} alt="" />
                    <span>Banks</span>
                </li>
                <li>
                    <img src={plus} alt="" />
                    <span>Capital Markers</span>
                </li>
                <li>
                    <img src={plus} alt="" />
                    <span>Finance</span>
                </li>
                <li>
                    <img src={plus} alt="" />
                    <span>Specialty Retail</span>
                </li>
                <li>
                    <img src={plus} alt="" />
                    <span>Helthcare Services</span>
                </li>
                <li>
                    <img src={plus} alt="" />
                    <span>Travel & Hospitality</span>
                </li>
            </ul>
        </Scrollbar>
    )
}