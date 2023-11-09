const express = require("express");
const route = express.Router();
const googleTask = require("../routes/google-task");

route.use("/google-task", googleTask);

route.get("/", (req, res) => {
  res.send("<section style='display:flex; flex-direction: column;align-text: center;'><h1 style='color : blue; font-family:verdana;'>This page is root page of api </h1><p>please refer the documentation to visit appropriate root</p></section>");
});

module.exports = route;
