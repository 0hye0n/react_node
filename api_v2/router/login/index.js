var sha256 = require("../hash/SHA256");
var express = require("express");
var pool = require("../pool/pool").pool;
var app = express();
var router = express.Router();

/**
 * code 0 : successful
 * code 1 : get connection err
 * code 2 : query err
 * code 3 : email / password is not correct
 * code 4: password is not string
 */

router.post("/", (req, res) => {
  const { email, password } = req.body.data;
  //console.log("email = " + email);
  //console.log("password = " + password);
  if (typeof password !== "string") {
    console.log("this is not string");
    return res.status(401).json({
      error: "Password is not string",
      code: 4
    });
  }

  pool.getConnection((err, connection) => {
    if (err) {
      console.log(err);
      console.log("get connection error occurred (code: 1)");
      res.status(401).json({
        error: "get connection error",
        code: 1
      });
    } else {
      connection.query(
        "select * from user where email = '" + email + "'",
        (err, rows) => {
          if (err) {
            console.log("query error occurred (code: 2)");
            res.status(401).json({
              error: "query error",
              code: 2
            });
          } else {
            if (rows.length) {
              console.log("successful query (code: 0)");
              if (sha256(password) === rows.pw) {
                let session = req.seesion;
                session.loginInfo = {
                  id_: rows.id,
                  email: rows.email
                };

                return res.json({
                  success: true
                });
              } else {
                res.status(401).json({
                  error: "password not correct",
                  code: 3
                });
              }
            } else {
              console.log("empty dataset (code: 3)");
              res.status(401).json({
                err: "email is not exist",
                code: 3
              });
            }
          }
        }
      );
      connection.release();
    }
  });
});

module.exports = router;
