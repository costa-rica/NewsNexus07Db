const { DataTypes } = require("sequelize");
const sequelize = require("./_connection");

const NewsApiRequest = sequelize.define("NewsApiRequest", {
  newsArticleAggregatorSourceId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  keywordId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  // requestCount: {
  //   type: DataTypes.STRING,
  // },
  countOfArticlesReceivedFromRequest: {
    type: DataTypes.INTEGER,
  },
  countOfArticlesSavedToDbFromRequest: {
    type: DataTypes.INTEGER,
  },
  dateStartOfRequest: {
    type: DataTypes.DATEONLY,
  },
  dateEndOfRequest: {
    type: DataTypes.DATEONLY,
  },
  status: {
    type: DataTypes.STRING,
  },
});

module.exports = NewsApiRequest;
