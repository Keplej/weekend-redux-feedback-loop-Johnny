import {useHistory} from 'react-router-dom';

function Submit() {

    const history = useHistory();

    const handleSubmit = () => {
        history.push('/')
    }

    
    return(
        <div>
            <h1>Feedback!</h1>
            <br />
            <h1>Thank you!</h1>
            <button onClick={handleSubmit}>Leave new Feedback</button>
        </div>
    )
}

export default Submit;