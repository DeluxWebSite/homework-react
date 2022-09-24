import React from "react";
import { Link, Outlet } from "react-router-dom";

const chats = [
    {
        id: 1,
        title: "Городской 1"
    },
    {
        id: 2,
        title: "Городской 2"
    },
    {
        id: 3,
        title: "Городской 3"
    }

]

const ChatsPage = () => {
    return (
        <div>
            <h2> Chats </h2>
            <ul>
                {chats.map(item =>
                    <li key={item.id}>
                        <Link to={`/chats/${item.id}`}>Чат : {item.title}</Link>
                    </li>
                )}
            </ul>
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default ChatsPage;