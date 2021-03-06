"use strict";
var debugEnabled = require("./config").debug;
var log = require("color-logs")(debugEnabled, debugEnabled, __filename);

var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


var cors = require("./services/access-control.js");
app.use(cors);
app.options("*", function(req, res, next){
  res.sendStatus(200);
});

app.use(require("./services/debug.js"));
app.use(require("./services/connect.js"));


require("./features/auth/routes")(app);
require("./features/users/routes")(app);
require("./features/gags/routes")(app);

app.listen(port);

console.log("RESTful API server started on: " + port);

exports.server = app; // for testing purposes
