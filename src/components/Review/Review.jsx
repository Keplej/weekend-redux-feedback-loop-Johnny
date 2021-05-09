import axios from "axios";
import { useState } from "react"
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';


function Review() {

    // We use history to get the data from the previous pages
    const history = useHistory();
    const reviewSelector = useSelector(store => store);

    // Lets you go to the next page which is submit
    const handleReview = () => {
        history.push('/submit')
    }

    return(
        <div>
            <h2>Review Your Feedback!</h2>
            <br/>
                <div>
                    <p>Feeling Raiting: {reviewSelector.feelingsReducer}</p>
                    <p>Content Raiting: {reviewSelector.understandingReducer}</p>
                    <p>Supported Raiting: {reviewSelector.supportedReducer}</p>
                    <p>Comments: {reviewSelector.commentsReducer}</p>
                </div>
            <br/>
            <button onClick={handleReview}>Submit</button>
        </div>
    )
}

export default Review;