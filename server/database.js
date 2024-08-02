// index.js

const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

async function main() {
  // 插入一条新的 Order 数据
  const newOrder = await prisma.order.create({
    data: {
      order_id: "order123",
      member_id: 1, // 确保 member_id 存在于 Member 表中
      total_amount: 200,
      status: "CREATED",
      order_date: new Date(),

      // Optional: if you want to include related data
      OrderItem: {
        create: [
          {
            order_item_id: "item123",
            room_id: "room101", // Ensure this room_id exists in Room table
            ticket_id: "ticket001", // Ensure this ticket_id exists in Ticket table
            quantity: 2,
            booked_date: new Date(),
            valid_date: new Date(),
          },
        ],
      },
      OrderInfo: {
        create: {
          order_info_id: "info123",
          customer: "John Doe",
          phone_number: "123-456-7890",
          address: "1234 Elm Street",
          payment_method: "CREDITCARD",
        },
      },
    },
  })

  console.log("New Order:", newOrder)
}

// 调用主函数
main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
