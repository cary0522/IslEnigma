const express = require('express');
const router = express.Router();
const bookHotel_controllers = require('../controllers/bookHotel_controllers');

router.get('/', bookHotel_controllers.getBookHotel);
router.post('/', bookHotel_controllers.addBookHotel);
module.exports = router;
