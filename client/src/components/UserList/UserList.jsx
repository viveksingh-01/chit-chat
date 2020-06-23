import React from 'react';
import './UserList.css';

const UserList = ({ users }) => {
  return (
    <div className="container-user-list">
      <h6>IN ROOM</h6>
      {users ? users.map(({ name, id }) => <li key={id}>{name}</li>) : null}
    </div>
  );
};

export default UserList;
