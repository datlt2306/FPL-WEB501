import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import Header from "./Header";
import Banner from "./Banner";
import Footer from "./Footer";

const LayoutWebsite = () => {
    return (
        <div>
            <Header />
            <main>
                <Outlet />
                <Footer />
            </main>
        </div>
    );
};

export default LayoutWebsite;
