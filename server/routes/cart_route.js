const express = require("express")
const router = express.Router()
const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY)
const authMiddleware = require("../middlewares/authToken")
const crypto = require("crypto")

// import controller
const { cart_controller } = require("../controllers/cart_controller")
const {
  LINE_PAY_SITE,
  LINE_PAY_SECRET,
  LINE_PAY_CHANNELID,
} = require("../utils/config_env")
const {
  get_cart_items,
  new_order,
  update_item_quantity,
  remove_item,
  new_cart_item,
} = cart_controller

// all items
router.get("/", authMiddleware.verifyToken, get_cart_items)

router.post("/new_cart_item", new_cart_item)
// new order
router.post("/", new_order)

// update item quantity
router.put("/:id", update_item_quantity)

// delete item
router.delete("/:id", remove_item)
router.post(
  "/line-test",
  authMiddleware.verifyToken,
  async (req, res, next) => {
    const { data } = req.body
    const { total_amount, order_id, order_item } = data

    const products = order_item.map((item) => {
      if (item.room) {
        return {
          id: `${item.room.room_id}`,
          name: item.room.room_type,
          imageUrl: item.room.img.url,
          quantity: item.quantity,
          price: item.room.price,
        }
      } else if (item.ticket) {
        return {
          id: `${item.ticket.ticket_id}`,
          name: item.ticket.type,
          imageUrl: item.ticket.img.url,
          quantity: item.quantity,
          price: item.ticket.price,
        }
      }
    })
    console.log(products)
    function handleBigInteger(text) {
      const largeNumberRegex = /:\s*(\d{16,})\b/g
      const processedText = text.replace(largeNumberRegex, ': "$1"')

      const data = JSON.parse(processedText)

      return data
    }
    function signKey(clientKey, msg) {
      const encoder = new TextEncoder()
      return crypto
        .createHmac("sha256", encoder.encode(clientKey))
        .update(encoder.encode(msg))
        .digest("base64")
    }

    async function requestOnlineAPI({
      method,
      baseUrl = LINE_PAY_SITE,
      apiPath,
      queryString = "",
      data = null,
      signal = null,
    }) {
      const nonce = crypto.randomUUID()
      let signature = ""

      if (method === "GET") {
        signature = signKey(
          LINE_PAY_SECRET,
          LINE_PAY_SECRET + apiPath + queryString + nonce
        )
      } else if (method === "POST") {
        signature = signKey(
          LINE_PAY_SECRET,
          LINE_PAY_SECRET + apiPath + JSON.stringify(data) + nonce
        )
      }
      const headers = {
        "X-LINE-ChannelId": LINE_PAY_CHANNELID,
        "X-LINE-Authorization": signature,
        "X-LINE-Authorization-Nonce": nonce,
      }

      const response = await fetch(
        `${baseUrl}${apiPath}${queryString !== "" ? "&" + queryString : ""}`,
        {
          method: method,
          headers: {
            "Content-Type": "application/json",
            ...headers,
          },
          body: data ? JSON.stringify(data) : null,
          signal: signal,
        }
      )

      const processedResponse = handleBigInteger(await response.text())

      return processedResponse
    }

    try {
      let response = await requestOnlineAPI({
        method: "POST",
        baseUrl: LINE_PAY_SITE,
        apiPath: "/v3/payments/request",
        data: {
          amount: total_amount,
          currency: "TWD",
          orderId: "EXAMPLE_ORDER_20230422_1000001",
          packages: [
            {
              id: order_id,
              amount: total_amount,
              products,
              //  [
              //   {
              //     id: "PEN-B-001",
              //     name: "Pen Brown",
              //     imageUrl: "https://store.example.com/images/pen_brown.jpg",
              //     quantity: 2,
              //     price: 50,
              //   },
              // ],
            },
          ],
          redirectUrls: {
            confirmUrl: "http://localhost:5173/cart/shoppingSuccess",
            cancelUrl: "https://store.example.com/order/payment/cancel",
          },
        },
      })

      res.status(200).json(response)
    } catch (error) {
      console.log(error)
    }
  }
)

// create payment
router.post("/create-checkout-session", async (req, res) => {
  const { data, orderInfo } = req.body
  const order_id = data.order_id
  const order_info_json = JSON.stringify(orderInfo)

  try {
    const session = await stripe.checkout.sessions.create({
      //metadata只接受string
      metadata: {
        order_id,
        order_info: order_info_json,
      },
      payment_method_types: ["card"],
      mode: "payment",
      line_items: data.order_item.map((item) => {
        return {
          price_data: {
            currency: "TWD",
            product_data: {
              name: item.room?.room_type || item.ticket?.type,
            },
            unit_amount: item.room?.price || item.ticket?.price,
          },
          quantity: item.quantity,
        }
      }),
      success_url: `http://localhost:5173/cart/shoppingSuccess?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `http://localhost:5173/cart/checkout`,
    })

    res.json({ url: session.url })
    console.log(session)
  } catch (e) {
    console.log(e)
    res.status(500).json(e)
  }
})

router.post("/payment-status", (req, res) => {
  const { sessionIdParam } = req.body

  stripe.checkout.sessions.retrieve(sessionIdParam, (err, session) => {
    if (err) {
      res.status(500).json(err)
    } else {
      res.status(200).json(session)
    }
  })
})

router.post("/order-info", async (req, res) => {
  console.log(123)
  try {
    const res = await prisma.order_info.create({
      data: {
        order_info_id: "info2",
        order_id: "order123",
        customer: "Eric",
        phone_number: "0982748292",
        address: "台灣市台中路",
        payment_method: "CREDITCARD",
      },
    })
  } catch (e) {
    console.log(e)
    res.status(500).json(e)
  }
})

module.exports = router
