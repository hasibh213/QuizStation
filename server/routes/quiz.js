const express = require("express");
const router = express.Router();
const readFile = require("../utils/helper-functions");
// const file = require("../data/data.json");

router.get("/", (req, res) => {
  const data = readFile("./data/data.json");
  res.status(200).json(data);
});

router.get("/:id", (req, res) => {
  const data = readFile("./data/data.json");
  const id = req.params.id;
  const currQues = data.find((ques) => ques.id == id);
  res.status(200).json(currQues);
});

module.exports = router;
