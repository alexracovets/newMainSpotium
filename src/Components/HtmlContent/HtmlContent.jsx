import { Html } from '@react-three/drei';
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Layout from "../../layout/default";

export default function HtmlContent() {
    return (
        <Html as='div' fullscreen >
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Layout />} />
                        <Route path="news" element={<Layout />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </Html>
    )
} 
