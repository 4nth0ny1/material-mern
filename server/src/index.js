const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");

dotenv.config();
console.log(process.env.MONGO_URI);

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

app.get("/todos", (req, res) => {
  res.send("hello world");
});

app.listen(8080);
