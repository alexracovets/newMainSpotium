import { useLocation } from "react-router-dom";

import MainPage from "../../Pages/MainPage/MainPage";
import AboutPage from "../../Pages/AboutPage/AboutPage";

export default function Main() {
    const location = useLocation();

    return (
        <main>
            <MainPage location={location.pathname} />
            <AboutPage location={location.pathname} />
        </main >
    )
} 
