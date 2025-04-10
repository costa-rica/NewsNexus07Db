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
  requestCount: {
    type: DataTypes.STRING,
  },
  dateStartOfRequest: {
    type: DataTypes.DATEONLY,
  },
  dateEndOfRequest: {
    type: DataTypes.DATEONLY,
  },
});

module.exports = NewsApiRequest;
