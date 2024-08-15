//@author : 許哲誠
const bcrypt = require('bcrypt');
const saltRounds = 10;
const passwordHelpers = {
  compare: async (clientPassword, hash) => {
    try {
      const result = await bcrypt.compare(clientPassword, hash);
      return result;
    } catch (error) {
      console.log(error);
    }
  },
  hash: async (password) => {
    try {
      return await bcrypt.hash(password, saltRounds);
    } catch (error) {
      console.log(error);
    }
  },
};
module.exports = passwordHelpers;