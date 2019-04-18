import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import './index.scss';
import './assets/styles/styles.css';
import './assets/fonts/hkgrotesk/stylesheet.css';
import configureStore from "./store";
import ClientRouter from './ClientRouter';

const store = configureStore();

const Root = () => (
    <Provider store={store}>
        <ClientRouter/>
    </Provider>
);

ReactDOM.hydrate(
    <Root/>,
    document.getElementById('root')
);
