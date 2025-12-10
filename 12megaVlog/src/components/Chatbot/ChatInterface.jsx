import React, { useState } from 'react';
import { generateResponse } from '../../services/geminiService';
import Message from './Message';
import InputArea from './InputArea';

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

    // Add user message
    const userMessage = { text: message, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);

    setIsLoading(true);

    try {
      const smartPrompt = `Respond to Simran (21 years old) in a friendly, slightly warm tone. Be:
      - Helpful for practical questions
      - Knowledgeable about general topics
      - Lightly sweet/flirty when appropriate
      - Always respectful and kind
      
      Context: ${messages.slice(-3).map(m => m.text).join('\n')}
      Latest: "${message}"
      
      Respond naturally in 1-3 sentences.`;

      const response = await generateResponse(smartPrompt);

      const botMessage = { text: response, sender: 'bot' };
      setMessages(prev => [...prev, botMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[80vh] w-full bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, index) => (
          <Message key={index} text={msg.text} sender={msg.sender} />
        ))}
        {isLoading && <Message text="Let me think..." sender="bot" />}
      </div>

      {/* Input */}
      <div className="p-4 border-t border-gray-200 bg-white/80 backdrop-blur-md">
        <InputArea onSend={handleSendMessage} disabled={isLoading} />
      </div>
    </div>
  );
};

export default ChatInterface;
