import React from 'react';
import './UserList.css';

const UserList = () => {
  const users = ['mike', 'chester', 'brad', 'rob'];
  return (
    <div className="container-user-list">
      <h6>IN ROOM</h6>
      {users.map((user) => (
        <li>{user}</li>
      ))}
    </div>
  );
};

export default UserList;
