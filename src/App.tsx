import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Footer from "./components/Footer";
import Header from "./components/Header";
import routes from "./Routes";
import {withRouter} from "react-router";

const HeaderWithRouter = withRouter(Header);

function App() {
    return (
        <div className="page-container">
            <HeaderWithRouter/>
            <Switch>
                {routes.map((route, index) => (<Route key={index} {...route} />))}
            </Switch>
            <Footer/>
        </div>
    );
}

export default App;

