import "./App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import LatestNews from "./components/LatestNews";
import Footer from "./components/Footer";

function App() {
    const logoUrl = "./logo.svg";
    return (
        <>
            <Header logo={logoUrl} />
            <Banner />
            <LatestNews />
            <Footer />
        </>
    );
}

export default App;
