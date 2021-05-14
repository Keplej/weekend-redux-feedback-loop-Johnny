import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';

// These are each pages reducer so it can be sent to the next page.

const feelingsReducer = (state = 0, action) => {
    if (action.type === 'GET_FEELINGS') {
        return action.payload;
    }
    if(action.type === 'RESET') {
        return 0;
    }
    return state;
}

const understandingReducer = (state = 0, action) => {
    if (action.type === 'GET_UNDERSTANDING') {
        return action.payload;
    }
    if(action.type === 'RESET') {
        return 0;
    }
    return state;
}

const supportedReducer = (state = 0, action) => {
    if (action.type === 'GET_SUPPORTED') {
        return action.payload;
    }
    if(action.type === 'RESET') {
        return 0;
    }
    return state;
}

const commentsReducer = (state = '', action) => {
    if (action.type === 'GET_COMMENTS') {
        return action.payload;
    }
    if(action.type === 'RESET') {
        return '';
    }
    return state;
}

const reviewReducer = (state = [], action) => {
    if (action.type === 'GET_COMMENTS') {
        return action.payload;
    }
    return state;
}

const reduxStore = createStore(
    combineReducers({
        feelingsReducer,
        understandingReducer,
        supportedReducer,
        commentsReducer,
        reviewReducer,
    }),
    applyMiddleware(logger),
)

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
