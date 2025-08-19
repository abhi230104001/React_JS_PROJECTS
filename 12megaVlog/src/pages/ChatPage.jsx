import React from 'react';
import ChatInterface from '../components/Chatbot/ChatInterface';
import './ChatPage.css';

const ChatPage = () => {
  return (
    <div className="chat-page">
      <h1>Chat with Simran's Assistant</h1>
      <ChatInterface />
    </div>
  );
};

export default ChatPage;