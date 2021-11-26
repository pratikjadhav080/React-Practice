/**
 * @params
 * @params
 * @returns
 */


import { ADD_TODO_ERROR, ADD_TODO_LOADING, ADD_TODO_SUCCESS, DELETE_TODO_ERROR, DELETE_TODO_LOADING, DELETE_TODO_SUCCESS, EDIT_TODO_ERROR, EDIT_TODO_LOADING, EDIT_TODO_SUCCESS, GET_TODO_ERROR, GET_TODO_LOADING, GET_TODO_SUCCESS, TOTAL_NONCOMPLETED, UPDATE_TODO_ERROR, UPDATE_TODO_LOADING, UPDATE_TODO_SUCCESS } from "./actionTypes";

const initState = {
    todos: {
        count: 0,
        loading: false,
        data: [],
        error: false
    }
}

export const todoReducer = (state = initState, { type, payload }) => { //store 1st and action 2nd - order matters

    switch (type) {

        case ADD_TODO_LOADING:
            return {
                ...state,
                todos: {
                    ...state.todos,
                    loading: true,
                },
            }

        case ADD_TODO_SUCCESS:
            return {
                ...state,
                todos: {
                    ...state.todos,
                    loading: false,
                    data: [],
                },
            }

        case ADD_TODO_ERROR:
            return {
                ...state,
                todos: {
                    ...state.todos,
                    loading: false,
                    error: true,
                },
            }

        case GET_TODO_LOADING:
            return {
                ...state,
                todos: {
                    ...state.todos,
                    loading: true,
                },
            }

        case GET_TODO_SUCCESS:
            return {
                ...state,
                todos: {
                    ...state.todos,
                    loading: false,
                    data: payload,
                },
            }

        case GET_TODO_ERROR:
            return {
                ...state,
                todos: {
                    ...state.todos,
                    loading: false,
                    error: true,
                },
            }


        case UPDATE_TODO_LOADING:
            return {
                ...state,
                todos: {
                    ...state.todos,
                    loading: true,
                },
            }

        case UPDATE_TODO_SUCCESS:

            const new_data = state.todos.data.map((e) => {
                return e.id === payload.id ? { ...e, status: !e.status } : e
            })

            return {
                ...state,
                todos: {
                    ...state.todos,
                    loading: false,
                    data: new_data,
                },
            }

        case UPDATE_TODO_ERROR:
            return {
                ...state,
                todos: {
                    ...state.todos,
                    loading: false,
                    error: true,
                },
            }

        case DELETE_TODO_LOADING:
            return {
                ...state,
                todos: {
                    ...state.todos,
                    loading: true,
                },
            }

        case DELETE_TODO_SUCCESS:

            const dataAfterDeletion = state.todos.data.filter((e) => {
                return e.id !== payload.id
            })

            return {
                ...state,
                todos: {
                    ...state.todos,
                    loading: false,
                    data: dataAfterDeletion,
                },
            }

        case DELETE_TODO_ERROR:
            return {
                ...state,
                todos: {
                    ...state.todos,
                    loading: false,
                    error: true,
                },
            }

        case EDIT_TODO_LOADING:
            return {
                ...state,
                todos: {
                    ...state.todos,
                    loading: true,
                },
            }

        case EDIT_TODO_SUCCESS:

            const dataAfterEditing = state.todos.data.map((e) => {
                return e.id === payload.id ? { ...e, title: payload.title } : e
            })

            return {
                ...state,
                todos: {
                    ...state.todos,
                    loading: false,
                    data: dataAfterEditing,
                },
            }

        case EDIT_TODO_ERROR:
            return {
                ...state,
                todos: {
                    ...state.todos,
                    loading: false,
                    error: true,
                },
            }

        case TOTAL_NONCOMPLETED:
            return {
                ...state,
                todos: {
                    ...state.todos,
                    count:payload
                },
            }

        default:
            return state;
    }

}
