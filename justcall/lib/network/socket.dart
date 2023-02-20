import 'package:justcall/network/network.dart';

class Socket {
  final _socket = InitForUserData.getSocket();
  void socketInit() {
    _socket.on(SocketEvent.singleCall, (data) {});
    _socket.on(SocketEvent.singleAns, (data) {});
    _socket.on(SocketEvent.singleIceCandidate, (data) {});
    _socket.on(SocketEvent.groupJoin, (data) {});
    _socket.on(SocketEvent.groupSDSet, (data) {});
    _socket.on(SocketEvent.groupSDComplite, (data) {});
    _socket.on(SocketEvent.groupIceCandidate, (data) {});
    _socket.on(SocketEvent.conferenceJoin, (data) {});
    _socket.on(SocketEvent.conferenceSDSet, (data) {});
    _socket.on(SocketEvent.conferenceSDComplite, (data) {});
    _socket.on(SocketEvent.conferenceIceCandidate, (data) {});
  }
}

class SocketEvent {
  static const String singleCall = 'singleCall';
  static const String singleAns = 'singleAns';
  static const String singleIceCandidate = 'singleIceCandidate';
  static const String groupJoin = 'groupJoin';
  static const String groupSDSet = 'groupSDSet';
  static const String groupSDComplite = 'groupSDComplite';
  static const String groupIceCandidate = 'groupIceCandidate';
  static const String conferenceJoin = 'conferenceJoin';
  static const String conferenceSDSet = 'conferenceSDSet';
  static const String conferenceSDComplite = 'conferenceSDComplite';
  static const String conferenceIceCandidate = 'conferenceIceCandidate';
}
