import { NavLink } from "react-router-dom"

export default function Header() {
    return (
        <header>
            <ul>
                <li>
                    <NavLink to={'/news'}>
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
        </header>
    )
} 
