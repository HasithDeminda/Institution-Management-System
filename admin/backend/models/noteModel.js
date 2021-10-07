const mongoose = require("mongoose");

const noteSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: false,
    },
    content: {
      type: String,
      required: false,
    },
    category: {
      type: String,
      required: false,
    },
  },
);

const Note = mongoose.model("Blog", noteSchema);

module.exports = Note;
