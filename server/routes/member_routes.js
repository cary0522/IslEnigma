//@author :TerryXU
const express = require('express');
const router = express.Router();
const login_controllers = require('../controllers/login_controllers');
const register_controllers = require('../controllers/register_controllers');
const memberInfo_controllers = require('../controllers/memberInfo_controllers');
const authToken = require('../middlewares/authToken');
router.post('/login', login_controllers.login);
router.post('/register', register_controllers.register);

router.get('/order', authToken.verifyToken, memberInfo_controllers.getOrder);
router.get('/payMethod', authToken.verifyToken, memberInfo_controllers.getPayMethod);
router.post('/payMethod', authToken.verifyToken, memberInfo_controllers.postPayMethod);
router.post('/memberInfo', authToken.verifyToken, memberInfo_controllers.postMemberInfo);
router.post('/changePassword', authToken.verifyToken, memberInfo_controllers.changePassword);

module.exports = router;