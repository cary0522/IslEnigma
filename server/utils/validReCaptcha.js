//@author: Terry XU
const axios = require("axios")
const { RECAPTCHA_SECRET_KEY } = require("./config_env")
const validReCaptcha = {
  valid: async function (token) {
    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET_KEY}&response=${token}`
    try {
      const response = await axios.post(verifyUrl)
      const data = response.data
      console.log("reCAPTCHA validation response:", data)
      if (data.success) {
        return {
          success: true,
          message: "reCAPTCHA validation successful",
        }
      } else {
        return {
          success: false,
          message: "reCAPTCHA validation failed",
          errors: data["error-codes"],
        }
      }
    } catch (error) {
      console.error("Error validating reCAPTCHA:", error)
      return {
        success: false,
        message: "Error occurred during reCAPTCHA validation",
        error: error.message,
      }
    }
  },
}

module.exports = validReCaptcha
