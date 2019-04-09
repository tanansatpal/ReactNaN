import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './assets/styles/styles.css';
import './assets/fonts/hkgrotesk/stylesheet.css';

import App from './App';

ReactDOM.hydrate(
    <App/>,
    document.getElementById('root')
);
