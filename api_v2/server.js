var express = require("express");
const session = require("express-session");
var app = express();
var router = require("./router/index");
var bodyParser = require("body-parser");

app.all("/*", (req, res, next) => {
  //To solve CORS Problem
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");
  res.setHeader("Access-Control-Max-Age", "3600");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Accept, X-Requested-With, remember-me"
  );
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Accept", "application/json");
  next();
});

app.listen(9000, () => {
  console.log("server started");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(router);

app.use(
  session({
    secret: "bueno bueno",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
  })
);
