import React from 'react';
import './MessageBox.css';

const MessageBox = ({ messages }) => {
  return (
    <div className="container-message-box">
      {messages.map(({ message }, index) => (
        <p key={index}>{message}</p>
      ))}
    </div>
  );
};

export default MessageBox;
