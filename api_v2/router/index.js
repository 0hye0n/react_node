var express = require("express");
var app = express();
var router = express.Router();
var path = require("path");

var main = require("./main/index");
var login = require("./login/index");
var logout = require("./logout/index");
var register = require("./register/index");
var session_check = require("./session_check/index");

router.use("/main", main);
router.use("/login", login);
router.use("/logout", logout);
router.use("/register", register);
router.use("/session_check", session_check);

module.exports = router;
