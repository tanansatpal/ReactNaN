import React from 'react';
import {BrowserRouter as Router, StaticRouter, Route, Switch} from 'react-router-dom';
import Footer from "./components/Footer";
import Header from "./components/Header";
import routes from "./Routes";
import {withRouter} from "react-router";

const HeaderWithRouter = withRouter(Header);

function App() {
    return (
        <StaticRouter>
            <div className="page-container">
                <HeaderWithRouter/>
                <Switch>
                    {routes.map((route, index) => (<Route key={index} {...route} />))}
                </Switch>
                <Footer/>
            </div>
        </StaticRouter>
    );
}

export default App;

