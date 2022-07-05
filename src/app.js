const express = require("express");
const app = express();
require("dotenv").config();

// importing project routes
const googleTask = require("./routes/google-task");

app.get("/", (req, res) => {
  res.send("you are in root, please route some api's");
});

app.use("/google-task", googleTask);

module.exports = app;
