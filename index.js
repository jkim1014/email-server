const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");

const app = express();

const port = process.env.PORT || 5001;

// Middleware to handle CORS
app.use((req, res, next) => {
  let oneof = false;
  if (req.headers.origin) {
    res.header("Access-Control-Allow-Origin", req.headers.origin);
    oneof = true;
  }
  if (req.headers["access-control-request-method"]) {
    res.header(
      "Access-Control-Allow-Methods",
      req.headers["access-control-request-method"]
    );
    oneof = true;
  }
  if (req.headers["access-control-request-headers"]) {
    res.header(
      "Access-Control-Allow-Headers",
      req.headers["access-control-request-headers"]
    );
    oneof = true;
  }
  if (oneof) {
    res.header("Access-Control-Max-Age", 60 * 60 * 24 * 365);
  }
  if (oneof && req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  return next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// ROUTES
app.use("/", routes);

// development error handler
if (app.get("env") === "development") {
  app.use(function(err, req, res, next) {
    console.log(err);
    res.status(err.status || 500).send();
  });
}

// production error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500).send();
});

const server = app.listen(port);
console.log(
  "Listening at http://localhost:%s in %s mode",
  server.address().port,
  app.get("env")
);

module.exports = server;
