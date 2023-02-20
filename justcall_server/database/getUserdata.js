import modle from "./usersSchema/userSchema.js";
const getUser = async (info) => {
  const user = await modle.findOne(info);
  
  
  return user;
};

export default getUser;
