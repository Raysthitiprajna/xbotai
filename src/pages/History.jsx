
import React, { useEffect, useState } from 'react'

const History = () => {

    const [history,setHistory] = useState([]);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("chatHistory")) || [];
        setHistory(saved);
    },[]);
  return (
    <div className='history-page'>
        <h2>Past Conversations</h2>
        {history.map((chat) => (
            <div key={chat.id} className='chat-history'>
                {chat.messages.map((msg,i) => (
                    <div key={i}>
                        <strong>User:</strong>
                        {msg.user}
                        <br/>
                        <strong>AI:</strong>
                        {msg.ai}

                    </div>
                ))}
             </div>   
        ))}
      
    </div>
  )
}

export default History
