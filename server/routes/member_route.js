//@author :TerryXU
const express = require("express")
const router = express.Router()
const login_controller = require("../controllers/login_controller")
const register_controller = require("../controllers/register_controller")
const logout_controller = require("../controllers/logout_controller")
const authToken = require("../middlewares/authToken")
const { verifyToken } = authToken

router.post("/login", login_controller.login)
router.post("/register", register_controller.register)
router.post("/logout", logout_controller)

module.exports = router
