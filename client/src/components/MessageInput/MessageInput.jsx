import React from 'react';

const MessageInput = () => {
  return (
    <div className="d-flex align-items-center my-3">
      <input
        type="text"
        className="form-control mr-3"
        placeholder="Enter message"
      />
      <button type="submit" className="btn btn-primary">
        Send
      </button>
    </div>
  );
};

export default MessageInput;
