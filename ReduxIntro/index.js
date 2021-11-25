//1. if you want to change something, dispatch/send an action
//2. action always go to reducer
//3. reducer returns a new store
//4. store updates view

// Action    :object {type:"INC",payload:1}
// Dispatch  : function. take action, give it to reducer.
// Reducer   :function, takes current state and action and returns the new store
// View      : whatever. DOM,console,terminal..

import {createStore} from "redux";
import { Actions} from "./Store/actions.js";
import { ADD_TODO, DEC_COUNT, INC_COUNT } from "./Store/actionTypes.js";


// class Store {
//     constructor(reducer, initState) {
//         this.reducer = reducer;
//         this.state = initState;
//     }

//     getState() {
//         return this.state;
//     }

//     dispatch(action) {
//         this.state = this.reducer(this.state, action)
//     }

// }

const reducer = (state, action) => { //store 1st and action 2nd - order matters

    switch (action.type) {
        case INC_COUNT:
            return {
                ...state,
                count: state.count + action.payload,
            }
        case DEC_COUNT:
            return {
                ...state,
                count: state.count - action.payload,
            }
            case ADD_TODO:
                return {
                    ...state,
                    todos: [...state.todos,action.payload],
                }
        default:
            return state;
    }

}

const init = { count: 0,todos:[]};

const store = createStore(reducer, init)

console.log(store.getState())

store.dispatch(Actions(INC_COUNT,1))

console.log(store.getState())

store.dispatch(Actions(INC_COUNT,2))

console.log(store.getState())

store.dispatch(Actions(ADD_TODO,{id:1,status:false,title:"Learn Redux"}))

console.log(store.getState())

store.dispatch(Actions(ADD_TODO,{id:2,status:false,title:"Practice Redux"}))

console.log(store.getState())

store.dispatch(Actions(DEC_COUNT,1))

console.log(store.getState())

store.dispatch(Actions(ADD_TODO,{id:3,status:false,title:"Practice Js"}))

console.log(store.getState())

//1. action creators: function :action object
//2. action types:
//3. reducer
//4. store