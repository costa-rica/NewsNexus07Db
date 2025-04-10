const { DataTypes } = require("sequelize");
const sequelize = require("./_connection");

const ArticleApproved = sequelize.define("ArticleApproved", {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  articleId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  isApproved: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
});

module.exports = ArticleApproved;
