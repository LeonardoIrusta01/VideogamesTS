import { Router } from "express";
import Videogames from "../src/Routes/videogames.js"
import Genres from "../src/Routes/genres.js"
import Platforms from "../src/Routes/platforms.js"
import Reviews from "../src/Routes/reviews.js"
const router = Router();

router.use("/videogames", Videogames)
router.use("/genres", Genres)
router.use("/platforms", Platforms)
router.use("/reviews", Reviews)


export default router;
