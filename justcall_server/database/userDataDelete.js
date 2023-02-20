import modle from "./usersSchema/userSchema.js";
const userDataDelete = async (userObj) => {
  const user = await modle.deleteOne(userObj);
  if (user.deletedCount == 0) {
    return false;
  } else {
    return true;
  }
};

export default userDataDelete;
