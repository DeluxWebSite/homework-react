import { GET_POSTS, GET_POSTS_ERROR, GET_POSTS_LOADING } from "../../store/actionTypes"


const initialState = {
    posts: [],
    loading: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POSTS_LOADING: return {
            ...state,
            loading: true
        }
        case GET_POSTS: return {
            ...state,
            posts: action.payload,
            loading: false
        }
        case GET_POSTS_ERROR: return {
            ...state,
            loading: false,
            error: action.payload
        }
        default: return state
    }
}

export const getDate = () => {
    return async (dispatch) => {
        dispatch({
            type: GET_POSTS_LOADING
        })
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();

            dispatch({
                type: GET_POSTS,
                payload: data
            })
        }
        catch (error) {
            dispatch({
                type: GET_POSTS_ERROR,
                payload: error.toString()
            })
        }
        finally {
            console.log('work')
        }
    }
}