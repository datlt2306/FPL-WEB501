import React from "react";
import SidebarMenu from "./SidebarMenu";

const SidebarAdmin = () => {
    return (
        <div
            style={{ height: "100vh" }}
            className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary"
        >
            <div
                className="offcanvas-md offcanvas-end bg-body-tertiary"
                tabIndex={-1}
                id="sidebarMenu"
                aria-labelledby="sidebarMenuLabel"
            >
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="sidebarMenuLabel">
                        Company name
                    </h5>
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="offcanvas"
                        data-bs-target="#sidebarMenu"
                        aria-label="Close"
                    />
                </div>
                <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
                    <SidebarMenu />
                </div>
            </div>
        </div>
    );
};

export default SidebarAdmin;
