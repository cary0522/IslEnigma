const express = require("express")
const router = express.Router()
const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY)
const authMiddleware = require("../middlewares/authToken")

// import controller
const { cart_controller } = require("../controllers/cart_controller")
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
