import React, { useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    fetchFeedback();
  }, [])

  const fetchFeedback = () => {
    axios.get('')
    .then(response => {
      console.log(response.data);
      dispatch({
        type: 'GET_FEEDBACK',
        payload: response.data});
    })
    .catch(error => {
      alert(`Sorry, this website is currently not working... Try again later.`);
      console.log('Error getting feedback', error);
    })
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <h1>How are you feeling today?</h1>
    </div>
  );
}

export default App;
