const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");

dotenv.config();
console.log(process.env.MONGO_URI);

const app = express();

app.use(morgan("tiny"));

app.get("/todos", (req, res) => {
  res.send("hello world");
});

app.listen(8080);
