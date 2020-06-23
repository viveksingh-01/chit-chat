import React from 'react';
import './ChatWindow.css';
import MessageBox from '../MessageBox/MessageBox';
import MessageInput from '../MessageInput/MessageInput';

const ChatWindow = ({ name, room, sendMessage }) => {
  return (
    <div className="p-3 p-md-5 container-chat-window">
      <h5>{room}</h5>
      <MessageBox name={name} />
      <MessageInput sendMessage={sendMessage} />
    </div>
  );
};

export default ChatWindow;
