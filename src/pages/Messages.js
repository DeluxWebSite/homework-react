import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { messagesSelector } from "../redux/reducers/messageReducer/messagesSelector"

const Messages = () => {


    const [text, setText] = useState('');
    const messages = useSelector(messagesSelector)
    const dispath = useDispatch();
    const { id } = useParams();

    const handleAdd = () => {
        const obj = {
            id: Number(id),
            text: text
        }
        dispath({ type: 'add', payload: obj })
    }

    return (
        <div>
            <h2> Messages :  </h2>
            <input value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={handleAdd}>Add</button>
            <ul>
                {messages.map(mes =>
                    <li key={mes.id} >
                        <p >{mes.text}</p>
                        <button onClick={() => dispath({ type: 'delete', payload: mes.id, meta: { delayMs: 5000 } })}>Удалить</button>
                    </li>
                )}
            </ul>
        </div >
    )
}

export default Messages;