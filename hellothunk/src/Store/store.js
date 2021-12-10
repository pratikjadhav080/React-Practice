import { createStore, applyMiddleware, compose, combineReducers } from "redux"
import thunk from "redux-thunk";
import { authReducer } from "./AuthStore/reducer";
import { gituserReducer } from "./GitStore/reducer";
import { registrationReducer } from "./RegistrationStore/reducer";

const rootReducer = combineReducers({
    auth: authReducer,
    registration:registrationReducer,
    gituser: gituserReducer
})


export const store = createStore(
    rootReducer,
    compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);
