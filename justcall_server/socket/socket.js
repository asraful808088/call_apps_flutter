import { Server } from "socket.io";
import eventType from "../type/enum.socketEvent.mjs";
import controllers from "./controllers/controllers.js";
import SocketData from "./storage.js";
let IO;
const channels = SocketData.channels;
function socketIoInit(server) {
  IO = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });
  IO.use((socket, next) => {
    if (socket.handshake.query) {
      SocketData.usersSocket[socket.handshake.query._id] = {
        socket,
      };
      socket.user_id = socket.handshake.query._id;
    }
    next();
  });
  IO.on(eventType.connection, (socket) => {
    SocketData.usersSocket[socket.user_id].socket = socket;
    socket.on(eventType.disconnect, () => {
      delete SocketData.usersSocket[socket.user_id];
    });
    socket.on(eventType.singleCall, (data) =>
      controllers.singleCall(data, socket)
    );
    socket.on(eventType.singleAns, (data) =>
      controllers.singleAns(data, socket)
    );
    socket.on(eventType.singleIceCandidate, (data) =>
      controllers.singleIceCandidate(data, socket)
    );
    socket.on(eventType.groupJoin, (data) =>
      controllers.groupJoin(data, socket)
    );
    socket.on(eventType.groupSDSet, (data) =>
      controllers.groupSDSet(data, socket)
    );
    socket.on(eventType.groupSDComplite, (data) =>
      controllers.groupSDComplite(data, socket)
    );
    socket.on(eventType.groupIceCandidate, (data) =>
      controllers.groupIceCandidate(data, socket)
    );
    socket.on(eventType.conferenceJoin, (data) =>
      controllers.conferenceJoin(data, socket)
    );
    socket.on(eventType.conferenceSDSet, (data) =>
      controllers.conferenceSDSet(data, socket)
    );
    socket.on(eventType.conferenceSDComplite, (data) =>
      controllers.conferenceSDComplite(data, socket)
    );
    socket.on(eventType.conferenceIceCandidate, (data) =>
      controllers.conferenceIceCandidate(data, socket)
    );
    socket.on(eventType.outOfApplication, (data) =>
      controllers.outOfApplication(data, socket)
    );
    socket.on(eventType.returnOnApplication, (data) =>
      controllers.returnOnApplication(data, socket)
    );
  });
}

export default { IO, socketIoInit };
