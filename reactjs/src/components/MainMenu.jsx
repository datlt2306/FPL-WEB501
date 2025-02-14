import React from "react";
import { Link, NavLink } from "react-router-dom";

const MainMenu = () => {
    return (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to="/">
                    Home
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                    Sản phẩm
                </NavLink>
            </li>
        </ul>
    );
};

export default MainMenu;
