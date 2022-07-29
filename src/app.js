const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const path = require("path");

app.use(cors());
app.use(helmet());
app.use(morgan());

// Static folder setup
app.use("/static", express.static("public"));

// setting up the template engine.
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

// essential middleware

// importing middleware
const { notFound, errorHanndling } = require("./middleware/middleware");

// importing project routes
const googleTask = require("./routes/google-task");

app.get("/", (req, res) => {
  res.status(200);
  res.set("Content-Type", "text/html");
  res.sendFile(path.resolve(path.join(__dirname, "views", "index.html")));
});

app.use("/google-task", googleTask);

// Custom middleware usage Note : these middleware should be in the last
app.use(notFound);
app.use(errorHanndling);

module.exports = app;
