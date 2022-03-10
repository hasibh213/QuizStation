// require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();
const quizRouter = require("./routes/quiz");
const PORT = 8080;

app.use(express.json());
app.use(cors());
app.use("/quiz", quizRouter);
app.listen(PORT, () => console.log(`server started on port ${PORT}`));
