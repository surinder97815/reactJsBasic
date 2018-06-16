import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import './App.css';

import Routes from './routes';
import reduxStore from './store';

export default function App() {
    return (
        <Provider store={reduxStore} >
            <Router>
                <Routes />
            </Router>
        </Provider>
    )
}
