import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Footer from "./components/Footer";
import Header from "./components/Header";
import routes from "./Routes";

function App() {
    return (
        <Router>
            <div className="page-container">
                <Header/>
                <Switch>
                    {routes.map(route => (<Route {...route}></Route>))}
                </Switch>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;

