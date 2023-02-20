import 'package:flutter/material.dart';
import 'package:justcall/components/textinput/input.dart';

class Signin extends StatefulWidget {
  const Signin({Key? key}) : super(key: key);

  @override
  State<Signin> createState() => _SigninState();
}

class _SigninState extends State<Signin> {
  late bool _show = false;
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
                  "assets/image/icon/textsignin.png",
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
                      error: "",
                        height: 55,
                        width: width * .95,
                        placeholder: "phone or email",
                        prefixIcon: const Icon(
                          Icons.person,
                          color: Colors.white,
                        )),
                    Input(
                      error: "",
                      height: 55,
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
                    Image.asset(
                      "assets/image/icon/loginbutton.png",
                      height: 55,
                      width: 55,
                    ),
                  ],
                ),
              ),
              Container(
                  width: double.infinity,
                  margin: EdgeInsets.only(top: height * .05),
                  child: Container(
                      margin: const EdgeInsets.only(left: 10),
                      child: Center(
                        child: MYTextButton(
                            onPress: () {
                              print("object");
                            },
                            text: "forgot password ?",
                            color: Color.fromARGB(255, 255, 255, 255)),
                      ))),
              Container(
                  width: double.infinity,
                  margin: EdgeInsets.only(top: height * .05),
                  child: Container(
                      margin: const EdgeInsets.only(left: 5, bottom: 40),
                      child: Center(
                        child: MYTextButton(
                            onPress: () {},
                            text: "no account ? create account",
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
