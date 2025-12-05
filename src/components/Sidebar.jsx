import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <div>
            <ul className="list-group">
                <li className="list-group-item">
                    <NavLink to="/admin/dashboard">Dashboard</NavLink>
                </li>
                <li className="list-group-item">
                    <NavLink to="/admin/products">Products</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
