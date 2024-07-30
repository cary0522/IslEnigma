const express = require('express');
const router = express.Router();
const register_controllers = require('../controllers/register_controllers');

router.post('/', register_controllers.register);

module.exports = router;