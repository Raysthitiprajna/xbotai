import React from 'react'

const HistoryView = ({conversations}) => {
  return (
    <div className='history-list'>
     {conversations.map((conv) => (
        <div key={conv.id} className='conversation-card'>
      <h4>Conversation ID: {conv.id}</h4>
      {conv.messages.map((msg,i) =>(
        <div key={i}>
            <strong>User:</strong>
            {msg.user}<br/>
            <strong>Soul AI:</strong>
            <strong><p>{msg.ai}</p></strong>
        </div>
      ) )}
      <div className='feedback'>
        <strong>Thumbs:</strong>
        {conv.feedback?.thumbs || "N/A"}<br/>
        <strong>Comment:</strong>
        {conv.feedback?.comment || "N/A"}
      </div>

        </div>
     ))}      
    </div>
  )
}

export default HistoryView
