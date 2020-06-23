import React, { useState, useContext } from 'react';
import './MessageInput.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { MessagesContext } from '../../_contexts/MessagesContext';

const MessageInput = ({ sendMessage }) => {
  const [message, setMessage] = useState('');
  const setMessages = useContext(MessagesContext)[1];

  const onSubmit = (evt) => {
    evt.preventDefault();
    console.log(message);
    sendMessage(message);
    // setMessages((messages) => [...messages, message]);
  };

  return (
    <div className="d-flex align-items-center my-3">
      <input
        type="text"
        className="form-control input-message"
        placeholder="Enter message"
        onChange={(evt) => setMessage(evt.target.value)}
      />
      <button
        type="submit"
        className="btn btn-primary btn-send"
        onClick={(e) => onSubmit(e)}
      >
        <FontAwesomeIcon icon={faPaperPlane} />
        <span className="mx-2">Send</span>
      </button>
    </div>
  );
};

export default MessageInput;
