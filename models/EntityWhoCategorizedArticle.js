const { DataTypes } = require("sequelize");
const sequelize = require("./_connection");

const EntityWhoCategorizedArticle = sequelize.define(
  "EntityWhoCategorizedArticle",
  {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    artificialIntelligenceId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }
);

module.exports = EntityWhoCategorizedArticle;
