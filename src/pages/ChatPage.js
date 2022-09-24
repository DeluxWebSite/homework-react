import React from "react";
import { Outlet } from "react-router";


const ChatPage = () => {
    return (
        <div>
            <h3>Здесь чат id</h3>
            <Outlet />
        </div>
    )
}

export default ChatPage;