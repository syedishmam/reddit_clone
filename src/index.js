import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import reduxThunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './components/App';
import reducers from './reducers';

ReactDOM.render(
    <App />, 
    document.getElementById('root')
);