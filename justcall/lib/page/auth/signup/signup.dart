import 'package:flutter/material.dart';
import 'package:justcall/components/textinput/input.dart';
import 'package:justcall/network/network.dart';
import 'package:http/http.dart' as http;

class Signup extends StatefulWidget {
  const Signup({Key? key}) : super(key: key);

  @override
  State<Signup> createState() => SignupState();
}

class SignupState extends State<Signup> {
  late bool _show = false;
  final TextEditingController email = TextEditingController();
  final TextEditingController phone = TextEditingController();
  final TextEditingController password = TextEditingController();
  // final Network _network = Network();
  @override
  void initState() {
    super.initState();
  }

  void haha() async {
    final getData = await http.post(
      Uri.parse('http://localhost:5000/signup'),
    );
    print(getData);
  }

  @override
  Widget build(BuildContext context) {
    final width = MediaQuery.of(context).size.width;
    final height = MediaQuery.of(context).size.height;
    return FractionallySizedBox(
      heightFactor: 1,
      widthFactor: 1,
      child: Container(
          decoration: const BoxDecoration(
              image: DecorationImage(
                  image: AssetImage('assets/image/background/planebg.png'),
                  fit: BoxFit.cover)),
          child: ListView(
            children: [
              Container(
                margin: EdgeInsets.only(top: height * .05),
                child: Image.asset(
                  "assets/image/icon/logo.png",
                  width: width * .2,
                  height: width * .2,
                ),
              ),
              Container(
                margin: EdgeInsets.only(top: height * .05),
                child: Image.asset(
                  "assets/image/icon/signup.png",
                  width: width * .09,
                  height: width * .09,
                ),
              ),
              Container(
                margin: EdgeInsets.only(top: height * .05),
                height: height * .5,
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                  children: [
                    Input(
                        controller: email,
                        height: 75,
                        width: width * .95,
                        placeholder: "email",
                        prefixIcon: const Icon(
                          Icons.email,
                          color: Colors.white,
                        )),
                    Input(
                        controller: phone,
                        height: 75,
                        width: width * .95,
                        placeholder: "phone ",
                        prefixIcon: const Icon(
                          Icons.phone,
                          color: Colors.white,
                        )),
                    Input(
                      controller: password,
                      height: 75,
                      width: width * .95,
                      isPasswordType: !_show,
                      placeholder: "password",
                      suffixIcon: Icon(
                        _show == false
                            ? Icons.visibility
                            : Icons.visibility_off,
                        color: Colors.white,
                      ),
                      clickForSuffixIcon: () {
                        setState(() {
                          _show = !_show;
                        });
                      },
                      prefixIcon: const Icon(
                        Icons.key,
                        color: Colors.white,
                      ),
                    ),
                    IconButton(
                      onPressed: () {
                        haha();
                      },
                      icon: const Icon(
                        Icons.create,
                        size: 50,
                        color: Colors.white,
                      ),
                    ),
                  ],
                ),
              ),
              Container(
                  width: double.infinity,
                  margin: EdgeInsets.only(top: height * .05),
                  child: Container(
                      margin: const EdgeInsets.only(left: 10, bottom: 40),
                      child: Center(
                        child: MYTextButton(
                            onPress: () {
                              print("object");
                            },
                            text: "I already have an account",
                            color: Color.fromARGB(255, 255, 255, 255)),
                      ))),
            ],
          )),
    );
  }

  Widget MYTextButton(
      {Color? color, Function? onPress, String? text, int? fontSize}) {
    return Material(
      color: Colors.transparent,
      child: Ink(
        color: Colors.transparent,
        child: InkWell(
          focusColor: Colors.transparent,
          highlightColor: Colors.transparent,
          hoverColor: Colors.transparent,
          splashColor: Colors.transparent,
          onTap: () {
            onPress!();
          },
          child: Text(
            text!,
            style: TextStyle(
              fontStyle: FontStyle.italic,
              color: color,
              fontSize: 15,
            ),
          ),
        ),
      ),
    );
  }
}
