import reducer, { initialState } from './reducer'
import * as t from './actionTypes'

describe('news reducer', () => {

    it('GET_POSTS_LOADING after situation without errorMsg', () => {
        const action = {
            type: t.GET_POSTS_LOADING,
        }

        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            loading: true,

        })
    })

    it('GET_POSTS after error', () => {
        const initialStateWithError = {
            data: null,
            loading: true,
            error: 'Unknown error',
        }

        const action = {
            type: t.GET_POSTS,
        }

        expect(reducer(initialStateWithError, action)).toEqual({
            ...initialStateWithError,
            loading: true,
            error: null,
        })
    })

    it('GET_POSTS_ERROR', () => {
        const initialState = {
            data: null,
            loading: true,
            error: null,
        }

        const action = {
            type: t.GET_POSTS_ERROR,
            payload: [1, 2, 3],
        }

        expect(reducer(initialState, action)).toEqual({
            ...initialState,
            loading: false,
            data: action.payload,
        })
    })

})