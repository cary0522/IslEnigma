const { Sequelize } = require('sequelize');
const sequelize =new Sequelize('tododb', 'root', '', {
  host: 'localhost',
  dialect: 'mariadb',
});

module.exports = sequelize;