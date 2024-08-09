const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
require("dotenv").config()

const app = express()
const cart_route = require("./routes/cart_route")
const stripe_webhook_route = require("./routes/stripe_webhook_route")

app.use(express.urlencoded({ extended: true }))
app.use(cors({ origin: "http://localhost:5173", credentials: true }))

app.use(
  "/webhook",
  bodyParser.raw({ type: "application/json" }),
  stripe_webhook_route
)
app.use(express.json()) /
  // 掛載 cart 路由
  app.use("/cart", cart_route)

const port = process.env.PORT || 3001
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
