import React from 'react';

const Join = () => (
  <div>
    <div className="mx-auto mt-5" style={{ width: '30%' }}>
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
      <button className="btn btn-primary btn-block">Join</button>
    </div>
  </div>
);

export default Join;
