const { DataTypes } = require("sequelize");
const sequelize = require("./_connection");

const ArticleDuplicate = sequelize.define("ArticleDuplicate", {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  articleId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  isDuplicate: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
});

module.exports = ArticleDuplicate;
