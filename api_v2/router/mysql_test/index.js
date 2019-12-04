var express = require("express");
var mysql = require("mysql");
var app = express();
var router = express.Router();
var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "!sodwkdrh1234",
  database: "bueno"
});

router.get("/", (req, res, next) => {});

module.exports = router;
