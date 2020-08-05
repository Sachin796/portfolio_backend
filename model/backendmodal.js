"use strict";
module.exports = (sequelize, DataTypes) => {
  const backEnd = sequelize.define(
    "backend",
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

  return backEnd;
};
