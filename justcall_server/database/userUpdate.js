import modle from "./usersSchema/userSchema.js";
const updateData = async (target, change) => {
  const user = await modle.updateOne(target, { $set: change });
 
  if (user.modifiedCount == 0) {
    return false;
  } else {
    return true;
  }
};

export default updateData;
