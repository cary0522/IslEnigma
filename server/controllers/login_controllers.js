//@author :TerryXU
const login_Model = require('../models/login_Model');
const passwordHelpers = require('../utils/passwordHelpers');
const generateToken = require('../utils/jwtHelpers');
const cookieHelpers = require('../utils/setCookie');
const validReCaptcha = require('../utils/validReCaptcha');
const login_controllers = {
  login: async (req, res) => {
    try {
      const { account, password,token} = req.body;
      const member = await login_Model.read(account);
      const isReCaptchaValid = await validReCaptcha.valid(token);
      if (!isReCaptchaValid.success) {
        console.log('ReCaptcha 驗證失敗');
        return res.status(400).json({ error: 'ReCaptcha 驗證失敗:>' });
      }
      if (!member) {
        console.log('找不到用戶，是否以註冊?');
        return res.status(400).json({ error: '找不到用戶，是否已註冊?' });
      }

      const isPasswordCorrect = await passwordHelpers.compare(password, member.password);
      if (!isPasswordCorrect) {
        console.log('密碼錯誤~~');
        return res.status(400).json({ error: '密碼錯誤~~' });
      }
      const payload = {
        account: member.account,
        id: member.id,
      };
      const cookieToken = await generateToken.generateToken(payload);
      await cookieHelpers.setAuthCookie(res, cookieToken);
      res.status(200).json({ message: 'Login successful' });
    } catch (error) {
      console.error('Login error:', error);
      res.status(500).json({ error: 'Server error' });
    }
  },
};
module.exports = login_controllers;
