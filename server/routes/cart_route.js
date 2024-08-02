const express = require("express")
const router = express.Router()
const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY)

//到資料庫查找購物車

router.get("/", async (req, res) => {
  const shoppingCartWithItems = await prisma.customer_order.findFirst({
    where: {
      member_id: 1,
      status: "CREATED",
    },
    include: {
      order_item: {
        include: {
          room: true,
          ticket: true,
        },
      },
    },
  })
  res.status(200).json(shoppingCartWithItems)
})

//新增訂單
router.post("/", async (req, res) => {
  const { cartItems } = req.body
  console.log("items")
  console.log(cartItems)

  if (cartItems.length === 0) return
  try {
    const updatedOrderItem = await prisma.customer_order.update({
      where: {
        order_id: cartItems[0].order_id,
      },
      data: {
        status: "PAID",
      },
    })
    return res.json(updatedOrderItem)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Failed to update order item status" })
  }
  res.json("good")
})

//更新商品數量
router.put("/:id", async (req, res) => {
  const { quantity } = req.body

  const itemId = req.params.id

  try {
    const updatedItem = await prisma.order_item.update({
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
router.delete("/:id", async (req, res) => {
  const itemId = req.params.id

  try {
    const deletedItem = await prisma.order_item.delete({
      where: {
        order_item_id: itemId,
      },
    })
    res.status(200).json(deletedItem)
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
