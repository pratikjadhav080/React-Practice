import {createStore, applyMiddleware, compose} from "redux"
import { todoReducer } from "./TodoStore/reducer";

const middleware1 = (store) => (next) => (action) => {

    if(typeof action==="function"){
        action(store.dispatch)
    }else{
        next(action)
    }
}

const middleware2 = (store) => (next) => (action) => {
    //console.log("middleware2",action.type)
    next(action)
    //console.log("middleware2 exit")
}


//above middleware is same as below one

// function middleware(store){
//     return function(action){
//         return function(next){

//         }
//     }
// }


export const store = createStore(
    todoReducer,
    compose(applyMiddleware(middleware1,middleware2),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    );

    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()