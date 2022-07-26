import { Router } from "express";
import postGR from "../Controllers/Genres/POST/postGR.js";
import getAllGR from "../Controllers/Genres/GET/getGR.js";
const router = Router();

router.get("/", getAllGR);

router.post("/", postGR);

export default router;
