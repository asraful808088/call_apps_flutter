import modle from "./usersSchema/userSchema.js";
const saveuser = async (user) => {
  const userData = new modle(user);
  const result = await userData.save();
  return result;
};

export default saveuser;
