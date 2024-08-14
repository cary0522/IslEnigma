const express = require("express")
const router = express.Router()

const search_rooms_controller = require("../controllers/search_rooms_controller")

router.post("/", search_rooms_controller)

module.exports = router
