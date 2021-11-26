import {createStore, applyMiddleware, compose} from "redux"
import thunk from "redux-thunk";
import { todoReducer } from "./TodoStore/reducer";


//thunk in createstore is basically acting as the middleware given below handling all the stuff 

// const middleware1 = (store) => (next) => (action) => {

//     if(typeof action==="function"){
//         action(store.dispatch)
//     }else{
//         next(action)
//     }
// }


//above middleware is same as below one

// function middleware(store){
//     return function(action){
//         return function(next){

//         }
//     }
// }




export const store = createStore(
    todoReducer,
    compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    );

    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()