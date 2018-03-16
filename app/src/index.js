import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducers/rootReducer';
import { Root } from './root';
import thunkMiddleware from 'redux-thunk';

let store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware
    )
);

ReactDOM.render(
    <Root store={store}/>, 
    document.getElementById('root')
);
registerServiceWorker();
