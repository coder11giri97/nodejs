const Sequelize = require('sequelize');

const sequelize = new Sequelize('node_intro', 'root', 'apple@17', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;