const TodoModel = require("../models/TodoModel");

module.exports = async (req, res) => {
  const todos = await TodoModel.find().populate("comments");
  res.json(todos);
};
