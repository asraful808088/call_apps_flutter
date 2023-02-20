import 'package:flutter/cupertino.dart';

class UserData extends ChangeNotifier {
  late User user;
  late CallData userCall;
  void initUser({required String name, required String email, String? image}) {
    user = User(name: name, email: email, image: image);
  }

  void callInit() {
    userCall = CallData();
  }

  void loadCallData({required String name, required String number}) {
    userCall.users[name] = number;
  }

  void runTimeChangeCallData({required String name, required String number}) {
    userCall.users[name] = number;
    notifyListeners();
  }

  void deleteCallData({required String user}) {
    userCall.users.remove(user);
    notifyListeners();
  }

  void changeUserData({String? name, String? email, String? image}) {
    if (name != null) {
      user.name = name;
    }
    if (email != null) {
      user.email = email;
    }
    if (image != null) {
      user.image = image;
    }
    notifyListeners();
  }
}

class User {
  late String name;
  late String email;
  late String? image;
  User({required this.email, required this.name, this.image});
}

class CallData {
  Map<String, String> users = {};
}
