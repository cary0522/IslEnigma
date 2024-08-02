//@author :TerryXU
const register_Model = require('../models/register_Model');


const register_controllers = {
  register: async (req, res) => {
    try {
      const memberData = req.body;
      const checkMember = await register_Model.read(memberData.account);
      if (checkMember) {
        return res.status(409).json({
          error: 'Conflict',
          message: 'Member already exists'
        });;
      }
      const createMember = await register_Model.create(memberData);

      if (createMember) {
        res.status(201).send('Member created');
      } else {
        res.status(400).send('Member not created');
      }
    } catch (error) {
      console.log(error);
      res.status(500).send('Server error');
    }
  },
};

module.exports = register_controllers;