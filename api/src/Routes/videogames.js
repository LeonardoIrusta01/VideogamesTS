import { Router } from "express";
import getAll  from "../Controllers/Videogames/GET/getall.js"
import PostVG from "../Controllers/Videogames/POST/postVG.js";
import PostVGAPI from "../Controllers/Videogames/POST/postVGAPI.js";
const router = Router();

router.get("/", getAll)

router.post("/", PostVG)

router.post("/VGAPI", PostVGAPI)

export default router