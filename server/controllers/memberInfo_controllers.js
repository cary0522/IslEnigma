//@author : 許哲誠
const { order, payMethod, memberInfo, password,ticket,room } = require('../models/memberInfo_models');
const passwordHelpers = require('../utils/passwordHelpers');
const getOrder = async (req, res) => {
  try {
    const user = req.user.id;
    const orders = await order.read(user);
    const transformedOrders = await transformOrderData(orders);
    console.log('transformedOrders:', transformedOrders);
    res.status(200).json(transformedOrders);
  } catch (error) {
    console.error('getOrder error:', error);
    res.status(500).json({ error: 'bad Server' });
  }
};

const getPayMethod = async (req, res) => {
  try {
    const memberID = req.user.id;
    const payMethods = await payMethod.read(memberID);
    console.log('payMethods:', payMethods);
    payMethods.forEach((payMethod) => {
      payMethod.expiry = payMethod.expiry.toISOString().split('T')[0];
      payMethod.expiry = payMethod.expiry.split('-').join('/');
    });
    res.status(200).json(payMethods);
  } catch (error) {
    console.error('getPayMethod error:', error);
    res.status(500).json({ error: 'bad Server' });
  }
};
const postPayMethod = async (req, res) => {
  try {
    const memberID = req.user.id;
    const payMethodData = req.body;
    const newPayMethod = await payMethod.create(memberID, payMethodData);
    res.status(200).json({ message: '成功' });
  } catch (error) {
    console.error('postPayMethod:', error);
    res.status(500).json({ error: 'bad Server' });
  }
};
const deletePayMethod = async (req, res) => {
  try {
    const memberID = req.user.id;
    const payMethodNum = req.body.number;
    const deletePayMethod = await payMethod.delete(memberID, payMethodNum);
    res.status(200).json({ message: '成功' });
  } catch (error) {
    console.error('deletePayMethod error:', error);
    res.status(500).json({ error: 'bad Server' });
  }
};

const getMemberInfo = async (req, res) => {
  try {
    const memberID = req.user.id;
    const memberInfoData = await memberInfo.read(memberID);
    const memberInfo_data = {
      name: memberInfoData.name,
      address: memberInfoData.address,
      phone: memberInfoData.phone,
      birth: memberInfoData.birth.toISOString().split('T')[0].split('-').join('/'),
      email: memberInfoData.account,
    };
    res.status(200).json(memberInfo_data);
  } catch {
    console.error('getMemberInfo error:', error);
    res.status(500).json({ error: 'bad Server' });
  }
};
const putMemberInfo = async (req, res) => {
  try {
    const memberID = req.user.id;
    const memberInfoData = req.body;
    const updateMemberInfo = await memberInfo.update(memberID, memberInfoData);
    if (updateMemberInfo) {
      res.status(200).json({ message: '更新成功' });
    } else {
      res.status(404).json({ error: '未找到' });
    }
  } catch {
    console.error('postMemberInfo error:', error);
    res.status(500).json({ error: 'bad Server' });
  }
};

const changePassword = async (req, res) => {
  try {
    const memberID = req.user.id;
    const passwordData = req.body;
    const oldPasswordData = await password.read(memberID);
    const isPasswordCorrect = await passwordHelpers.compare(
      passwordData.oldPassword,
      oldPasswordData.password
    );
    console.log(isPasswordCorrect);
    if (isPasswordCorrect) {
      await password.update(memberID, passwordData.newPassword);
      res.status(200).json({ message: '更改密碼成功' });
    } else {
      res.status(401).json({ error: '舊密碼錯誤' });
    }
  } catch {
    console.error('changePassword error:', error);
    res.status(500).json({ error: 'bad Server' });
  }
};
async function transformOrderData(orders) {
  const transformedData = await Promise.all(
    orders.map(async (order) => {
      const transformedOrder = {
        order_id: order.order_id.toString(),
        order_type: order.orderItems[0].room_id === null ? 'ticket' : 'room',
        amount: order.total_amount.toString(),
        checkin_date: formatDate(order.orderItems[0].check_in_date),
        checkout_date: order.orderItems[0].check_out_date
          ? formatDate(order.orderItems[0].check_out_date)
          : null,
        quantity: order.orderItems[0].quantity.toString(),
        orderPeople: {
          customer: order.orderInfo.customer,
          phone: order.orderInfo.phone_number,
          address: order.orderInfo.address,
          payment_method: order.orderInfo.payment_method,
        },
      };
      if (transformedOrder.order_type === 'room') {
        transformedOrder.room_type = await fetchType(room.read, order.orderItems[0].room_id);
      } else {
        transformedOrder.ticket_type = await fetchType(ticket.read,order.orderItems[0].ticket_id);
      }
      return transformedOrder;
    })
  );

  return transformedData;
}

function formatDate(date) {
  return date.toISOString().split('T')[0].replace(/-/g, '/');
}

async function fetchType(readMethod, id) {
  console.log('id:', id);
  const typeData = await readMethod(id);
  return typeData.name;
}
module.exports = {
  getOrder,
  getPayMethod,
  postPayMethod,
  deletePayMethod,
  getMemberInfo,
  putMemberInfo,
  changePassword,
};
