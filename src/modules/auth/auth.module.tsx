import React from 'react'
import {Route, RouteComponentProps} from "react-router";
import LoginPage from "./components/Login";
import Register from "./components/Register";
import {Link} from "react-router-dom";

export default function AuthModule(props: RouteComponentProps) {
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
        <Route path={`${props.match.path}/login`} component={LoginPage}/>
        <Route path={`${props.match.path}/register`} component={Register}/>
    </div>)
}

