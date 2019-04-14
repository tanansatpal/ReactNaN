import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Footer from "./components/Footer";
import Header from "./components/Header";
import routes from "./Routes";
import {withRouter} from "react-router";
import {library} from '@fortawesome/fontawesome-svg-core'
import {faBars, faAngleDown, faTimes, faArrowRight} from '@fortawesome/free-solid-svg-icons'
import SvgSprites from "./components/SvgSprites";

library.add(faBars, faAngleDown, faTimes, faArrowRight);
const HeaderWithRouter = withRouter(Header);

function App() {
    return (
        <div className="page-container">
            <SvgSprites/>
            <HeaderWithRouter/>
            <Switch>
                {routes.map((route, index) => (<Route key={index} {...route} />))}
            </Switch>
            <Footer/>
        </div>
    );
}

export default App;

