var express = require('express');
var path = require('path');
var router = express.Router();

var main = require('./main/index');
var login = require('./login/index');
var logout = require('./logout/index');
var kakaomap = require('./kakaomap/index');
var axios_test = require('./axios_test/index')

router.use('/main', main);
router.use('/login', login);
router.use('/logout', logout);
router.use('/kakaomap', kakaomap);
router.use('/axios', axios_test);

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

module.exports = router;
