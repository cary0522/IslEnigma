const express = require("express")
const router = express.Router()
const addTicketItem = require("../controllers/ticket_controller")
const { verifyToken } = require("../middlewares/authToken")

router.post("/addTicketItem", verifyToken, addTicketItem)

module.exports = router
