var express = require("express");
var app = express();
var router = express.Router();

router.post("/", (req, res, next) => {
  req.session.destroy(err => {
    if (err) throw err;
  });
  return res.json({ success: true });
});

module.exports = router;
