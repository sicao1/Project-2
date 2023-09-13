const mongoose = require("mongoose");

const legoSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    img: { type: String },
    theme: { type: String },
    pieces: { type: Number },
    itemNumber: { type: Number },
    Dimensions: { type: String },
    built: { type: Boolean },
    purchased: { type: Boolean },
  },
  { timestamps: true }
);

const Lego = mongoose.model("Lego", legoSchema);

module.exports = Lego;
