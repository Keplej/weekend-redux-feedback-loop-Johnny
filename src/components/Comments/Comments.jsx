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
            // payload is from the useState
            dispatch({type: 'GET_COMMENTS', payload: comments})
            //This is where we use history
            history.push('/review')
            // sends us to the review page
        }
    }

    return (
        <div>
            <h2>Please leave a comment!</h2>
            <input placeholder="Please leave a Comment!" type="text" onChange={(event) => setComments (event.target.value)}>
            
            </input>
            <button onClick={handleComments}>Next Page</button>
        </div>
    )
}

export default Comments;