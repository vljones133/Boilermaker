// The purpose of this module is to bring your Sequelize instance (`db`) together
// with your models, for which you'll find some blank files in this directory:

const db = require('./db');
const Task = require('./Task');
const User = require('./User');

Task.belongsTo(User);
User.hasMany(Task);

module.exports = {
  db,
  Task,
  User,
};
