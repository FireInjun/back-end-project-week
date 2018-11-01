const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const NotesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  author: {
    default: "Public",
    type: String
  }
});

module.exports = mongoose.model("Note", NotesSchema);
