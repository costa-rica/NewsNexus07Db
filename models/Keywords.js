const { DataTypes } = require("sequelize");
const sequelize = require("./_connection");

const Keywords = sequelize.define("Keywords", {
  keyword: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
  },
  isArchived: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = Keywords;
