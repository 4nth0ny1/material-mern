const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  text: {
    type: String,
  },
  completed: {
    type: Boolean,
  },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
});

const CommentSchema = new mongoose.Schema({
  content: {
    type: String,
  },
  todo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Todo",
  },
});

const TodoModel = mongoose.model("Todo", TodoSchema);
const CommentModel = mongoose.model("Comment", CommentSchema);
module.exports = CommentModel;
module.exports = TodoModel;
