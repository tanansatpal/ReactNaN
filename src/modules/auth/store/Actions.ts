import {Action} from 'redux';
import {userService} from "../../../services/auth.service";

export enum AuthActionsTypes {
    LOGIN = '[Login Page] Login',
    LOGIN_SUCCESS = '[Auth API] Login Success',
    LOGIN_FAILED = '[Auth API] Login Failed',
    LOGOUT = '[Header] Logout',
    LOGOUT_SUCCESS = '[Auth API] Logout Success',
    GET_CURRENT_USER = '[Any] Get Current User',
    AUTHORIZE = '[App Component] Authorize'
}


export function Login(values: any) {
    return async function (dispatch: any) {
        const user = await userService.login(values).catch(err => {
            dispatch(LoginFailed(err));
        });
        dispatch(LoginSuccess(user))
    }
}

export function LoginSuccess(payload: any) {
    return {
        type: AuthActionsTypes.LOGIN_SUCCESS,
        payload: payload
    }
}

export function LoginFailed(error: any) {
    return {
        type: AuthActionsTypes.LOGIN_FAILED,
        payload: error
    }

}

export class Logout implements Action {
    readonly type = AuthActionsTypes.LOGOUT;
}

export class LogoutSuccess implements Action {
    readonly type = AuthActionsTypes.LOGOUT_SUCCESS;

    constructor(public payload: { user: any }) {
    }
}

export class GetCurrentUser implements Action {
    readonly type = AuthActionsTypes.GET_CURRENT_USER;
}

export class Authorize implements Action {
    readonly type = AuthActionsTypes.AUTHORIZE;
}

export type AuthUnion = Authorize | GetCurrentUser | Logout | LogoutSuccess;
