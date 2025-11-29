import React, { useState } from 'react'

const ChatInput = ({onAsk, onSave}) => {

    const[input,setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(input.trim()){
            onAsk(input);
            setInput("");
        }
    };
  return (
    <form className='chat-input' onSubmit={handleSubmit}>
        <input type='text' placeholder='Message Bot AI...' value={input} onChange={(e) => setInput(e.target.value)}> 
        </input>

        <button type='submit'>
            Ask
        </button>
        <button type="button" onClick={onSave}>Save</button>

    </form>
  )
}

export default ChatInput
