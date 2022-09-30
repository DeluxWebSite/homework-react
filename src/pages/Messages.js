import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";


const Messages = () => {
    const [messages, setMessages] = useState([
        {
            id: 1,
            text: 'privet',
            chatId: 1
        },
        {
            id: 2,
            text: 'privet hay',
            chatId: 2
        },
        {
            id: 3,
            text: 'privet aloha',
            chatId: 3
        },
    ]);

    const { id } = useParams();

    return (
        <div>
            <h2> Messages :  </h2>
            <ul>
                {messages.filter(mes => mes.chatId == id).map(mes =>
                    <li li key={mes.chatId} >
                        <p >{mes.text}</p>
                    </li>
                )}
            </ul>
        </div >
    )
}

export default Messages;