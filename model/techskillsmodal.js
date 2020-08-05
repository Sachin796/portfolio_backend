"use strict";
module.exports = (sequelize, DataTypes) => {
  const techskills = sequelize.define(
    "techskills",
    {
      frontend: {
        type: DataTypes.STRING(25),
      },
      backend: {
        type: DataTypes.STRING(25),
      },
      database: {
        type: DataTypes.STRING(25),
      },
      aws: {
        type: DataTypes.STRING(25),
      },
    },
    {
      timestamps: false,
    }
  );

  return techskills;
};
