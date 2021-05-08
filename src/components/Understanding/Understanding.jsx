import { useState } from "react"
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';


function Understanding() {

    const [understanding, setUnderstanding] = useState('');

    const dispatch = useDispatch();
    const history = useHistory();

    const handleUnderstanding = () => {
        event.preventDefault();
        // We are setting it to blank so we can prevent from going to the next page without having something in the field
        if (understanding === '') {
            alert('Please select a rating before continuing!')
            return false;
        // We are setting this to have peramerters between 0 and 5.
        } else if (understanding > 5 || understanding < 0) {
            alert('Please select a number between 0 and 5 before continuing!')
            return false;
        } else {
            //Is this right? using feelings for the payload?
            dispatch({type: 'GET_UNDERSTANDING', payload: understanding})
            //This is where we use history
            history.push('/supported')
            // ('/') not 100% sure what to put here yet? 
            // maybe reference a different page (The next page?)
        }
    }

    return(
        <div>
            <h2>How Well are you understanding the content?</h2>
            <input placeholder="Between 0 and 5" type="number" onChange={(event) => setUnderstanding (event.target.value)}>
            
            </input>
            <button onClick={handleUnderstanding}>Next Page</button>
        </div>
    )
}

export default Understanding;