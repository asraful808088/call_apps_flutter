import 'package:flutter/material.dart';

class Input extends StatelessWidget {
  Function? clickForSuffixIcon;
  final double height;
  final double width;
  dynamic suffixIcon;
  dynamic prefixIcon;
  String? placeholder;
  bool? isPasswordType;
  String? error;
  TextEditingController? controller;
  Input(
      {Key? key,
      this.controller,
      this.placeholder,
      this.clickForSuffixIcon,
      this.prefixIcon,
      this.suffixIcon,
      this.isPasswordType,
      this.error,
      required this.height,
      required this.width})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: height,
      width: width,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Container(
            height: height * .8 - 5,
            child: TextField(
              controller: controller,
              cursorHeight: 22,
              style: const TextStyle(color: Colors.white),
              cursorColor: Colors.black,
              obscureText: isPasswordType ?? false,
              decoration: InputDecoration(
                  border: const OutlineInputBorder(
                    borderRadius: BorderRadius.all(Radius.circular(15.0)),
                    borderSide: BorderSide.none,
                  ),
                  filled: true, //<-- SEE HERE
                  fillColor: const Color.fromARGB(90, 255, 255, 255),
                  hintText: placeholder ?? "",
                  suffixIcon: suffixIcon != null
                      ? IconButton(
                          onPressed: () => clickForSuffixIcon!(),
                          icon: suffixIcon)
                      : null,
                  prefixIcon: prefixIcon,
                  hintStyle: const TextStyle(
                      fontStyle: FontStyle.italic,
                      fontSize: 18,
                      color: Color.fromARGB(121, 255, 255, 255),
                      fontWeight: FontWeight.bold)),
            ),
          ),
          Container(
            margin: EdgeInsets.only(left: width * .05, top: 5),
            height: height * .2,
            child: FittedBox(
              child: error != null
                  ? Text(
                      error.toString(),
                      style: TextStyle(color: Colors.red),
                    )
                  : null,
            ),
          )
        ],
      ),
    );
  }
}
