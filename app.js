const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./routes");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(cors());
app.use("/", routes);

module.exports = app;
