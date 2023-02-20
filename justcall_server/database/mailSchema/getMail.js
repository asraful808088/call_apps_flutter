import modle from "./mail.js";
const getData = async (info) => {
  const user = await modle.findOne(info);
  return user;
};

export default getData;
