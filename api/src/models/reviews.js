import mongoose from "mongoose";

// Created
const createdreviews = mongoose.model(
  "Reviews",
  new mongoose.Schema({
    review: {
      type: String,
      required: false,
    },
    rating: {
      type: Number,
      required: false,
    },
  })
);

export default createdreviews;
