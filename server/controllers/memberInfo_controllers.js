const { order, payMethod, memberInfo, Password } = require('../models/memberInfo_models');

const getOrder = async (req, res) => {
  try {
    const user = req.user.id;
    const orders = await order.read(user);
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
  try{
    const memberID = req.user.id;
    const payMethodData = req.body;
    const newPayMethod = await payMethod.create(memberID, payMethodData);
    res.status(200).json({ message: '成功' });
  }
  catch (error) {
    console.error('postPayMethod:', error);
    res.status(500).json({ error: 'bad Server' });
  }
};
const deletePayMethod = async (req, res) => {
  try {
    const memberID= req.user.id;
    const payMethodNum = req.body.number;
    const deletePayMethod = await payMethod.delete(memberID, payMethodNum);
    res.status(200).json({ message: '成功' });
  } catch (error) {
    console.error('deletePayMethod error:', error);
    res.status(500).json({ error: 'bad Server' });
  }
};

const getMemberInfo = async (req, res) => {
  /* ... */
};
const postMemberInfo = async (req, res) => {
  /* ... */
};

const getChangePassword = async (req, res) => {
  /* ... */
};
const changePassword = async (req, res) => {
  /* ... */
};

module.exports = {
  getOrder,
  getPayMethod,
  postPayMethod,
  deletePayMethod,
  getMemberInfo,
  postMemberInfo,
  getChangePassword,
  changePassword,
};