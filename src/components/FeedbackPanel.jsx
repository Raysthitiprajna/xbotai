import React,{useState} from 'react'
import RatingStars from './RatingStars';

const FeedbackPanel = ({onSubmit}) => {
    const[rating,setRating] = useState(0);
    const[comment,setComment] = useState("");

    const handleSubmit = () => {
        onSubmit ({rating,comment});
        setRating(0);
        setComment("");
    };


  return (
    <div className='feedback-panel'>
        <h3>Feedback *</h3>
        <RatingStars rating={rating}
        setRating={setRating}/>
        <textarea placeholder='Provide additional feedback' value={comment} onChange={(e) => setComment(e.target.value)}/>

            <button onClick={handleSubmit}>
               SUBMIT
            </button>

      
    </div>
  )
}

export default FeedbackPanel
