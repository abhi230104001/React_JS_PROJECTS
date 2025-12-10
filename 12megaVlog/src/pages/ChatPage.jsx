import React from 'react';
import ChatInterface from '../components/Chatbot/ChatInterface';
import './ChatPage.css';

const ChatPage = () => {
  return (
    <div className="chat-page min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-purple-100 px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 drop-shadow-sm">
        Chat with Simran's Assistant
      </h1>
      <div className="w-full max-w-3xl bg-white/80 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-200">
        <ChatInterface />
      </div>
    </div>
  );
};

export default ChatPage;
