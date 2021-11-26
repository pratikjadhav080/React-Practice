import axios from 'axios';
import { GET_TODO_ERROR, GET_TODO_LOADING, GET_TODO_SUCCESS, TOTAL_NONCOMPLETED } from './actionTypes';

export const Actions = (action, Data) => {
    return {
        type: action,
        payload: Data
    }
}


export const getToDo = () => async (dispatch) => {
    dispatch(Actions(GET_TODO_LOADING, ""))

    try {
        const res = await axios.get("http://localhost:3004/todos")
        dispatch(Actions(GET_TODO_SUCCESS, res.data))

        const c = res.data.filter((e) => {
            return e.status === false
        }).length

        dispatch(Actions(TOTAL_NONCOMPLETED, c))

    } catch (err) {
        dispatch(Actions(GET_TODO_ERROR, err))
    }
}