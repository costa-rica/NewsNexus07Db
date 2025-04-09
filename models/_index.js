// index.js
const sequelize = require("./_connection");
// Load associations
require("./_associations");
// Import models directly
const User = require("./User");

module.exports = {
  sequelize,
  User,
};
