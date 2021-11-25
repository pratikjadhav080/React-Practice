// import { ADD_TODO, DEC_COUNT, INC_COUNT } from "./actionTypes.js"

// export const incCounter = (Data) => {
//     return {
//         type: INC_COUNT,
//         payload: Data
//     }
// }

// export const decCounter = (Data) => {
//     return {
//         type: DEC_COUNT,
//         payload: Data
//     }
// }


// export const addTODO = (Data) => {
//     return { 
//         type: ADD_TODO, 
//         payload: Data
//     }
// }

export const Actions = (action,Data) => {
    return { 
        type: action, 
        payload: Data
    }
}