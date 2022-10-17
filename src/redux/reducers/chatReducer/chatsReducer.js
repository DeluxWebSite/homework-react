

const initialState = {
    chats: [
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
}

export const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'delete':
            return {
                ...state,
                chats: state.chats.filter((chat => chat.id !== action.payload))
            }
        case 'add':
            return {
                ...state,
                chats: [...state.chats, action.payload]
            }
        default: return state;
    }
};