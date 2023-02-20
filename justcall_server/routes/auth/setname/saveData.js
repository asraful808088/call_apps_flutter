import dotEnv from "dotenv";
import jwt from "jsonwebtoken";
import cloudinary from "../../../cloudinary/cloudiary.js";
import getUserdatas from "../../../database/getUserdata.js";
import getVerifyData from "../../../database/mailSchema/getMail.js";
import updateUser from "../../../database/userUpdate.js";
dotEnv.config();
const saveData = async (req, res) => {
  const getVerifyInFo = await getVerifyData({ email: req.body.email });

  if (
    req.body.hash_code == getVerifyInFo.hash_code &&
    getVerifyInFo.exp_time > Date.now()
  ) {
    if (req.files) {
      saveUserData(req.files.file, req, res);
    } else {
      saveUserData(null, req, res);
    }
  } else {
    res.status(401).json({
      success: false,
      error: "Invalid hash-code",
    });
  }
};

async function saveUserData(file, req, res) {
  let imageResult;
  if (file) {
    imageResult = await cloudinary.uploader.upload(file.tempFilePath, {
      upload_preset: process.env.UPLOAD_PRESET,
      folder: "justcall",
      public_id: `${Date.now()}`,
      resource_type: "auto",
      crop: "scale",
      resource_type: "auto",
    });
  }
  if (imageResult) {
    const result = await updateUser(
      { email: req.body.email },
      {
        image: imageResult.secure_url,
        name: req.body.name,
      }
    );
  } else {
    const result = await updateUser(
      { email: req.body.email },
      {
        name: req.body.name,
      }
    );
  }
  const user = await getUserdatas({ email: req.body.email });
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
}
export default saveData;
