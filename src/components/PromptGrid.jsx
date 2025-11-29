import React from 'react'

const PromptGrid = ({onPromptClick}) => {

    const prompts =[
        "Hi, what is the weather",
        "Hi, what is my location",
        "Hi, what is the temperature",
        "Hi, how are you"
    ];
  return (
    <div className='prompt-grid'>
        {prompts.map((prompt,index) => (
            <div key={index} className='prompt-card' onClick={() => onPromptClick(prompt)} style={{cursor:"pointer"}}>
                <h4>{prompt}</h4>
                <p>Get Immediate AI generated response</p>
                </div>
        ))}
      
    </div>
  )
}

export default PromptGrid
