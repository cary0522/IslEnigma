//@author :TerryXU
const memberInfo_Model = require('../models/memberInfo_Model');
const { get } = require('../routes/member_routes');


const memberInfo_controllers = {
getOrder: async (req, res) => {
  const userId = req.user.id;
  const order = await memberInfo_Model.getOrder(userId);
  if (order) {
    res.status(200).json(order);
  } else {
    res.status(400).json({ error: 'No order' });
  }
},
getPayMethod: async (req, res) => {},
postPayMethod: async (req, res) => {},
postMemberInfo: async (req, res) => {},
changePassword: async (req, res) => {},
  
};