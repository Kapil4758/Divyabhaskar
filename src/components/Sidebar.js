import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <ul className="categorylist">
            <li>
                <NavLink to="/">
                    <button>Top News</button>
                </NavLink>  
            </li>
            <li>
                <NavLink to="/sports">
                    <button>Sports</button>
                </NavLink>
            </li>
            <li>
                <NavLink to="/entertainment">
                    <button>Entertainment</button>
                </NavLink>
            </li>
            <li>
                <NavLink to="/india">
                    <button>India</button>
                </NavLink>
            </li>
            <li>
                <NavLink to="/world">
                    <button>World</button>
                </NavLink>
            </li>
            <li>
                <NavLink to="/astrology">
                    <button>Astrology</button>
                </NavLink>
            </li>
        </ul>
    )
}

export default Sidebar;