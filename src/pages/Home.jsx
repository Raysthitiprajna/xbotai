import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
import {v4 as uuidv4} from "uuid";
import Sidebar from "../components/Sidebar";
import Avatar from "../components/Avatar";
import PromptGrid from "../components/PromptGrid";
import ChatInput from "../components/ChatInput";
import FloatingButtons from "../components/FloatingButtons";
import FeedbackPanel from "../components/FeedbackPanel";




function Home (){
    const[conversation,setConversation] = useState([]);
    const[feedback,setFeedback] = useState({thumbs: "", rating: 0 , comment: ""});
    const[showFeedbackPanel,setShowFeedbackPanel] = useState(false);
    const navigate = useNavigate();

    const prompts=[
        "Hi, what is the weather",
        "Hi, what is my location",
        "Hi, what is the temperature",
        "Hi, how are you"
    ];

    const staticAnswers = {
           "explain restful apis": "RESTful APIs are designed around the REST (Representational State Transfer) architecture, which uses HTTP requests to access and manipulate data. They follow a stateless, client-server, cacheable communications protocol."

    };

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("chatHistory")) || [];
        if(saved.length >0 ){
            const lastChat = saved[saved.length-1];
            setConversation(lastChat.messages || [] );
            setFeedback(lastChat.feedback || {thumbs: "", rating: 0, comment: ""});
        }
    },[])
    const handleAsk = (userMessage) => {
        const normalized = userMessage.trim()
        .toLowerCase()
        .replace(/[^\w\s]/g, "");

        const matchedStatic = Object.keys(staticAnswers).find(key => normalized.includes(key));

        const matchedPrompt = prompts.find(p=> p.toLowerCase() === normalized);

        const aiResponse = matchedStatic ? staticAnswers[matchedStatic] : matchedPrompt
        ? `Response to "${userMessage}"`
        : "Sorry, Did not understand your query!";

        setConversation(prev => [...prev,{user:userMessage,ai:aiResponse}]);
        setShowFeedbackPanel(true);
    };

    const handleThumb =(type) => {
        setFeedback(prev => ({...prev,thumbs: type}))
    };
    const handleFeedbackSubmit = ({rating,comment}) => {
        setFeedback(prev => ({...prev,rating,comment}))
    };

    const handleSave = () => {
        const newChat = {
            id: uuidv4(),
            messages: conversation,
            feedback
        };

        const existing = JSON.parse(localStorage.getItem("chatHistory")) || [];
        localStorage.setItem("chatHistory", JSON.stringify([...existing,newChat]));

        setConversation([]);
        setFeedback({thumbs: "",rating: 0,comment: ""});
        setShowFeedbackPanel(false);

        // navigate("/history");
    };

    return (
        <div className="app-layout">
         <Sidebar/>
         <main className="main-content">
            <header>
                <h1>Bot AI</h1>
                <h2 className="title">How Can I help You Today?</h2>
            </header>

            <Avatar/>

            <PromptGrid onPromptClick ={handleAsk}/> 
            <div className="chat-log">
                {conversation.map((msg,i) => (
                    <div key={i} className="ai-response">
                        <div className="user-msg">{msg.user}</div>
                        <div className="ai-msg">
                        <span>Soul AI</span>
                        <p>{msg.ai}</p>
                        <FloatingButtons onThumb ={handleThumb}/>
                        </div>
                        </div>
                ))}
            </div>

            {showFeedbackPanel && <FeedbackPanel onSubmit = {handleFeedbackSubmit}/>}

            <ChatInput onAsk ={handleAsk} onSave={handleSave}/>

         </main>
        </div>
    )
}

export default Home;