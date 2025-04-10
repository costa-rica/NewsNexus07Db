const { DataTypes } = require("sequelize");
const sequelize = require("./_connection");

const Article = sequelize.define("Article", {
  publicationName: {
    type: DataTypes.STRING,
  },
  author: {
    type: DataTypes.STRING,
  },
  title: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
  },
  url: {
    type: DataTypes.STRING,
  },
  urlToImage: {
    type: DataTypes.STRING,
  },
  publishedDate: {
    type: DataTypes.DATEONLY,
  },
  entityWhoFoundArticleId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Article;
