const express = require('express');
const router = express.Router();
const login_controllers = require('../controllers/login_controllers');
const register_controllers = require('../controllers/register_controllers');

router.post('/login', login_controllers.login);
router.post('/register', register_controllers.register);

exports.router = router;