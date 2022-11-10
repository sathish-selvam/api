const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const path = require("path");

// bring middleware
const { notFound, errorHanndling } = require("./middleware/middleware");

// bring project routes
const customApi = require("./api/");

app.use(cors());
app.use(helmet());
app.use(morgan());

// setting up the template engine.
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

// middleware

// CRUD
app.get("/", (req, res) => {
  res.status(200);
  res.set("Content-Type", "text/html");
  res.sendFile(path.resolve(path.join(__dirname, "views", "index.html")));
});

// route
app.use("/api/", customApi);

// Static folder setup
app.use("/static", express.static("public"));

// Custom middleware usage Note : these middleware should be in the last
app.use(notFound);
app.use(errorHanndling);

module.exports = app;
