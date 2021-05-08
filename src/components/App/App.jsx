import React, { useEffect } from 'react';
import axios from 'axios';
import './App.css';
import {HashRouter as Router, Route} from 'react-router-dom';
import {useDispatch} from 'react-redux';

import Feelings from '../Feelings/Feelings';
import Understanding from '../Understanding/Understanding';

function App() {

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   fetchFeedback();
  // }, [])

  // const fetchFeedback = () => {
  //   axios.get('/api/feedback')
  //   .then(response => {
  //     console.log(response.data);
  //     dispatch({
  //       type: 'GET_FEEDBACK',
  //       payload: response.data});
  //   })
  //   .catch(error => {
  //     alert(`Sorry, this website is currently not working... Try again later.`);
  //     console.log('Error getting feedback', error);
  //   })
  // }

  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
        <Route path="/" exact>
          <Feelings />
        </Route>
        <Route path="/understanding" exact>
          <Understanding />
        </Route>
      </div>
    </Router>
  );
}

export default App;
