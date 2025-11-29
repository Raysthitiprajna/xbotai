import React, { useEffect, useState } from 'react'
import FloatingButtons from './FloatingButtons';


const prompts =[
    "Hi, what is the weather",
    "Hi, what is the my location",
    "Hi, what is the temperature",
    "Hi, how are you"
]

const ChatWindow = ({conversation,setConversation}) => {
    const[input,setInput] = useState("");


    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("chatHistory")) || [];

        if(saved.length >0){
            const lastChat = saved[saved.length-1];
            setConversation(lastChat.messages || []);
        }
        // if(saved){
        //   setConversation(JSON.parse(saved));
        // }
    },[setConversation]);

    const handleAsk =(e) => {
        e.preventDefault();
        const response = prompts.includes(input)
        ? `Response to "${input}`
        : "Sorry, Did not understand your query!";

        const updated = [...conversation,{user: input, ai: response}];
        setConversation(updated);
        setInput("");

        localStorage.setItem("chatHistory",JSON.stringify([{id: "autosave",messages:updated}]));

    };

  return (
    <div>
    <div className='prompt-grid'>
        {prompts.map((p,i) => (
            <button key={i} onClick={() => setInput(p)}>{p}</button>
        ))}
      
    </div>
  <form onSubmit={handleAsk}>
    <input placeholder='Message Bot AI...' value={input} onChange={(e) => setInput(e.target.value)}>
    </input>
    <button type='submit'>
      Ask
    </button>

  </form>
  <div className='chat-log'>
    {conversation.map((msg,i) => (
        <div key={i} className='ai-response'>
            <span>Soul AI</span>
            <p>{msg.ai}</p>
            <FloatingButtons/>
            </div>
    ))}

  </div>

    </div>
  )
}

export default ChatWindow
