import React from 'react'
import {Login} from "../store/Actions";
import {connect} from "react-redux";

interface LoginForm {
    email: string;
    password: string;
}

class LoginPage extends React.Component<{ Login: any }, LoginForm> {

    constructor(props: any) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event: any) {
        // @ts-ignore
        this.setState({[event.target.name]: event.target.value});
    };

    handleSubmit(event: any) {
        console.log(this.state);
        this.props.Login(this.state);
        event.preventDefault();
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
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input id="email" name="email" type="text" className="form-control"
                                           onChange={this.handleChange}
                                           value={this.state.email} required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input id="password" name="password" type="password" className="form-control"
                                           value={this.state.password}
                                           onChange={this.handleChange}/>
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
}


function mapStateToProps(state: any) {
    return {
        isLoggedIn: state.auth.isLoggedIn
    }
}

export default connect(mapStateToProps, {Login})(LoginPage);
