import React,{useState} from 'react'

const FloatingButtons = ({onThumb}) => {

    const[hover,setHover] = useState(false);
  return (
    <div className='feedback-buttons' onMouseEnter={() => setHover(true)} onMouseLeave={() =>setHover(false)}>

        {hover && (
            <>
            <button onClick={() => onThumb("up")}>
                👍
            </button>
            <button onClick={() => onThumb("down")}>👎</button>
            </>
        )}
      
    </div>
  )
}

export default FloatingButtons
