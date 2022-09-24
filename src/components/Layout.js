import React from "react";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

const activeClass = ({ isActive }) => isActive ? 'current' : '';
const Layout = () => {
    return (
        <>
            <header>
                <ul>
                    <li> <NavLink to={"/"} className={activeClass}> HOME </NavLink></li>
                    <li> <NavLink to={"/profile"} className={activeClass}> PROFILE </NavLink></li>
                    <li> <NavLink to={"/chats"} className={activeClass}> CHATS </NavLink></li>
                </ul>
            </header>
            <main>
                <Outlet />
            </main>
            <hr />
            <footer>
                <strong>Copyright 2022</strong>
            </footer>
        </>
    )
}
export default Layout;