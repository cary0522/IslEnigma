const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// 地圖頁面：取得所有設施資料
router.get("/mapPage", async (req, res) => {
	let facilityData = await prisma.facility.findMany();
	res.json(facilityData);
});
// 地圖頁面：取得個別設施資料
router.post("/mapPage", async (req, res) => {
	let facilityData = await prisma.facility_rule.findMany({
		where: { facility_id: req.body.facility_id },
	});
	res.json(facilityData);
});
// 地圖頁面：取得「查看更多」網址資料
router.post("/moreAbout", async (req, res) => {
	let moreAbout = await prisma.more_about.findFirst({
		where: { facility_id: req.body.facility_id },
	});
	res.json(moreAbout);
});

module.exports = router;
