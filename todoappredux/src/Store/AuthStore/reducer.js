/**
 * @params
 * @params
 * @returns
 */


import { loadData, saveData } from "../../utils/localStorage";
import { LOGIN_FAILURE, LOGIN_SUCCESS } from "./actionTypes";

const initState = {
    isAuth:false,
    toekn:""
}

export const authReducer = (state = initState, { type, payload }) => { //store 1st and action 2nd - order matters

    switch (type) {

        case LOGIN_SUCCESS:{
            return{
                ...state,
                isAuth:true,
                token:payload
            };
        }

        case LOGIN_FAILURE:{
            return{
                ...state,
                isAuth:false,
                token:""
            };
        }

        default:
            return state;
    }

}
