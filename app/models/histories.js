const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const historySchema = new Schema(
  {
    __v: { type: Number, select: false },
    id: { type: String, required: true },
    title: { type: String, required: true },
    completed: { type: Boolean, required: true, default: false },
    editing: { type: Boolean, required: true, default: false },
  },
  { timestamps: true }
);

module.exports = model("History", historySchema);
