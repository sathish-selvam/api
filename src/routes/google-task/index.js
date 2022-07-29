const express = require("express");
const route = express.Router();

route.get("/", (req, res) => {
  let data = [
    {
      task: "wake up mornings",
      id: "1544145456",
      isCompleted: false,
    },
  ];
  res.json(data);

  // res.send(data);
});

module.exports = route;
