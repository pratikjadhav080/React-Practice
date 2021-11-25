

 import { DEC_COUNT,INC_COUNT } from "./actionTypes";

 const initState = {
     count: 0
 }
 
 export const countReducer = (state = initState, { type, payload }) => { //store 1st and action 2nd - order matters
 
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

         default:
             return state;
     }
 
 }
 