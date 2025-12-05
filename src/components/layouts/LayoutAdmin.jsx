import React from "react";
import Sidebar from "../Sidebar";
import { Outlet } from "react-router-dom";

const LayoutAdmin = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <aside className="col-md-3">
                    <Sidebar />
                </aside>
                <main className="col-md-9">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default LayoutAdmin;
