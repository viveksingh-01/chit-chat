import React, { useState } from 'react';
import './MessageInput.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const MessageInput = ({ sendMessage }) => {
  const [message, setMessage] = useState('');

  const onSubmit = (evt) => {
    evt.preventDefault();
    sendMessage(message);
  };

  return (
    <form onSubmit={(e) => onSubmit(e)}>
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
          <span className="d-none d-md-inline mx-md-2">Send</span>
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
