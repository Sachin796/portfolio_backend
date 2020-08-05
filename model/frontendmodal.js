"use strict";
module.exports = (sequelize, DataTypes) => {
  const frontEnd = sequelize.define(
    "frontend",
    {
      caption: {
        type: DataTypes.STRING(25),
      },
      link: {
        type: DataTypes.STRING(150),
      },
    },
    {
      timestamps: false,
    }
  );

  return frontEnd;
};
