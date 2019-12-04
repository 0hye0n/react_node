var sha256 = require("../hash/SHA256");
var express = require("express");
var pool = require("../pool/pool").pool;
var app = express();
var router = express.Router();

/**
 * code 0 : mysql error
 * code 1 : bad username
 * code 2 : bad password
 * code 3 : username exist
 */

router.post("/", (req, res, next) => {
  console.log(req.body);
  const { email, username, password } = req.body;
  console.log(email);
  console.log(username);
  console.log(password);
  if (password.length < 4 || typeof password !== "string") {
    console.log(2);
    return res.status(400).json({
      error: "bad password",
      code: "2"
    });
  }

  pool.getConnection((err, connection) => {
    if (err) {
      console.log("get connection err");
      res.status(401).json({
        error: "mysql error (get Connection part)",
        code: 0
      });
    } else {
      connection.query(
        "select * from user where email='" + email + "'",
        (err, rows) => {
          if (err) {
            console.log("query error");
            res.status(401).json({
              error: "mysql error (mysql query part)",
              code: 0
            });
          } else {
            console.log(rows.length);
            if (rows.length > 0) {
              console.log("email exist");
              res.status(401).json({
                error: "email exists",
                code: 3
              });
            } else {
              console.log("into the qurey");
              const pw = sha256(password);
              const q =
                "insert into user(email, name, pw) values('" +
                email +
                "', '" +
                username +
                "', '" +
                pw +
                "')";
              console.log(q);
              connection.query(q, err => {
                if (err) {
                  throw err;
                }
                res.status(200).json({ success: true });
              });
            }
          }
        }
      );
    }
    connection.release();
  });
});

module.exports = router;
