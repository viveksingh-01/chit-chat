import React from 'react';
import './MessageBox.css';

const MessageBox = ({ messages }) => {
  return (
    <div className="container-message-box">
      {messages.map(({ message }, index) => (
        <span className="message" key={index}>
          {message}
        </span>
      ))}
    </div>
  );
};

export default MessageBox;
