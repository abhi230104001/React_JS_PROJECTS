import React, { useState } from 'react';
import { generateResponse } from '../../services/geminiService';
import Message from './Message';
import InputArea from './InputArea';
import './Chatbot.css';

const ChatInterface = () => {
  const [messages, setMessages] = useState([
    { 
      text: "Hi Simran! 😊 How can I help you today?", 
      sender: 'bot'
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (message) => {
    if (!message.trim()) return;
    
    // Add user message to chat
    const userMessage = { text: message, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    
    setIsLoading(true);
    
    try {
      // Smart prompt that adapts to context
      const smartPrompt = `Respond to Simran (21 years old) in a friendly, slightly warm tone. Be:
      - Helpful for practical questions
      - Knowledgeable about general topics
      - Lightly sweet/flirty when appropriate
      - Always respectful and kind
      
      Current conversation context: ${messages.slice(-3).map(m => m.text).join('\n')}
      
      Her latest message: "${message}"
      
      Respond naturally in 1-3 sentences.`;
      
      const response = await generateResponse(smartPrompt);
      
      // Add bot response to chat
      const botMessage = { text: response, sender: 'bot' };
      setMessages(prev => [...prev, botMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="chat-container">
      <div className="messages-container">
        {messages.map((msg, index) => (
          <Message key={index} text={msg.text} sender={msg.sender} />
        ))}
        {isLoading && <Message text="Let me think..." sender="bot" />}
      </div>
      <InputArea onSend={handleSendMessage} disabled={isLoading} />
    </div>
  );
};

export default ChatInterface;