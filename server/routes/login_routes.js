const express = require('express');
const router = express.Router();
const login_controllers = require('../controllers/login_controllers');

router.post('/', login_controllers.login);
module.exports = router;
