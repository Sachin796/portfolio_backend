const db = require("./model");
const PORT = process.env.PORT || 3001;
const app = require("./app.js");

var syncOptions = {};
syncOptions.force = process.env.SYNC_MODEL === "true" ? true : false;
db.sequelizeConnection.sync().then(() => {
  app.listen(PORT, function () {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });
});
