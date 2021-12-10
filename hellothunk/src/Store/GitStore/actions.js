import axios from 'axios';
import { GET_USERS_ERROR, GET_USERS_LOADING, GET_USERS_SUCCESS } from './actionTypes';

export const Actions = (action, Data) => {
    return {
        type: action,
        payload: Data
    }
}

export const getGithubData = (search) => async (dispatch) => {

    dispatch(Actions(GET_USERS_LOADING, ""))

    try {
        const res = await axios.get(`https://api.github.com/search/users?q=${search}`)
        console.log(res.data.items)
        dispatch(Actions(GET_USERS_SUCCESS, res.data.items))

    } catch (err) {
        dispatch(Actions(GET_USERS_ERROR, err))
    }
}
