//@author :TerryXU
//東西太多了改成用 FP
const memberInfo_Model = require('../models/memberInfo_Model');

const getOrder = async (req, res) => { /* ... */ };

const getPayMethod = async (req, res) => { /* ... */ };
const postPayMethod = async (req, res) => { /* ... */ };
const deletePayMethod = async (req, res) => { /* ... */ };

const getMemberInfo = async (req, res) => { /* ... */ };
const postMemberInfo = async (req, res) => { /* ... */ };

const getChangePassword = async (req, res) => { /* ... */ };
const changePassword = async (req, res) => { /* ... */ };

module.exports = {
  getOrder,
  getPayMethod,
  postPayMethod,
  deletePayMethod,
  getMemberInfo,
  postMemberInfo,
  getChangePassword,
  changePassword
};