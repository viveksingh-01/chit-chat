const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const router = require('./router');

const PORT = process.env.PORT || 5000;

io.on('connection', (socket) => {
  console.log('New Connection!');

  socket.on('join', ({ name, room }) => {
    console.log(name, room);
  });

  socket.on('disconnect', () => {
    console.log('User has left.');
  });
});

app.use(router);

server.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
