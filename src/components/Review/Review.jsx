import axios from "axios";
import { useState } from "react"
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';


function Review() {

    // const [review, setReview] = useState('');
    
    // const dispatch = useDispatch();
    // const history = useHistory();
    const reviewSelector = useSelector(store => store);

    const handleReview = () => {
        history.push('')
    }

    return(
        <div>
            <h2>Review Your Feedback!</h2>
            <br/>
                {/* {reviewSelector.map((item, i) => */}
                <div>
                    <p>Feeling Raiting: {reviewSelector.feelingsReducer}</p>
                    <p>Content Raiting: {reviewSelector.understandingReducer}</p>
                    <p>Supported Raiting: {reviewSelector.supportedReducer}</p>
                    <p>Comments: {reviewSelector.commentsReducer}</p>
                </div>
                {/* )} */}
            <br/>
            <button onClick={handleReview}>Submit</button>
        </div>
    )
}

export default Review;