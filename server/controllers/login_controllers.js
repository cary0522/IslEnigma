const login_Model = require('../models/login_Model');
const passwordHelpers = require('../utils/passwordHelpers');
const generateToken = require('../utils/jwtHelpers');
const cookieHelpers = require('../utils/setCookie');

const login_controllers = {
  login: async (req, res) => {
    try {
      const { account, password } = req.body;

      const member = await login_Model.read(account);
      if (!member) {
        return res.status(400).json({ error: 'Member not found' });
      }

      const isPasswordCorrect = await passwordHelpers.compare(password, member.password);
      if (!isPasswordCorrect) {
        return res.status(400).json({ error: 'Password incorrect' });
      }
      const payload = {
        account: member.account,
        id: member.id,
      };
      const token = await generateToken.generateToken(payload);
      cookieHelpers.setAuthCookie(res, token);
      res.status(200).json({ message: 'Login successful' });
    } catch (error) {
      console.error('Login error:', error);
      res.status(500).json({ error: 'Server error' });
    }
  },
};

module.exports = login_controllers;
