var express = require('express');
var router = express.Router();

var mysql = require('mysql');

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