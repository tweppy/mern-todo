const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  complete: {
    type: Boolean,
    default: false,
  },
  timeStamp: {
    type: String,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Todo", TodoSchema);
