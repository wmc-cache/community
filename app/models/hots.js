const mongoose = require("mongoose");

const { Schema, model } = mongoose;
const hotSchema = new Schema({
  __v: { type: Number, select: false },
  id: { type: String, required: true },
  title: { type: String, required: true },
  hot: { type: String, required: true },
  img: { type: String },
  description: { type: String }
});

module.exports = model("Hot", hotSchema);
