import cloudinary from "cloudinary";
import dotenv from "dotenv";
dotenv.config();
const v2 = cloudinary.v2;

v2.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  upload_preset: process.env.UPLOAD_PRESET,
});

export default v2;
