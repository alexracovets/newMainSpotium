import { NavLink } from "react-router-dom";

import logo from '/image/logo.svg';
import s from './Header.module.scss';
import { useState } from "react";
import { useLocation } from "react-router-dom";
export default function Header() {
    const [isBurger, setIsBurger] = useState(false);
    const location = useLocation();
    console.log(location.pathname)
    return (
        <header>
            <div className="wrapper">
                <div className={s.header}>
                    <NavLink to={'/'} className={s.logo}>
                        <img src={logo} alt="logo" />
                    </NavLink>
                    <nav className={s.navigation}>
                        <ul>
                            <li>
                                <NavLink to={'/services'} className={location.pathname === '/services' && s.active}>
                                    Services
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={'/industries'} className={location.pathname === '/industries' && s.active}>
                                    Industries
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={'/contact'} className={location.pathname === '/contact' && s.active}>
                                    Contact us
                                </NavLink>
                            </li>
                        </ul>
                        <button className={isBurger ? s.burger + ' ' + s.active : s.burger} onClick={() => setIsBurger(!isBurger)}>
                            <span></span>
                            <span></span>
                        </button>
                    </nav>
                </div>
            </div>
        </header>
    )
} 
