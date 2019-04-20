import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import {AppReducer} from "./Reducers";
import {actionToPlainObject} from "../shared/middlewares/actionToObject";

const rootReducer = combineReducers(AppReducer);

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
    return createStore(
        rootReducer,
        applyMiddleware(thunk, actionToPlainObject)
    );

}
