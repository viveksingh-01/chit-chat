const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const { addUser, getUser, getUsersInRoom, removeUser } = require('./users');

const router = require('./router');

const PORT = process.env.PORT || 5000;

io.on('connection', (socket) => {
  socket.on('join', ({ name, room }, callback) => {
    const { user, error } = addUser({ id: socket.id, name, room });
    if (error) {
      return callback(error);
    }
    socket.join(user.room);

    socket.emit('message', {
      user: 'Admin',
      message: `Hi ${user.name}, welcome to ${user.room}!`
    });

    socket.broadcast
      .to(user.room)
      .emit('message', { user: 'Admin', message: `${user.name} has joined!` });

    io.to(user.room).emit('room-data', {
      room: user.room,
      users: getUsersInRoom(user.room)
    });
  });

  socket.on('send-message', (message) => {
    const user = getUser(socket.id);
    io.to(user.room).emit('message', { user: user.name, message: message });
  });

  socket.on('disconnect', () => {
    const user = removeUser(socket.id);
    if (user) {
      io.to(user.room).emit('message', {
        user: 'Admin',
        message: `${user.name} has left the room.`
      });
      io.to(user.room).emit('room-data', {
        room: user.room,
        users: getUsersInRoom(user.room)
      });
    }
  });
});

app.use(router);

server.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
