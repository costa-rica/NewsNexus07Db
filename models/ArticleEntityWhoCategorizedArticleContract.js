const { DataTypes } = require("sequelize");
const sequelize = require("./_connection");

const ArticleEntityWhoCategorizedArticleContract = sequelize.define(
  "ArticleEntityWhoCategorizedArticleContract",
  {
    articleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    entityWhoCategorizesId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    keyword: {
      type: DataTypes.STRING,
    },
    keywordRating: {
      type: DataTypes.FLOAT,
    },
  }
);

module.exports = ArticleEntityWhoCategorizedArticleContract;
