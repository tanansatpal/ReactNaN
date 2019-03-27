import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeModule from "./modules/home/home.module";

function App() {
    return (
        <Router>
            <div className="page-container">
                <Header/>
                <Route exact path="/" component={HomeModule}/>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;

