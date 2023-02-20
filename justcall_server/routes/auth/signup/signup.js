import bcrypt from "bcrypt";
import { validationResult } from "express-validator";
import saveUser from "../../../database/saveuser.js";
const signup = async (req, res) => {
  const error = validationResult(req);
  const mapedError = error.mapped();
  if (Object.keys(mapedError).length) {
    res.status(401).json({ ...mapedError, success: false });
  } else {
    const password = await bcrypt.hash(req.body.password, 10);
    const result = await saveUser({
      active_status: true,
      phone: req.body.phone,
      email: req.body.email,
      password: password,
    });
    res.status(200).json({ success: true });
  }
};
export default signup;
