var mysql = require("mysql");

var pool = mysql.createPool({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "!sodwkdrh1234",
  database: "bueno"
});

exports.pool = pool;
