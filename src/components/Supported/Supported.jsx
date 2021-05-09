import { useState } from "react"
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

function Supported() {

    const [supported, setSupported] = useState('');

    const dispatch = useDispatch();
    const history = useHistory();

    const handleSupported = () => {
        event.preventDefault();
        // We are setting it to blank so we can prevent from going to the next page without having something in the field
        if (supported === '') {
            alert('Please select a rating before continuing!')
            return false;
        // We are setting this to have peramerters between 0 and 5.
        } else if (supported > 5 || supported < 0) {
            alert('Please select a number between 0 and 5 before continuing!')
            return false;
        } else {
            // payload is from the useState
            dispatch({type: 'GET_SUPPORTED', payload: supported})
            //This is where we use history
            history.push('/comments')
            //This will send us to the next page
        }
    }

    return(
        <div>
            <h2>How Well are you being supported?</h2>
            <input placeholder="Between 0 and 5" type="number" onChange={(event) => setSupported (event.target.value)}>
            
            </input>
            <button onClick={handleSupported}>Next Page</button>

        </div>
    )
}

export default Supported;