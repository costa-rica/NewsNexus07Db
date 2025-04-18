const { DataTypes } = require("sequelize");
const sequelize = require("./_connection");

const Report = sequelize.define("Report", {
  hasCsv: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  hasPdf: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  submittedToClient: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  pathToReport: {
    type: DataTypes.STRING,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Report;
