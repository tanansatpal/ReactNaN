import {createStore, combineReducers} from "redux";

import {AppReducer} from "./Reducers";

const rootReducer = combineReducers(AppReducer);

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
    return createStore(
        rootReducer
    );

}
