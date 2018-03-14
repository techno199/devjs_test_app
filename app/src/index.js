import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { rootReducer } from './reducers/rootReducer';
import { Root } from './root';

let store = createStore(
    rootReducer
)

ReactDOM.render(
    <Root store={store}/>, 
    document.getElementById('root')
);
registerServiceWorker();
