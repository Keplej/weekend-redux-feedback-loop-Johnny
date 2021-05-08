import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';


// Do we want to put in multiple things into the feedbackReducer?
// Do we want to use something we can switch with?
// Is the 'GET_FEEDBACK' go into this feedbackReducer?
const feelingsReducer = (state = 0, action) => {
    if (action.type === 'GET_FEELINGS') {
        return action.payload;
    }
    return state;
}

// const feelingsReducer = (state = {}, action) => {
//     if (action.type === 'GET_FEELINGS') {
//         return action.payload;
//     }
//     return state;
// }

const reduxStore = createStore(
    combineReducers({
        feelingsReducer,
    }),
    applyMiddleware(logger),
)

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();


// MIGHT WANT TO USE SWITCH CASES FOR THE FEEDBACK REDUCER

// function appReducer(state = initialState, action) {
//     switch (action.type) {
//       case 'SET_VISIBILITY_FILTER': {
//         return Object.assign({}, state, {
//           visibilityFilter: action.filter
//         })
//       }