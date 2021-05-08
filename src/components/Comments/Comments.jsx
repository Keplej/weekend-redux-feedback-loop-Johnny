import { useState } from "react"
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

function Comments() {
    
    const [comments, setComments] = useState('');

    const dispatch = useDispatch();
    const history = useHistory();

    const handleComments = () => {
        event.preventDefault();
        // We are setting it to blank so we can prevent from going to the next page without having something in the field
        if (comments === '') {
            alert('Please write a comment before continuing!')
            return false;
        } else {
            //Is this right? using feelings for the payload?
            dispatch({type: 'GET_COMMENTS', payload: comments})
            //This is where we use history
            history.push('/')
            // ('/') not 100% sure what to put here yet? 
            // maybe reference a different page (The next page?)
        }
    }

    return (
        <div>
            <h2>Please leave a comment!</h2>
            <input placeholder="Testing" type="text" onChange={(event) => setComments (event.target.value)}>
            
            </input>
            <button onClick={handleComments}>Next Page</button>
        </div>
    )
}

export default Comments;