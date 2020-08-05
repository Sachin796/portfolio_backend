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
    use_env_variable: "JAWSDB_URL",
    dialect: "mysql",
  },
};
