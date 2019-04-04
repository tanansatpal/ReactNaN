import React from 'react'
import {Route, RouteComponentProps} from "react-router";
import Login from "./components/Login";
import Register from "./components/Register";

class AuthModule extends React.Component<RouteComponentProps> {

    componentDidMount() {

    }

    render() {
        console.log(this.props);
        return (<div>
                Auth Module
                <Route path={`${this.props.match.path}/login`} component={Login}/>
                <Route path={`${this.props.match.path}/register`} component={Register}/>
            </div>
        )
    }
}


export default AuthModule;
