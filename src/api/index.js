const express = require("express");
const route = express.Router();
const googleTask = require("../routes/google-task");

route.use("/google-task", googleTask);

route.get("/", (req, res) => {
  res.send("<h1>Hi I'm from router</h1>");
});

module.exports = route;
