import React from 'react';
import './MessageInput.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const MessageInput = () => {
  return (
    <div className="d-flex align-items-center my-3">
      <input
        type="text"
        className="form-control input-message"
        placeholder="Enter message"
      />
      <button type="submit" className="btn btn-primary btn-send">
        <FontAwesomeIcon icon={faPaperPlane} />
        <span className="mx-2">Send</span>
      </button>
    </div>
  );
};

export default MessageInput;
