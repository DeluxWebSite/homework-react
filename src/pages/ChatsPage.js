
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";




const ChatsPage = () => {

    const [chats, setChats] = useState([
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

    ]);
    const [name, setName] = useState('');
    const handleDelete = (id) => {
        const filtered = chats.filter(chat => chat.id !== id);
        setChats(filtered);
    }
    const handleAdd = () => {
        const obj = {
            id: Date.now(),
            name: name
        }
        setChats(prevState => [...prevState, obj]);
    }
    return (
        <div>
            <h2> Chats </h2>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={handleAdd}>Добавить чат</button>
            <ul>
                {chats.map(chat =>
                    <li key={chat.id}>
                        <Link to={`/messages/${chat.id}`}>Чат : {chat.title}</Link>
                        <button onClick={() => handleDelete(chat.id)}>X</button>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default ChatsPage;