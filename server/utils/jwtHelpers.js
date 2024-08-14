//@author :TerryXU
const jwt = require("jsonwebtoken")
const { JWT_SECRET, JWT_EXPIRES_IN } = require("./config_env")

const loginToken = {
  generateToken: async (payload) => {
    try {
      const token = jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN })
      return token
    } catch (error) {
      console.log(error)
      throw error
    }
  },
}
module.exports = loginToken
