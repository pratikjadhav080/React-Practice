import axios from "axios"
import { REGISTRATION_FAILURE, REGISTRATION_LOADING, REGISTRATION_SUCCESS } from "./actionTypes"


export const Actions = (action, Data) => {
    return {
        type: action,
        payload: Data
    }
}


export const registerUser = (registrationData) => async (dispatch) => {


    dispatch(Actions(REGISTRATION_LOADING,""))

    try {
        const res = await axios.post('https://masai-api-mocker.herokuapp.com/auth/register', registrationData)
        dispatch(Actions(REGISTRATION_SUCCESS, ""))
    } catch (err) {
        dispatch(Actions(REGISTRATION_FAILURE, ""))
    }
}
