//@author :TerryXU
const register_Model = require('../models/register_Model');


const register_controllers = {
  register: async (req, res) => {
    try {
      const memberData = req.body;
      const checkMember = await register_Model.read(memberData.account);
      if (checkMember) {
        return res.status(409).json({
          error: '帳號已存在,是否要登入?'
        });;
      }
      const createMember = await register_Model.create(memberData);

      if (createMember) {
        res.status(201).send('Member created');
      } else {
        res.status(400).json({error: '帳號註冊失敗，請洽系統管理員'});
      }
    } catch (error) {
      console.log(error);
      res.status(500).send('Server error');
    }
  },
};

module.exports = register_controllers;