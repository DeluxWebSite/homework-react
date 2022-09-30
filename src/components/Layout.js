import React from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { ThemeContext } from "./Context";



const activeClass = ({ isActive }) => isActive ? 'current' : '';

const Layout = () => {

    const theme = useContext(ThemeContext);

    return (
        <div style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
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
            <section>

            </section>
            <hr />
            <footer>
                <strong>Copyright 2022</strong>
            </footer>
        </div>
    )
}
export default Layout;