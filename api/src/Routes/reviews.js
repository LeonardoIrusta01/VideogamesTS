import { Router } from "express";
import getAllRV from "../Controllers/Reviews/GET/getrv.js";

const router = Router();

router.get("/", getAllRV);

export default router;
