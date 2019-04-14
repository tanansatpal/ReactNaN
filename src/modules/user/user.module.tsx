import React from 'react'
import {Route, RouteComponentProps, Switch} from "react-router";
import routes from "./UserRoutes";


export default function UserModule({match}: RouteComponentProps) {
    return (<div>
            <Switch>
                {routes.map((route, index) => (<Route key={index} {...route} />))}
            </Switch>
        </div>
    )
}
