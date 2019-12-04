var express = require("express");
var app = express();
var router = express.Router();

router.get("/", (req, res, next) => {
  if (typeof req.session.loginInfo === "undefined") {
    return res.status(401).json({
      error: "there is no login data",
      code: 3
    });
  }
  res.json({ info: req.session.loginInfo });
});

module.exports = router;
