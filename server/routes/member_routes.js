//@author :TerryXU
const express = require('express');
const router = express.Router();
const login_controllers = require('../controllers/login_controllers');
const register_controllers = require('../controllers/register_controllers');
// const memberInfo_controllers = require('../controllers/memberInfo_controllers');
const authToken = require('../middlewares/authToken');
const {verifyToken}=   authToken;

router.post('/login', login_controllers.login);
router.post('/register', register_controllers.register);

// router.get('/order', verifyToken, memberInfo_controllers.getOrder);
// router.get('/payMethod', verifyToken, memberInfo_controllers.getPayMethod);
// router.post('/payMethod', verifyToken, memberInfo_controllers.postPayMethod);
// router.post('/memberInfo', verifyToken, memberInfo_controllers.postMemberInfo);
// router.post('/changePassword', verifyToken, memberInfo_controllers.changePassword);
// router.get('/logout', verifyToken, login_controllers.logout);
module.exports = router;