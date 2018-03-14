import React from 'react';
import { Provider } from 'react-redux';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import { App } from './components/app/app';

export const Root = ({store}) => (
    <Provider store={store}>
        <Router>
                <Route path='/' component={App} />
        </Router>
    </Provider>
);