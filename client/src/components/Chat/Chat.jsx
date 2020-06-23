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
  const [messages, setMessages] = useContext(MessagesContext);

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

  const sendMessage = (msg) => {
    socket.emit('send-message', msg);
  };

  return (
    <main className="d-flex flex-no-wrap container-chat">
      <ChatWindow
        name={name}
        room={room}
        sendMessage={sendMessage.bind(this)}
      />
      <UserList />
    </main>
  );
};

export default Chat;
