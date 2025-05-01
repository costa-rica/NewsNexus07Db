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
  articleReferenceNumberInReport: {
    type: DataTypes.STRING,
  },
  articleAcceptedByCpsc: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
});

module.exports = ArticleReportContract;
