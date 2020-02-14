const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require('dotenv');
dotenv.config();
const app = express();
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
const db = require("./app/models");
///initialize sequelize
db.sequelize.sync();
// set port, listen for requests
const PORT = process.env.PORT || 8080;
require("./app/routes")(app);
app.listen(PORT);