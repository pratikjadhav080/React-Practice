import axios from 'axios';
import { nanoid } from 'nanoid'
import { GET_USERS_ERROR, GET_USERS_LOADING, GET_USERS_SUCCESS } from './actionTypes';

export const Actions = (action, Data) => {
    return {
        type: action,
        payload: Data
    }
}

export const getData = () => async (dispatch) => {

    dispatch(Actions(GET_USERS_LOADING, ""))

    try {
        const res = await axios.get("http://localhost:3004/todos")
        dispatch(Actions(GET_USERS_SUCCESS, res.data))

    } catch (err) {
        dispatch(Actions(GET_USERS_ERROR, err))
    }
}
