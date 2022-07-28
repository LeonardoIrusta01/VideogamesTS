import express from "express";
import morgan from "morgan";
import cors from "cors";

// Importing routes
import Videogames from "./Routes/videogames"
import Genres from "./Routes/genres"
import Platforms from "./Routes/platforms"

// Initializations
const app = express();
app.use(cors());
app.use(morgan("dev"));

import './database';

// Settings
app.set("port", process.env.PORT || 3000);

// Middlewares
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

// Routes
app.use("/Videogames", Videogames)
app.use("/Genres", Genres)
app.use("/Platforms", Platforms)

// Start

app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});
