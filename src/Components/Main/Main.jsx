import { useLocation } from "react-router-dom";

import MainPage from "../../Pages/MainPage/MainPage";
import AboutPage from "../../Pages/AboutPage/AboutPage";
import ServicesPage from "../../Pages/ServicesPage/ServicesPage";

export default function Main() {
    const location = useLocation();

    return (
        <main>
            <MainPage location={location.pathname} />
            <AboutPage location={location.pathname} />
            <ServicesPage location={location.pathname} />
        </main >
    )
} 
