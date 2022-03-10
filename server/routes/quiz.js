const express = require("express");
const readFile = require("../utils/helper-functions");
const router = express.Router();

router.get("/", (res, req) => {
  const data = readFile("./data/data.json");
  res.status(200).json(data);
});

router.get("/:id", (res, req) => {
  const data = readFile("./data/data.json");
  const id = req.params.id;
  const currQues = data.find((ques) => ques.id == id);
  res.status(200).json(currQues);
});

module.exports = router;
