const express = require("express")
const router = express.Router()
const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY)

//到資料庫查找購物車

router.get("/", async (req, res) => {
  const shoppingCartWithItems = await prisma.order.findFirst({
    where: {
      member_id: "2",
      status: "CREATED",
    },
    include: {
      orderItems: {
        include: {
          room: true,
          ticket: true,
        },
      },
    },
  })
  res.status(200).json(shoppingCartWithItems)
})

// router.get("/:id", async (req, res, next) => {
//   console.log(req.params.id)
// })

// router.delete("/cart/:", (req, res) => {
//   const

// })

//新增訂單
router.post("/", async (req, res) => {
  console.log(req.body)
  await prisma.user.create({
    data: {
      email: "e22wq@gmail.com",
    },
  })
  res.json("good")
})

router.put("/:id", async (req, res, next) => {
  const { quantity } = req.body
  const itemId = req.params.id

  try {
    const updatedItem = await prisma.orderItem.update({
      where: {
        order_item_id: itemId,
      },
      data: {
        quantity,
      },
    })
    res.status(200).json(updatedItem)
  } catch (err) {
    res.status(500).json(err)
  }
})

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
      success_url: `http://localhost:5173/cart/shoppingSuccess`,
      cancel_url: `http://localhost:5173/cart/checkout`,
    })
    res.json({ url: session.url })
  } catch (e) {
    res.status(500).json(e)
  }
})

module.exports = router
