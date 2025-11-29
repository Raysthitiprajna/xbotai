import React from 'react'

const RatingStars = ({rating,setRating}) => {
  return (
    <div className='stars'>
        {[1,2,3,4,5].map((star) => (
            <span key={star} onClick={() => setRating(star)} style={{fontSize:"24px",color:rating>= star ? "gold" : "lightgray",cursor:"pointer",marginRight:"5px"}} role='button' aria-label={`Rate ${star} star${star > 1 ? "s": ""}`}>★</span>
        ))}
      
    </div>
  )
}

export default RatingStars
