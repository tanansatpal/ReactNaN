import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './assets/styles/styles.css';
import './assets/fonts/hkgrotesk/stylesheet.css';

import ClientRouter from './ClientRouter';

ReactDOM.hydrate(
    <ClientRouter/>,
    document.getElementById('root')
);
