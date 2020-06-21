import React from 'react';
import './ChatWindow.css';
import MessageBox from '../MessageBox/MessageBox';
import MessageInput from '../MessageInput/MessageInput';

const ChatWindow = () => {
  return (
    <div className="container-chat-window">
      CHAT-ROOM NAME
      <MessageBox />
      <MessageInput />
    </div>
  );
};

export default ChatWindow;
