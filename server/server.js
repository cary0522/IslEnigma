const express = require("express")
const app = express()
const cart_route = require("./routes/cart_route")
const cors = require("cors")

const map_route = require('./routes/map_route')
const ticket_route = require('./routes/ticket_route')

require("dotenv").config()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
}

app.use(cors(corsOptions))

// 掛載 todo 路由
app.use("/cart", cart_route)
app.use('/map',map_route)
app.use('/ticket',ticket_route)

// 根路由重定向到 /todo

const port = process.env.PORT || 3001

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
