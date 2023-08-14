const express = require("express");
const isLoggedIn = require("./middleware/isLoggedIn");

const router = express.Router();

const loginRoute = require("./routes/loginRoute");
const getTodosRoute = require("./routes/getTodosRoute");
const createTodoRoute = require("./routes/createTodoRoute");

router.post("/login", loginRoute);
router.get("/todos", isLoggedIn, getTodosRoute);
router.post("/todos", isLoggedIn, createTodoRoute);

module.exports = router;
