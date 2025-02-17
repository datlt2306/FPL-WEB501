import React from "react";
import HeaderAdmin from "./HeaderAdmin";
import SidebarAdmin from "./SidebarAdmin";
import DashboardPage from "../pages/admin/Dashboard";
import { Outlet } from "react-router-dom";

const LayoutAdmin = () => {
    return (
        <div>
            <div>
                <HeaderAdmin />
                <div className="container-fluid">
                    <div className="row">
                        <SidebarAdmin />
                        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                            <Outlet />
                        </main>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LayoutAdmin;
