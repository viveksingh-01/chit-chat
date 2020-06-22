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
  const [messages, setMessages] = useState([]);
  let socket;

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    setName(name);
    setRoom(room);

    socket = io(ENDPOINT);
    socket.emit('join', { name, room }, (error) => {
      if (error) {
        alert(error);
      }
    });

    return () => {
      socket.emit('disconnect');
      socket.off();
    };
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on('message', (message) =>
      setMessages((messages) => [...messages, message])
    );
  }, []);

  return (
    <main className="d-flex flex-no-wrap container-chat">
      <ChatWindow name={name} room={room} messages={messages} />
      <UserList />
    </main>
  );
};

export default Chat;
