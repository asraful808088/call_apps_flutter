import 'package:flutter/material.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';
import 'package:justcall/context/parson_data/userdata.dart';
import 'package:justcall/page/auth/main.dart';
import 'package:provider/provider.dart';

void main() async {
  await dotenv.load(fileName: ".env");
  runApp(ChangeNotifierProvider(
    create: (create) => UserData(),
    child: MaterialApp(
      home: Auth(),
    ),
  ));
}
