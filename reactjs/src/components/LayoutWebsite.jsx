import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const LayoutWebsite = () => {
    return (
        <div className="container">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default LayoutWebsite;
