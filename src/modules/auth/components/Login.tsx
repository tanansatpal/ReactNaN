import React, {useEffect, useReducer} from 'react'
import {AuthReducer, initialState} from "../store/Reducers";
import {LoginFailed, LoginSuccess} from "../store/Actions";
import useForm from "../../../shared/hooks/useForm";
import {userService} from "../../../services/auth.service";

interface LoginForm {
    email: string;
    password: string;
}

let initialForm: LoginForm = {email: "", password: ""};


export default function LoginPage() {

    const login = async () => {
        const user = await userService.login(values).catch(err => {
            dispatch(new LoginFailed(err));
            return err;
        });
        dispatch(new LoginSuccess(user))
    };

    const [state, dispatch] = useReducer(AuthReducer, initialState);
    const {values, handleChange, handleSubmit} = useForm(initialForm, login);

    return (<div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-12">
                <div className="block">
                    <div className="block-header">
                        <h6 className="text-uppercase mb-0">Login</h6>
                    </div>
                    <div className="block-body">
                        <p className="lead">Already our customer?</p>
                        <p className="text-muted">Pellentesque habitant morbi tristique senectus et netus et
                            malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies
                            eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean
                            ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                        <hr/>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input id="email" name="email" type="text" className="form-control"
                                       onChange={handleChange}
                                       value={values.email} required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input id="password" name="password" type="password" className="form-control"
                                       value={values.password}
                                       onChange={handleChange}/>
                            </div>
                            <div className="form-group text-center">
                                <button type="submit" className="btn btn-outline-dark">
                                    <i className="fa fa-sign-in-alt mr-2"/> Log in
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

