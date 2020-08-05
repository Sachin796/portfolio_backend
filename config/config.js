require("dotenv").config();

module.exports = {
  development: {
    username: "root",
    password: process.env.password,
    database: process.env.database,
    host: process.env.host,
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: process.env.password,
    database: process.env.database,
    host: process.env.host,
    dialect: "mysql",
  },
};
