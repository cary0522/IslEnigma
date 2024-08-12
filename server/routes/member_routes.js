//@author :TerryXU
const express = require('express');
const router = express.Router();
const login_controllers = require('../controllers/login_controllers');
const register_controllers = require('../controllers/register_controllers');
const {
  getOrder,
  getPayMethod,
  postPayMethod,
  deletePayMethod,
  getMemberInfo,
  postMemberInfo,
  getChangePassword,
  changePassword
} = require('../controllers/memberInfo_controllers');
const authToken = require('../middlewares/authToken');
const {verifyToken}=   authToken;

router.post('/login', login_controllers.login);
router.post('/register', register_controllers.register);

router.get('/order', verifyToken, getOrder);

router.get('/payMethod', verifyToken, getPayMethod);
router.post('/payMethod', verifyToken, postPayMethod);
router.delete('/payMethod', verifyToken, deletePayMethod);

router.get('/memberInfo', verifyToken, getMemberInfo);
router.post('/memberInfo', verifyToken, postMemberInfo);

router.get('/changePassword', verifyToken, getChangePassword);
router.post('/changePassword', verifyToken, changePassword);
module.exports = router;