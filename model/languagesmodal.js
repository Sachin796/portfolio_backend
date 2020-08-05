"use strict";
module.exports = (sequelize, DataTypes) => {
  const programmingLanguage = sequelize.define(
    "programming",
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

  return programmingLanguage;
};
