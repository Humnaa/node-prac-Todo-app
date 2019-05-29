var { mongoose } = require("mongoose");

var Todo = mongoose.model("Todo", {
  name: {
    type: String,
    required: true,
    trim: true,
    minlenght: 1
  },
  completed: {
    type: Boolean,
    default: false
  }
});
module.exports = { Todo };
