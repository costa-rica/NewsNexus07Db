const { DataTypes } = require("sequelize");
const sequelize = require("./_connection");

const Report = sequelize.define("Report", {
  // submittedToClient: {
  //   type: DataTypes.BOOLEAN,
  //   defaultValue: false,
  // },
  dateSubmittedToClient: {
    type: DataTypes.DATE,
  },
  // pathToReport: {
  //   type: DataTypes.STRING,
  // },
  nameCrFormat: {
    type: DataTypes.STRING,
  },
  nameZipFile: {
    type: DataTypes.STRING,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Report;
