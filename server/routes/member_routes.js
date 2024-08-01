const express = require('express');
const router = express.Router();
const login_controllers = require('../controllers/login_controllers');
const register_controllers = require('../controllers/register_controllers');
const memberInfo_controllers = require('../controllers/memberInfo_controllers');
router.post('/login', login_controllers.login);
router.post('/register', register_controllers.register);
router.get('/memberInfo', memberInfo_controllers);
router.post('/')

exports.router = router;