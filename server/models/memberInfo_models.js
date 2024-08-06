//@author: TerryXU
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const memberInfo_Model = {
  order:{
    read:async(memberId)=>{
      try{
        const orders = await prisma.customer_order.findMany({
          where:{
            memberId:memberId,
            status:"PAID'",
          }
        });

        if (orders.length === 0) {
          return [];
        }

        const orderData = await Promise.all(
          orders.map(async (order) => {
            const items = await prisma.order_detail.findMany({
              where: {
                order_id: order.order_id
              },
            });
            return {
              order,
              items,
            };
          })
        );
        return orderData;
      }
      catch(error){
        console.log(error);
      }
    }
  },
  payMethod:{
    create:{},
    read:{},
    delete:{},
  },
  memberInfo:{
    read:{},
    update:{},
  }
}

module.exports = memberInfo_Model;