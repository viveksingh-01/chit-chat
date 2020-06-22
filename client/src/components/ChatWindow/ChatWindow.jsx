import React from 'react';
import './ChatWindow.css';
import MessageBox from '../MessageBox/MessageBox';
import MessageInput from '../MessageInput/MessageInput';

const ChatWindow = ({ name, room, messages }) => {
  return (
    <div className="p-3 p-md-5 container-chat-window">
      <h5>{room}</h5>
      <MessageBox messages={messages} />
      <MessageInput />
    </div>
  );
};

export default ChatWindow;
