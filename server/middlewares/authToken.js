//@author :TerryXU
const jwt = require('jsonwebtoken');
require('dotenv').config({ path: '../.env' });
const authMiddleware = {
  verifyToken: (req, res, next) => {
    const token = req.cookies.JWTToken;
    const secretKey=process.env.JWT_SECRET;
    if (!token) {
      return res.status(401).json({ error: 'No token' });
    }
    try {
      const decoded = jwt.verify(token, secretKey);
      req.user = decoded;
      next();
    } catch (error) {
      console.error('Token verify failed:', error);
      return res.status(401).json({ error: 'bad token' });
    }
  },
};
module.exports = authMiddleware;
