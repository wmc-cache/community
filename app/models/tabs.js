const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const tabSchema = new Schema({
  __v: { type: Number, select: false },
  id: { type: Number, required: true },
  title: { type: String, required: true },
  link: { type: String, required: true },
});

module.exports = model("Tab", tabSchema);
