var express = require('express');
var mysql = require('mysql');
var app = express();
var router = express.Router();

var pool = mysql.createPool({
    host:"localhost",
    port: 3306,
    user: 'root',
    password: "!sodwkdrh1234",
    database: 'bueno',
    connectionLimit: 50
})

/**
 * code 0 : successful
 * code 1 : get connection err
 * code 2 : query err
 * code 3 : empty dataset
*/

router.get('/', (req, res, next) => {
    console.log("success to access '/main'");
    //res.json({"data" : "123"});
    pool.getConnection((err, connection) => {
        if(err){
            console.log("get connection error occurred (code: 1)");
            res.status(500).json({code: 1});
        }else{
            connection.query("select * from user", (err, rows) => {
                if(err){
                    console.log("query error occurred (code: 2)");
                    res.status(500).json({code: 2});
                }else{
                    if(rows){
                        console.log("successful query (code: 0)");
                        res.status(200).json({code: 0});
                    }else{
                        console.log("empty dataset (code: 3)");
                        res.status(401).json({code: 3});
                    }
                }
            });
        }
    })
})


module.exports = router;