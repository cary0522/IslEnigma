const express = require("express")
const router = express.Router()
const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY)
const { cart_controller } = require("../controllers/cart_controller")

//到資料庫查找購物車

router.get("/", cart_controller.get_cart_items)

//新增訂單
router.post("/", cart_controller.new_order)

//更新商品數量
router.put("/:id")
router.delete("/:id", cart_controller.update_item_quantity)

router.post("/create-checkout-session", async (req, res) => {
  const cartItems = req.body

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: req.body.cartItems.map((item) => {
        return {
          price_data: {
            currency: "TWD",
            product_data: {
              name: item.room?.room_type || item.ticket?.type,
            },
            unit_amount: item.room?.price * 100 || item.ticket?.price * 100,
          },
          quantity: item.quantity,
        }
      }),
      success_url: `http://localhost:5173/cart/shoppingSuccess?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `http://localhost:5173/cart/checkout`,
    })
    res.json({ url: session.url })
  } catch (e) {
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

    console.log(res)
  } catch (e) {
    console.log(e)
    res.status(500).json(e)
  }
})

module.exports = router
