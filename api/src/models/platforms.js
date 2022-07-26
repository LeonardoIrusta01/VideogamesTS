import mongoose from "mongoose";

// Created
const createdplatforms = mongoose.model(
  "Platforms",
  new mongoose.Schema({
    name: {
      type: String,
      required: false,
    }
  })
);

export default createdplatforms;