import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Html } from '@react-three/drei';
import { Provider } from 'react-redux';

import store from '../../store/store';

import Layout from "../../layout/default";
import AboutPage from '../../Pages/AboutPage/AboutPage';
import MainPage from '../../Pages/MainPage/MainPage';
import ServicesPage from '../../Pages/ServicesPage/ServicesPage';
import IndustriesPage from '../../Pages/IndustriesPage/IndustriesPage';
import ContactPage from "../../Pages/ContactPage/ContactPage";

export default function HtmlContent() {
    return (
        <Html as='div' fullscreen >
            <BrowserRouter>
                <Provider store={store}>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<MainPage />} />
                            <Route path="about" element={<AboutPage />} />
                            <Route path="services" element={<ServicesPage />} />
                            <Route path="industries" element={<IndustriesPage />} />
                            <Route path="contact" element={<ContactPage />} />
                        </Route>
                    </Routes>
                </Provider>
            </BrowserRouter>
        </Html>
    )
} 
