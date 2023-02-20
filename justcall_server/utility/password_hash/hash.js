const bcrypt = require("bcrypt");
module.exports = async function passwordHash(password) {
  const passwordHash = await bcrypt.hash(password, 10);
  return passwordHash;
};
