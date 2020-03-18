const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const myQuestionSchema = new Schema({
  __v: { type: Number, select: false },
  id: { type: String },
  title: { type: String, required: true },
  hot: { type: String },
  img: { type: String },
  description: { type: String }
});

module.exports = model("myQuestion", myQuestionSchema);
