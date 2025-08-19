import React from 'react';

const Message = ({ text, sender, special }) => {
  return (
    <div className={`message ${sender} ${special ? 'special-message' : ''}`}>
      <div className="message-content">
        {text}
      </div>
    </div>
  );
};

export default Message;