import mongoose from "mongoose";

// Created
const createdgenres = mongoose.model(
  "Genres",
  new mongoose.Schema({
    name: {
      type: String,
      required: false,
    },
  })
);

export default createdgenres;
