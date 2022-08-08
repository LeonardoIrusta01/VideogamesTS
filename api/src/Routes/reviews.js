import { Router } from "express";
import getAllRV from "../Controllers/Reviews/GET/getrv.js";
import postRV from "../Controllers/Reviews/POST/postRV.js";

const router = Router();

router.get("/", getAllRV);

router.post("/:id", postRV);

export default router;
