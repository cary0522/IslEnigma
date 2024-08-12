//@author: TerryXU
//東西太多了改成用 FP
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const order = async (req, res) => {};
const payMethod = async (req, res) => {};
const memberInfo = async (req, res) => {};
const Password = async (req, res) => {};

module.exports = {
  order,
  payMethod,
  memberInfo,
  Password,
};