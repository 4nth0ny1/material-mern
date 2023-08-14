const express = require("express");
const isLoggedIn = require("./middleware/isLoggedIn");

const router = express.Router();

const loginRoute = require("./routes/loginRoute");
const getTodosRoute = require("./routes/getTodosRoute");

router.post("/login", loginRoute);
router.get("/todos", isLoggedIn, getTodosRoute);

module.exports = router;
