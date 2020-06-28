import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Join.css';

const Join = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className="mx-auto p-4 container-join">
      <div className="my-4">
        <h3>Join the chat-room!</h3>
      </div>
      <form action="">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Name"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            onChange={(e) => setRoom(e.target.value)}
            placeholder="Enter Room"
          />
        </div>
        <Link
          onClick={(evt) => (!name || !room ? evt.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
          style={{ textDecoration: 'none' }}
        >
          <input
            type="submit"
            className="btn btn-primary btn-block"
            value="Join"
          />
        </Link>
      </form>
    </div>
  );
};

export default Join;
