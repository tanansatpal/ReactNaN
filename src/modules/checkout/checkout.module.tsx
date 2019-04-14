import React from 'react'
import {Route, RouteComponentProps, Switch} from "react-router";
import routes from "./CheckoutRoutes";


export default function CheckoutModule({match}: RouteComponentProps) {
    return (<div>
            <Switch>
                {routes.map((route, index) => (<Route key={index} {...route} />))}
            </Switch>
        </div>
    )
}
