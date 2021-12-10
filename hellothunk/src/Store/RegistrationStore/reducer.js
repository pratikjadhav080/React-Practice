/**
 * @params
 * @params
 * @returns
 */

import { REGISTRATION_FAILURE, REGISTRATION_LOADING, REGISTRATION_SUCCESS } from "./actionTypes";

const initState = {
    loading:false,
    registered:false,
    error:false
}

export const registrationReducer = (state = initState, { type, payload }) => { //store 1st and action 2nd - order matters

    switch (type) {

        case REGISTRATION_LOADING: {

            return {
                ...state,
                loading:true
            };
        }

        case REGISTRATION_SUCCESS: {
            return {
                ...state,
                loading:false,
                registered:true
            };
        }

        case REGISTRATION_FAILURE: {
            return {
                ...state,
                loading:false,
                registered:false,
                error:true
            };
        }


        default:
            return state;
    }

}
