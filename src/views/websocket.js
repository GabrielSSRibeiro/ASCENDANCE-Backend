const socketio = require("socket.io");

const connections = [];
let io;

exports.setupWebsocket = server => {
  io = socketio(server);

  const updateUser = (user, id) => {
    if (user && user !== "null") {
      foundUser = connections.find(value => value.user === user);

      if (!foundUser) {
        connections.push({
          id,
          user
        });
      } else {
        foundUser.id = id;
      }
    }
  };

  io.on("connection", socket => {
    const { user } = socket.handshake.query;
    //first connection
    updateUser(user, socket.id);

    //login update
    socket.on("login", userName => {
      updateUser(userName, socket.id);
    });
  });
};

exports.sendMessage = (to, message, data) => {
  to.forEach(member => {
    foundUser = connections.find(value => value.user === member.user);
    if (foundUser) {
      //only messages users connected to the game
      io.to(foundUser.id).emit(message, data);
    }
  });
};
