import React from 'react';
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <Link to="/" className="sidebar-btn">🧠 New Chat</Link>
        <Link to ="/history" className="sidebar-btn">📜 Past Conversation</Link>
      
    </div>
  )
}

export default Sidebar
