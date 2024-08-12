const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

var { v4: uuidv4 } = require("uuid");

// 訂票頁面：將訂票資料傳入 order_item table
router.post("/addTicketItem", async (req, res) => {
	try {
		for (let element of req.body) {
			await prisma.ticket.findFirst({
				where: { ticket_id: element.id },
			});
			await prisma.order_item.create({
				data: {
					order_item_id: uuidv4(),
					order_id: uuidv4(),
					check_in_date: element.booked_date,
					quantity: element.quantity,
					ticket: {
						connect: { ticket_id: element.id },
					},
				},
			});
		}
		res.json({ message: "成功加入購物車" });
	} catch (err) {
		res.json({ message: err });
	}
});
module.exports = router;
