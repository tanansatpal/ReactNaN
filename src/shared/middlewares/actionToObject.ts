import {Action, Dispatch} from 'redux'

export const actionToPlainObject = (store: any) => (next: Dispatch) => (action: Action) => {
    console.log("ACTION :: ", action);
    next(action)
};
