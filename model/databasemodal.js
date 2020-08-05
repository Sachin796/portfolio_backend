"use strict";
module.exports = (sequelize, DataTypes) => {
  const Database = sequelize.define(
    "database",
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

  return Database;
};
