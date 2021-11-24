
import { ADD_TODO, DEC_COUNT, INC_COUNT } from "./actionTypes";


const initState = { count: 0, todos: [] }

export const reducer = (state = initState, { type, payload }) => { //store 1st and action 2nd - order matters

    console.log(state)

    switch (type) {
        case INC_COUNT:
            return {
                ...state,
                count: state.count + payload,
            }
        case DEC_COUNT:
            return {
                ...state,
                count: state.count - payload,
            }
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, payload],
            }
        default:
            return state;
    }

}
