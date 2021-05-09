import { useState } from "react"
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

function Feelings() {

    const [feelings, setFeelings] = useState('');
    
    const dispatch = useDispatch();
    const history = useHistory();

    const handleFeelings = () => {
        event.preventDefault();
        // We are setting it to blank so we can prevent from going to the next page without having something in the field
        if (feelings === '') {
            alert('Please select a rating before continuing!')
            return false;
        // We are setting this to have peramerters between 0 and 5.
        } else if (feelings > 5 || feelings < 0) {
            alert('Please select a number between 0 and 5 before continuing!')
            return false;
        } else {
            // payload is from the useState
            dispatch({type: 'GET_FEELINGS', payload: feelings})
            //This is where we use history
            // References to the next page
            history.push('/understanding')
        }
    }

    
    return (
        <>
            <div>
                <h2>How are you feeling?</h2>
                <input placeholder="Between 0 and 5" type="number" onChange={(event) => setFeelings (event.target.value)}>
                
                </input>
                <button onClick={handleFeelings}>Next Page</button>
            </div>
        </>
    )
}

export default Feelings;