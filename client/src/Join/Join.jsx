import React from 'react';
import { Link } from 'react-router-dom';

const Join = () => (
  <div>
    <div className="mx-auto" style={{ width: '30%' }}>
      <div className="my-4">
        <h3>Join the chat-room!</h3>
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          name="name"
          placeholder="Enter name"
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          name="room"
          placeholder="Enter room"
        />
      </div>
      <Link to="/chat">
        <button className="btn btn-primary btn-block">Join</button>
      </Link>
    </div>
  </div>
);

export default Join;
