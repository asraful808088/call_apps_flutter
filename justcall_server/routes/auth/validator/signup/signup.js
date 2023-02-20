import { body } from "express-validator";
import getUser from "../../../../database/getUserdata.js";
const isValid = [
  body("email")
    .isEmail()
    .withMessage("invalid email")
    .custom(async (email) => {
      const user = await getUser({ email });
      if (user == null) {
        return true;
      }
      throw "email already used";
    }),
  body("phone")
    .isMobilePhone("bn-BD")
    .withMessage("only allow bangladeshi number")
    .custom(async (phone) => {
      const user = await getUser({ phone });
      if (user == null) {
        return true;
      }
      throw "phone number already used";
    }),
  body("password").isStrongPassword().withMessage("your password too week"),
];
export default isValid;
