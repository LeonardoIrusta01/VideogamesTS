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
      type: Array<any>,
      required: false
    },
    stores: {
      type: Array<any>,
      required: false
    },
    genresapi:{
      type: Array<any>,
      required: false
    },
    platformsapi:{
      type: Array<any>,
      required: false
    },
    genres: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Genres"
      },
    ],
    platforms: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Platforms"
      },
    ],
    reviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Reviews"
      }
    ]
  })
);

export default createdvideo;