const users = [];

const addUser = ({ id, name, room }) => {
  name = name.trim();
  room = room.trim();

  const existingUser = users.find(
    (user) => user.room === room && user.name === name
  );
  if (existingUser) {
    return { error: 'Username already taken' };
  }
  const user = { id, name, room };
  users.push(user);

  return { user };
};

const getUser = (id) => users.find((user) => user.id === id);

const getUsersInRoom = (room) => users.filter((user) => user.room === room);

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);
  if (~index) {
    return users.splice(index, 1)[0];
  }
};

module.exports = { addUser, getUser, getUsersInRoom, removeUser };
