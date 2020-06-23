import React, { useContext } from 'react';
import './MessageBox.css';
import { MessagesContext } from '../../_contexts/MessagesContext';

const MessageBox = () => {
  const messages = useContext(MessagesContext)[0];
  return (
    <div className="container-message-box">
      {messages.map(({ message }, index) => (
        <p className="message" key={index}>
          {message}
        </p>
      ))}
    </div>
  );
};

export default MessageBox;
