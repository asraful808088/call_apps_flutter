import modle from "./mail.js";
const insertVerify = async (user) => {
  const userData = new modle(user);
  const result = await userData.save();
  return result;
};

export default insertVerify;
