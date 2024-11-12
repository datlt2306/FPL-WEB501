import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const LayoutWebsite = () => {
    return (
        <div className="container py-3">
            <Header />
            <main className="tw-border-2 tw-border-red-500">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default LayoutWebsite;
