import 'dart:convert';

import 'package:http/http.dart' as http;
// import 'package:socket_io_client/socket_io_client.dart' as IO;

class Network {
  static late String userId = 'some';
  void user_Fetch_data() {
    // http
  }
  userSave() async {
    var data = {
      'email': "signupemailidcontroller.text",
      'password1': "passwordcontroller.text",
      'password2': "confirmpasswordcontroller.text",
    };
    //http request here
    

  }

  // static IO.Socket getSocket() {
  //   return IO.io(
  //       dotenv.env['SERVER_URL'],
  //       IO.OptionBuilder()
  //           .setQuery({'_id': userId}).setTransports(['websocket']).build());
  // }
}

class Errors {
  String? phone;
  String? email;
  String? password;
  Errors({this.email, this.password, this.phone});
}
