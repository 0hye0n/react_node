var express = require('express');
var app = express();
var router = require('./router/index');


app.all('/*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.listen(9000, () => {
    console.log("server started");
});

app.use(express.static('public'));
app.use(router);