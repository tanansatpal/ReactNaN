import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import App from "./App";

function ClientRouter() {
    return (
        <Router>
            <App/>
        </Router>
    );
}

export default ClientRouter;

