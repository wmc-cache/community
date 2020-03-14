const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const topicsSchema = new Schema({
  __v: { type: Number, select: false },
  id: { type: Number, required: true },
  name: { type: String, required: true },
  avatar_url: { type: String },
  hot: { type: String }
});

module.exports = model("Topic", topicsSchema);
