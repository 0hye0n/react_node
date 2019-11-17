var express = require('express');
var router = express.Router();
const axios = require('axios');

var mysql = require('mysql');

var pool = mysql.createPool({
    host:"localhost",
    port: 3306,
    user: 'root',
    password: "!sodwkdrh1234",
    database: 'bueno'
})


router.get('/', (req, res, next) => {
    res.json({
        data3: 'data',
        data1: 'data1',
        data2: 'data2'
    });
})

router.post('/', (req, res, next) => {
    res.json({
        data: 'data',
        data1: 'data1',
        data2: 'data2'
    });
})

module.exports = router;