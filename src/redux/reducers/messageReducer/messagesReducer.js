
const initialState = {
    messages: [
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
    ]
}

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'delete':
            return {
                ...state,
                messages: state.messages.filter((message => message.id !== action.payload))
            }
        case 'add':
            return {
                ...state,
                messages: [...state.messages, action.payload]
            }
        default: return state;
    }
};