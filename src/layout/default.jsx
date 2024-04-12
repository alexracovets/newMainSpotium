import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Main from "../Components/Main/Main";

export default function Layout() {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'column', width: '100%', height: "100%" }}>
            <Header />
            <Main />
            <Footer />
        </div>
    )
}
