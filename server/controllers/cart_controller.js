const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

const cart_controller = {
  get_cart_items: async (req, res) => {
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
    res.status(200).json(shoppingCartWithItems.order_item)
  },

  new_order: async (req, res) => {
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
  },
  update_item_quantity: async (req, res) => {
    console.log(123)
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
  },
}

module.exports = { cart_controller }
