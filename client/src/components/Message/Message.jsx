import React from 'react';
import './Message.css';
import ReactEmoji from 'react-emoji';

const Message = ({ message: { message, user }, name }) => {
  const isSent = user === name ? true : false;
  return isSent ? (
    <div className="d-flex justify-content-end">
      <div className="container-msg msg-sent">
        <span className="text-muted username">You</span>
        <p className="message">{ReactEmoji.emojify(message)}</p>
      </div>
    </div>
  ) : (
    <div className="d-flex justify-content-start">
      <div className="container-msg msg-received">
        <span className="text-muted username">{user}</span>
        <p className="message">{ReactEmoji.emojify(message)}</p>
      </div>
    </div>
  );
};

export default Message;
