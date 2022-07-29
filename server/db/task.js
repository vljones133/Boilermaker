const Sequelize = require('sequelize');
const db = require('./db');

module.exports = db.define('task', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  frequency: {
    type: Sequelize.ENUM,
    values: ['once', 'daily', 'weekly', 'monthly'],
  },
});
