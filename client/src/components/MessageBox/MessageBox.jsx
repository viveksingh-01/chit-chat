import React, { useContext } from 'react';
import './MessageBox.css';
import { MessagesContext } from '../../_contexts/MessagesContext';
import Message from '../Message/Message';
import ScrollToBottom from 'react-scroll-to-bottom';

const MessageBox = ({ name }) => {
  const messages = useContext(MessagesContext)[0];
  return (
    <ScrollToBottom className="container-message-box">
      <div className="p-3">
        {messages.map((message, index) => (
          <Message key={index} name={name} message={message} />
        ))}
      </div>
    </ScrollToBottom>
  );
};

export default MessageBox;
