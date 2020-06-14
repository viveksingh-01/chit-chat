import React, { useState, useEffect } from 'react';
import queryString from 'query-string';

const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    setName(name);
    setRoom(room);
  });

  return null;
};

export default Chat;
