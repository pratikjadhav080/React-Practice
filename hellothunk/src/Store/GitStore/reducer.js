/**
 * @params
 * @params
 * @returns
 */

import { loadData, saveData } from "../../utils/localStorage";
import { GET_USERS_ERROR, GET_USERS_LOADING, GET_USERS_SUCCESS } from "./actionTypes";


const initState = {
    githubUsers: {
        loading: false,
        data: loadData("githubUsers")|| [],
        error: false
    }
}

export const gituserReducer = (state = initState, { type, payload }) => { //store 1st and action 2nd - order matters

    switch (type) {

        case GET_USERS_LOADING:
            return {
                ...state,
                githubUsers: {
                    ...state.githubUsers,
                    loading: true,
                },
            }

        case GET_USERS_SUCCESS:
            saveData("githubUsers",payload)
            return {
                ...state,
                githubUsers: {
                    ...state.githubUsers,
                    loading: false,
                    data: payload,
                },
            }

        case GET_USERS_ERROR:
            return {
                ...state,
                githubUsers: {
                    ...state.githubUsers,
                    loading: false,
                    error: true,
                },
            }

        default:
            return state;
    }

}
