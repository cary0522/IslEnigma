//@author :TerryXU
const login_Model = require('../models/login_Model');
const passwordHelpers = require('../utils/passwordHelpers');
const generateToken = require('../utils/jwtHelpers');
const cookieHelpers = require('../utils/setCookie');
const validReCaptcha = require('../utils/validReCaptcha');
const login_controllers = {
  login: async (req, res) => {
    try {
      const { account, password } = req.body;
      const member = await login_Model.read(account);
      // const isReCaptchaValid = await validReCaptcha.valid(token);
      // if (!isReCaptchaValid.success) {
      //   return res.status(422).json({
      //     "error": "ReCaptcha 驗證失敗",
      //     "message": "提供的 ReCaptcha 響應無效或已過期。請重試。"
      //   });
      // }
      if (!member) {
        return res.status(404).json({
          error: '未找到',
          message: '找不到用戶，是否以註冊?',
        });
      }

      const isPasswordCorrect = await passwordHelpers.compare(password, member.password);
      if (!isPasswordCorrect) {
        return res.status(401).json({
          error: '認證失敗',
          message: '密碼不正確。',
        });
      }
      const payload = {
        account: member.account,
        id: member.member_id,
      };
      console.log('payload:', payload);
      console.log('member:', member); 
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
