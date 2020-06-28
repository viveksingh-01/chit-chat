import React from 'react';
import './ChatWindow.css';
import MessageBox from '../MessageBox/MessageBox';
import MessageInput from '../MessageInput/MessageInput';

const ChatWindow = ({ name, room, sendMessage }) => {
  return (
    <div className="m-3 m-lg-5 container-chat-window">
      <h5 className="text-uppercase">{room}</h5>
      <MessageBox name={name} />
      <MessageInput sendMessage={sendMessage} />
    </div>
  );
};

export default ChatWindow;
