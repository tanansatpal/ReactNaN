import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import {AppReducer} from "./Reducers";
import {composeWithDevTools} from 'redux-devtools-extension';
import {actionToPlainObject} from "../shared/middlewares/actionToObject";

const rootReducer = combineReducers(AppReducer);

// @ts-ignore
const preloadedState = window.__PRELOADED_STATE__;

// @ts-ignore
delete window.__PRELOADED_STATE__;


export default function configureStore() {
    return createStore(rootReducer, preloadedState, composeWithDevTools(
        applyMiddleware(actionToPlainObject, thunk),
    ));

}
