const express = require("express");
const uuid = require("uuid");
const route = express.Router();

route.get("/", (req, res) => {
  let data = [
    {
      task: "wake up mornings",
      id: uuid.v4(),
      isCompleted: false,
    },
  ];
  res.send(data);
});

module.exports = route;
