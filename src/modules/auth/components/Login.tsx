import React from 'react'
import {Link} from "react-router-dom";

class Login extends React.Component {

    componentDidMount() {

    }

    render() {
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
                                <form method="get">
                                    <div className="form-group">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input id="email" type="text" className="form-control"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input id="password" type="password" className="form-control"/>
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
            </div>
        )
    }
}


export default Login;
