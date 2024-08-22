const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

const search_rooms_date = async (req, res) => {
  const { id } = req.params
  const ordered_date = await prisma.order_item.findMany({
    where: {
      customer_order: {
        status: "PAID",
      },
      room_id: parseInt(id),
    },
  })
  console.log(ordered_date)
  res.send(ordered_date)
}

module.exports = search_rooms_date
