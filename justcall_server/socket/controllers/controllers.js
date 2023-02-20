import SocketData from "../storage.js";
const controllers = {};
controllers.singleCall = (data, socket) => {
  console.log(SocketData);
};
controllers.singleAns = (data, socket) => {
  console.log(SocketData);
};
controllers.singleIceCandidate = (data, socket) => {
  console.log(SocketData);
};
controllers.groupJoin = (data, socket) => {
  console.log(SocketData);
};
controllers.groupSDSet = (data, socket) => {
  console.log(SocketData);
};
controllers.groupSDComplite = (data, socket) => {
  console.log(SocketData);
};
controllers.groupIceCandidate = (data, socket) => {
  console.log(SocketData);
};
controllers.conferenceJoin = (data, socket) => {
  console.log(SocketData);
};
controllers.conferenceSDSet = (data, socket) => {
  console.log(SocketData);
};
controllers.conferenceSDComplite = (data, socket) => {
  console.log(SocketData);
};
controllers.conferenceIceCandidate = (data, socket) => {
  console.log(SocketData);
};
controllers.outOfApplication = (data, socket) => {
  console.log(SocketData);
};
controllers.returnOnApplication = (data, socket) => {
  console.log(SocketData);
};
export default controllers;
