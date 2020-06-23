import React, { useState, useEffect, useContext } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import './Chat.css';
import ChatWindow from '../ChatWindow/ChatWindow';
import UserList from '../UserList/UserList';
import { MessagesContext } from '../../_contexts/MessagesContext';

let socket;
const ENDPOINT = 'localhost:5000';

const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState([]);
  const setMessages = useContext(MessagesContext)[1];

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
  }, [location.search]);

  useEffect(() => {
    socket.on('message', (message) =>
      setMessages((messages) => [...messages, message])
    );
    socket.on('room-data', ({ users }) => setUsers(users));
  }, []);

  const sendMessage = (msg) => {
    socket.emit('send-message', msg);
  };

  return (
    <main className="container-chat">
      <ChatWindow
        name={name}
        room={room}
        sendMessage={sendMessage.bind(this)}
      />
      <UserList users={users} />
    </main>
  );
};

export default Chat;
