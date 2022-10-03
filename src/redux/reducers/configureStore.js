import { createStore } from "redux";
import { combineReducers } from "redux";
import { chatsReducer } from "./chatReducer/chatsReducer";
import { messagesReducer } from "./messageReducer/messagesReducer";

export const reducer = combineReducers({
    messages: messagesReducer,
    chats: chatsReducer
})

export const store = createStore(reducer);