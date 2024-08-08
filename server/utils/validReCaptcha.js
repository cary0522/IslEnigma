const axios = require('axios');
require('dotenv').config({ path: '../.env' });
const validReCaptcha = {
  valid: async function(token) {
    console.log('reCAPTCHA token:', token);
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    console.log('reCAPTCHA secret key:', secretKey);
    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;
    try {
      const response = await axios.post(verifyUrl);
      const data = response.data;
      console.log('reCAPTCHA validation response:', data);
      if (data.success) { 
        return {
          success: true,
          message: 'reCAPTCHA validation successful'
        };
      } else {
        return {
          success: false,
          message: 'reCAPTCHA validation failed',
          errors: data['error-codes']
        };
      }
    } catch (error) {
      console.error('Error validating reCAPTCHA:', error);
      return {
        success: false,
        message: 'Error occurred during reCAPTCHA validation',
        error: error.message
      };
    }
  }
};

module.exports = validReCaptcha;