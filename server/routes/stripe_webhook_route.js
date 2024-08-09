const express = require("express")
const router = express.Router()
const stripe_webhook = require("../controllers/stripe_webhook")

router.post("/", stripe_webhook)

module.exports = router
