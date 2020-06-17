import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

const ENDPOINT = 'localhost:5000';

const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    setName(name);
    setRoom(room);

    const socket = io.connect(ENDPOINT);
    socket.emit('join', { name, room });
  }, [ENDPOINT, location.search]);

  return null;
};

export default Chat;
