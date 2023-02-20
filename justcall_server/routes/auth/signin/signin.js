import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import getUserData from "../../../database/getUserdata.js";
const login = {};
login.signin = async (req, res) => {
  const user = await getUserData({
    $or: [{ email: req.body.auth }, { phone: req.body.auth }],
  });
  if (user && user._id) {
    const isValidPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (isValidPassword) {
      const name = user.name;
      const image = user.image;
      const userInfo = {
        name: name != null ? user.name : null,
        image: image != null ? user.image : null,
        email: user.email,
        phone: user.phone,
        role: user.role,
        active_status: user.active_status,
        _id: user._id,
      };
      const createJWTToken = jwt.sign(userInfo, process.env.JWT_SECRET, {
        expiresIn: process.env.EXP_DATE,
      });
      res.cookie(process.env.COOKIE_NAME, createJWTToken, {
        maxAge: process.env.EXP_DATE,
        httpOnly: true,
        signed: true,
      });
      res.status(200).json({
        success: true,
        token: createJWTToken,
        user: userInfo,
      });
    } else {
      res.status(401).json({
        password: {
          msg: "your password incorrect please try again",
        },
      });
    }
  } else {
    res.status(401).json({
      auth: {
        msg: "user not found",
      },
    });
  }
};

login.checkLogin = async (req, res) => {
  // for web application req.signedCookies
  // for mobile application req.headers.authorization

  if (req.headers?.authorization != null) {
    const token = req.headers?.authorization;
    try {
      const decode = jwt.verify(token, process.env.JWT_SECRET);
      const user = await getUserData({
        $or: [{ email: decode.email }, { phone: decode.phone }],
      });
      if (user && user._id && user._id == decode._id) {
        res.status(200).json({
          user: {
            name: user.name,
            image: user.image,
            email: user.email,
            phone: user.phone,
            role: user.role,
            active_status: user.active_status,
            _id: user._id,
          },
          permission: true,
        });
      } else {
        res.status(200).json({
          permission: false,
        });
      }
    } catch (error) {
      res.status(200).json({
        permission: false,
      });
    }
  } else if (Object.keys(req.signedCookies).length > 0) {
    const token = req.signedCookies[process.env.COOKIE_NAME];
    try {
      const decode = jwt.verify(token, process.env.JWT_SECRET);
      const user = await getUserData({
        $or: [{ email: decode.email }, { phone: decode.phone }],
      });
      if (user && user._id && user._id == decode._id) {
        res.status(200).json({
          user: {
            name: user.name,
            image: user.image,
            email: user.email,
            phone: user.phone,
            role: user.role,
            active_status: user.active_status,
            _id: user._id,
          },
          permission: true,
        });
      } else {
        res.status(200).json({
          permission: false,
        });
      }
    } catch (error) {
      res.status(200).json({
        permission: false,
      });
    }
  } else {
    res.status(200).json({
      permission: false,
    });
  }
};
export default login;
