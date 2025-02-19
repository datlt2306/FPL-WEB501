import React from "react";
import { NavLink } from "react-router-dom";

const SidebarMenu = () => {
    return (
        <ul className="nav flex-column">
            <li className="nav-item">
                <NavLink className="nav-link d-flex align-items-center gap-2" to="/admin/dashboard">
                    <svg className="bi">
                        <use xlinkHref="#puzzle" />
                    </svg>
                    Thống kê
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link d-flex align-items-center gap-2" to="/admin/posts">
                    <svg className="bi">
                        <use xlinkHref="#puzzle" />
                    </svg>
                    Bài viết
                </NavLink>
            </li>
        </ul>
    );
};

export default SidebarMenu;
