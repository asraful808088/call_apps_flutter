import express from "express";
import code from "../../utility/hash_code/code.js";
import resendMail from "../../utility/mail/main.js";
import forgot from "./forgot/forgot.js";
import checkImage from "./setname/checkImage.js";
import saveData from "./setname/saveData.js";
import setname from "./setname/setname.js";
import entry from "./signin/signin.js";
import signup from "./signup/signup.js";
import isValidSignup from "./validator/signup/signup.js";
const auth = express.Router();
auth.post("/", entry.signin);
auth.get("/check", entry.checkLogin);
auth.post("/signup", isValidSignup, signup);
auth.post("/forgot", forgot);
auth.post("/namecheck", setname);
auth.post("/checkimage", checkImage);
auth.post("/saveData", saveData);
auth.post("/resendmailsignup", (req, res) => {
  resendMail({
    userEmail: req.body.email,
    hash_code: code(),
    subject: "Signup",
    type: "signup",
  });
  res.status(200).json({
    success: true,
  });
});
auth.post("/resendmailforgot", (req) => {
  resendMail({
    userEmail: req.body.email,
    hash_code: code(),
    subject: "Forgot",
    type: "forgot",
  });
  res.status(200).json({
    success: true,
  });
});
export default auth;
