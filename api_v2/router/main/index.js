var express = require("express");
var sha256 = require("../hash/SHA256");
var app = express();
var router = express.Router();

router.get("/", (req, res, next) => {
  var result = sha256("");
  console.log(result);
  res.send("hashing complete");
});

module.exports = router;
