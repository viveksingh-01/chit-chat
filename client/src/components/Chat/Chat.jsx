import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import './Chat.css';
import ChatWindow from '../ChatWindow/ChatWindow';
import UserList from '../UserList/UserList';

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

    return () => {
      socket.emit('disconnect');
      socket.off();
    };
  }, [ENDPOINT, location.search]);

  return (
    <main className="d-flex flex-no-wrap container-chat">
      <ChatWindow name={name} room={room} />
      <UserList />
    </main>
  );
};

export default Chat;
