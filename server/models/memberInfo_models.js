//@author: TerryXU
//東西太多了改成用 FP
const { PrismaClient } = require('@prisma/client');
const { create } = require('./register_Model');
const { read } = require('./login_Model');
const prisma = new PrismaClient();

const order = {
  read: async(memberId) => {
    try {
      const order = await prisma.order.findMany({
        where: {
          member_Id: memberId,
        },
      });
      return order;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
};
const payMethod = {
  create: async(memberId,payMethodData) => {
    try {
      const newPayMethod = await prisma.credit_card.create({
        data: {
          member_id: memberId,
          number: payMethodData.number,
          expiry: new Date(payMethodData.expiry),
          cvv: payMethodData.cvv,
        },
      }); 
      return true;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
  read: async(memberId) => {
    try {
      const payMethod = await prisma.credit_card.findMany({
        where: {
          member_id: memberId,
        },
      });
      return payMethod;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
  delete: async(memberId,payMethodNum) => {
    try {
      const creditCard = await prisma.credit_card.findFirst({
        where: {
          member_id: memberId,
          number: payMethodNum,
        }
      });
      const deleteCreditCard = await prisma.credit_card.delete({
        where: {
          credit_card_id: creditCard.credit_card_id,
        }
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
};
const memberInfo = {};
const Password = {};

module.exports = {
  order,
  payMethod,
  memberInfo,
  Password,
};