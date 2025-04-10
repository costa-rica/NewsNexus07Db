const { DataTypes } = require("sequelize");
const sequelize = require("./_connection");

const ArticleReportContract = sequelize.define("ArticleReportContract", {
  reportId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  articleId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = ArticleReportContract;
