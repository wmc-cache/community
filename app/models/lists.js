const mongoose = require("mongoose");

const { Schema, model } = mongoose;
const listSchema = new Schema(
  {
    __v: { type: Number, select: false },
    id: { type: Number, required: true },
    title: { type: String, required: true },
    completed: { type: Boolean, required: true, default: false },
    editing: { type: Boolean, required: true, default: false },
  },
  { timestamps: true }
);

module.exports = model("List", listSchema);
