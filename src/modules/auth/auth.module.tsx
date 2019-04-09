import React from 'react'
import {Route, RouteComponentProps} from "react-router";
import Login from "./components/Login";
import Register from "./components/Register";
import {Link} from "react-router-dom";

class AuthModule extends React.Component<RouteComponentProps> {

    componentDidMount() {

    }

    render() {
        return (<div>
                <section className="hero">
                    <div className="container">
                        <ol className="breadcrumb justify-content-center">
                            <li className="breadcrumb-item">
                                <Link to="/">Home</Link></li>
                            <li className="breadcrumb-item active">Customer zone</li>
                        </ol>
                        <div className="hero-content pb-5 text-center">
                            <h1 className="hero-heading mb-0">Customer zone</h1>
                        </div>
                    </div>
                </section>
                <Route path={`${this.props.match.path}/login`} component={Login}/>
                <Route path={`${this.props.match.path}/register`} component={Register}/>
            </div>
        )
    }
}


export default AuthModule;
