
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { chatsSelector } from "../redux/reducers/chatReducer/chatsSelector";



const ChatsPage = () => {


    // const [chats, setChats] = useState([]);
    const [title, setTitle] = useState('');
    const chats = useSelector(chatsSelector);
    const dispath = useDispatch();
    // const [name, setName] = useState('');
    // const handleDelete = (id) => {
    //     const filtered = chats.filter(chat => chat.id !== id);
    //     setChats(filtered);
    // }
    // const handleAdd = () => {
    //     const obj = {
    //         id: Date.now(),
    //         name: name
    //     }
    //     setChats(prevState => [...prevState, obj]);
    // }
    const handleAdd = () => {
        const obj = {
            id: Date.now(),
            title: title
        }
        dispath({ type: 'add', payload: obj })
    }
    return (
        <div>
            <h2> Chats </h2>
            <input value={title} onChange={(e) => setTitle(e.target.value)} />
            <button onClick={handleAdd}>Добавить чат</button>
            <ul>
                {chats.map(chat =>
                    <li key={chat.id}>
                        <Link to={`/messages/${chat.id}`}>Чат : {chat.title}</Link>
                        <button onClick={() => dispath({ type: 'delete', payload: chat.id })}>X</button>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default ChatsPage;