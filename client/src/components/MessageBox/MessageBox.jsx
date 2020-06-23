import React, { useContext } from 'react';
import './MessageBox.css';
import { MessagesContext } from '../../_contexts/MessagesContext';
import Message from '../Message/Message';

const MessageBox = ({ name }) => {
  const messages = useContext(MessagesContext)[0];
  return (
    <div className="container-message-box">
      {messages.map((message, index) => (
        <Message key={index} name={name} message={message} />
      ))}
    </div>
  );
};

export default MessageBox;
