import {AuthState} from "./types";
import * as AuthActions from './Actions';

const initialState: AuthState = {
    isLoggedIn: false,
    user: null
};

export function AuthReducer(state = initialState, action: AuthActions.AuthUnion): AuthState {
    switch (action.type) {
        case AuthActions.AuthActionsTypes.LOGIN_SUCCESS: {
            return {
                ...state,
                isLoggedIn: true,
                user: action.payload
            };
        }

        case AuthActions.AuthActionsTypes.LOGIN_FAILED: {
            return state;
        }

        case AuthActions.AuthActionsTypes.GET_CURRENT_USER: {
            return state.user;
        }

        case AuthActions.AuthActionsTypes.LOGOUT_SUCCESS: {
            return {
                ...state,
                isLoggedIn: false,
                user: null
            };
        }

        default:
            return state;
    }
}
