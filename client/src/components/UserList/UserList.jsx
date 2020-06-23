import React from 'react';
import './UserList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

const UserList = ({ users }) => {
  return (
    <div className="container-user-list">
      <h6>IN ROOM</h6>
      {users
        ? users.map(({ name, id }) => (
            <div key={id} className="mb-1">
              <FontAwesomeIcon
                icon={faCircle}
                style={{ color: '#00ff00', fontSize: '12px' }}
              />
              <span className="ml-2 text-capitalize">{name}</span>
            </div>
          ))
        : null}
    </div>
  );
};

export default UserList;
