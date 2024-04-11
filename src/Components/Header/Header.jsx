import { NavLink } from "react-router-dom";

import s from './Header.module.scss';
export default function Header() {
    return (
        <header>
            <div className="wrapper">
                <div className={s.header}>
                    <div className={s.logo}></div>
                    <nav className={s.navigation}>
                        <ul>
                            <li>
                                <NavLink to={'/services'}>
                                    Services
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={'/industries'}>
                                    Industries
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={'/contact'}>
                                    Contact us
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
} 
