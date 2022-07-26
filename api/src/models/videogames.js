import mongoose from "mongoose";
// const Genres = mongoose.model('Genres')
// const Platforms = mongoose.model('Platforms')

// Created
const createdvideo = mongoose.model(
  "Videogames",
  new mongoose.Schema({
    name: {
      type: String,
      required: false
    },
    released: {
      type: String,
      required: false
    },
    image: {
      type: String,
      required: false
    },
    rating: {
      type: Number,
      required: false
    },
    reviewsapi: {
      type: Array,
      required: false
    },
    stores: {
      type: Array,
      required: false
    },
    genresapi:{
      type:Array,
      required: false
    },
    platformsapi:{
      type:Array,
      required: false
    },
    genres: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Genres"
      },
    ],
    platforms: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Platforms"
      },
    ],
    reviews: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Reviews"
      }
    ]
  })
);

export default createdvideo;
