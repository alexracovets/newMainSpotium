import { Html } from '@react-three/drei';
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Layout from "../../layout/default";
import AboutPage from '../../Pages/AboutPage/AboutPage';
import MainPage from '../../Pages/MainPage/MainPage';
import ServicesPage from '../../Pages/ServicesPage/ServicesPage';
import IndustriesPage from '../../Pages/IndustriesPage/IndustriesPage';

export default function HtmlContent() {
    return (
        <Html as='div' fullscreen style={{ pointerEvents: 'none' }} >
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<MainPage />} />
                        <Route path="about" element={<AboutPage />} />
                        <Route path="services" element={<ServicesPage />} />
                        <Route path="industries" element={<IndustriesPage />} />
                        <Route path="contact" element={<Layout />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </Html>
    )
} 
