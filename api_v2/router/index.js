var express = require('express');
var app = express();
var router = express.Router();
var path = require('path');

var main = require('./main/index');
var login = require('./login/index');

router.use('/main', main);
router.use('/login', login);

module.exports = router;