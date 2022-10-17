import { applyMiddleware, createStore } from "redux";
// import { combineReducers } from "redux";
// import { chatsReducer } from "./chatReducer/chatsReducer";
// import { messagesReducer } from "./messageReducer/messagesReducer";
// import storage from "redux-persist/lib/storage";
// import persistReducer from "redux-persist/es/persistReducer";
// import persistStore from "redux-persist/es/persistStore";
import thunk from "redux-thunk";
import { reducer } from "./reducer";

// const timeOut = store => next => action => {
//     const delay = action?.meta?.delayMs
//     if (!delay) {
//         return next(action)
//     }
//     const result = setTimeout(() => next(action), delay)
//     return () => {
//         clearTimeout(result)
//     }
// }

// const config = {
//     key: 'root',
//     storage
// }
// export const reducer = combineReducers({
//     messages: messagesReducer,
//     chats: chatsReducer,

// })
// const persistedReducer = persistReducer(config, reducer)

// export const store = createStore(persistedReducer, applyMiddleware(thunk));

export const store = createStore(reducer, applyMiddleware(thunk));

// export const persist = persistStore(store)